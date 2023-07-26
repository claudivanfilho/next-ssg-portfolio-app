import App from "@/components/App";
import { fetchGenerations } from "@/services/api.service";

export default async function page({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) {
  const generations = await fetchGenerations(locale);

  return <App generations={generations} />;
}
