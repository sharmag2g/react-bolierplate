import { lazy, Suspense } from "react";
import  Loader  from "./Loader";
import { useTheme } from "./UseTheme";

const DarkTheme = lazy(() => import('./DarkTheme'));
const LightTheme = lazy(() => import("./LightTheme"));

export const ThemeProvider = ({ children }) => {
    const [darkMode] = useTheme();

    return (
        <>
            <Suspense fallback={<Loader />}>
                {darkMode ? <DarkTheme /> : <LightTheme />}
            </Suspense>
            {children}
        </>
    );
};