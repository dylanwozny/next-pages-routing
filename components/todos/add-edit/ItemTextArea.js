import styled from "styled-components";
import ValidationMessage from "components/ui/forms/ErrorMessage";
const ItemDescription = styled.div`
  margin-bottom: 2rem;

  textarea {
    resize: none;
    border: none;
    border-radius: 2px;
    box-shadow: 0 0 2px 1px #d0d0d0;
    color: #5a5b66;
    font-size: 14px;
    padding: 0.25rem;
    font-family: "Open Sans", sans-serif;
    height: ${(props) => props.vertical || "2rem"};
  }
  input,
  textarea {
    width: 100%;
  }
`;

// drill down data
function ItemTextArea({
  error,
  theplaceholder,
  type,
  changeHandler,
  ...props
}) {
  if (type === "description") {
    return (
      <ItemDescription vertical="10rem" {...props}>
        <label htmlFor="description">Description</label>
        <textarea
          defaultValue={theplaceholder}
          onChange={(e) => changeHandler(e)}
          placeholder="ex. go pick up groceries"
        />
        <ValidationMessage alert={error}></ValidationMessage>
      </ItemDescription>
    );
  }

  if (type === "category") {
    return (
      <ItemDescription {...props}>
        <label htmlFor="category">Category</label>
        <textarea
          defaultValue={theplaceholder}
          onChange={(e) => changeHandler(e)}
          placeholder="ex. home, work etc."
        />
        <ValidationMessage alert={error}></ValidationMessage>
      </ItemDescription>
    );
  } else {
    return null;
  }
}

export default ItemTextArea;
