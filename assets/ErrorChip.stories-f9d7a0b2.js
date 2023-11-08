import{j as e}from"./jsx-runtime-095bf462.js";import{E as A}from"./ErrorChip-195ae436.js";import{S as E,F as N,b as s}from"./SynapseClient-6efdb167.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Tooltip-b7fc1fa3.js";import"./styled-708eb06f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./useTheme-8e3749c8.js";import"./Grow-2ef26a27.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-f2aa3d66.js";import"./index-8ce4a492.js";import"./utils-4b9b9c32.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useIsFocusVisible-bbf13f29.js";import"./createSvgIcon-ad67928b.js";import"./ButtonBase-e5aaf94c.js";import"./emotion-react.browser.esm-df0ef9f3.js";import"./assertThisInitialized-081f9914.js";import"./Avatar-3fa28348.js";import"./ErrorOutlined-ca5df95b.js";import"./SynapseConstants-4f7926d8.js";import"./OrientationBanner-53051860.js";import"./FullWidthAlert-d85f4a4e.js";import"./AlertTitle-b21ffb10.js";import"./Paper-7e3a1b51.js";import"./IconButton-c6432c64.js";import"./Typography-661a732d.js";import"./extendSxProp-df3a54f3.js";import"./Stack-54f6c305.js";import"./Box-9f4bb844.js";import"./ClickAwayListener-36b79525.js";import"./Button-8994ccb5.js";import"./getEndpoint-ac94413e.js";import"./Link-f7a9268e.js";import"./_getTag-376e1527.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-59ef0ea6.js";import"./index-58d3fd43.js";import"./tiny-invariant-dd7d57d2.js";import"./CheckCircleTwoTone-9226ff35.js";import"./inputBaseClasses-5ec058ed.js";import"./Fade-7b562d23.js";const lr={title:"Components/ErrorChip",component:A,decorators:[(l,x)=>e(E,{children:i=>e(N,{synapseContext:{...i,accessToken:x.isAuthenticated?i.accessToken||"fake token":void 0},children:e(l,{})})})]},y=new s(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:y,isAuthenticated:!1}},S=new s(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}},T=new s(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:T,isAuthenticated:!0}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NotSignedInError,
    isAuthenticated: false
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var a,c,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NoAccessError,
    isAuthenticated: true
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NotFoundError,
    isAuthenticated: true
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const xr=["NotSignedIn","NoAccess","NotFound"];export{o as NoAccess,t as NotFound,r as NotSignedIn,xr as __namedExportsOrder,lr as default};
//# sourceMappingURL=ErrorChip.stories-f9d7a0b2.js.map
