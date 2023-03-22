import{j as e}from"./jsx-runtime-670450c2.js";import{E as p}from"./ErrorChip-ea281664.js";import{_ as A,S as E,j as s}from"./SynapseContext-0ccf0cec.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./Clear-10ac5e31.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./styled-233e7b47.js";import"./extends-98964cd2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./useTheme-4a3c7035.js";import"./isHostComponent-fa76b8d9.js";import"./index-96c5f47c.js";import"./useForkRef-dd8a6e5c.js";import"./TransitionGroupContext-a2b6e27b.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./SvgIcon-50b3abbe.js";import"./ButtonBase-b06d7823.js";import"./emotion-react.browser.esm-f6f061a3.js";import"./assertThisInitialized-081f9914.js";import"./Avatar-9454d3b3.js";import"./IconSvg-4b1d1d87.js";import"./Fade-f26d100e.js";import"./isArray-5e3f9107.js";import"./inheritsLoose-54b40604.js";import"./getEndpoint-5374ab4d.js";import"./SynapseConstants-41b9b1f3.js";import"./Box-accd0a45.js";import"./extendSxProp-797c7f85.js";import"./Button-fe14b0ec.js";import"./Button-dd6fc6af.js";import"./Alert-b64c11d0.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-9409c681.js";import"./divWithClassName-ed69a318.js";import"./index-4d501b15.js";const nr={title:"Components/ErrorChip",component:p,render:i=>e(A,{children:n=>e(E,{synapseContext:{...n,accessToken:i.isAuthenticated?n.accessToken||"fake token":void 0},children:e(p,{...i})})})},N=new s(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:N,isAuthenticated:!1}},S=new s(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}},l=new s(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:l,isAuthenticated:!0}};var a,m,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NotSignedInError,
    isAuthenticated: false
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,u,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NoAccessError,
    isAuthenticated: true
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,x,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NotFoundError,
    isAuthenticated: true
  }
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const pr=["NotSignedIn","NoAccess","NotFound"];export{o as NoAccess,t as NotFound,r as NotSignedIn,pr as __namedExportsOrder,nr as default};
//# sourceMappingURL=ErrorChip.stories-a16cd0e6.js.map
