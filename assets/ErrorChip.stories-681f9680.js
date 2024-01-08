import{j as e}from"./jsx-runtime-095bf462.js";import{E as A}from"./ErrorChip-f6246f28.js";import{S as E,F as N,b as s}from"./SynapseClient-3f55d978.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Tooltip-294ff439.js";import"./styled-a48939ef.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./useTheme-60e5792f.js";import"./isHostComponent-fa76b8d9.js";import"./Grow-cb3cd8aa.js";import"./useForkRef-f2aa3d66.js";import"./index-8ce4a492.js";import"./utils-4f6567de.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-aa95d3cf.js";import"./useIsFocusVisible-bbf13f29.js";import"./Chip-b8d43608.js";import"./createSvgIcon-90be9181.js";import"./ButtonBase-895fb1ab.js";import"./emotion-react.browser.esm-69ef451a.js";import"./assertThisInitialized-081f9914.js";import"./Avatar-ba4d610e.js";import"./ErrorOutlined-8c6aeddb.js";import"./SynapseConstants-935f39ee.js";import"./OrientationBanner-cdfc64df.js";import"./FullWidthAlert-1b1b4f63.js";import"./AlertTitle-36b934fa.js";import"./Paper-169126a7.js";import"./IconButton-76e05815.js";import"./Typography-039a8d28.js";import"./extendSxProp-fc750aff.js";import"./Stack-3b05645e.js";import"./Box-f53d00dc.js";import"./ClickAwayListener-e5c35437.js";import"./Button-3631c64e.js";import"./getEndpoint-ac94413e.js";import"./Link-9ced689e.js";import"./_getTag-f412bed9.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-47c8dffe.js";import"./index-58d3fd43.js";import"./tiny-invariant-dd7d57d2.js";import"./InfoTwoTone-7af4ed61.js";import"./CheckCircleTwoTone-71d1bb57.js";import"./inputBaseClasses-2b9678c1.js";import"./Fade-06c2e3dd.js";const Ar={title:"Components/ErrorChip",component:A,decorators:[(l,x)=>e(E,{children:i=>e(N,{synapseContext:{...i,accessToken:x.isAuthenticated?i.accessToken||"fake token":void 0},children:e(l,{})})})]},y=new s(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:y,isAuthenticated:!1}},S=new s(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}},T=new s(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:T,isAuthenticated:!0}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const Er=["NotSignedIn","NoAccess","NotFound"];export{o as NoAccess,t as NotFound,r as NotSignedIn,Er as __namedExportsOrder,Ar as default};
//# sourceMappingURL=ErrorChip.stories-681f9680.js.map
