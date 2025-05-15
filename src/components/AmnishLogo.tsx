import CircularTextIcon from "./Icons/CircularTextIcon";
import { motion } from "framer-motion";

const AmnishLogo = () => {
    return (
        <div className="relative">
            <CircularTextIcon className="animate-spin-slow" />

            {/* Image Logo */}
            <a
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
                href="#"
                title="Lightning Amnish"
            >
                <motion.img
                    animate={{ x: 0 }}
                    whileHover={{ scale: 1.125, x: [-5, 5, -5, 5, 0] }}
                    transition={{ duration: 0.1, type: "just" }}
                    className="w-14 rounded-full"
                    src="./images/lightning-amnish-logo.png"
                    alt="AA"
                />
            </a>
        </div>
    );
};

export default AmnishLogo;
