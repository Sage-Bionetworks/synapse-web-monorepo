import{n as e}from"./chunk-jRWAZmH_.js";import{HS as t,Uv as n,ag as r,jx as i,ng as a,pn as o}from"./iframe-SO-uJ0YA.js";import{n as s,t as c}from"./ChangePasswordWithToken-BsvTM85w.js";import{n as l,r as u,t as d}from"./changePasswordHandlers-f5DTCGYx.js";var f,p,m,h,g;e((()=>{u(),o(),r(),n(),s(),f=t(),p={title:`Authentication/ChangePassword/ResetWithToken`,component:c,parameters:{stack:`mock`},decorators:[e=>(0,f.jsxs)(f.Fragment,{children:[`This story uses mock server responses. You may need to refresh the page to reset the mock server responses.`,(0,f.jsx)(i,{sx:{my:4,p:4,mx:`auto`,width:`600px`},children:(0,f.jsx)(e,{})})]})]},m={parameters:{msw:{handlers:[l(a)]}}},h={parameters:{msw:{handlers:[d(a,999,`mock-2fa-token`),l(a)]}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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