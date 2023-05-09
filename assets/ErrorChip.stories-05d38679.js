import{j as e}from"./jsx-runtime-095bf462.js";import{E as p}from"./ErrorChip-358fc5fe.js";import{m as A,z as s}from"./EntityTypeUtils-cad60590.js";import{F as E}from"./FullContextProvider-b0ed40b5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Tooltip-d0fc02c5.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./styled-f64e11ba.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./useTheme-14d0ce71.js";import"./isHostComponent-fa76b8d9.js";import"./index-8ce4a492.js";import"./useForkRef-f2aa3d66.js";import"./TransitionGroupContext-0df7f063.js";import"./inheritsLoose-c82a83d4.js";import"./Clear-72bafe95.js";import"./SvgIcon-4c933a0b.js";import"./ButtonBase-4f599170.js";import"./emotion-react.browser.esm-4b1ddfee.js";import"./assertThisInitialized-081f9914.js";import"./Avatar-c25dcc6a.js";import"./IconSvg-d75490bd.js";import"./isArray-5e3f9107.js";import"./SynapseConstants-7100b9c0.js";import"./getEndpoint-ac94413e.js";import"./Box-13f1aabd.js";import"./extendSxProp-29a14132.js";import"./Button-891a522f.js";import"./Button-5637ed55.js";import"./Alert-57f06f06.js";import"./hook-f132a7c0.js";import"./createWithBsPrefix-57e9f06a.js";import"./divWithClassName-ac73dc31.js";import"./index-58d3fd43.js";import"./Typography-fd50ec33.js";import"./Fade-e4fb8afd.js";import"./queryClient-c8c0e6a3.js";import"./mutation-a8024f6f.js";import"./infiniteQueryBehavior-e3fffe49.js";const ar={title:"Components/ErrorChip",component:p,render:i=>e(A,{children:n=>e(E,{synapseContext:{...n,accessToken:i.isAuthenticated?n.accessToken||"fake token":void 0},children:e(p,{...i})})})},N=new s(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:N,isAuthenticated:!1}},y=new s(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:y,isAuthenticated:!0}},S=new s(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}};var m,a,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(l=t.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};const cr=["NotSignedIn","NoAccess","NotFound"];export{o as NoAccess,t as NotFound,r as NotSignedIn,cr as __namedExportsOrder,ar as default};
//# sourceMappingURL=ErrorChip.stories-05d38679.js.map
