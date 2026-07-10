import PropertyHeader from '@/components/property/PropertyHeader';
import PropertyItem from '@/components/property/PropertyItem';

type Props = {searchParams: Promise<{page?: string;}>};

const PropertyPage = async ({ searchParams }: Props) => {
    return (
        <div>
            <PropertyHeader />
            <PropertyItem searchParams={searchParams} />
        </div>
    );
};

export default PropertyPage;