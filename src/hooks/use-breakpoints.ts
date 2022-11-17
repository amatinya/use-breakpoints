import { useState, useCallback } from "react";

import type { Breakpoints, UseBreakpoints } from "../types";
import { getInitialBreakpoint } from "../helpers";
import { useMatchMedia } from ".";

export const useBreakpoints: UseBreakpoints = () => {
    const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoints>(getInitialBreakpoint());

    /* - Handlers - */

    const onBaseBreakpointChange = useCallback(
        (e: MediaQueryListEvent) => {
            if (e.matches && currentBreakpoint !== "base") setCurrentBreakpoint("base");
        },
        [currentBreakpoint],
    );

    const onXsBreakpointChange = useCallback(
        (e: MediaQueryListEvent) => {
            if (e.matches && currentBreakpoint !== "xs") setCurrentBreakpoint("xs");
        },
        [currentBreakpoint],
    );

    const onSmBreakpointChange = useCallback(
        (e: MediaQueryListEvent) => {
            if (e.matches && currentBreakpoint !== "sm") setCurrentBreakpoint("sm");
        },
        [currentBreakpoint],
    );

    const onMdBreakpointChange = useCallback(
        (e: MediaQueryListEvent) => {
            if (e.matches && currentBreakpoint !== "md") setCurrentBreakpoint("md");
        },
        [currentBreakpoint],
    );

    const onLgBreakpointChange = useCallback(
        (e: MediaQueryListEvent) => {
            if (e.matches && currentBreakpoint !== "lg") setCurrentBreakpoint("lg");
        },
        [currentBreakpoint],
    );

    const onXlBreakpointChange = useCallback(
        (e: MediaQueryListEvent) => {
            if (e.matches && currentBreakpoint !== "xl") setCurrentBreakpoint("xl");
        },
        [currentBreakpoint],
    );

    const onXxlBreakpointChange = useCallback(
        (e: MediaQueryListEvent) => {
            if (e.matches && currentBreakpoint !== "xxl") setCurrentBreakpoint("xxl");
        },
        [currentBreakpoint],
    );

    /* - Listeners - */

    useMatchMedia("(min-width: 0) and (max-width: 319px)", onBaseBreakpointChange);

    useMatchMedia("(min-width: 320px) and (max-width: 639px)", onXsBreakpointChange);

    useMatchMedia("(min-width: 640px) and (max-width: 767px)", onSmBreakpointChange);

    useMatchMedia("(min-width: 768px) and (max-width: 1023px)", onMdBreakpointChange);

    useMatchMedia("(min-width: 1024px) and (max-width: 1279px)", onLgBreakpointChange);

    useMatchMedia("(min-width: 1280px) and (max-width: 1535px)", onXlBreakpointChange);

    useMatchMedia("(min-width: 1536px)", onXxlBreakpointChange);

    return currentBreakpoint;
};
