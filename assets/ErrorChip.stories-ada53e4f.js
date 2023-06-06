import{j as e}from"./jsx-runtime-095bf462.js";import{E as p}from"./ErrorChip-72d43311.js";import{d as A,F as E,n as i}from"./SynapseClient-af316750.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Tooltip-d9ec209b.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./styled-eda33d92.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./useTheme-f0afab46.js";import"./Grow-5236916a.js";import"./isHostComponent-fa76b8d9.js";import"./useForkRef-f2aa3d66.js";import"./index-8ce4a492.js";import"./utils-fc362ac6.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-f2b81dde.js";import"./useIsFocusVisible-bbf13f29.js";import"./createSvgIcon-4be2f0e7.js";import"./ButtonBase-8aff28b9.js";import"./emotion-react.browser.esm-8faf7441.js";import"./assertThisInitialized-081f9914.js";import"./Avatar-a8ca304e.js";import"./ErrorOutlined-552d315c.js";import"./SynapseConstants-70e9b11b.js";import"./OrientationBanner-09c4930a.js";import"./FullWidthAlert-20558162.js";import"./AlertTitle-1b72df18.js";import"./Paper-3361ee84.js";import"./IconButton-476a8c2f.js";import"./Typography-99bfacf0.js";import"./extendSxProp-981ce5e6.js";import"./Stack-f932b1c9.js";import"./Box-c71138bd.js";import"./ClickAwayListener-36b79525.js";import"./Button-eaba334d.js";import"./getEndpoint-ac94413e.js";import"./Link-73927c58.js";import"./Button-5637ed55.js";import"./createWithBsPrefix-0fdadc7a.js";import"./index-58d3fd43.js";import"./isArray-5e3f9107.js";import"./dayjs.min-8d4ef725.js";import"./CheckCircleTwoTone-823e09cb.js";import"./inputBaseClasses-b7e34ae0.js";import"./Fade-bd79ca2f.js";const lr={title:"Components/ErrorChip",component:p,render:s=>e(A,{children:n=>e(E,{synapseContext:{...n,accessToken:s.isAuthenticated?n.accessToken||"fake token":void 0},children:e(p,{...s})})})},N=new i(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:N,isAuthenticated:!1}},y=new i(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:y,isAuthenticated:!0}},S=new i(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}};var m,a,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(l=t.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};const xr=["NotSignedIn","NoAccess","NotFound"];export{o as NoAccess,t as NotFound,r as NotSignedIn,xr as __namedExportsOrder,lr as default};
//# sourceMappingURL=ErrorChip.stories-ada53e4f.js.map
