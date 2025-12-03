import{bX as w,et as h,j as r}from"./iframe-BPjtn3Py.js";import"./index-r8ZA1smB.js";const b={title:"UI/ErrorBanner",component:w},e={decorators:[y=>r.jsxs(r.Fragment,{children:[r.jsx("div",{children:"Note: login to see the unauthorized SynapseClientError."}),r.jsx(y,{})]})],args:{error:new h(403,"Some message about why access is not authorized.","some-url")}},o={args:{error:"Some error message",reloadButtonFn:()=>console.log("reload!")}},s={args:{error:new Error("Submission does not exist"),reloadButtonFn:()=>console.log("reload!")}},a={args:{error:new h(500,"Some message about why the server failed to process the request.","some-url")}};var n,t,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  decorators: [Story => <>
        <div>Note: login to see the unauthorized SynapseClientError.</div>
        <Story />
      </>],
  args: {
    error: new SynapseClientError(403, 'Some message about why access is not authorized.', 'some-url')
  }
}`,...(m=(t=e.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};var c,i,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    error: 'Some error message',
    reloadButtonFn: () => console.log('reload!')
  }
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,u,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    error: new Error('Submission does not exist'),
    reloadButtonFn: () => console.log('reload!')
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,S,E;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    error: new SynapseClientError(500, 'Some message about why the server failed to process the request.', 'some-url')
  }
}`,...(E=(S=a.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const v=["SynapseClientErrorDemo","StringDemo","ErrorDemo","ServerErrorErrorDemo"];export{s as ErrorDemo,a as ServerErrorErrorDemo,o as StringDemo,e as SynapseClientErrorDemo,v as __namedExportsOrder,b as default};
