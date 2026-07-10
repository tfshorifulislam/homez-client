
import Banner from '@/components/home/Banner';
import Featured from '@/components/home/Fetured';
import TrustedCompanies from '@/components/home/TrustedCompanies';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <TrustedCompanies />
            <Featured/>
        </div>
    );
};

export default HomePage;