import { useMediaQuery } from "usehooks-ts";

// Use 1000 as our lower limit for the "desktop" experience.
const desktopMediaQuery = "(min-width: 1000px)";

export default function useDesktopBreakpoint() {
    const isDesktop = useMediaQuery(desktopMediaQuery);

    return isDesktop;
}
