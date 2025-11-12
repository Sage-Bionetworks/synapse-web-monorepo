import{j as o,P,I as x,J as c}from"./iframe-CvY4ZvuJ.js";import{M as O}from"./MarkdownSynapse-DLSzoPS4.js";import{R as i,a as e}from"./RequirementItem-CLjBJN9w.js";import"./index-r8ZA1smB.js";import"./SkeletonButton-tyjQjXOk.js";import"./SkeletonInlineBlock-CuvHcddn.js";import"./SkeletonTable-dMQ-mK3Q.js";import"./SkeletonParagraph-C7GW6bi4.js";import"./LockTwoTone-C5NuonME.js";const f={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:i,argTypes:{status:{control:"select",options:[...new Set(Object.values(e))]}},tags:["autodocs"],render:A=>o.jsx(P,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:o.jsx(i,{...A,children:o.jsx(O,{markdown:x.markdown})})})},t={args:{status:e.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{c("Learn More clicked")}}]}},a={args:{status:e.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{c("Learn More clicked")}}]}},s={args:{status:e.LOADING,actions:[]}},r={args:{status:e.COMPLETE,actions:[]}},n={args:{status:e.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{c("Accept terms clicked")}}]}};var m,d,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.COMPLETE,
    actions: [{
      variant: 'outlined',
      children: 'Learn More',
      onClick: () => {
        displayToast('Learn More clicked');
      }
    }]
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,l,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.PENDING,
    actions: [{
      variant: 'outlined',
      children: 'Learn More',
      onClick: () => {
        displayToast('Learn More clicked');
      }
    }]
  }
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var L,k,C;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.LOADING,
    actions: []
  }
}`,...(C=(k=s.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var M,E,I;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.COMPLETE,
    actions: []
  }
}`,...(I=(E=r.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var R,S,q;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.LOCKED,
    actions: [{
      variant: 'outlined',
      children: 'Accept terms',
      onClick: () => {
        displayToast('Accept terms clicked');
      }
    }]
  }
}`,...(q=(S=n.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};const K=["Complete","Pending","Loading","NoActions","Locked"];export{t as Complete,s as Loading,n as Locked,r as NoActions,a as Pending,K as __namedExportsOrder,f as default};
