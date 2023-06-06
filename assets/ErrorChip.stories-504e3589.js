import{j as e}from"./jsx-runtime-095bf462.js";import{E as p}from"./ErrorChip-eae4b1f1.js";import{d as A,F as E,n as s}from"./SynapseClient-11177bbe.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Tooltip-450b9b95.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./styled-8ebe2b7d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-29d231ba.js";import"./useTheme-df5273c4.js";import"./Grow-493ac784.js";import"./isHostComponent-73d6e646.js";import"./useForkRef-2674f3de.js";import"./index-8ce4a492.js";import"./useEnhancedEffect-c45cae33.js";import"./utils-34c6eda8.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-1e5fd21a.js";import"./ownerDocument-613eb639.js";import"./useControlled-be22aa93.js";import"./useEventCallback-65e61675.js";import"./useIsFocusVisible-bbf13f29.js";import"./createSvgIcon-075f7759.js";import"./SvgIcon-147e032d.js";import"./ButtonBase-bf986186.js";import"./emotion-react.browser.esm-06bfa7ab.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./assertThisInitialized-081f9914.js";import"./Avatar-fd80ae14.js";import"./ErrorOutlined-0f626467.js";import"./SynapseConstants-1ebc8be6.js";import"./getEndpoint-ac94413e.js";import"./Link-255af83b.js";import"./Typography-fa1f2f14.js";import"./extendSxProp-8b7baf65.js";import"./Button-5637ed55.js";import"./createWithBsPrefix-0fdadc7a.js";import"./index-58d3fd43.js";import"./isArray-5e3f9107.js";import"./dayjs.min-8d4ef725.js";import"./CheckCircleTwoTone-64ad58ef.js";import"./inputBaseClasses-29b56ac5.js";import"./Fade-3d404265.js";const ur={title:"Components/ErrorChip",component:p,render:i=>e(A,{children:n=>e(E,{synapseContext:{...n,accessToken:i.isAuthenticated?n.accessToken||"fake token":void 0},children:e(p,{...i})})})},N=new s(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:N,isAuthenticated:!1}},y=new s(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:y,isAuthenticated:!0}},S=new s(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}};var m,a,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(l=t.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};const hr=["NotSignedIn","NoAccess","NotFound"];export{o as NoAccess,t as NotFound,r as NotSignedIn,hr as __namedExportsOrder,ur as default};
//# sourceMappingURL=ErrorChip.stories-504e3589.js.map
