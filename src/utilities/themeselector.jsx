import * as themes from '@/styles/themes/themes'

export function selectTheme(themeName) {
  switch (themeName) {
    case 'dark':
      return themes.dark
    case 'light':
      return themes.light
    default:
      return null
  }
}
