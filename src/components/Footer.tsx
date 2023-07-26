import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="fixed bottom-0 w-full py-2 text-sm font-bold text-center text-white bg-purple-700">
      {t("created-by")}
    </footer>
  );
};

export default Footer;
