import{j as e}from"./jsx-runtime-9dc53467.js";import{E as A}from"./ErrorChip-e25e1296.js";import{S as E,F as N,a3 as i}from"./SynapseClient-7700f4cc.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./Tooltip-e8bd1358.js";import"./styled-87b6157a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./useTheme-58bb7d64.js";import"./isHostComponent-fa76b8d9.js";import"./Grow-08403985.js";import"./useForkRef-8feb2ebf.js";import"./index-d3ea75b5.js";import"./utils-830530e5.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-1474f578.js";import"./useIsFocusVisible-e5f6c995.js";import"./Chip-99c1f106.js";import"./createSvgIcon-397996e3.js";import"./ButtonBase-651ec7a9.js";import"./emotion-react.browser.esm-6130a288.js";import"./assertThisInitialized-081f9914.js";import"./Avatar-ae1c3f3d.js";import"./ErrorOutlined-20d019ce.js";import"./SynapseConstants-c93e8ee4.js";import"./OrientationBanner-c0eacdfc.js";import"./FullWidthAlert-77167a31.js";import"./Alert-f631f725.js";import"./Paper-625f2e68.js";import"./IconButton-30f6f351.js";import"./Stack-eb200119.js";import"./extendSxProp-c4113ea3.js";import"./Box-737945d6.js";import"./AlertTitle-38884730.js";import"./Typography-62cfc992.js";import"./ClickAwayListener-3907f9d7.js";import"./Button-a2b8b546.js";import"./getEndpoint-ac94413e.js";import"./InfoTwoTone-bbc735a3.js";import"./CheckCircleTwoTone-8a62494f.js";import"./inputBaseClasses-888452c9.js";import"./Fade-3c4a970e.js";import"./Link-adab3de3.js";import"./_getTag-dcd38d76.js";import"./_Map-02912bad.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./index-3a31b023.js";import"./dayjs.min-f79c4412.js";import"./index-9d475cdf.js";import"./tiny-invariant-dd7d57d2.js";const yr={title:"Components/ErrorChip",component:A,decorators:[(l,x)=>e(E,{children:s=>e(N,{synapseContext:{...s,accessToken:x.isAuthenticated?s.accessToken||"fake token":void 0},children:e(l,{})})})]},y=new i(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:y,isAuthenticated:!1}},S=new i(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}},T=new i(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:T,isAuthenticated:!0}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const Sr=["NotSignedIn","NoAccess","NotFound"];export{o as NoAccess,t as NotFound,r as NotSignedIn,Sr as __namedExportsOrder,yr as default};
