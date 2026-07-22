import{o as e}from"./preload-helper-CsHsquCd.js";import{$t as t,Jt as n,en as r,qt as i}from"./iframe-B1E8cJ2m.js";var a,o,s,c;e((()=>{r(),n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Authentication/Login`,component:t},s={args:{sessionCallback:()=>{i(`Login successful`,`info`,{autoCloseInMs:5e3})},onPasswordLoginSelected:a()}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    sessionCallback: () => {
      displayToast('Login successful', 'info', {
        autoCloseInMs: 5000
      });
    },
    onPasswordLoginSelected: fn()
  }
}`,...s.parameters?.docs?.source}}},c=[`LoginDemo`]}))();export{s as LoginDemo,c as __namedExportsOrder,o as default};