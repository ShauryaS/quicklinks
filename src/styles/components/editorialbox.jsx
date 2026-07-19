import styled from 'styled-components'
import { motion } from 'framer-motion'

/*
 * Styles for the editorial theme layout. Colors + the mono font come from the
 * theme object (which points at the CSS variables in globals.css), so this
 * layout follows OS light/dark automatically. Sizing is in rem against the
 * 62.5% root (1rem = 10px), matching the rest of the app.
 *
 * Only structure/type/interaction live here — palette lives in globals.css.
 */

// Full-bleed wrapper; ComponentsDiv (main.jsx) is the scroll container.
export const Page = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  padding: clamp(3.2rem, 6vw, 6.4rem) clamp(2rem, 5vw, 4rem);
  box-sizing: border-box;
`

export const Column = styled(motion.div)`
  width: 100%;
  max-width: 52rem;
`

export const Photo = styled(motion.img)`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 1.4rem;
  object-fit: cover;
  display: block;
  margin-bottom: 2rem;
  border: 1px solid ${(props) => props.theme.quicklinks_box.line};
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03);
`

export const Wordmark = styled(motion.div)`
  font-family: ${(props) => props.theme.quicklinks_box.mono};
  font-size: 1.3rem;
  letter-spacing: 0.02em;
  color: ${(props) => props.theme.quicklinks_box.accent};
  margin-bottom: 1.4rem;

  &::before {
    content: '\\2192\\00a0';
    color: ${(props) => props.theme.quicklinks_box.faint};
  }
`

export const Name = styled(motion.h1)`
  margin: 0 0 1.6rem;
  font-size: clamp(3.2rem, 7vw, 4.6rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.035em;
  color: ${(props) => props.theme.quicklinks_box.ink};
  text-wrap: balance;
`

export const Role = styled(motion.p)`
  margin: 0 0 0.6rem;
  font-size: 1.7rem;
  font-weight: 500;
  color: ${(props) => props.theme.quicklinks_box.ink};

  & > span {
    color: ${(props) => props.theme.quicklinks_box.muted};
    font-weight: 400;
  }

  & > a {
    color: ${(props) => props.theme.quicklinks_box.ink};
    border-bottom: 1px solid ${(props) => props.theme.quicklinks_box.accent};
    transition: color 0.18s;
  }

  & > a:hover {
    color: ${(props) => props.theme.quicklinks_box.accent};
  }
`

export const MetaLine = styled(motion.p)`
  margin: 0 0 3rem;
  font-family: ${(props) => props.theme.quicklinks_box.mono};
  font-size: 1.3rem;
  letter-spacing: 0.01em;
  color: ${(props) => props.theme.quicklinks_box.faint};
`

export const Eyebrow = styled(motion.p)`
  margin: 0 0 1.6rem;
  font-family: ${(props) => props.theme.quicklinks_box.mono};
  font-size: 1.1rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${(props) => props.theme.quicklinks_box.faint};
`

export const LinkList = styled.nav`
  border-top: 1px solid ${(props) => props.theme.quicklinks_box.line};
  margin-bottom: 3rem;
`

export const LinkRow = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  padding: 1.8rem 0.4rem;
  border-bottom: 1px solid ${(props) => props.theme.quicklinks_box.line};
  color: ${(props) => props.theme.quicklinks_box.ink};
  cursor: pointer;
  position: relative;
  transition: padding-left 0.22s ease;

  &::before {
    content: '';
    position: absolute;
    left: -1.1rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${(props) => props.theme.quicklinks_box.accent};
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.22s ease;
  }

  &:hover {
    padding-left: 1.1rem;
  }

  &:hover::before {
    transform: scaleY(1);
  }
`

export const IconWrap = styled.span`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 100%;
    height: 100%;
    fill: ${(props) => props.theme.quicklinks_box.muted};
    transition: fill 0.18s ease;
  }

  ${LinkRow}:hover & > svg {
    fill: ${(props) => props.theme.quicklinks_box.accent};
  }
`

export const RowName = styled.span`
  flex: 1;
  font-size: 1.7rem;
  font-weight: 500;
  transition: color 0.18s ease;

  ${LinkRow}:hover & {
    color: ${(props) => props.theme.quicklinks_box.accent};
  }
`

export const Arrow = styled.span`
  font-size: 1.4rem;
  color: ${(props) => props.theme.quicklinks_box.faint};
  transition: transform 0.18s ease, color 0.18s ease;

  ${LinkRow}:hover & {
    color: ${(props) => props.theme.quicklinks_box.accent};
    transform: translate(2px, -2px);
  }
`

export const Footer = styled(motion.div)`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid ${(props) => props.theme.quicklinks_box.line};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.8rem;
  font-family: ${(props) => props.theme.quicklinks_box.mono};
  font-size: 1.2rem;
  color: ${(props) => props.theme.quicklinks_box.faint};
`
