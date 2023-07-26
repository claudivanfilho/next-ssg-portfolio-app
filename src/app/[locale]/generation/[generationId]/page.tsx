import App from "@/components/App";
import { fetchGenerations } from "@/services/api.service";

export default async function page({
  params: { generationId, locale },
}: {
  params: {
    generationId: string;
    locale: string;
  };
}) {
  const generations = await fetchGenerations(locale);
  const generation = generations.find((gen) => gen.id === +generationId);

  return <App generations={generations} generation={generation} />;
}
