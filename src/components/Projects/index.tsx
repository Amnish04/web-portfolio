import Layout from "../Layout";
import CoffeeMug from "./CoffeeMug";

const Projects = () => {
    return (
        <Layout id="projects" className="py-5">
            <h2 className="font-headings font-semibold text-4xl text-center mt-2">Projects</h2>

            <CoffeeMug className={"mt-24"} />
        </Layout>
    );
};

export default Projects;
