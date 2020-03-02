import React, { Component } from "react"
import styled from "styled-components"
import { Button } from "../components/Elements"
const FormWrapper = styled.div``

const FormContents = styled.form``

const FlexWrapper = styled.div`
  width: 100%;
  display: block;
  @media (min-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
`

const Field = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  @media (min-width: 576px) {
    max-width: ${props => (props.FlexField ? "48%" : "")};
    margin-bottom: ${props => (props.FlexField ? "0" : "")};
  }
`

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #ddd;
  padding: 0.5rem 0;
  color: #262b2b;
  font-weight: 600;
  &:focus {
    outline: none;
  }
`

const Textarea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #ddd;
  padding: 0.5rem 0;
  color: #262b2b;
  font-weight: 600;
  min-height: 100px;
  &:focus {
    outline: none;
  }
`

export class Form extends Component {
  render() {
    return (
      <FormWrapper>
        <FormContents
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action={this.props.action}
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <FlexWrapper>
            <Field FlexField>
              <Input
                required
                type="text"
                name="first-name"
                placeholder="First Name"
              />
            </Field>
            <Field FlexField>
              <Input
                required
                type="text"
                name="last-name"
                placeholder="Last Name"
              />
            </Field>
          </FlexWrapper>
          <FlexWrapper>
            <Field FlexField>
              <Input
                type="text"
                name="email-address"
                placeholder="Email Address"
                required
              />
            </Field>
            <Field FlexField>
              <Input
                type="text"
                name="phone-number"
                placeholder="Phone Number"
              />
            </Field>
          </FlexWrapper>
          <Field>
            <Textarea placeholder="Message"></Textarea>
          </Field>
          <Field>
            <Button type="submit">Submit</Button>
          </Field>
        </FormContents>
      </FormWrapper>
    )
  }
}

export default Form
