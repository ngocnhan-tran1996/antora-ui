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

const setActiveClass = (theme) => {
  document.querySelector(`button#${theme}`).classList.add('active')
  document.querySelectorAll(`svg#${theme}`).forEach((e) => e.classList.remove('d-none'))
}

const setInactiveClass = (theme) => {
  document.querySelector(`button#${theme}`).classList.remove('active')
  document.querySelectorAll(`svg#${theme}`).forEach((e) => e.classList.add('d-none'))
}

const setTheme = (theme) => {
  setStoredTheme(theme)
  document.documentElement.setAttribute('data-bs-theme', theme)
  setActiveClass(theme)
  setInactiveClass(
    theme === DARK_THEME
      ? LIGHT_THEME
      : DARK_THEME)
}

// keep changed theme for init or reload process
setTheme(getStoredTheme())

document.querySelector(`button#${LIGHT_THEME}`)
  .addEventListener('click', () => setTheme(LIGHT_THEME))

document.querySelector(`button#${DARK_THEME}`)
  .addEventListener('click', () => setTheme(DARK_THEME))
