import Image from 'next/image';

import {ProviderButton} from 'components/ui/buttons';
import google from './google.png';



function GoogleProvider({label, ...props}){
    // auth with google
    return(
        <ProviderButton>
            <Image
                     src={google}
                     layout="fixed"
                     width={24}
                     height={24}                                              
            />
            <span>{label || "sign up with google"}</span>
        </ProviderButton>
    )

}

export default GoogleProvider;