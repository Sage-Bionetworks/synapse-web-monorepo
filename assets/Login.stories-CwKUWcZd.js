import{ac as o,ad as s,K as a}from"./iframe-Djf1Gvja.js";import"./index-Chi_LkuB.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,l={title:"Authentication/Login",component:o},e={args:{sessionCallback:()=>{s().then(({profile:n})=>{a(`You are currently logged in as ${n.userName}`,"info",{autoCloseInMs:5e3})})},onPasswordLoginSelected:r()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    sessionCallback: () => {
      sessionChangeHandler().then(({
        profile
      }) => {
        displayToast(\`You are currently logged in as \${profile.userName}\`, 'info', {
          autoCloseInMs: 5000
        });
      });
    },
    onPasswordLoginSelected: fn()
  }
}`,...e.parameters?.docs?.source}}};const c=["LoginDemo"];export{e as LoginDemo,c as __namedExportsOrder,l as default};
