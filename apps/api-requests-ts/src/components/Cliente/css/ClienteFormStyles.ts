import styled from "styled-components";
import { Form } from "react-bootstrap";


export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
`;

export const FormWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
`;

export const StyledForm = styled(Form)`
  text-align: left;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

