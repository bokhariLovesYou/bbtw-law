import React, { Component } from "react"
// Bootstrap
import Container from "react-bootstrap/Container"
// Elements
import { Button, ContentBox, CustomColumn } from "./Elements"
// Link
import { Link } from "gatsby"
// Styled Components
import styled from "styled-components"
const HeaderWrapper = styled.header`
  padding: 1rem 0;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #fff;
  z-index: 9999;
`

const HeaderChildWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Tint = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  display: none;
  &.active {
    display: block;
  }
`

export const LogoWrapper = styled.div``
export const Logo = styled.div`
  background-color: #e82e37;
  background-color: ${props => (props.Dark ? "#262b2b" : "")};
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
`
export const LogoSpan = styled.span`
  font-family: "Playfair Display", serif;
  color: #fff;
  color: ${props => (props.Red ? "#e82e37" : "")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
`

const ModalWrapper = styled.div`
    align-items: flex-start;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    outline: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    visibility: visible;
    width: 100%;
    z-index: 999;
    font-size: 1em;
    justify-content: flex-end;
    transform-origin: 50% 0;
    -webkit-overflow-scrolling: touch;
    overflow-y: auto;
    display: none;
    &.active {
      display: block;
    }
}
`

const ModalContent = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 14px 40px rgba(14, 30, 37, 0.4);
  color: #0e1e25;
  flex: 1;
  margin: 10vh 1em 1em;
  opacity: 1;
  padding: 1em 1em 0 1em;
  position: relative;
  max-width: 500px;
  @media (min-width: 576px) {
    margin-left: auto;
    margin-right: auto;
  }
  .icon {
    margin: 0;
    position: relative;
    top: -1px;
  }
`
const ModalContentList = styled.ul`
  margin: 0.618em -1em 0;
  overflow: hidden;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 0;
  list-style: none;
  position: relative;
  margin-top: 2rem;
  &:after {
    background-image: linear-gradient(
      -90deg,
      rgba(14, 30, 37, 0) 0,
      #0e1e25 5%,
      #0e1e25 90%,
      rgba(14, 30, 37, 0) 100%
    );
    content: "";
    display: block;
    height: 2px;
    opacity: 0.08;
    position: absolute;
    width: 100%;
    top: 0;
  }
  &:last-child {
    a {
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  }
`

const ModalContentListItem = styled.li`
  &:nth-child(even) {
    background-color: rgba(14, 30, 37, 0.03);
  }
  background-color: ${props => (props.CTA ? "#e82e37 !important" : "")};
  a {
    color: rgba(14, 30, 37, 0.8);
    display: block;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 2.618em;
    outline: 0;
    padding: 0 1em;
    color: ${props => (props.CTA ? "#fff" : "")};
    &:hover {
      text-decoration: none;
      background-color: rgba(14, 30, 37, 0.09);
    }
  }
`

const ButtonClose = styled.div`
  line-height: 1;
  margin: 0;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 2px;
  z-index: 1000;
  background: 0 0;
  box-shadow: none;
  font-size: 1em;
  padding: 0.618em;
  svg {
    fill: rgba(14, 30, 37, 0.38);
    width: 24px;
    height: 24px;
  }
`

export class Header extends Component {
  state = {
    menuToggled: false,
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick, false)
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false)
  }

  handleClick = e => {
    if (this.node.contains(e.target)) {
      return
    }
    this.closeMenu()
  }

  openMenu = () => {
    !this.state.menuToggled
      ? this.setState({ menuToggled: true })
      : this.setState({ menuToggled: false })
  }

  closeMenu = () => {
    this.setState({
      menuToggled: false,
    })
  }

  render() {
    return (
      <HeaderWrapper>
        <Container>
          <HeaderChildWrapper>
            <CustomColumn>
              <ContentBox>
                <LogoWrapper>
                  <Link to="/">
                    <Logo>
                      <LogoSpan>bbt</LogoSpan>
                    </Logo>
                  </Link>
                </LogoWrapper>
              </ContentBox>
            </CustomColumn>
            <CustomColumn>
              <ContentBox>
                <Button onClick={this.openMenu}>Menu</Button>
              </ContentBox>
            </CustomColumn>
            {/* Menu Modal */}
            <Tint className={this.state.menuToggled ? " active" : ""} />
            <ModalWrapper className={this.state.menuToggled ? " active" : ""}>
              <ModalContent ref={node => (this.node = node)}>
                <ButtonClose onClick={this.closeMenu}>
                  <svg id="icon-close" viewBox="0 0 16 16">
                    <path d="M8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 Z M10.44352,10.7233105 L10.4528296,10.7326201 L10.7326201,10.4528296 C11.0310632,10.1543865 11.0314986,9.66985171 10.7335912,9.37194437 L9.36507937,8.0034325 L10.7360526,6.63245928 C11.0344957,6.33401613 11.0349311,5.84948135 10.7370237,5.55157401 L10.448426,5.26297627 C10.1505186,4.96506892 9.66598387,4.96550426 9.36754072,5.26394741 L8.00589385,6.62559428 L6.63738198,5.25708241 C6.33947464,4.95917507 5.85493986,4.95961041 5.55649671,5.25805356 L5.26737991,5.54717036 C4.96893676,5.84561351 4.96850142,6.33014829 5.26640876,6.62805563 L6.62561103,7.9872579 L5.25463781,9.35823112 C4.95619466,9.65667427 4.95575932,10.141209 5.25366666,10.4391164 L5.5422644,10.7277141 C5.84017175,11.0256215 6.32470652,11.0251861 6.62314967,10.726743 L7.99412289,9.35576976 L9.36263476,10.7242816 C9.66054211,11.022189 10.1450769,11.0217536 10.44352,10.7233105 Z"></path>
                  </svg>
                </ButtonClose>
                <ModalContentList>
                  <ModalContentListItem>
                    <Link to="/">Home</Link>
                  </ModalContentListItem>
                  <ModalContentListItem>
                    <Link to="/the-firm">The Firm</Link>
                  </ModalContentListItem>
                  <ModalContentListItem>
                    <Link to="/">Pricing</Link>
                  </ModalContentListItem>
                  <ModalContentListItem CTA>
                    <Link className="cta-link" to="/">
                      Contact Us
                    </Link>
                  </ModalContentListItem>
                </ModalContentList>
              </ModalContent>
            </ModalWrapper>
          </HeaderChildWrapper>
        </Container>
      </HeaderWrapper>
    )
  }
}

export default Header
