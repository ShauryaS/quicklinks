import styled from 'styled-components'

export const Div = styled.div`
  margin: 0;
  padding: 0;
`

export const QuickLinksDiv = styled(Div)`
  padding: 2rem;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const QuickLinksBoxDiv = styled(Div)`
  margin: auto;
  flex: 1 1 50rem;
  min-width: 20rem;
  max-width: 70rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

export const QuickLinksContentsDiv = styled(Div)`
  width: 100%;
  height: 86rem;
`

export const QuickLinksHeaderDiv = styled(Div)`
  width: 100%;
  height: 14rem;
`

export const QuickLinksItemsDiv = styled(Div)`
  width: 100%;
  height: 68rem;
  overflow-y: auto;
`

export const QuickLinksCopyrightDiv = styled(Div)`
  width: 100%;
  height: 4rem;
  display: flex;
  text-align: center;
  position: relative;
  color: ${(props) => props.theme.quicklinks_box.copyrightFontColor};
`

export const MainImageSection = styled(Div)`
  width: 100%;
  height: 9rem;
  display: flex;
  text-align: center;
  position: relative;
`

export const MainImageDiv = styled(Div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align: center;
  width: 9rem;
  height: 9rem;
  cursor: pointer;
`

export const NameDiv = styled(Div)`
  width: 100%;
  height: 5rem;
  display: flex;
  text-align: center;
  position: relative;
`

export const Name = styled.h3`
  margin: 0;
  padding: 0;
  width: 100%;
  font-size: 1.6rem;
  font-weight: 550;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align: center;
  color: ${(props) => props.theme.quicklinks_box.nameFontColor};
  cursor: pointer;
`

export const LinkItemDiv = styled(Div)`
  box-shadow: 0 0px 0.3px rgba(0, 0, 0, 0.07), 0 0px 0.9px rgba(0, 0, 0, 0.044),
    0 0px 4px rgba(0, 0, 0, 0.028);
  display: flex;
  position: relative;
  margin: 1.4rem 0.2rem;
  padding: 0.2rem 1rem;
  background: ${(props) => props.theme.quicklinks_box.linkitem.bgColor};
  border: ${(props) => props.theme.quicklinks_box.linkitem.border};
  border-radius: ${(props) => props.theme.quicklinks_box.linkitem.borderRadius};
  height: 6rem;
  color: ${(props) => props.theme.quicklinks_box.linkitem.fontColor};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.quicklinks_box.linkitem.hoverFontColor};
    background-color: ${(props) =>
      props.theme.quicklinks_box.linkitem.hoverBGColor};
  }
  & > div > svg {
    fill: ${(props) => props.theme.quicklinks_box.linkitem.iconColor};
  }
  &:hover > div > svg {
    fill: ${(props) => props.theme.quicklinks_box.linkitem.hoverIconColor};
  }
`

export const LinkedItemImageDiv = styled(Div)`
  margin: auto 0;
  width: 2.5rem;
  height: 2.5rem;
  align: center;
  float: left;
`

export const LinkItemText = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  font-weight: 550;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align: center;
  cursor: pointer;
`

export const CopyrightText = styled.h3`
  margin: 0;
  padding: 0;
  width: 100%;
  font-size: 1.4rem;
  font-weight: 400;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align: center;
`

export const SiteLinkText = styled.span`
  font-weight: 700;
  cursor: pointer;
  color: ${(props) => props.theme.quicklinks_box.copyrightFontColor};
  &:hover {
    color: #00ffff;
  }
`
