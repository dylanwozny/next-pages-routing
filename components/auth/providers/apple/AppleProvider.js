import Image from "next/image";

import { ProviderButton } from "ui/buttons";

import apple from "./apple.png";

function AppleProvider({ children, ...props }) {
  return (
    <ProviderButton>
      <div>
        <Image src={apple} layout="fixed" width={24} height={24} quality={30} />
        <span> {children}</span>
      </div>
    </ProviderButton>
  );
}

export default AppleProvider;
