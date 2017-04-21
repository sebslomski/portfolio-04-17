import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import axios from "axios";

export default class extends React.Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://simmco-email.now.sh", this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Element id="contact">
        <Wrapper>
          <Title>Get in touch</Title>
          <EmailWrap>
            <Form onSubmit={this.handleSubmit}>
              <InputGroup>
                <InputTitle>name</InputTitle>
                <InputField
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.name}
                />
              </InputGroup>
              <InputGroup>
                <InputTitle>email</InputTitle>
                <InputField
                  name="email"
                  type="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </InputGroup>
              <InputGroup>
                <InputTitle>subject</InputTitle>
                <InputField
                  name="subject"
                  onChange={this.handleChange}
                  value={this.state.subject}
                />
              </InputGroup>
              <InputGroup>
                <InputTitle>message</InputTitle>
                <InputField
                  primary
                  type="textfield"
                  name="message"
                  onChange={this.handleChange}
                  value={this.state.message}
                />
              </InputGroup>
              <Button type="submit">Send</Button>
            </Form>
          </EmailWrap>
          <Icons>
            <img src="static/github.svg" />
            <img src="static/linkedin.svg" />
            <img src="static/twitter.svg" />
          </Icons>
        </Wrapper>
      </Element>
    );
  }
}

const Wrapper = styled.div`
    margin: 3rem auto;
`;

const Title = styled.h2`
    font-size: 3.25rem;
    font-family: Lora,Times New Roman,serif;
    font-weight: 400;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const EmailWrap = styled.div`
    margin: 0 auto;
    height: 600px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const InputGroup = styled.div`
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const InputTitle = styled.span`
    font-size: 1.75rem;
    padding: 0rem 2rem 0.5rem;
    width: 6rem;
    margin-right: 4rem;
`;

const InputField = styled.input`
    border-radius: 5px;
    background: transparent;
    border: 1px solid #ccc;
    font-size: 1.75rem;
    font-family: inherit;
    width: 25rem;
    height: ${props => (props.primary ? "15rem" : "auto")};
`;

const Button = styled.button`
  color: white;
  background-color: #FF5252;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.3rem;
  margin-top: 1rem;
  border: none;
`;

const Icons = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  max-height: 3.5rem;
`;

