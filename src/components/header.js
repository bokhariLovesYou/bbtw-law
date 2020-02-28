import React, { Component } from "react"
// Bootstrap
import Container from "react-bootstrap/Container"
// Elements
import { Button, ContentBox, CustomColumn } from "./Elements"
// Styled Components
import styled from "styled-components"
const HeaderWrapper = styled.header`
  padding: 1rem 0;
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

export class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Container>
          <HeaderChildWrapper>
            <CustomColumn>
              <ContentBox>
                <LogoWrapper>
                  <Logo>
                    <LogoSpan>bbt</LogoSpan>
                  </Logo>
                </LogoWrapper>
              </ContentBox>
            </CustomColumn>
            <CustomColumn>
              <ContentBox>
                <Button>Contact Us</Button>
              </ContentBox>
            </CustomColumn>
          </HeaderChildWrapper>
        </Container>
      </HeaderWrapper>
    )
  }
}

export default Header
