
import Banner from '@/components/home/Banner';
import Categories from '@/components/home/Categories';
import FAQ from '@/components/home/FAQ';
import Featured from '@/components/home/Fetured';
import Highlights from '@/components/home/Highlights';
import Newsletter from '@/components/home/Newsletter';
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
            <FAQ />
            <Newsletter />
        </div>
    );
};

export default HomePage;