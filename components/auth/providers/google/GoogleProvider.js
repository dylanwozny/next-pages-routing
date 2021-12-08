import Image from 'next/image'
import { ProviderButton } from "../../../ui/buttons/";
import google from "./google.png";

function GoogleProvider({ children,  ...props }) {
 

  return (
    <ProviderButton >
      <div>
        <Image
          src={google}
          layout="fixed"
          width={24}
          height={24}
          quality={30}
        />
        <span>{children}</span>
      </div>
    </ProviderButton>
  );
}

export default GoogleProvider;
