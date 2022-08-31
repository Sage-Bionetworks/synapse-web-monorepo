import { render, screen, waitFor } from "@testing-library/react";
import { server } from "mocks/server";
import { rest } from "msw";
import React from "react";
import { ACCESS_TOKEN_COOKIE_KEY } from "synapse-react-client/dist/utils/SynapseClient";
import { URLSearchParams } from "url";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { SynapseClient } from "synapse-react-client";

function createParams(prompt?: string) {
  const params = new URLSearchParams();
  params.set("response_type", "code");
  params.set("client_id", "1234");
  params.set("scope", "openid");
  params.set("state", "1ga1bi0qm");
  params.set("redirect_uri", "https://some-client-uri.abc/redirect");
  params.set("claims", JSON.stringify({ id_token: { userid: null } }));
  if (prompt) {
    params.set("prompt", prompt);
  }
  return params;
}

function renderApp(prompt?: string) {
  window.history.pushState(
    null,
    "Synapse Sign-In",
    `/?${createParams(prompt).toString()}`
  );
  return render(<App />);
}

describe("App integration tests", () => {
  afterEach(() => {
    document.cookie = "";
  });

  test("Shows login when no token is provided", async () => {
    renderApp();

    await screen.findByLabelText("Username", { exact: false });
    await screen.findByLabelText("Password");
  });
  test("Shows login and does not redirect when an expired token is provided", async () => {
    // Need a token in the cookie so the app tries to use it
    document.cookie = `${ACCESS_TOKEN_COOKIE_KEY}=expired`;
    // Backend should return with an invalid_token response
    server.use(
      rest.get(
        "https://repo-prod.prod.sagebase.org/repo/v1/userProfile",
        (req, res, ctx) => {
          return res(
            ctx.status(401),
            ctx.json({
              reason: "invalid_token. The token has expired.",
              error: "invalid_token",
              error_description: "The token has expired.",
            })
          );
        }
      )
    );

    renderApp();

    // The token was invalid, so the user should be prompted to login
    await screen.findByLabelText("Username", { exact: false });
    await screen.findByLabelText("Password");

    // The cookie should have been cleared because the token was invalid
    expect(document.cookie).toEqual("");

    // No redirect should have happened
    expect(window.location.replace).not.toHaveBeenCalled();
  });

  test("Stores the token when login is successful", async () => {
    renderApp();

    const usernameField = await screen.findByLabelText("Username", {
      exact: false,
    });
    const passwordField = await screen.findByLabelText("Password");

    await userEvent.type(usernameField, "myUsername");
    await userEvent.type(passwordField, "myPassword");

    await userEvent.click(
      await screen.findByRole("button", { name: "Log in" })
    );

    await waitFor(() =>
      expect(document.cookie).toContain(`${ACCESS_TOKEN_COOKIE_KEY}=someToken`)
    );

    await screen.findByText(/requests permission/);

    // No redirect should have happened
    expect(window.location.replace).not.toHaveBeenCalled();
  });

  test("Shows consent screen if a token is provided but the user has not consented", async () => {
    // Need a token in the cookie so the app tries to use it
    document.cookie = `${ACCESS_TOKEN_COOKIE_KEY}=someToken`;

    renderApp();

    // The user has logged in but has not granted consent, so check for the consent text
    await screen.findByText(/requests permission/);

    // No redirect should have happened
    expect(window.location.replace).not.toHaveBeenCalled();
  });

  test("Consent to app terms", async () => {
    const consentSpy = jest.spyOn(SynapseClient, "consentToOAuth2Request");

    // Need a token in the cookie so the app tries to use it
    document.cookie = `${ACCESS_TOKEN_COOKIE_KEY}=someToken`;

    renderApp();

    // The user has logged in but has not granted consent, so check for the consent text
    await screen.findByText(/requests permission/);

    const consentButton = await screen.findByRole("button", { name: "Allow" });
    await userEvent.click(consentButton);

    // Should redirect
    // TODO: Verify the redirect URL
    await waitFor(() => expect(window.location.replace).toHaveBeenCalled());
    expect(consentSpy).toHaveBeenCalled();
  });
  test("Deny consent to app terms", async () => {
    const consentSpy = jest.spyOn(SynapseClient, "consentToOAuth2Request");
    // Need a token in the cookie so the app tries to use it
    document.cookie = `${ACCESS_TOKEN_COOKIE_KEY}=someToken`;

    renderApp();

    // The user has logged in but has not granted consent, so check for the consent text
    await screen.findByText(/requests permission/);

    const denyButton = await screen.findByRole("button", { name: "Deny" });
    await userEvent.click(denyButton);

    // Should redirect
    // TODO: Verify the redirect URL
    await waitFor(() => expect(window.location.replace).toHaveBeenCalled());
    expect(consentSpy).not.toHaveBeenCalled();
  });
  test("Redirects if a token is provided and the user has already consented, and prompt is not consent", async () => {
    const prompt = "login";
    // Consent has already been granted:
    const hasGrantedConsent = true;
    server.use(
      rest.post(
        "https://repo-prod.prod.sagebase.org/auth/v1/oauth2/consentcheck",
        (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              granted: hasGrantedConsent,
            })
          );
        }
      )
    );

    // Need a token in the cookie so the app tries to use it
    document.cookie = `${ACCESS_TOKEN_COOKIE_KEY}=someToken`;

    renderApp(prompt);

    await waitFor(() => expect(window.location.replace).toHaveBeenCalled());
  });

  test("Does not redirect if a token is provided and the user has already consented, if prompt is consent", async () => {
    const prompt = "consent";
    // Consent has already been granted:
    const hasGrantedConsent = true;
    server.use(
      rest.post(
        "https://repo-prod.prod.sagebase.org/auth/v1/oauth2/consentcheck",
        (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              granted: hasGrantedConsent,
            })
          );
        }
      )
    );

    // Need a token in the cookie so the app tries to use it
    document.cookie = `${ACCESS_TOKEN_COOKIE_KEY}=someToken`;

    renderApp(prompt);

    expect(window.location.replace).not.toHaveBeenCalled();
  });

  test.todo("Redirects in error if a the redirect URI is invalid");
  test.todo("Redirects in error if the backend provides an unhandled error");
  test.todo("Shows warning if the client is unverified");
});
