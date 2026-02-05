import{iN as o,j as e,P as n,b as a,w as m}from"./iframe-Fj4lak5c.js";import{g as c,a as d}from"./changePasswordHandlers-evNhlOKs.js";import{C as p}from"./ChangePassword-BCK3SY8E.js";import"./index-Chi_LkuB.js";import"./useUserBundle-DYUW7eSP.js";import"./useSuspenseQuery-DCz9tJ8h.js";import"./useChangePasswordFormState-DGCn98Do.js";const O={title:"Authentication/ChangePassword/WithCurrentPassword",component:p,parameters:{stack:"mock",withRouter:!0},decorators:[t=>e.jsxs(e.Fragment,{children:["This story uses mock server responses. You may need to refresh the page to reset the mock server responses.",e.jsx(n,{sx:{my:4,p:4,mx:"auto",width:"600px"},children:e.jsx(t,{})})]})]},r={parameters:{msw:{handlers:[c(a)]}}},s={parameters:{msw:{handlers:[d(a,m,"mock-2fa-token"),...o(a)]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getSuccessfulChangePasswordHandler(MOCK_REPO_ORIGIN)]
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getRequires2FAChangePasswordHandler(MOCK_REPO_ORIGIN, MOCK_USER_ID, 'mock-2fa-token'), ...getResetTwoFactorAuthHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...s.parameters?.docs?.source}}};const C=["NoTwoFactorAuth","WithTwoFactorAuth"];export{r as NoTwoFactorAuth,s as WithTwoFactorAuth,C as __namedExportsOrder,O as default};
