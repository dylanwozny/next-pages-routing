import styled from "styled-components";

const Message = styled.span`
  color: red;
  line-height: 1.5;
`;

function ValidationMessage({ alert, ...props }) {
  return (
    <Message>
      <p>{alert}</p>
    </Message>
  );
}

export default ValidationMessage;
