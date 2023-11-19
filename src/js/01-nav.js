const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'
const THEMES = [DARK_THEME, LIGHT_THEME]
const DEFAULT_THEME = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? DARK_THEME
  : LIGHT_THEME
const getStoredTheme = () => {
  return localStorage.getItem('theme') ?? DEFAULT_THEME
}
const setStoredTheme = (theme) => {
  const storedTheme = theme && THEMES.includes(theme)
    ? theme
    : DEFAULT_THEME
  localStorage.setItem('theme', storedTheme)
}
const setTheme = (theme) => {
  setStoredTheme(theme)
  document.documentElement.setAttribute('data-bs-theme', theme)
}
// keep changed theme for init or reload process
setTheme(getStoredTheme())
// Non-null Assertion Operator
const themeBtn = document.getElementById('themeBtn')
themeBtn.addEventListener('click', () => {
  const changeTheme = getStoredTheme() === DARK_THEME
    ? LIGHT_THEME
    : DARK_THEME
  setTheme(changeTheme)
})
