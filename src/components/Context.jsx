import React, { useCallback, useEffect } from "react"
import { getLocalTheme, setLocalTheme } from "../utils/utils"

const appContext = React.createContext({
  theme: false,
  toggleTheme: () => {},
})

const Context = ({ children }) => {
  const darkQuery = window?.matchMedia("(prefers-color-scheme: dark)")
  const [theme, toggleTheme] = React.useState(
    () => getLocalTheme() || (darkQuery.matches ? "dark" : "light")
  )

  const listener = useCallback(e => {
    toggleTheme(() => (e.matches ? "dark" : "light"))
    setLocalTheme(e.matches ? "dark" : "light")
  }, [])

  useEffect(
    () => {
      if (typeof darkQuery?.addEventListener === "function") {
        darkQuery.addEventListener("change", listener)
        return () => {
          darkQuery.removeEventListener("change", listener)
        }
      } else {
        darkQuery.addListener(listener)
        return () => {
          darkQuery.removeListener(listener)
        }
      }
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  )

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.remove("light-theme")
      document.body.classList.add("dark-theme")
    } else if (theme === "light") {
      document.body.classList.remove("dark-theme")
      document.body.classList.add("light-theme")
    }
  }, [theme])

  // useEffect(() => {
  //   toggleTheme(prefersColorScheme)
  // }, [prefersColorScheme])

  // useEffect(() => {
  //   setLocalTheme(theme)
  //   themeToggler(theme)
  // }, [theme, themeToggler])
  return (
    <appContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </appContext.Provider>
  )
}

export const useAppContext = () => React.useContext(appContext)

export default Context
