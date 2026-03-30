import{iD as o,j as e,P as n,b as a,w as m}from"./iframe-la5pZNJP.js";import{g as c,a as d}from"./changePasswordHandlers-C8WP70Fc.js";import{C as p}from"./ChangePassword-BbcWv9pX.js";import"./index-Chi_LkuB.js";import"./useUserBundle-DcSi2JrE.js";import"./useChangePasswordFormState-CLLvBD5o.js";const R={title:"Authentication/ChangePassword/WithCurrentPassword",component:p,parameters:{stack:"mock",withRouter:!0},decorators:[t=>e.jsxs(e.Fragment,{children:["This story uses mock server responses. You may need to refresh the page to reset the mock server responses.",e.jsx(n,{sx:{my:4,p:4,mx:"auto",width:"600px"},children:e.jsx(t,{})})]})]},r={parameters:{msw:{handlers:[c(a)]}}},s={parameters:{msw:{handlers:[d(a,m,"mock-2fa-token"),...o(a)]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const O=["NoTwoFactorAuth","WithTwoFactorAuth"];export{r as NoTwoFactorAuth,s as WithTwoFactorAuth,O as __namedExportsOrder,R as default};
