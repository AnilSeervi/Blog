export const getLocalTheme = () => {
return localStorage.getItem('theme')
}

export const setLocalTheme = (theme) => {
    localStorage.setItem('theme', theme);
}