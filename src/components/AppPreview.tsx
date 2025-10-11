import AppBottomDrawer from "@/components/AppBottomDrawer";
import AppNav from "@/components/AppNav";
import Image from "next/image";

export default function AppPreview() {
  return (
    <div className="w-full flex justify-center">
      <main
        className="relative w-full h-[70vh] bg-black overflow-hidden"
        style={{ position: "relative" }}
      >
        <Image
          src="/appPreview.webp"
          alt="App Preview"
          fill
          sizes="(max-width: 768px) 80vw, 450px"
          priority
          className="z-0 pointer-events-none object-cover"
        />

        <AppNav />

        <AppBottomDrawer />
      </main>
    </div>
  );
}
