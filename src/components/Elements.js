import styled, { css } from "styled-components"

export const Button = styled.button`
  margin: 0;
  padding: 0.6rem 2rem;
  padding: ${props => (props.MenuButton ? "0.3rem 1.5rem" : "")};
  border-radius: 4px;
  background-color: #e82e37;
  box-shadow: 0 4px 14px 0 rgba(232, 46, 55, 0.38);
  color: #fff;
  font-weight: 400;
  outline: none;
  border: none;
  &:hover {
    background-color: #d02b33;
    //   transition: 0.2s ease;
  }
`

export const Graphic = styled.div`
  position: absolute;
  top: ${props => (props.Top ? "0" : "")};
  right: ${props => (props.Right ? "0" : "")};
  top: ${props => (props.Small ? "0" : "")};
  right: ${props => (props.Small ? "-20rem" : "")};
  width: ${props => (props.Medium ? "40rem" : "")};
  height: ${props => (props.Medium ? "40rem" : "")};
  @media (min-width: 768px) {
    width: ${props => (props.Medium ? "60rem" : "")};
    height: ${props => (props.Medium ? "60rem" : "")};
  }
  display: ${props => (props.Small ? "none" : "")};
  @media (min-width: 768px) {
    display: ${props => (props.Small ? "block" : "")};
  }
  width: ${props => (props.Small ? "60rem" : "")};
  height: ${props => (props.Small ? "60rem" : "")};
  border-radius: ${props => (props.Rounded ? "100%" : "")};
  background-color: ${props => (props.Yellow ? "#f8eddb" : "")};
  background-color: ${props => (props.LightYellow ? "#fff8ed" : "")};
  left: ${props => (props.Left ? "-14rem" : "")};
  bottom: ${props => (props.Bottom ? "-40rem" : "")};
  background-color: ${props => (props.Pink ? "#ffd8dd2b" : "")};
  background-color: ${props => (props.DarkPink ? "#ffd8dd6b" : "")};
`

export const BackgroundOverlay = styled.div`
  @media (min-width: 992px) {
    position: absolute;
    left: ${props => (props.Left ? "0" : "")};
    right: ${props => (props.Right ? "0" : "")};
    top: 0;
    width: 50%;
    height: 100%;
    background-color: ${props => (props.Pink ? "#d1b7c4" : "")};
    background-color: ${props => (props.Peach ? "#ffdec6" : "")};
    background-color: ${props => (props.LightBlue ? "#dff5f9" : "")};
  }
`

export const Section = styled.section`
  padding: 4rem 0;
  padding: ${props => (props.HPHero ? "4rem 0 20rem 0" : "")};
  overflow: hidden;
  padding: ${props => (props.ZeroSmallVerticalPadding ? "0 0 4rem 0" : "")};
  @media (min-width: 992px) {
    padding: ${props => (props.ZeroSmallVerticalPadding ? "4rem 0" : "")};
    padding: ${props => (props.HPHero ? "7rem 0" : "")};
    padding: 7rem 0;
    padding: ${props => (props.ZeroSmallVerticalPadding ? "7rem 0" : "")};
    padding: ${props => (props.Small ? "4rem 0" : "")};
  }
  position: relative;
  background-color: #fff;
  background-color: ${props => (props.LightRed ? "#ffd8dd" : "")};
  background-color: ${props => (props.Peach ? "rgba(249,135,126,.15)" : "")};
  background-color: ${props => (props.Dark ? "#262b2b" : "")};
  background-color: ${props => (props.Purple ? "#d5cbd4" : "")};
  background-color: ${props => (props.LightYellow ? "rgb(255, 248, 237)" : "")};
  color: ${props => (props.Dark ? "#fff" : "")};
`

export const FluidImageWrapper = styled.div`
  z-index: 1;
  width: 100vw;
  position: relative;
  left: 50%;
  margin-left: -50vw;
  @media (min-width: 992px) {
    width: unset;
    position: unset;
    left: unset;
    margin-left: unset;
    padding: 0 4rem 0 0;
    padding: ${props => (props.HorizontallyInverted ? "0 0 0 4rem" : "")};
    text-align: center;
  }
  @media (min-width: 1200px) {
    padding: 0 6rem 0 0;
    padding: ${props => (props.HorizontallyInverted ? "0 0 0 6rem" : "")};
  }
`

export const LinkButton = styled.span`
  align-items: center;
  line-height: 1;
  font-weight: 600;
  cursor: pointer;
  font-size: 20px;
  color: ${props => (props.Red ? "#e82e37" : "")};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

export const ContentBox = styled.div`
  padding-top: ${props => (props.ColumnBox ? "4rem;" : "")};
  padding-top: ${props => (props.ColumnBoxHorizontallyInverted ? "4rem;" : "")};
  position: relative;
  z-index: 1;
  max-width: ${props => (props.EquipWidth ? "500px" : "")};
  max-width: ${props => (props.EquipWidth800 ? "800px" : "")};
  @media (min-width: 992px) {
    padding-top: ${props => (props.ColumnBox ? "0;" : "")};
    padding: ${props => (props.ColumnBox ? "0 0 0 1.5rem" : "")};
    padding: ${props => (props.ColumnBox ? "0 0 0 4rem" : "")};
    padding: ${props =>
      props.ColumnBoxHorizontallyInverted ? "0 4rem 0 0" : ""};
    padding-top: ${props => (props.PaddingTop ? "0;" : "")};
    max-width: ${props => (props.EquipWidth ? "600px" : "")};
    margin-left: ${props => (props.Centered ? "auto" : "")};
    margin-right: ${props => (props.Centered ? "auto" : "")};
  }
`

export const CustomColumn = styled.div``

export const ColumnImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  @media (min-width: 992px) {
    height: 600px;
  }
`

export const HeadingOne = styled.h1`
  color: ${props => (props.Red ? "#e82e37;" : "")};
  @media (min-width: 768px) {
    font-size: ${props => (props.HeroHeading ? "3rem" : "")};
  }
  @media (min-width: 992px) {
    font-size: ${props => (props.HeroHeading ? "4rem" : "")};
  }
`

export const HeadingTwo = styled.h2`
  color: ${props => (props.Red ? "#e82e37;" : "")};
  @media (min-width: 768px) {
    font-size: ${props => (props.Large ? "3rem;" : "")};
  }
  @media (min-width: 992px) {
    font-size: ${props => (props.Large ? "3rem" : "")};
  }
`

export const TagLine = styled.span`
  color: ${props => (props.Red ? "#e82e37;" : "")};
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 1px;
  display: block;
  padding-bottom: 0.5rem;
`

const HeroSubTitle = `
@media (min-width: 992px) {
    font-size: 1.35rem;
    margin-bottom: 1.5rem;
}
`

export const SubTitle = styled.p`
  color: ${props => (props.Red ? "#e82e37;" : "")};
  @media (min-width: 768px) {
    font-size: ${props => (props.Lg768 ? "1.35rem;" : "")};
    margin-bottom: ${props => (props.Lg768 ? "1.35rem;" : "")};
  }
  ${props =>
    props.HeroSubTitle
      ? css`
          ${HeroSubTitle}
        `
      : ""}
`
