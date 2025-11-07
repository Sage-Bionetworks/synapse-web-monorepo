import{j as e,P as u,b as a,w as i}from"./iframe-BywOI08r.js";import{g as p,a as l}from"./changePasswordHandlers-QpRQNlVf.js";import{C as g}from"./ChangePasswordWithToken-BDYTrNEY.js";import"./index-r8ZA1smB.js";import"./useChangePasswordFormState-BtHxo5cw.js";const P={title:"Authentication/ChangePassword/ResetWithToken",component:g,parameters:{stack:"mock"},decorators:[h=>e.jsxs(e.Fragment,{children:["This story uses mock server responses. You may need to refresh the page to reset the mock server responses.",e.jsx(u,{sx:{my:4,p:4,mx:"auto",width:"600px"},children:e.jsx(h,{})})]})]},s={parameters:{msw:{handlers:[p(a)]}}},r={parameters:{msw:{handlers:[l(a,i,"mock-2fa-token"),p(a)]}}};var o,t,n;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getSuccessfulChangePasswordHandler(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(n=(t=s.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var m,c,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getRequires2FAChangePasswordHandler(MOCK_REPO_ORIGIN, MOCK_USER_ID, 'mock-2fa-token'), getSuccessfulChangePasswordHandler(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const f=["NoTwoFactorAuth","WithTwoFactorAuth"];export{s as NoTwoFactorAuth,r as WithTwoFactorAuth,f as __namedExportsOrder,P as default};
