import{iQ as p,j as e,P as u,b as a,w as i}from"./iframe-xpHBgFEc.js";import{g as w,a as l}from"./changePasswordHandlers-DinyisiB.js";import{C as g}from"./ChangePassword-D34nVR9P.js";import"./index-r8ZA1smB.js";import"./useChangePasswordFormState-DiUMxco7.js";const x={title:"Authentication/ChangePassword/WithCurrentPassword",component:g,parameters:{stack:"mock",withRouter:!0},decorators:[h=>e.jsxs(e.Fragment,{children:["This story uses mock server responses. You may need to refresh the page to reset the mock server responses.",e.jsx(u,{sx:{my:4,p:4,mx:"auto",width:"600px"},children:e.jsx(h,{})})]})]},r={parameters:{msw:{handlers:[w(a)]}}},s={parameters:{msw:{handlers:[l(a,i,"mock-2fa-token"),...p(a)]}}};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getSuccessfulChangePasswordHandler(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getRequires2FAChangePasswordHandler(MOCK_REPO_ORIGIN, MOCK_USER_ID, 'mock-2fa-token'), ...getResetTwoFactorAuthHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const I=["NoTwoFactorAuth","WithTwoFactorAuth"];export{r as NoTwoFactorAuth,s as WithTwoFactorAuth,I as __namedExportsOrder,x as default};
