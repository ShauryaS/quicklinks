import styled from 'styled-components'

export const Div = styled.div`
  margin: 0;
  padding: 0;
`

export const ComponentsDiv = styled(Div)`
  position: absolute;
  top: 0rem;
  bottom: 0rem;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: ${(props) => props.theme.main_page.bgColor};
  background-image: ${(props) => props.theme.main_page.bgImage};
`
