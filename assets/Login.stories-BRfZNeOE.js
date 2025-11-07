import{ab as r,ac as t,J as i}from"./iframe-BMyGeve0.js";import"./index-r8ZA1smB.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,g={title:"Authentication/Login",component:r},e={args:{sessionCallback:()=>{t().then(({profile:a})=>{i(`You are currently logged in as ${a.userName}`,"info",{autoCloseInMs:5e3})})},onPasswordLoginSelected:l()}};var n,o,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const m=["LoginDemo"];export{e as LoginDemo,m as __namedExportsOrder,g as default};
