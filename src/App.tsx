import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";

function App() {
    return (
        <>
            <Header />

            {/* Contents */}
            <section className="pt-[165px]">
                <Introduction />

                <Skills />
            </section>
        </>
    );
}

export default App;
