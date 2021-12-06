import Image from "next/image";

import { ProviderButton } from "ui/buttons";

import facebook from "./facebook.png";

function FaceBookProvider({ children, ...props }) {
  return (
    <ProviderButton>
      <div>
        <Image
          src={facebook}
          layout="fixed"
          width={24}
          height={24}
          quality={30}
        />

        <span> {children}</span>
      </div>
    </ProviderButton>
  );
}

export default FaceBookProvider;
