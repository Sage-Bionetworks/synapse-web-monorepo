import{n as e}from"./chunk-jRWAZmH_.js";import{On as t,kn as n,vn as r,yn as i}from"./iframe-BCH-iBKN.js";var a,o,s,c;e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Authentication/Login`,component:t},s={args:{sessionCallback:()=>{r(`Login successful`,`info`,{autoCloseInMs:5e3})},onPasswordLoginSelected:a()}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    sessionCallback: () => {
      displayToast('Login successful', 'info', {
        autoCloseInMs: 5000
      });
    },
    onPasswordLoginSelected: fn()
  }
}`,...s.parameters?.docs?.source}}},c=[`LoginDemo`]}))();export{s as LoginDemo,c as __namedExportsOrder,o as default};