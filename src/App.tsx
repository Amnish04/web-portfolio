import ExperienceSection from "./components/ExperienceSection";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import ProjectsList from "./components/Projects";
import Skills from "./components/Skills";

function App() {
    return (
        <>
            <Header />

            {/* Contents */}
            <section className="pt-[165px]">
                <Introduction />
                <Skills />
                <ProjectsList />
                <ExperienceSection />
            </section>
        </>
    );
}

export default App;
