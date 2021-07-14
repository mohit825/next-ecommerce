import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  box-shadow: 0px 6px 5px 0px rgba(208, 208, 208, 0.75) inset;

  .info-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }

  .p-20 {
    padding: 10px;
  }

  h2,
  p {
    align-self: center;
  }

  .login-form {
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  .error {
    font-size: 13px;
    color: red;
    padding-left: inherit;
  }

  input {
    width: 50%;
    border: none;
    padding: 15px;
    border-bottom: 2px solid var(--grey-clr);
  }
  input:focus {
    border-bottom: 2px solid var(--primary-clr);
    outline: none;
  }
`;
