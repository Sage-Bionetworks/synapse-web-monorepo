import{j as o,P as d,J as u,K as c}from"./iframe-QjK0KVVQ.js";import{M as p}from"./MarkdownSynapse-CdDnnKnp.js";import{R as i,a as e}from"./RequirementItem-DMvxXCab.js";import"./index-Chi_LkuB.js";import"./SkeletonButton-Cyy2rcJm.js";import"./SkeletonInlineBlock-B3R_0ID9.js";import"./SkeletonTable-tKivh0dA.js";import"./SkeletonParagraph-Ca34h4bh.js";import"./LockTwoTone-CPq6gFhi.js";const I={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:i,argTypes:{status:{control:"select",options:[...new Set(Object.values(e))]}},tags:["autodocs"],render:m=>o.jsx(d,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:o.jsx(i,{...m,children:o.jsx(p,{markdown:u.markdown})})})},t={args:{status:e.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{c("Learn More clicked")}}]}},a={args:{status:e.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{c("Learn More clicked")}}]}},s={args:{status:e.LOADING,actions:[]}},r={args:{status:e.COMPLETE,actions:[]}},n={args:{status:e.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{c("Accept terms clicked")}}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.LOADING,
    actions: []
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.COMPLETE,
    actions: []
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const q=["Complete","Pending","Loading","NoActions","Locked"];export{t as Complete,s as Loading,n as Locked,r as NoActions,a as Pending,q as __namedExportsOrder,I as default};
