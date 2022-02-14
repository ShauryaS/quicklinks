import * as themes from '@/styles/themes/themes'

export function selectTheme(themeName) {
  switch (themeName) {
    case 'dark':
      return themes.dark
    case 'light':
      return themes.light
    case 'darkbluegray':
      return themes.darkbluegray
    case 'bluepurplegradient':
      return themes.bluepurplegradient
    case 'periwinklegray':
      return themes.periwinklegray
    case 'deepperiwinkle':
      return themes.deepperiwinkle
    default:
      return themes.dark
  }
}
