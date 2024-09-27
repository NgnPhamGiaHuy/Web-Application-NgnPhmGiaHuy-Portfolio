import {
    About,
    SkillCarousel,
    Discuss,
    Header,
    HireMe,
    Portfolio,
    Review,
    Service,
    WorkExperience,
    Blog, Footer
} from "@/app/components";

const LandingPage = () => {
    return (
        <div>
            <Header />
            <main>
                <About />
                <Service />
                <WorkExperience />
                <HireMe />
                <Portfolio/>
                <Review/>
                <Discuss/>
                <SkillCarousel/>
                <Blog/>
            </main>
            <Footer/>
        </div>
    );
};

export default LandingPage;