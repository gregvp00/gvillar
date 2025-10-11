"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile } from "@marsidev/react-turnstile";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Must be a valid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
  interests: z.array(z.string()).optional(),
  captcha: z.string().nonempty("Captcha is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { captcha: "" },
  });

  const captchaToken = watch("captcha");

  useEffect(() => {
    // si quieres limpiar algo tras envío correcto:
    if (isSubmitSuccessful) {
      // por ejemplo: aquí podrías resetear el widget si tu librería lo permite
    }
  }, [isSubmitSuccessful]);

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        // Mostrar mensaje específico del servidor si existe
        const msg = json?.error || "Network response was not ok";
        // Si el error es del captcha, limpiar token para que el usuario vuelva a resolverlo
        if (msg.toLowerCase().includes("captcha")) {
          setValue("captcha", "", { shouldValidate: true });
        }
        // setear error global o por campo
        setError("captcha", { type: "server", message: msg });
        throw new Error(msg);
      }

      reset();
      alert("Message sent successfully!");
    } catch (err: any) {
      console.error("Error sending form", err);
      // si ya mostramos error con setError, quizá no necesitemos alert, pero lo dejamos por feedback
      if (!errors.captcha)
        alert(err?.message ?? "There was a problem sending your message.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-4 bg-white rounded shadow-md shadow-gray-600 text-gray-800"
    >
      <div>
        <label className="block">
          Name<span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          {...register("name")}
          className="w-full border px-2 py-1 rounded-xs"
        />
        {errors.name && (
          <p className="text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block">
          Email<span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          {...register("email")}
          className="w-full border px-2 py-1 rounded-xs"
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block">Interest</label>

        <div>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" value="WebDev" {...register("interests")} />
            <span>Website development</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" value="Collab" {...register("interests")} />
            <span>Diagnosis/troubleshooting (hardware & software)</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" value="Connect" {...register("interests")} />
            <span>Connect</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" value="Other" {...register("interests")} />
            <span>Other/I need advice</span>
          </label>
        </div>
      </div>

      <div>
        <label className="block">
          Message<span className="text-red-600">*</span>
        </label>
        <textarea
          rows={4}
          {...register("message")}
          className="w-full border px-2 py-1 rounded-xs"
        />
        {errors.message && (
          <p className="text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* hidden input para que RHF conozca el campo captcha */}
      <input type="hidden" {...register("captcha")} />

      <div>
        <label className="block">
          Captcha<span className="text-red-600">*</span>
        </label>
        <Turnstile
          siteKey="0x4AAAAAAB6CmSdMYVBvNgXa"
          options={{
            action: "submit-form",
            theme: "light",
            language: "en",
          }}
          onSuccess={(token: string) => {
            setValue("captcha", token, { shouldValidate: true });
          }}
          onExpire={() => {
            setValue("captcha", "", { shouldValidate: true });
          }}
          onError={() => {
            setValue("captcha", "", { shouldValidate: true });
          }}
        />
        {errors.captcha && (
          <p className="text-sm text-red-600">{errors.captcha.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !captchaToken}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 disabled:opacity-50 mt-4 transition-all"
      >
        {isSubmitting ? "Sending…" : "Send"}
      </button>

      {isSubmitSuccessful && (
        <p className="text-sm text-green-600 mt-2">
          Message sent successfully!
        </p>
      )}
    </form>
  );
}
