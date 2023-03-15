import { rest } from "msw";
import mockOauthClient from "./MockOAuthClient";

export const handlers = [
  rest.get(
    "https://repo-prod.prod.sagebase.org/repo/v1/userProfile",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({}));
    }
  ),
  rest.get(
    "https://repo-prod.prod.sagebase.org/auth/v1/oauth2/client/:id",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockOauthClient));
    }
  ),

  rest.post(
    "https://repo-prod.prod.sagebase.org/auth/v1/oauth2/description",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          clientId: "1234",
          redirect_uri: "https://some-redirect-uri.abc/redirect",
          scope: [
            "To see your Synapse user ID, which can be used to access your public profile",
          ],
        })
      );
    }
  ),

  rest.post(
    "https://repo-prod.prod.sagebase.org/auth/v1/login2",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          accessToken: "someToken",
          acceptsTermsOfUse: true,
        })
      );
    }
  ),

  rest.post(
    "https://repo-prod.prod.sagebase.org/auth/v1/oauth2/consentcheck",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          granted: false,
        })
      );
    }
  ),

  rest.post(
    "https://repo-prod.prod.sagebase.org/auth/v1/oauth2/consent",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          access_code: "someAccessCode",
        })
      );
    }
  ),
];
