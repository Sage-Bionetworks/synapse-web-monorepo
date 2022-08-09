import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

describe("App integration tests", () => {
  test("renders without crashing", () => {
    window.history.pushState({}, "Synapse Sign-In", "/?client_id=1234");
    render(<App />);
  });

  test.todo("Shows login when no token is provided");
  test.todo(
    "Shows login and does not redirect when an expired token is provided"
  );
  test.todo("Stores the token when login is successful");
  test.todo(
    "Shows consent screen if a token is provided but the user has not consented"
  );
  test.todo("Consent to app terms");
  test.todo("Deny consent to app terms");
  test.todo(
    "Redirects if a token is provided and the user has already consented"
  );

  test.todo("Redirects if a the redirect URI is invalid");
  test.todo("Redirects if the backend provides an unhandled error");
  test.todo("Shows warning if the client is unverified");
});
