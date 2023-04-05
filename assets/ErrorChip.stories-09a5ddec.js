import{j as e}from"./jsx-runtime-ad672792.js";import{E as p}from"./ErrorChip-b3966f39.js";import{ag as A,S as i}from"./SynapseContext-3e3caab0.js";import{F as E}from"./FullContextProvider-3c637ca7.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./Clear-b8710472.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./styled-6c4f550e.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./useTheme-189ee79b.js";import"./isHostComponent-fa76b8d9.js";import"./index-96c5f47c.js";import"./useForkRef-dd8a6e5c.js";import"./TransitionGroupContext-a2b6e27b.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./SvgIcon-df0486e2.js";import"./ButtonBase-b1ee19a8.js";import"./emotion-react.browser.esm-4670931c.js";import"./assertThisInitialized-081f9914.js";import"./Avatar-8393e502.js";import"./IconSvg-26203fb4.js";import"./isArray-5e3f9107.js";import"./getEndpoint-5374ab4d.js";import"./SynapseConstants-2132700c.js";import"./Box-15541d3d.js";import"./extendSxProp-14561297.js";import"./Button-00c0a018.js";import"./Button-7d415009.js";import"./Alert-84d62a08.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-1aeead00.js";import"./index-4d501b15.js";import"./Typography-fd50ec33.js";import"./Fade-6da65713.js";import"./merge-274ac3ee.js";import"./_initCloneObject-cbf00e09.js";import"./_MapCache-4edfdfc9.js";import"./_baseTimes-8cccc40f.js";import"./_isIndex-af14b756.js";import"./_baseFor-d254fa1e.js";import"./isArrayLikeObject-888efb19.js";import"./_isIterateeCall-8ff71de2.js";import"./queryClient-c21a3f8e.js";import"./mutation-608761db.js";import"./infiniteQueryBehavior-47f31aa3.js";const Ar={title:"Components/ErrorChip",component:p,render:s=>e(A,{children:n=>e(E,{synapseContext:{...n,accessToken:s.isAuthenticated?n.accessToken||"fake token":void 0},children:e(p,{...s})})})},N=new i(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:N,isAuthenticated:!1}},y=new i(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:y,isAuthenticated:!0}},S=new i(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}};var m,a,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(l=t.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};const Er=["NotSignedIn","NoAccess","NotFound"];export{o as NoAccess,t as NotFound,r as NotSignedIn,Er as __namedExportsOrder,Ar as default};
//# sourceMappingURL=ErrorChip.stories-09a5ddec.js.map
