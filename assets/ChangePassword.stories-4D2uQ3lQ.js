import{iD as o,b as a,j as e,P as n,v as m}from"./iframe-DI_DW6I7.js";import{g as c,a as d}from"./changePasswordHandlers-C9VYVHRl.js";import{C as p}from"./ChangePassword-B9I6V2sr.js";import"./index-Chi_LkuB.js";import"./useUserBundle-sgovs3e8.js";import"./queryOptions-C9woPjwX.js";import"./useChangePasswordFormState-B22LJNBI.js";const O={title:"Authentication/ChangePassword/WithCurrentPassword",component:p,parameters:{stack:"mock",withRouter:!0},decorators:[t=>e.jsxs(e.Fragment,{children:["This story uses mock server responses. You may need to refresh the page to reset the mock server responses.",e.jsx(n,{sx:{my:4,p:4,mx:"auto",width:"600px"},children:e.jsx(t,{})})]})]},r={parameters:{msw:{handlers:[c(a)]}}},s={parameters:{msw:{handlers:[d(a,m,"mock-2fa-token"),...o(a)]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
