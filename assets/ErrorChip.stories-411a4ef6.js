import{j as e}from"./jsx-runtime-095bf462.js";import{E as A}from"./ErrorChip-8fbea75e.js";import{S as E,F as N,b as s}from"./SynapseClient-773213a5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Tooltip-e6a8fad5.js";import"./styled-96220216.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./useTheme-a5fe342b.js";import"./Grow-15d1c4f6.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-f2aa3d66.js";import"./index-8ce4a492.js";import"./utils-60a28f01.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useIsFocusVisible-bbf13f29.js";import"./createSvgIcon-102248e7.js";import"./ButtonBase-0195d275.js";import"./emotion-react.browser.esm-8516f11f.js";import"./assertThisInitialized-081f9914.js";import"./Avatar-15b73dbe.js";import"./ErrorOutlined-b4a8c67a.js";import"./SynapseConstants-76f49806.js";import"./OrientationBanner-3e5e2da7.js";import"./FullWidthAlert-7a6f936f.js";import"./AlertTitle-d92dfb78.js";import"./Paper-8ac7942c.js";import"./IconButton-1e0dd4f6.js";import"./Typography-c5b8eeae.js";import"./extendSxProp-d749f662.js";import"./Stack-f7ee2fdc.js";import"./Box-891dc3c7.js";import"./ClickAwayListener-36b79525.js";import"./Button-d3d5b3a8.js";import"./getEndpoint-ac94413e.js";import"./Link-9ad54ce1.js";import"./isArray-5e3f9107.js";import"./dayjs.min-59ef0ea6.js";import"./index-58d3fd43.js";import"./tiny-invariant-dd7d57d2.js";import"./CheckCircleTwoTone-cd25e954.js";import"./inputBaseClasses-f1eaf41c.js";import"./Fade-5a6f6506.js";const hr={title:"Components/ErrorChip",component:A,decorators:[(l,x)=>e(E,{children:i=>e(N,{synapseContext:{...i,accessToken:x.isAuthenticated?i.accessToken||"fake token":void 0},children:e(l,{})})})]},y=new s(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:y,isAuthenticated:!1}},S=new s(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}},T=new s(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:T,isAuthenticated:!0}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const gr=["NotSignedIn","NoAccess","NotFound"];export{o as NoAccess,t as NotFound,r as NotSignedIn,gr as __namedExportsOrder,hr as default};
//# sourceMappingURL=ErrorChip.stories-411a4ef6.js.map
