import { GenerationResponse, Pokemon } from "@/models";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const Breadcrumbs = ({
  generation,
  pokemon,
}: {
  generation: GenerationResponse;
  pokemon?: Pokemon;
}) => {
  const locale = useLocale();
  const t = useTranslations();
  const renderBreadcrumbLink = (label: string, uri: string) => (
    <Link
      href={uri}
      locale={locale}
      className="flex w-full text-purple-700 lg:w-40 hover:underline"
    >
      {label}
    </Link>
  );

  return (
    <nav className="container block lg:hidden">
      <ol className="flex gap-2 py-4 pl-4 text-gray-700 list-reset bg-grey-light">
        <li>{renderBreadcrumbLink(t("generations"), "/")}</li>
        <li>/</li>
        <li>
          {!!pokemon
            ? renderBreadcrumbLink(generation.nameTranslated!, `/generation/${generation.id}`)
            : generation.nameTranslated}
        </li>
        {pokemon && <li>/</li>}
        {pokemon && <li>{pokemon.nameTranslated}</li>}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
