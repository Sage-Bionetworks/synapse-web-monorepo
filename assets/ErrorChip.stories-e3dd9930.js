import{j as e}from"./jsx-runtime-095bf462.js";import{E as A}from"./ErrorChip-8a422e45.js";import{S as E,F as N,b as s}from"./SynapseClient-ce5780df.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Tooltip-f72372f7.js";import"./styled-81e3612a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import"./useTheme-533dafd0.js";import"./isHostComponent-fa76b8d9.js";import"./Grow-080f23da.js";import"./useForkRef-f2aa3d66.js";import"./index-8ce4a492.js";import"./utils-b7dab64f.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-aa95d3cf.js";import"./useIsFocusVisible-bbf13f29.js";import"./Chip-55e35231.js";import"./createSvgIcon-efa5fd2e.js";import"./ButtonBase-84be17da.js";import"./emotion-react.browser.esm-f993d2c2.js";import"./assertThisInitialized-081f9914.js";import"./Avatar-58bc65b9.js";import"./ErrorOutlined-3a36acde.js";import"./SynapseConstants-163777d5.js";import"./OrientationBanner-caa14b37.js";import"./FullWidthAlert-f28d1efb.js";import"./AlertTitle-ce329963.js";import"./Paper-057dfac2.js";import"./IconButton-2a435ef1.js";import"./Typography-214fd772.js";import"./extendSxProp-3a6755c2.js";import"./Stack-db426a61.js";import"./Box-f664662a.js";import"./ClickAwayListener-e5c35437.js";import"./Button-f56bbd3a.js";import"./getEndpoint-ac94413e.js";import"./Link-342b97d1.js";import"./_getTag-ed9314eb.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./dayjs.min-47c8dffe.js";import"./index-58d3fd43.js";import"./tiny-invariant-dd7d57d2.js";import"./InfoTwoTone-444cba43.js";import"./CheckCircleTwoTone-b7fa358f.js";import"./inputBaseClasses-a1108cc7.js";import"./Fade-275e12f9.js";const Ar={title:"Components/ErrorChip",component:A,decorators:[(l,x)=>e(E,{children:i=>e(N,{synapseContext:{...i,accessToken:x.isAuthenticated?i.accessToken||"fake token":void 0},children:e(l,{})})})]},y=new s(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:y,isAuthenticated:!1}},S=new s(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}},T=new s(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:T,isAuthenticated:!0}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
//# sourceMappingURL=ErrorChip.stories-e3dd9930.js.map
