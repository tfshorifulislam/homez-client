
import Banner from '@/components/home/Banner';
import Categories from '@/components/home/Categories';
import Featured from '@/components/home/Fetured';
import Highlights from '@/components/home/Highlights';
import Services from '@/components/home/Services';
import Statistics from '@/components/home/Statistics';
import TrustedCompanies from '@/components/home/TrustedCompanies';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <TrustedCompanies />
            <Featured />
            <Services />
            <Categories />
            <Highlights />
            <Statistics />
        </div>
    );
};

export default HomePage;