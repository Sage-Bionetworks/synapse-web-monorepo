import{j as e}from"./jsx-runtime-9dc53467.js";import{E as A}from"./ErrorChip-7e522304.js";import{S as E,F as N,X as i}from"./ApplicationSessionManager-cde90ea0.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./Tooltip-fe9d0c3e.js";import"./styled-3c6f4d83.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./useTheme-e79ecbc0.js";import"./isHostComponent-fa76b8d9.js";import"./Grow-263eeb9a.js";import"./useForkRef-8feb2ebf.js";import"./index-d3ea75b5.js";import"./utils-6fa73630.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-e6fd87c7.js";import"./useIsFocusVisible-18cd238e.js";import"./Chip-c99cf170.js";import"./createSvgIcon-396e3e24.js";import"./ButtonBase-8587e55b.js";import"./emotion-react.browser.esm-5fddd3df.js";import"./assertThisInitialized-081f9914.js";import"./Avatar-a0e20416.js";import"./ErrorOutlined-6f3ac166.js";import"./SynapseConstants-47358250.js";import"./OrientationBanner-7be8199b.js";import"./FullWidthAlert-cd035080.js";import"./Alert-c3fe2b05.js";import"./Paper-411d859b.js";import"./IconButton-f820fa46.js";import"./Stack-4eda368b.js";import"./extendSxProp-1372051e.js";import"./Box-8faf86fd.js";import"./AlertTitle-aeea0d59.js";import"./Typography-1d068b0b.js";import"./ClickAwayListener-3b20c94f.js";import"./Button-33299b2c.js";import"./getEndpoint-ac94413e.js";import"./InfoTwoTone-b17047a2.js";import"./CheckCircleTwoTone-c37d81c7.js";import"./inputBaseClasses-034b6b96.js";import"./Fade-240af196.js";import"./Link-6ae0d01e.js";import"./_getTag-559aebd9.js";import"./_Map-92f6da1c.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./index-41d58426.js";import"./dayjs.min-f79c4412.js";import"./index-9d475cdf.js";import"./tiny-invariant-dd7d57d2.js";const yr={title:"Components/ErrorChip",component:A,decorators:[(l,x)=>e(E,{children:s=>e(N,{synapseContext:{...s,accessToken:x.isAuthenticated?s.accessToken||"fake token":void 0},children:e(l,{})})})]},y=new i(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:y,isAuthenticated:!1}},S=new i(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}},T=new i(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:T,isAuthenticated:!0}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
