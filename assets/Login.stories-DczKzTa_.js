import{ac as s,K as n}from"./iframe-B-ViuSv9.js";import"./index-Chi_LkuB.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,r={title:"Authentication/Login",component:s},o={args:{sessionCallback:()=>{n("Login successful","info",{autoCloseInMs:5e3})},onPasswordLoginSelected:e()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    sessionCallback: () => {
      displayToast('Login successful', 'info', {
        autoCloseInMs: 5000
      });
    },
    onPasswordLoginSelected: fn()
  }
}`,...o.parameters?.docs?.source}}};const c=["LoginDemo"];export{o as LoginDemo,c as __namedExportsOrder,r as default};
