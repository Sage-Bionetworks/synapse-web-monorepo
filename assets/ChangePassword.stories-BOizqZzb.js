import{n as e}from"./chunk-jRWAZmH_.js";import{HS as t,S as n,Uv as r,ag as i,jx as a,ng as o,pn as s,x as c}from"./iframe-SO-uJ0YA.js";import{n as l,t as u}from"./ChangePassword-CGYJkbOG.js";import{n as d,r as f,t as p}from"./changePasswordHandlers-f5DTCGYx.js";var m,h,g,_,v;e((()=>{f(),n(),s(),i(),r(),l(),m=t(),h={title:`Authentication/ChangePassword/WithCurrentPassword`,component:u,parameters:{stack:`mock`,withRouter:!0},decorators:[e=>(0,m.jsxs)(m.Fragment,{children:[`This story uses mock server responses. You may need to refresh the page to reset the mock server responses.`,(0,m.jsx)(a,{sx:{my:4,p:4,mx:`auto`,width:`600px`},children:(0,m.jsx)(e,{})})]})]},g={parameters:{msw:{handlers:[d(o)]}}},_={parameters:{msw:{handlers:[p(o,999,`mock-2fa-token`),...c(o)]}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getSuccessfulChangePasswordHandler(MOCK_REPO_ORIGIN)]
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getRequires2FAChangePasswordHandler(MOCK_REPO_ORIGIN, MOCK_USER_ID, 'mock-2fa-token'), ...getResetTwoFactorAuthHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,..._.parameters?.docs?.source}}},v=[`NoTwoFactorAuth`,`WithTwoFactorAuth`]}))();export{g as NoTwoFactorAuth,_ as WithTwoFactorAuth,v as __namedExportsOrder,h as default};