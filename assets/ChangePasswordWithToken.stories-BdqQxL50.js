import{n as e}from"./chunk-jRWAZmH_.js";import{Jh as t,Mv as n,Zh as r,bx as i,cn as a,jS as o}from"./iframe-BN9ezngx.js";import{n as s,t as c}from"./ChangePasswordWithToken-Ci7O2ucQ.js";import{n as l,r as u,t as d}from"./changePasswordHandlers-BZhO4De7.js";var f,p,m,h,g;e((()=>{u(),a(),r(),n(),s(),f=o(),p={title:`Authentication/ChangePassword/ResetWithToken`,component:c,parameters:{stack:`mock`},decorators:[e=>(0,f.jsxs)(f.Fragment,{children:[`This story uses mock server responses. You may need to refresh the page to reset the mock server responses.`,(0,f.jsx)(i,{sx:{my:4,p:4,mx:`auto`,width:`600px`},children:(0,f.jsx)(e,{})})]})]},m={parameters:{msw:{handlers:[l(t)]}}},h={parameters:{msw:{handlers:[d(t,999,`mock-2fa-token`),l(t)]}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getSuccessfulChangePasswordHandler(MOCK_REPO_ORIGIN)]
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getRequires2FAChangePasswordHandler(MOCK_REPO_ORIGIN, MOCK_USER_ID, 'mock-2fa-token'), getSuccessfulChangePasswordHandler(MOCK_REPO_ORIGIN)]
    }
  }
}`,...h.parameters?.docs?.source}}},g=[`NoTwoFactorAuth`,`WithTwoFactorAuth`]}))();export{m as NoTwoFactorAuth,h as WithTwoFactorAuth,g as __namedExportsOrder,p as default};