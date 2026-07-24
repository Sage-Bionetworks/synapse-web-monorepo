import{o as e}from"./preload-helper-CsHsquCd.js";import{An as t}from"./TextField-DshmLCH7.js";import{t as n}from"./jsx-runtime-l3w3GfrB.js";import{t as r}from"./esm-CeuVXgHQ.js";import{An as i,En as a}from"./synapse-client-lwpa67nR.js";import{r as o}from"./mock_user_profile-BgSYjn5K.js";import{n as s,t as c}from"./ChangePasswordWithToken-DX4fRlr_.js";import{n as l,r as u,t as d}from"./changePasswordHandlers-CMWPSDsS.js";var f,p,m,h,g;e((()=>{u(),o(),i(),r(),s(),f=n(),p={title:`Authentication/ChangePassword/ResetWithToken`,component:c,parameters:{stack:`mock`},decorators:[e=>(0,f.jsxs)(f.Fragment,{children:[`This story uses mock server responses. You may need to refresh the page to reset the mock server responses.`,(0,f.jsx)(t,{sx:{my:4,p:4,mx:`auto`,width:`600px`},children:(0,f.jsx)(e,{})})]})]},m={parameters:{msw:{handlers:[l(a)]}}},h={parameters:{msw:{handlers:[d(a,999,`mock-2fa-token`),l(a)]}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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