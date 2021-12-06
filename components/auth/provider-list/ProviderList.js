import {
  GoogleProvider,
  AppleProvider,
  GitHubProvider,
  FaceBookProvider,
  TwitterProvider,
} from "../providers";

import { Providers, Provider } from "./styles";

function ProviderList(props) {
  return (
    <Providers {...props}>
      <Provider>
        <GoogleProvider {...props} >With Google</GoogleProvider>
      </Provider>
      <Provider>
        <GitHubProvider  {...props}>With GitHub</GitHubProvider>
      </Provider>
      <Provider>
        <AppleProvider {...props}>With Apple</AppleProvider>
      </Provider>
      <Provider>
        <TwitterProvider {...props}>With Twiter</TwitterProvider>
      </Provider>
      <Provider>
        <FaceBookProvider {...props}>With Facebook</FaceBookProvider>
      </Provider>
    </Providers>
  );
}

export default ProviderList;
