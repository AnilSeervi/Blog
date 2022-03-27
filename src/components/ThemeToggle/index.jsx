import React, { useEffect, useRef } from "react"
import "./themeToggle.scss"

const ThemeToggle = () => {
  const themeToggleRef = useRef(null)
  const themeToggle = () => {
    document.body.classList.contains("light-theme")
      ? enableDarkMode()
      : enableLightMode()
  }

  function enableDarkMode() {
    document.body.classList.remove("light-theme")
    document.body.classList.add("dark-theme")
    themeToggleRef.current.setAttribute("aria-label", "Switch to light theme")
  }

  function enableLightMode() {
    document.body.classList.remove("dark-theme")
    document.body.classList.add("light-theme")
    themeToggleRef.current.setAttribute("aria-label", "Switch to dark theme")
  }

  function setThemePreference() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      enableDarkMode()
    } else enableLightMode()
  }
  useEffect(() => {
    setThemePreference()
  }, [])

  return (
    <button
      ref={themeToggleRef}
      id="theme-toggle"
      aria-label="Switch to dark theme"
      onClick={themeToggle}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="472.39"
        height="472.39"
        viewBox="0 0 472.39 472.39"
      >
        <g className="toggle-sun">
          <path d="M403.21,167V69.18H305.38L236.2,0,167,69.18H69.18V167L0,236.2l69.18,69.18v97.83H167l69.18,69.18,69.18-69.18h97.83V305.38l69.18-69.18Zm-167,198.17a129,129,0,1,1,129-129A129,129,0,0,1,236.2,365.19Z" />
        </g>
        <g className="toggle-circle">
          <circle className="cls-1" cx="236.2" cy="236.2" r="103.78" />
        </g>
      </svg>
    </button>
  )
}

export default ThemeToggle
