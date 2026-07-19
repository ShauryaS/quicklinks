export const dark = {
  main_page: {
    bgColor: '#202020',
    bgImage: 'none',
  },
  quicklinks_box: {
    nameFontColor: '#fff',
    linkitem: {
      bgColor: 'transparent',
      fontColor: '#fff',
      iconColor: '#fff',
      hoverBGColor: '#fff',
      hoverFontColor: '#202020',
      hoverIconColor: '#202020',
      border: '0.25rem solid #fff',
      borderRadius: '0.8rem',
    },
    copyrightFontColor: '#fff',
  },
}

export const light = {
  main_page: {
    bgColor: '#fff',
    bgImage: 'none',
  },
  quicklinks_box: {
    nameFontColor: '#000',
    linkitem: {
      bgColor: 'transparent',
      fontColor: '#000',
      iconColor: '#000',
      hoverBGColor: '#dcdcdc',
      hoverFontColor: '#000',
      hoverIconColor: '#000',
      border: '0.25rem solid #dcdcdc',
      borderRadius: '0.8rem',
    },
    copyrightFontColor: '#000',
  },
}

export const darkbluegray = {
  main_page: {
    bgColor: '#1f2933',
    bgImage: 'none',
  },
  quicklinks_box: {
    nameFontColor: '#fff',
    linkitem: {
      bgColor: 'transparent',
      fontColor: '#fff',
      iconColor: '#fff',
      hoverBGColor: '#fff',
      hoverFontColor: '#202020',
      hoverIconColor: '#202020',
      border: '0.25rem solid #fff',
      borderRadius: '0.8rem',
    },
    copyrightFontColor: '#fff',
  },
}

export const bluepurplegradient = {
  main_page: {
    bgColor: '#0cbaba',
    bgImage: 'linear-gradient(315deg, #0cbaba 0%, #380036 74%)',
  },
  quicklinks_box: {
    nameFontColor: '#fff',
    linkitem: {
      bgColor: 'transparent',
      fontColor: '#fff',
      iconColor: '#fff',
      hoverBGColor: '#fff',
      hoverFontColor: '#341343',
      hoverIconColor: '#341343',
      border: '0.25rem solid #fff',
      borderRadius: '0.8rem',
    },
    copyrightFontColor: '#fff',
  },
}

export const periwinklegray = {
  main_page: {
    bgColor: '#c3cde6',
    bgImage: 'none',
  },
  quicklinks_box: {
    nameFontColor: '#000',
    linkitem: {
      bgColor: 'transparent',
      fontColor: '#000',
      iconColor: '#000',
      hoverBGColor: '#a5b4d980',
      hoverFontColor: '#000',
      hoverIconColor: '#000',
      border: '0.25rem solid #a5b4d980',
      borderRadius: '0.8rem',
    },
    copyrightFontColor: '#000',
  },
}

export const deepperiwinkle = {
  main_page: {
    bgColor: '#7c83bc',
    bgImage: 'none',
  },
  quicklinks_box: {
    nameFontColor: '#fff',
    linkitem: {
      bgColor: 'transparent',
      fontColor: '#fff',
      iconColor: '#fff',
      hoverBGColor: '#fff',
      hoverFontColor: '#7c83bc',
      hoverIconColor: '#7c83bc',
      border: '0.25rem solid #fff',
      borderRadius: '0.8rem',
    },
    copyrightFontColor: '#fff',
  },
}

/*
 * "editorial" is a token-driven theme: instead of hard-coded colors it reads
 * the CSS variables in globals.css, so it follows the OS light/dark preference
 * automatically. The `variant` flag tells the components to render the minimal
 * editorial treatment (bordered rows, mono labels, ↗ affordances) instead of
 * the classic card layout. It reads the optional `wordmark`, `role`, and `meta`
 * fields from quicklinksinfo.json for the identity header.
 */
export const editorial = {
  variant: 'editorial',
  main_page: {
    bgColor: 'var(--bg)',
    bgImage: 'none',
  },
  quicklinks_box: {
    nameFontColor: 'var(--ink)',
    ink: 'var(--ink)',
    muted: 'var(--muted)',
    faint: 'var(--faint)',
    line: 'var(--line)',
    accent: 'var(--accent)',
    accentWeak: 'var(--accent-weak)',
    mono: 'var(--mono)',
    copyrightFontColor: 'var(--faint)',
  },
}
