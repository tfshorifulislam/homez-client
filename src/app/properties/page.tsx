import PropertyItem from '@/components/property/PropertyItem';

type Props = {searchParams: Promise<{page?: string;}>};

const PropertyPage = async ({ searchParams }: Props) => {
    return (
        <div>
            <PropertyItem searchParams={searchParams} />
        </div>
    );
};

export default PropertyPage;