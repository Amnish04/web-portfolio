import { FC } from "react";
import { RoughNotation, RoughNotationProps } from "react-rough-notation";

const SafeRoughNotation: FC<RoughNotationProps> = ({ children, ...props }) => {
    return (
        <span className="text-nowrap">
            <RoughNotation {...props}>{children}</RoughNotation>
        </span>
    );
};

export default SafeRoughNotation;
