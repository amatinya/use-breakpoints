import type { GetInitialBreakpoint } from "../types";

export const getInitialBreakpoint: GetInitialBreakpoint = () => {
    const { matches: isBase } = matchMedia("(min-width: 0) and (max-width: 319px)");
    const { matches: isXs } = matchMedia("(min-width: 320px) and (max-width: 639px)");
    const { matches: isSm } = matchMedia("(min-width: 640px) and (max-width: 767px)");
    const { matches: isMd } = matchMedia("(min-width: 768px) and (max-width: 1023px)");
    const { matches: isLg } = matchMedia("(min-width: 1024px) and (max-width: 1279px)");
    const { matches: isXl } = matchMedia("(min-width: 1280px) and (max-width: 1535px)");
    const { matches: isXxl } = matchMedia("(min-width: 1536px)");

    return (
        (isBase && "base") ||
        (isXs && "xs") ||
        (isSm && "sm") ||
        (isMd && "md") ||
        (isLg && "lg") ||
        (isXl && "xl") ||
        (isXxl && "xxl") ||
        "base"
    );
};
