import { GenerationResponse } from "@/models/index";
import GenerationListingItem from "./GenerationListingItem";

const GenerationListing = ({ generations }: { generations: GenerationResponse[] }) => {
  return (
    <div className="flex flex-col">
      {generations.map(({ id, name }) => (
        <GenerationListingItem key={id} id={id} name={name} />
      ))}
    </div>
  );
};

export default GenerationListing;
