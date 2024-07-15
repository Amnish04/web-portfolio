import ExperienceSection from "./components/ExperienceSection";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import ProjectsList from "./components/Projects";
import Skills from "./components/Skills";

function App() {
    return (
        <>
            {/* Fixed header with 165px height */}
            <Header />

            {/* Contents */}
            <section className="pt-[165px]">
                <Introduction />
                <ExperienceSection />
                <Skills />
                <ProjectsList />
            </section>
        </>
    );
}

export default App;
