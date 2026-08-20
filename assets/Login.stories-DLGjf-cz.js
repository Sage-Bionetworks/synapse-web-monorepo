import{o as e}from"./preload-helper-CsHsquCd.js";import{i as t,r as n}from"./ToastMessage-5LS6s3O8.js";import{nn as r,rn as i}from"./iframe-TChxhzP0.js";var a,o,s,c;e((()=>{i(),t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Authentication/Login`,component:r},s={args:{sessionCallback:()=>{n(`Login successful`,`info`,{autoCloseInMs:5e3})},onPasswordLoginSelected:a()}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    sessionCallback: () => {
      displayToast('Login successful', 'info', {
        autoCloseInMs: 5000
      });
    },
    onPasswordLoginSelected: fn()
  }
}`,...s.parameters?.docs?.source}}},c=[`LoginDemo`]}))();export{s as LoginDemo,c as __namedExportsOrder,o as default};