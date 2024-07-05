import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import { SkillsProvider } from "./hooks/use-skills";

function App() {
    return (
        <>
            <Header />

            {/* Contents */}
            <section className="pt-[165px]">
                <Introduction />

                <SkillsProvider>
                    <Skills />
                </SkillsProvider>
            </section>
        </>
    );
}

export default App;
