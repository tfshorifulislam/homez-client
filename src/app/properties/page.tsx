import PropertyHeader from '@/components/shared/PropertyHeader';
import PropertyItem from '@/components/shared/PropertyItem';

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