import { useEffect, useState } from "react";

export const useUrlFragment = () => {
    const [fragment, setFragment] = useState(decodeURIComponent(window.location.hash));

    const onHashChange = () => {
        setFragment(decodeURIComponent(window.location.hash));
    };

    useEffect(() => {
        window.addEventListener("hashchange", onHashChange);

        return () => {
            window.removeEventListener("hashchange", onHashChange);
        };
    }, []);

    return fragment;
};
