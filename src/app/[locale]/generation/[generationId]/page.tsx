import App from "@/components/App";
import ErrorPage from "@/components/ErrorPage";
import { fetchGeneration, fetchGenerations } from "@/services/api.service";

export default async function page({
  params: { generationId, locale },
}: {
  params: {
    generationId: string;
    locale: string;
  };
}) {
  try {
    const generations = await fetchGenerations(locale);
    const generation = await fetchGeneration(generationId);

    return <App generations={generations} generation={generation} />;
  } catch (error) {
    return <ErrorPage message={(error as Error).message} />;
  }
}
