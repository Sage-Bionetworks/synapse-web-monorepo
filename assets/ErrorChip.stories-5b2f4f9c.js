import{j as e}from"./jsx-runtime-095bf462.js";import{E as p}from"./ErrorChip-9af0a402.js";import{j as A,cw as E,x as s}from"./SynapseClient-28b35d32.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Tooltip-add08016.js";import"./styled-6ec5f85d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import"./useTheme-9d382341.js";import"./Grow-93737182.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-f2aa3d66.js";import"./index-8ce4a492.js";import"./utils-67eec175.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useIsFocusVisible-bbf13f29.js";import"./createSvgIcon-e7cd5941.js";import"./ButtonBase-43867210.js";import"./emotion-react.browser.esm-b991c11c.js";import"./assertThisInitialized-081f9914.js";import"./Avatar-d8d273ae.js";import"./ErrorOutlined-ddaff4fd.js";import"./SynapseConstants-46689190.js";import"./OrientationBanner-892f3bb7.js";import"./FullWidthAlert-1b71408b.js";import"./AlertTitle-ed62ac3d.js";import"./Paper-586cb0df.js";import"./IconButton-2455b4de.js";import"./Typography-65c9d67d.js";import"./extendSxProp-fe165b74.js";import"./Stack-f176d42e.js";import"./Box-3a3e81db.js";import"./ClickAwayListener-36b79525.js";import"./Button-ff2bc4b7.js";import"./getEndpoint-ac94413e.js";import"./Link-a20b00c0.js";import"./isArray-5e3f9107.js";import"./dayjs.min-8d4ef725.js";import"./index-58d3fd43.js";import"./CheckCircleTwoTone-108bcaf3.js";import"./inputBaseClasses-bfe9dd78.js";import"./Fade-fdeca465.js";const dr={title:"Components/ErrorChip",component:p,render:i=>e(A,{children:n=>e(E,{synapseContext:{...n,accessToken:i.isAuthenticated?n.accessToken||"fake token":void 0},children:e(p,{...i})})})},N=new s(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:N,isAuthenticated:!1}},y=new s(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:y,isAuthenticated:!0}},S=new s(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}};var m,a,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,x,l;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NotFoundError,
    isAuthenticated: true
  }
}`,...(l=(x=t.parameters)==null?void 0:x.docs)==null?void 0:l.source}}};const ur=["NotSignedIn","NoAccess","NotFound"];export{o as NoAccess,t as NotFound,r as NotSignedIn,ur as __namedExportsOrder,dr as default};
//# sourceMappingURL=ErrorChip.stories-5b2f4f9c.js.map
