import { OAuthClient } from "synapse-react-client/dist/utils/synapseTypes/OAuthClient";

const mockOauthClient: Partial<OAuthClient> = {
  client_id: "1234",
  client_name: "OAuth Client Demo",
  verified: true,
  client_uri: "https://yourhost.com/index.html",
  policy_uri: "https://yourhost.com/policy",
  tos_uri: "https://yourhost.com/terms_of_service",
};

export default mockOauthClient;
