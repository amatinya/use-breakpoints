import { FC } from "react";

import { useBreakpoints } from "../hooks";

import s from "./styles.module.css";

const App: FC = () => {
    const currentBreakpoint = useBreakpoints();

    return (
        <div className={s.App}>
            <h1>{currentBreakpoint.toUpperCase()}</h1>
        </div>
    );
};

export default App;
