import{o as e}from"./preload-helper-CsHsquCd.js";import{An as t}from"./TextField-DshmLCH7.js";import{t as n}from"./jsx-runtime-l3w3GfrB.js";import{t as r}from"./esm-CeuVXgHQ.js";import{An as i,En as a}from"./synapse-client-lwpa67nR.js";import{r as o}from"./mock_user_profile-BgSYjn5K.js";import{S as s,x as c}from"./iframe-C2T4choP.js";import{n as l,t as u}from"./ChangePassword-w68c2Y8V.js";import{n as d,r as f,t as p}from"./changePasswordHandlers-CMWPSDsS.js";var m,h,g,_,v;e((()=>{f(),s(),o(),i(),r(),l(),m=n(),h={title:`Authentication/ChangePassword/WithCurrentPassword`,component:u,parameters:{stack:`mock`,withRouter:!0},decorators:[e=>(0,m.jsxs)(m.Fragment,{children:[`This story uses mock server responses. You may need to refresh the page to reset the mock server responses.`,(0,m.jsx)(t,{sx:{my:4,p:4,mx:`auto`,width:`600px`},children:(0,m.jsx)(e,{})})]})]},g={parameters:{msw:{handlers:[d(a)]}}},_={parameters:{msw:{handlers:[p(a,999,`mock-2fa-token`),...c(a)]}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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