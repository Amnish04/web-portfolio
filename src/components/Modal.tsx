import { ReactNode, useEffect, useRef, type Key } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClear } from "react-icons/md";

type ModalProps = {
    isVisible: boolean;
    children: ReactNode;
    containerClass?: string;
    clearButtonClass?: string;
    key?: Key;
    opacity?: number;
    closeOnClickOutside?: boolean;
    onClose: () => void;
};

export const MODAL_Z_INDEX = 1200;

const Modal = ({
    children,
    isVisible,
    key = "modal",
    containerClass = "",
    clearButtonClass = "",
    opacity = 1,
    closeOnClickOutside = false,
    onClose,
}: ModalProps) => {
    const modalContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (evt: MouseEvent) => {
            if (!modalContainer.current?.contains(evt.target as HTMLElement)) {
                // Clicked outside
                onClose();
            }
        };

        if (closeOnClickOutside && isVisible) {
            // Timeout is to ensure that the modal does not
            // close instantly after it is opened as `handleClickOutside`
            // gets fired immediately otherwise
            setTimeout(() => {
                window.addEventListener("click", handleClickOutside);
            }, 0);
        }

        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [closeOnClickOutside, isVisible, onClose]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    ref={modalContainer}
                    key={key}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: opacity }}
                    exit={{ opacity: 0 }}
                    className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[${MODAL_Z_INDEX}] ${containerClass}`}
                >
                    <div className="flex justify-end p-2">
                        <button className={`${clearButtonClass}`} onClick={onClose}>
                            <MdClear size={20} />
                        </button>
                    </div>

                    <div>{children}</div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
