import { useTranslation } from "react-i18next";
import "@/i18n/config";

export default function Nav() {
  const { t } = useTranslation();
  return (
    <div
      role="alert"
      className="fixed bottom-0 left-0 rounded-sm border-s-4 border-red-500 bg-red-50 p-4 w-screen"
    >
      <strong className="block font-medium text-red-800">
        {" "}
        {t('WARNING.TITLE')}{" "}
      </strong>

      <p className="mt-2 text-sm text-red-700">
        {t('WARNING.DESCRIPTION')}
      </p>
    </div>
  );
}

