import Layout from "../Layout";
import CoffeeMug from "./CoffeeMug";
import "./Projects.css";

const Projects = () => {
    return (
        <Layout id={"projects"} className="min-h-screen">
            <h2 className="font-headings font-semibold text-4xl text-center mt-2">Projects</h2>

            {/* Programmer with Coffee, not showing on mobile */}
            <div className="float-left hidden md:block mt-24">
                <div className="relative">
                    {/* Programmer */}
                    <img className="w-72" src="/images/programmer-desk.png" alt="Cool Programmer" />

                    {/* His Coffee */}
                    <CoffeeMug />
                </div>
            </div>
        </Layout>
    );
};

export default Projects;
