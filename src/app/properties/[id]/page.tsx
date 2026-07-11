import PropertyDetailsComponent from "@/components/property/PropertyDetailsComponent";
import { getAllProperty, getPropertyById } from "@/lib/api/property";


type Props = {
  params: Promise<{
    id: string;
  }>;
};


const PropertyDetailsPage = async ({ params }: Props) => {

  const { id } = await params;
  const property = await getPropertyById(id);
  const relatedCard = await getAllProperty()
  const result = relatedCard.data;
  const relatedProperties = result.filter((item) => item._id !== id).slice(0, 4);


  return (
    <PropertyDetailsComponent
      property={property}
      relatedProperties={relatedProperties}
    />
  );
};


export default PropertyDetailsPage;