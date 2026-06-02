import{n as e}from"./chunk-jRWAZmH_.js";import{Nx as t,S as n,WS as r,Wv as i,og as a,pn as o,rg as s,x as c}from"./iframe-BodYv8zs.js";import{n as l,t as u}from"./ChangePassword-BHWLWkrV.js";import{n as d,r as f,t as p}from"./changePasswordHandlers-u8bwZssj.js";var m,h,g,_,v;e((()=>{f(),n(),o(),a(),i(),l(),m=r(),h={title:`Authentication/ChangePassword/WithCurrentPassword`,component:u,parameters:{stack:`mock`,withRouter:!0},decorators:[e=>(0,m.jsxs)(m.Fragment,{children:[`This story uses mock server responses. You may need to refresh the page to reset the mock server responses.`,(0,m.jsx)(t,{sx:{my:4,p:4,mx:`auto`,width:`600px`},children:(0,m.jsx)(e,{})})]})]},g={parameters:{msw:{handlers:[d(s)]}}},_={parameters:{msw:{handlers:[p(s,999,`mock-2fa-token`),...c(s)]}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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