import Image from "next/image";

import { ProviderButton } from "ui/buttons";

import twitter from "./twitter.png";

function TwitterProvider({ children, ...props }) {
  return (
    <ProviderButton>
      <div>
        <Image src={twitter} layout="fixed" width={24} height={24} quality={30} />
        <span> {children}</span>
      </div>
    </ProviderButton>
  );
}

export default TwitterProvider;
