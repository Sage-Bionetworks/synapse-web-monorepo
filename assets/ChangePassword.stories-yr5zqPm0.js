import{n as e}from"./chunk-zsgVPwQN.js";import{Kt as t}from"./TextField-ChXz3tov.js";import{t as n}from"./jsx-runtime-CR4qI0Ep.js";import{t as r}from"./esm-Czevgpuk.js";import{Tn as i,xn as a}from"./SynapseClient-CWPGHuo8.js";import{r as o}from"./mock_user_profile-DU5gSScO.js";import{n as s,t as c}from"./resetTwoFactorAuthHandlers-ChP7Ya4q.js";import{n as l,t as u}from"./ChangePassword-ChnA3QKx.js";import{n as d,r as f,t as p}from"./changePasswordHandlers-CXO1Gxsj.js";var m,h,g,_,v;e((()=>{f(),s(),o(),i(),r(),l(),m=n(),h={title:`Authentication/ChangePassword/WithCurrentPassword`,component:u,parameters:{stack:`mock`,withRouter:!0},decorators:[e=>(0,m.jsxs)(m.Fragment,{children:[`This story uses mock server responses. You may need to refresh the page to reset the mock server responses.`,(0,m.jsx)(t,{sx:{my:4,p:4,mx:`auto`,width:`600px`},children:(0,m.jsx)(e,{})})]})]},g={parameters:{msw:{handlers:[d(a)]}}},_={parameters:{msw:{handlers:[p(a,999,`mock-2fa-token`),...c(a)]}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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