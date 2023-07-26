import { useTranslations } from "next-intl";

export default function Translate({ value }: { value: string }) {
  const t = useTranslations();
  return <>{t(value)}</>;
}
