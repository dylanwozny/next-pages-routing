import styled from "styled-components";

const UniqueId = styled.div`
  margin-bottom: 2rem;

  input {
    width: 100px;
  }

  textarea {
    margin: 0;
    display: block;
    padding-right: 0.25rem;
  }
`;

function ItemId({ id, ...props }) {
  return (
    <UniqueId {...props}>
      <label htmlFor="idNum">Auto Generated Unique Id</label>
      <br />
      <input type="text" id="idNum" value={id} />
    </UniqueId>
  );
}

export default ItemId;
