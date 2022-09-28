import { AddContainer, AddTitle, AddButton } from "./styles";
import { FiPlusCircle } from "react-icons/fi";
import Link from "next/link";

function todoNew(props) {
  return (
    <Link href="/add-item">
      <AddContainer>
        <AddTitle>New Item</AddTitle>

        <AddButton userColor="green">
          <span>
            <FiPlusCircle />
          </span>
        </AddButton>
      </AddContainer>
    </Link>
  );
}

export default todoNew;
