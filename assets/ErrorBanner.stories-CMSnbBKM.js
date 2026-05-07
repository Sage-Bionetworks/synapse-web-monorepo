import{n as e}from"./chunk-jRWAZmH_.js";import{MS as t,dc as n,hc as r,ih as i,rh as a}from"./iframe-Dl4k2Zv_.js";var o,s,c,l,u,d,f;e((()=>{r(),i(),o=t(),s={title:`UI/ErrorBanner`,component:n},c={decorators:[e=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`div`,{children:`Note: login to see the unauthorized SynapseClientError.`}),(0,o.jsx)(e,{})]})],args:{error:new a(403,`Some message about why access is not authorized.`,`some-url`)}},l={args:{error:`Some error message`,reloadButtonFn:()=>console.log(`reload!`)}},u={args:{error:Error(`Submission does not exist`),reloadButtonFn:()=>console.log(`reload!`)}},d={args:{error:new a(500,`Some message about why the server failed to process the request.`,`some-url`)}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <>
        <div>Note: login to see the unauthorized SynapseClientError.</div>
        <Story />
      </>],
  args: {
    error: new SynapseClientError(403, 'Some message about why access is not authorized.', 'some-url')
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'Some error message',
    reloadButtonFn: () => console.log('reload!')
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    error: new Error('Submission does not exist'),
    reloadButtonFn: () => console.log('reload!')
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    error: new SynapseClientError(500, 'Some message about why the server failed to process the request.', 'some-url')
  }
}`,...d.parameters?.docs?.source}}},f=[`SynapseClientErrorDemo`,`StringDemo`,`ErrorDemo`,`ServerErrorErrorDemo`]}))();export{u as ErrorDemo,d as ServerErrorErrorDemo,l as StringDemo,c as SynapseClientErrorDemo,f as __namedExportsOrder,s as default};