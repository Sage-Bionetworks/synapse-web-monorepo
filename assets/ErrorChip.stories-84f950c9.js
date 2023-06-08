import{j as e}from"./jsx-runtime-095bf462.js";import{E as p}from"./ErrorChip-89c4d88c.js";import{d as A,F as E,o as s}from"./SynapseClient-f341520e.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Tooltip-ada0ed7d.js";import"./styled-0d0c058b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import"./useTheme-48a0a3fd.js";import"./Grow-abebdd1c.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-f2aa3d66.js";import"./index-8ce4a492.js";import"./utils-a7612588.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useIsFocusVisible-bbf13f29.js";import"./createSvgIcon-c04c1e3c.js";import"./ButtonBase-89336bd6.js";import"./emotion-react.browser.esm-a1e35fdb.js";import"./assertThisInitialized-081f9914.js";import"./Avatar-30520b29.js";import"./ErrorOutlined-81a5221b.js";import"./SynapseConstants-fca8ab5f.js";import"./OrientationBanner-ec8fcbed.js";import"./FullWidthAlert-ac112c77.js";import"./AlertTitle-1c4986af.js";import"./Paper-c5bb6f3a.js";import"./IconButton-055a3ecb.js";import"./Typography-bbc222e1.js";import"./extendSxProp-32377841.js";import"./Stack-fc7a4170.js";import"./Box-ef0af35d.js";import"./ClickAwayListener-36b79525.js";import"./Button-6910d769.js";import"./getEndpoint-ac94413e.js";import"./Link-c55ec6e2.js";import"./isArray-5e3f9107.js";import"./dayjs.min-8d4ef725.js";import"./index-58d3fd43.js";import"./CheckCircleTwoTone-a72e35ba.js";import"./inputBaseClasses-2d1e355f.js";import"./Fade-8ab202b4.js";const dr={title:"Components/ErrorChip",component:p,render:i=>e(A,{children:n=>e(E,{synapseContext:{...n,accessToken:i.isAuthenticated?n.accessToken||"fake token":void 0},children:e(p,{...i})})})},N=new s(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:N,isAuthenticated:!1}},y=new s(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:y,isAuthenticated:!0}},S=new s(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}};var m,a,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NotSignedInError,
    isAuthenticated: false
  }
}`,...(c=(a=r.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var d,u,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NoAccessError,
    isAuthenticated: true
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,l,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NotFoundError,
    isAuthenticated: true
  }
}`,...(x=(l=t.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};const ur=["NotSignedIn","NoAccess","NotFound"];export{o as NoAccess,t as NotFound,r as NotSignedIn,ur as __namedExportsOrder,dr as default};
//# sourceMappingURL=ErrorChip.stories-84f950c9.js.map
