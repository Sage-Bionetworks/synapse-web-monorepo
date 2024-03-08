import{j as e}from"./jsx-runtime-9dc53467.js";import{E as A}from"./ErrorChip-3c40d634.js";import{S as E,F as N,V as i}from"./ApplicationSessionManager-7024b1a7.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./Tooltip-248f4fe4.js";import"./createTheme-d609db80.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./styled-bb145c31.js";import"./useTheme-a28bb397.js";import"./isHostComponent-fa76b8d9.js";import"./Grow-2f9de6a4.js";import"./useForkRef-8feb2ebf.js";import"./index-d3ea75b5.js";import"./utils-19a63403.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-e6fd87c7.js";import"./useIsFocusVisible-18cd238e.js";import"./Chip-a105e3ef.js";import"./createSvgIcon-b657d91b.js";import"./ButtonBase-0719e676.js";import"./emotion-react.browser.esm-ca9fe929.js";import"./assertThisInitialized-081f9914.js";import"./Avatar-e1ef2d77.js";import"./ErrorOutlined-5d3a6347.js";import"./SynapseConstants-0078d114.js";import"./OrientationBanner-450e6652.js";import"./FullWidthAlert-149d754f.js";import"./Alert-fd45ce28.js";import"./Paper-35c12a01.js";import"./IconButton-9b53499e.js";import"./Stack-9fb6382b.js";import"./extendSxProp-7fb4e09f.js";import"./Box-f6adec47.js";import"./AlertTitle-9139c2ff.js";import"./Typography-f217f607.js";import"./ClickAwayListener-3b20c94f.js";import"./Button-065a21d4.js";import"./getEndpoint-ac94413e.js";import"./tinycolor-ea5bcbb6.js";import"./InfoTwoTone-aaf78040.js";import"./CheckCircleTwoTone-6570b572.js";import"./inputBaseClasses-8d4a6788.js";import"./Fade-05777e49.js";import"./Link-5cdd275a.js";import"./_getTag-b87d0382.js";import"./_Map-92f6da1c.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./index-4a1b1a67.js";import"./dayjs.min-f79c4412.js";import"./index-9d475cdf.js";import"./tiny-invariant-dd7d57d2.js";const Tr={title:"Components/ErrorChip",component:A,decorators:[(l,x)=>e(E,{children:s=>e(N,{synapseContext:{...s,accessToken:x.isAuthenticated?s.accessToken||"fake token":void 0},children:e(l,{})})})]},y=new i(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:y,isAuthenticated:!1}},S=new i(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}},T=new i(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:T,isAuthenticated:!0}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const Cr=["NotSignedIn","NoAccess","NotFound"];export{o as NoAccess,t as NotFound,r as NotSignedIn,Cr as __namedExportsOrder,Tr as default};
