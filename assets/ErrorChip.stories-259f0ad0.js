import{j as e}from"./jsx-runtime-095bf462.js";import{E as A}from"./ErrorChip-639c4af8.js";import{S as E,F as N,b as s}from"./SynapseClient-47ca3138.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Tooltip-6a83a77a.js";import"./styled-9c91c4fe.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./useTheme-68d5aa8d.js";import"./Grow-426921c3.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-f2aa3d66.js";import"./index-8ce4a492.js";import"./utils-6b5ba2e3.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useIsFocusVisible-bbf13f29.js";import"./createSvgIcon-fd8a55dc.js";import"./ButtonBase-7c3b1b89.js";import"./emotion-react.browser.esm-8f02f344.js";import"./assertThisInitialized-081f9914.js";import"./Avatar-281ced81.js";import"./ErrorOutlined-dd0fb706.js";import"./SynapseConstants-1ba53034.js";import"./OrientationBanner-ecffb496.js";import"./FullWidthAlert-a85e5287.js";import"./AlertTitle-af39c120.js";import"./Paper-88da9df3.js";import"./IconButton-152addcf.js";import"./Typography-d16533eb.js";import"./extendSxProp-e5d44a75.js";import"./Stack-c9edc483.js";import"./Box-49321e59.js";import"./ClickAwayListener-36b79525.js";import"./Button-c45f00b4.js";import"./getEndpoint-ac94413e.js";import"./Link-fc5d7a73.js";import"./_getTag-861d442f.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-59ef0ea6.js";import"./index-58d3fd43.js";import"./tiny-invariant-dd7d57d2.js";import"./CheckCircleTwoTone-784a445a.js";import"./inputBaseClasses-f05f2ac2.js";import"./Fade-a19bf181.js";const lr={title:"Components/ErrorChip",component:A,decorators:[(l,x)=>e(E,{children:i=>e(N,{synapseContext:{...i,accessToken:x.isAuthenticated?i.accessToken||"fake token":void 0},children:e(l,{})})})]},y=new s(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:y,isAuthenticated:!1}},S=new s(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}},T=new s(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:T,isAuthenticated:!0}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
//# sourceMappingURL=ErrorChip.stories-259f0ad0.js.map
