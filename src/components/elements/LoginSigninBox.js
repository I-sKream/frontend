import styled from "styled-components";

export const LoginSigninBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
  margin-top: 0.2rem;
  border: transparent;
`;

export const InputWrapper = styled.div`
  text-align: left;
`;

export const LoginSigninInput = styled.input`
  position: relative;
  box-sizing: border-box;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #ebebeb;
  width: 25rem;
  height: 2rem;
  outline: none;
  font-size: 1rem;
  margin-bottom: 0.3rem;
  padding: 10px 0 14px;
  :focus {
    border-bottom: 2px solid black;
    
  }
  ::placeholder {
    font-size: 0.9rem;
 
  }
`;
export const LoginSigninBtn = styled.button`
  width: 25rem;
  height: 4rem;
  background-color: black;
  color: white;
  border: transparent;
  border-radius: 1rem;
  text-align: center;
  outline: none;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: bold;
`;
export const Label = styled.h3`
  display: block;
  font-weight: bold;
  font-size: 0.8rem;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  letter-spacing: 0.1rem;
`;
