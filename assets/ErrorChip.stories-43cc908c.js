import{j as e}from"./jsx-runtime-095bf462.js";import{E as p}from"./ErrorChip-eec026b5.js";import{m as y,y as s}from"./EntityTypeUtils-08afe52d.js";import{F as A}from"./FullContextProvider-5d490e4e.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Tooltip-bd620372.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./styled-ec547c4d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./useTheme-b607537b.js";import"./isHostComponent-fa76b8d9.js";import"./index-8ce4a492.js";import"./useForkRef-f2aa3d66.js";import"./TransitionGroupContext-0df7f063.js";import"./utils-724ac38b.js";import"./inheritsLoose-c82a83d4.js";import"./Clear-64952050.js";import"./SvgIcon-2fc096fa.js";import"./ButtonBase-aaf12687.js";import"./emotion-react.browser.esm-722d93a9.js";import"./assertThisInitialized-081f9914.js";import"./Avatar-44485347.js";import"./IconSvg-937ccc74.js";import"./isArray-5e3f9107.js";import"./SynapseConstants-667d004c.js";import"./getEndpoint-ac94413e.js";import"./Box-45d8e94e.js";import"./extendSxProp-cb9d3182.js";import"./Button-999a9bbd.js";import"./Link-76c266e8.js";import"./Typography-26751034.js";import"./Button-5637ed55.js";import"./Alert-dfa7a661.js";import"./createWithBsPrefix-0fdadc7a.js";import"./index-58d3fd43.js";import"./Typography-fd50ec33.js";import"./Fade-753e10cb.js";import"./inputBaseClasses-9af63bd4.js";import"./queryClient-863ca940.js";import"./mutation-ff7b62b8.js";import"./infiniteQueryBehavior-c2c14c18.js";const dr={title:"Components/ErrorChip",component:p,render:i=>e(y,{children:n=>e(A,{synapseContext:{...n,accessToken:i.isAuthenticated?n.accessToken||"fake token":void 0},children:e(p,{...i})})})},E=new s(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:E,isAuthenticated:!1}},N=new s(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:N,isAuthenticated:!0}},S=new s(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}};var m,a,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
//# sourceMappingURL=ErrorChip.stories-43cc908c.js.map
