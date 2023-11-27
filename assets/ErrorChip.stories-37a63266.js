import{j as e}from"./jsx-runtime-095bf462.js";import{E as A}from"./ErrorChip-079ed14b.js";import{S as E,F as N,b as s}from"./SynapseClient-d7646a6f.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Tooltip-8bd5513a.js";import"./styled-22375f15.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./useTheme-cde0f631.js";import"./isHostComponent-fa76b8d9.js";import"./Grow-a0d5bea7.js";import"./useForkRef-f2aa3d66.js";import"./index-8ce4a492.js";import"./utils-0cc1eea7.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-aa95d3cf.js";import"./useIsFocusVisible-bbf13f29.js";import"./createSvgIcon-7fa7efea.js";import"./ButtonBase-e9d7809c.js";import"./emotion-react.browser.esm-0e04c803.js";import"./assertThisInitialized-081f9914.js";import"./Avatar-bc6de1e9.js";import"./ErrorOutlined-a472eded.js";import"./SynapseConstants-8475b854.js";import"./OrientationBanner-e18cce1c.js";import"./FullWidthAlert-9e00f859.js";import"./AlertTitle-6e236fcd.js";import"./Paper-9598301d.js";import"./IconButton-005300d9.js";import"./Typography-43164bc2.js";import"./extendSxProp-8e3bfbb0.js";import"./Stack-4fa57222.js";import"./Box-50261c1d.js";import"./ClickAwayListener-e5c35437.js";import"./Button-d1306030.js";import"./getEndpoint-ac94413e.js";import"./Link-7bf366a7.js";import"./_getTag-71ef705c.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-59ef0ea6.js";import"./index-58d3fd43.js";import"./tiny-invariant-dd7d57d2.js";import"./CheckCircleTwoTone-b25a5ea9.js";import"./inputBaseClasses-993f1e72.js";import"./Fade-952926d2.js";const lr={title:"Components/ErrorChip",component:A,decorators:[(l,x)=>e(E,{children:i=>e(N,{synapseContext:{...i,accessToken:x.isAuthenticated?i.accessToken||"fake token":void 0},children:e(l,{})})})]},y=new s(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:y,isAuthenticated:!1}},S=new s(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}},T=new s(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:T,isAuthenticated:!0}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
//# sourceMappingURL=ErrorChip.stories-37a63266.js.map
