import { FC } from "react";
import "./CoffeeMug.css";

type CoffeeMugProps = {
    className?: string;
};

const CoffeeMug: FC<CoffeeMugProps> = ({ className = "" }) => {
    return (
        <div className="stacking-wrapper">
            <div className={`${className} coffee-mug`}></div>
        </div>
    );
};

export default CoffeeMug;
