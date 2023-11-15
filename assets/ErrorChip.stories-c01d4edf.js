import{j as e}from"./jsx-runtime-095bf462.js";import{E as A}from"./ErrorChip-72877f40.js";import{S as E,F as N,b as s}from"./SynapseClient-263d1708.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Tooltip-9098414d.js";import"./styled-17e9e47b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./useTheme-e16afdbe.js";import"./isHostComponent-fa76b8d9.js";import"./Grow-0db08d4d.js";import"./useForkRef-f2aa3d66.js";import"./index-8ce4a492.js";import"./utils-02ec0d60.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-aa95d3cf.js";import"./useIsFocusVisible-bbf13f29.js";import"./createSvgIcon-c69fbb93.js";import"./ButtonBase-4975ddb0.js";import"./emotion-react.browser.esm-39b3de80.js";import"./assertThisInitialized-081f9914.js";import"./Avatar-eb0038c1.js";import"./ErrorOutlined-3dd860d7.js";import"./SynapseConstants-0daa3b0b.js";import"./OrientationBanner-6f1c542d.js";import"./FullWidthAlert-e628333c.js";import"./AlertTitle-aed9db43.js";import"./Paper-2a5a67d3.js";import"./IconButton-5cd80e83.js";import"./Typography-d5f8f357.js";import"./extendSxProp-1c03cb1b.js";import"./Stack-685b29ad.js";import"./Box-fd1c0045.js";import"./ClickAwayListener-e5c35437.js";import"./Button-24da439b.js";import"./getEndpoint-ac94413e.js";import"./Link-a60839ec.js";import"./_getTag-40b07ccb.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-59ef0ea6.js";import"./index-58d3fd43.js";import"./tiny-invariant-dd7d57d2.js";import"./CheckCircleTwoTone-8c636771.js";import"./inputBaseClasses-42f125b6.js";import"./Fade-4732825d.js";const lr={title:"Components/ErrorChip",component:A,decorators:[(l,x)=>e(E,{children:i=>e(N,{synapseContext:{...i,accessToken:x.isAuthenticated?i.accessToken||"fake token":void 0},children:e(l,{})})})]},y=new s(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:y,isAuthenticated:!1}},S=new s(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}},T=new s(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:T,isAuthenticated:!0}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
//# sourceMappingURL=ErrorChip.stories-c01d4edf.js.map
