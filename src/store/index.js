import { createContext, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

export const ColorModeContext = createContext({
    toggleMode: () => { },
    mode: "light"
});

const themeObj = {
    light: {
        background: {
            default: "pink"
        }
    },
    dark: {
        background: {
            default: "red"
        }
    },
   
}
export const ColorContectProvider = ({ children }) => {
    const [mode, setMode] = useState("dark")
    const colorMode = useMemo(() => ({
        toggleMode: () => setMode(prevMode => prevMode === "light" ? "dark" : "light"),
        mode
    }), [mode])



    const theme = useMemo(() => createTheme({
        palette: {
            mode: mode,
            ...themeObj[mode]
        }
    }), [mode])
    // const theme = createTheme({
    //     palette: {
    //         mode: mode,
    //         dark:{
    //             background:{
    //                 default:"red"
    //             }
    //         }
    //     }
    // })
    return (

        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>

                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}