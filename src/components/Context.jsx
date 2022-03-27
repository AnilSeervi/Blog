import React, { useEffect } from "react"
import usePrefersColorScheme from "../hooks/usePrefersTheme"
import { setLocalTheme, getLocalTheme } from "../utils/utils"

const appContext = React.createContext({
  theme: false,
  toggleTheme: () => {},
})

const Context = ({ children }) => {
  const prefersColorScheme = usePrefersColorScheme()
  const [theme, toggleTheme] = React.useState(
    () => getLocalTheme() || prefersColorScheme
  )

  useEffect(() => {
    toggleTheme(prefersColorScheme)
    setLocalTheme(prefersColorScheme)
  }, [prefersColorScheme])
  return (
    <appContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </appContext.Provider>
  )
}

export const useContext = () => React.useContext(appContext)

export default Context
