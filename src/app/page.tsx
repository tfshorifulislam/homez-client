
import Banner from '@/components/home/Banner';
import Featured from '@/components/home/Fetured';
import Services from '@/components/home/Services';
import TrustedCompanies from '@/components/home/TrustedCompanies';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <TrustedCompanies />
            <Featured />
            <Services />
        </div>
    );
};

export default HomePage;