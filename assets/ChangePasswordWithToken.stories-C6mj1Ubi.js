import{j as e,P as n,b as a,w as m}from"./iframe-DuFc9wy7.js";import{g as o,a as c}from"./changePasswordHandlers-CTO9dkgV.js";import{C as d}from"./ChangePasswordWithToken-BwlfSEVJ.js";import"./index-Chi_LkuB.js";import"./useChangePasswordFormState-RbuZO0sH.js";const g={title:"Authentication/ChangePassword/ResetWithToken",component:d,parameters:{stack:"mock"},decorators:[t=>e.jsxs(e.Fragment,{children:["This story uses mock server responses. You may need to refresh the page to reset the mock server responses.",e.jsx(n,{sx:{my:4,p:4,mx:"auto",width:"600px"},children:e.jsx(t,{})})]})]},s={parameters:{msw:{handlers:[o(a)]}}},r={parameters:{msw:{handlers:[c(a,m,"mock-2fa-token"),o(a)]}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getSuccessfulChangePasswordHandler(MOCK_REPO_ORIGIN)]
    }
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getRequires2FAChangePasswordHandler(MOCK_REPO_ORIGIN, MOCK_USER_ID, 'mock-2fa-token'), getSuccessfulChangePasswordHandler(MOCK_REPO_ORIGIN)]
    }
  }
}`,...r.parameters?.docs?.source}}};const w=["NoTwoFactorAuth","WithTwoFactorAuth"];export{s as NoTwoFactorAuth,r as WithTwoFactorAuth,w as __namedExportsOrder,g as default};
