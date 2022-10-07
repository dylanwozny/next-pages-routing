import styled from "styled-components";
import PageHeader from "../banner/header";

const AddItemForm = styled.form`
  margin: 2rem 0;
`;
// onSubmit is a function to be passed
function AddNewItemForm({ children, submitHandler, ...props }) {
  return (
    <AddItemForm onSubmit={(e) => submitHandler(e)}>{children}</AddItemForm>
  );
}

export default AddNewItemForm;
