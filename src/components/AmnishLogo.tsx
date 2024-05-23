import CircularText from "./Icons";

const AmnishLogo = () => {
    return (
        <div className="relative">
            <CircularText className="animate-spin-slow" />

            {/* Image Logo */}
            <a
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
                href="#"
                title="Lightning Amnish"
            >
                <img
                    className="w-14 rounded-full"
                    src="./images/LightningAmnishLogo.png"
                    alt="AA"
                />
            </a>
        </div>
    );
};

export default AmnishLogo;
