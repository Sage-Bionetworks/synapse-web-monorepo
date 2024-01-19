import{j as e}from"./jsx-runtime-9dc53467.js";import{E as A}from"./ErrorChip-01210c0d.js";import{S as E,F as N,b as i}from"./SynapseClient-ceb0e6d4.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./Tooltip-3e2f7ab3.js";import"./styled-01bfb76d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./useTheme-541c21f5.js";import"./isHostComponent-fa76b8d9.js";import"./Grow-5b2ac6ed.js";import"./useForkRef-8feb2ebf.js";import"./index-d3ea75b5.js";import"./utils-7ba61cee.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-1474f578.js";import"./useIsFocusVisible-e5f6c995.js";import"./Chip-3ab3a829.js";import"./createSvgIcon-af041161.js";import"./ButtonBase-f3be4fb1.js";import"./emotion-react.browser.esm-04dee135.js";import"./assertThisInitialized-081f9914.js";import"./Avatar-b9207744.js";import"./ErrorOutlined-6b31cdea.js";import"./SynapseConstants-567f6998.js";import"./OrientationBanner-1c6f5b11.js";import"./FullWidthAlert-88a09c3d.js";import"./Alert-34cc4490.js";import"./Paper-b990f44f.js";import"./IconButton-e4815158.js";import"./Stack-b0292d83.js";import"./extendSxProp-e91f91cb.js";import"./Box-ddce9904.js";import"./AlertTitle-1d33b140.js";import"./Typography-10432b83.js";import"./ClickAwayListener-3907f9d7.js";import"./Button-6cf38875.js";import"./getEndpoint-ac94413e.js";import"./InfoTwoTone-1a20b6d6.js";import"./CheckCircleTwoTone-5c97bb6f.js";import"./inputBaseClasses-9710a733.js";import"./Fade-7e0b73d6.js";import"./Link-980677d0.js";import"./_getTag-a0ec24ca.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./index-7db48dfb.js";import"./dayjs.min-f79c4412.js";import"./index-9d475cdf.js";import"./tiny-invariant-dd7d57d2.js";const Nr={title:"Components/ErrorChip",component:A,decorators:[(l,x)=>e(E,{children:s=>e(N,{synapseContext:{...s,accessToken:x.isAuthenticated?s.accessToken||"fake token":void 0},children:e(l,{})})})]},y=new i(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:y,isAuthenticated:!1}},S=new i(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}},T=new i(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:T,isAuthenticated:!0}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const yr=["NotSignedIn","NoAccess","NotFound"];export{o as NoAccess,t as NotFound,r as NotSignedIn,yr as __namedExportsOrder,Nr as default};
//# sourceMappingURL=ErrorChip.stories-dc47b787.js.map
