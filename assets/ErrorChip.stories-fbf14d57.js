import{j as e}from"./jsx-runtime-670450c2.js";import{E as p}from"./ErrorChip-557d4e66.js";import{_ as A,S as E,j as s}from"./SynapseContext-cd269b58.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./Clear-13f521c8.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./extends-98964cd2.js";import"./styled-8b700d41.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./useTheme-258690b5.js";import"./isHostComponent-957231d5.js";import"./index-96c5f47c.js";import"./TransitionGroupContext-bc04bc47.js";import"./useForkRef-82d2a376.js";import"./inheritsLoose-c82a83d4.js";import"./SvgIcon-7ba89f58.js";import"./ButtonBase-9616f7af.js";import"./emotion-react.browser.esm-347d859b.js";import"./assertThisInitialized-081f9914.js";import"./Avatar-6ee76739.js";import"./IconSvg-6779e461.js";import"./divWithClassName-7f457938.js";import"./Button-7d415009.js";import"./setPrototypeOf-0bb37fbe.js";import"./createWithBsPrefix-e09f51dd.js";import"./index-4d501b15.js";import"./Fade-35b87439.js";import"./isArray-5e3f9107.js";import"./getEndpoint-5374ab4d.js";import"./SynapseConstants-41b9b1f3.js";import"./Box-cd1375f8.js";import"./extendSxProp-d3cbd832.js";import"./Button-5067e877.js";import"./Alert-b65834f6.js";import"./hook-c05d8d9f.js";const sr={title:"Components/ErrorChip",component:p,render:n=>e(A,{children:i=>e(E,{synapseContext:{...i,accessToken:n.isAuthenticated?i.accessToken||"fake token":void 0},children:e(p,{...n})})})},N=new s(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:N,isAuthenticated:!1}},S=new s(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}},l=new s(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:l,isAuthenticated:!0}};var a,c,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NotSignedInError,
    isAuthenticated: false
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,u,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const nr=["NotSignedIn","NoAccess","NotFound"];export{o as NoAccess,t as NotFound,r as NotSignedIn,nr as __namedExportsOrder,sr as default};
//# sourceMappingURL=ErrorChip.stories-fbf14d57.js.map
