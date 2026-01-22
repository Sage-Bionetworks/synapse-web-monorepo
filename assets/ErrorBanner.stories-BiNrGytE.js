import{bX as m,eu as n,j as r}from"./iframe-Du5t3CHa.js";import"./index-Chi_LkuB.js";const l={title:"UI/ErrorBanner",component:m},e={decorators:[t=>r.jsxs(r.Fragment,{children:[r.jsx("div",{children:"Note: login to see the unauthorized SynapseClientError."}),r.jsx(t,{})]})],args:{error:new n(403,"Some message about why access is not authorized.","some-url")}},o={args:{error:"Some error message",reloadButtonFn:()=>console.log("reload!")}},s={args:{error:new Error("Submission does not exist"),reloadButtonFn:()=>console.log("reload!")}},a={args:{error:new n(500,"Some message about why the server failed to process the request.","some-url")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <>
        <div>Note: login to see the unauthorized SynapseClientError.</div>
        <Story />
      </>],
  args: {
    error: new SynapseClientError(403, 'Some message about why access is not authorized.', 'some-url')
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'Some error message',
    reloadButtonFn: () => console.log('reload!')
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    error: new Error('Submission does not exist'),
    reloadButtonFn: () => console.log('reload!')
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    error: new SynapseClientError(500, 'Some message about why the server failed to process the request.', 'some-url')
  }
}`,...a.parameters?.docs?.source}}};const d=["SynapseClientErrorDemo","StringDemo","ErrorDemo","ServerErrorErrorDemo"];export{s as ErrorDemo,a as ServerErrorErrorDemo,o as StringDemo,e as SynapseClientErrorDemo,d as __namedExportsOrder,l as default};
