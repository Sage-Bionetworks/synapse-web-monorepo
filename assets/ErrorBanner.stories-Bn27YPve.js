import{bR as g,ex as S,j as r}from"./iframe-BWoxTCTX.js";import"./index-r8ZA1smB.js";const x={title:"UI/ErrorBanner",component:g},e={decorators:[p=>r.jsxs(r.Fragment,{children:[r.jsx("div",{children:"Note: login to see the unauthorized SynapseClientError."}),r.jsx(p,{})]})],args:{error:new S(403,"Some message about why access is not authorized.","some-url")}},o={args:{error:"Some error message",reloadButtonFn:()=>console.log("reload!")}},s={args:{error:new Error("Submission does not exist"),reloadButtonFn:()=>console.log("reload!")}};var n,a,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  decorators: [Story => <>
        <div>Note: login to see the unauthorized SynapseClientError.</div>
        <Story />
      </>],
  args: {
    error: new SynapseClientError(403, 'Some message about why access is not authorized.', 'some-url')
  }
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};var m,i,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    error: 'Some error message',
    reloadButtonFn: () => console.log('reload!')
  }
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,l,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    error: new Error('Submission does not exist'),
    reloadButtonFn: () => console.log('reload!')
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const y=["SynapseClientErrorDemo","StringDemo","ErrorDemo"];export{s as ErrorDemo,o as StringDemo,e as SynapseClientErrorDemo,y as __namedExportsOrder,x as default};
