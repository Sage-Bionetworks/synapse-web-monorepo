import moment from "moment";
import { OAuthClientError } from "./OAuthClientError";
import React, { useContext, useEffect, useState } from "react";
import { SynapseClient } from "synapse-react-client";
import { SynapseContextProvider } from "synapse-react-client/dist/utils/SynapseContext";
import { AuthenticatedOn } from "synapse-react-client/dist/utils/synapseTypes/AuthenticatedOn";
import { handleErrorRedirect } from "./URLUtils";

type OAuthAppContextType = {
  accessToken: string | undefined;
  setAccessToken: (accessToken: string | undefined) => void;
};

export const OAuthAppContext = React.createContext<OAuthAppContextType>({
  accessToken: undefined,
  setAccessToken: () => {
    console.error("OAuthAppContext not initialized");
  },
});

export function useOAuthAppContext(): OAuthAppContextType {
  const context = useContext(OAuthAppContext);
  if (context === undefined) {
    throw new Error(
      "useOAuthAppContext must be used within a OAuthAppContextProvider"
    );
  }
  return context;
}

function AppInitializer(props: React.PropsWithChildren<Record<string, never>>) {
  const [accessToken, setAccessToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    // is prompt=login?  if so, then clear the cookie
    const urlSearchParams = new URLSearchParams(window.location.search);
    const prompt = urlSearchParams.get("prompt");
    if (prompt === "login") {
      SynapseClient.setAccessTokenCookie(undefined, () => {
        urlSearchParams.set("prompt", "");
        // replace query params and refresh
        window.location.replace(
          `${window.location.href.slice(
            0,
            window.location.href.indexOf("?")
          )}?${urlSearchParams.toString()}`
        );
      });
    } else {
      SynapseClient.getAccessTokenFromCookie()
        .then((accessToken: string | null) => {
          if (accessToken) {
            // check max age when re-establishing the session, not to auto-consent.
            const maxAgeURLParam = urlSearchParams.get("max_age");
            // SWC-5597: if max_age is defined, then return if the user last authenticated more than max_age seconds ago
            if (maxAgeURLParam && parseInt(maxAgeURLParam)) {
              SynapseClient.getAuthenticatedOn(accessToken).then(
                (authenticatedOnResponse: AuthenticatedOn) => {
                  const lastAuthenticatedOn = moment.utc(
                    authenticatedOnResponse.authenticatedOn
                  );
                  const now = moment.utc();
                  if (
                    now.diff(lastAuthenticatedOn, "seconds") <=
                    parseInt(maxAgeURLParam)
                  )
                    setAccessToken(accessToken);
                }
              );
            } else {
              // no max age param, use the token
              setAccessToken(accessToken);
            }
          }
        })
        .catch((_err) => {
          console.log("no token from cookie could be fetched ", _err);
          if (prompt === "none") {
            // not logged in, and prompt is "none".
            handleErrorRedirect(
              new OAuthClientError(
                "login_required",
                "User is not logged in, and prompt was set to none"
              )
            );
          }
        });
    }
    // on first time, also check for the SSO code
    SynapseClient.detectSSOCode();
  }, []);

  return (
    <OAuthAppContext.Provider value={{ accessToken, setAccessToken }}>
      <SynapseContextProvider
        synapseContext={{
          accessToken: accessToken,
          isInExperimentalMode: SynapseClient.isInSynapseExperimentalMode(),
          utcTime: SynapseClient.getUseUtcTimeFromCookie(),
        }}
      >
        {props.children}
      </SynapseContextProvider>
    </OAuthAppContext.Provider>
  );
}

export default AppInitializer;
