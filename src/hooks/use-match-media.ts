import { useEffect } from "react";

import type { UseMatchMedia } from "../types";

export const useMatchMedia: UseMatchMedia = (query, onBreakpointChange) => {
    useEffect(() => {
        const screen = matchMedia(query);

        screen.addEventListener("change", onBreakpointChange);

        return () => {
            screen.removeEventListener("change", onBreakpointChange);
        };
    }, [query, onBreakpointChange]);
};
