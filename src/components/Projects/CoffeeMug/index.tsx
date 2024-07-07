import "./CofeeMug.css";

const Smoke = () => {
    return (
        <div className="smoke-container">
            <span style={{ "--fly-delay-index": 1 } as React.CSSProperties}></span>
            <span style={{ "--fly-delay-index": 8 } as React.CSSProperties}></span>
            <span style={{ "--fly-delay-index": 4 } as React.CSSProperties}></span>
            <span style={{ "--fly-delay-index": 2 } as React.CSSProperties}></span>
            <span style={{ "--fly-delay-index": 4 } as React.CSSProperties}></span>
        </div>
    );
};

const CoffeeMug = ({ className = "" }: { className?: string }) => {
    return (
        <div className={`absolute right-2 bottom-[-3rem] z-10 ${className}`}>
            <img
                className="w-24 "
                style={{ transform: "rotateY(180deg)" }}
                src="/images/coffee.png"
                alt="Programmer Fuel"
            />

            <Smoke />
        </div>
    );
};

export default CoffeeMug;
