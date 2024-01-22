import Section1 from './Section1';
import Section2 from './Section2';
import SectionAboutMe from './SectionAboutMe';
import SectionExperience from './SectionExperience';
import SectionProject from './SectionProject';

const Home = () => {
    return (
        <main className="bg-gray-200/30">
            <Section1 />
            <Section2 />
            <SectionAboutMe />
            <SectionExperience />
            <SectionProject />
        </main>
    );
};

export default Home;
