import{j as e}from"./jsx-runtime-095bf462.js";import{E as p}from"./ErrorChip-8395229a.js";import{d as A,F as E,n as s}from"./SynapseClient-c43c6534.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Tooltip-b11baf92.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./styled-2cba4329.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./useTheme-d9b5c73e.js";import"./ownerDocument-613eb639.js";import"./index-8ce4a492.js";import"./useForkRef-2674f3de.js";import"./useEnhancedEffect-c45cae33.js";import"./isHostComponent-73d6e646.js";import"./useControlled-be22aa93.js";import"./useEventCallback-65e61675.js";import"./utils-8d96ae5c.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-53ae1513.js";import"./createSvgIcon-02cd1a2a.js";import"./SvgIcon-bc070951.js";import"./ButtonBase-bdd58ec3.js";import"./emotion-react.browser.esm-9ef79d4e.js";import"./hoist-non-react-statics.cjs-775f1375.js";import"./TransitionGroup-5e0fc2af.js";import"./assertThisInitialized-081f9914.js";import"./Avatar-798aa4bc.js";import"./ErrorOutlined-fccff164.js";import"./SynapseConstants-1ebc8be6.js";import"./getEndpoint-ac94413e.js";import"./Link-50e57cb4.js";import"./Typography-b4a6e0b5.js";import"./extendSxProp-a6a93bb0.js";import"./Button-5637ed55.js";import"./Alert-e578e9d5.js";import"./createWithBsPrefix-0fdadc7a.js";import"./index-58d3fd43.js";import"./isArray-5e3f9107.js";import"./dayjs.min-8d4ef725.js";import"./inputBaseClasses-564a6ee4.js";import"./Fade-2249b304.js";const dr={title:"Components/ErrorChip",component:p,render:i=>e(A,{children:n=>e(E,{synapseContext:{...n,accessToken:i.isAuthenticated?n.accessToken||"fake token":void 0},children:e(p,{...i})})})},N=new s(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:N,isAuthenticated:!1}},y=new s(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:y,isAuthenticated:!0}},S=new s(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}};var m,a,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
//# sourceMappingURL=ErrorChip.stories-0b9a6066.js.map
