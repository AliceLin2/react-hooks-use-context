import React, {useState} from "react"

const ThemeContext = React.createContext()

function ThemeProvider({children}){
    const [theme, setTheme] = useState("dark");

    return (
        <ThemeProvider value={{theme, setTheme}}>
            {children}
        </ThemeProvider>
    )
}

export {ThemeContext, ThemeProvider}