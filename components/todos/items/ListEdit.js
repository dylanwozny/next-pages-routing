import styled from "styled-components";
import { SvgButton } from "components/ui/buttons";
import { FiEdit2 } from "react-icons/fi";
import Link from "next/link";

const EditButton = styled(SvgButton)``;

function ListEdit(props) {
  return (
    <Link
      href={{
        pathname: `/edit-item/[id]`,
        query: { id: props.itemId },
      }}
      data={props.itemId}
    >
      <EditButton userColor={props.color}>
        <span className="item-small">
          <FiEdit2 />
        </span>
      </EditButton>
    </Link>
  );
}

export default ListEdit;
