import{n as e}from"./chunk-jRWAZmH_.js";import{It as t,Mv as n,Nt as r,bx as i,jS as a,vn as o,yn as s}from"./iframe-yA-6NPGx.js";import{n as c,t as l}from"./MarkdownSynapse-xhKxFKT9.js";import{i as u,n as d,r as f,t as p}from"./RequirementItem-Cp930SsF.js";var m,h,g,_,v,y,b,x;e((()=>{r(),n(),c(),s(),u(),d(),m=a(),h={title:`Governance/Data Access Request Flow/Requirements/RequirementItem`,component:p,argTypes:{status:{control:`select`,options:[...new Set(Object.values(f))]}},tags:[`autodocs`],render:e=>(0,m.jsx)(i,{sx:{p:5,margin:`auto`,maxWidth:`700px`},children:(0,m.jsx)(p,{...e,children:(0,m.jsx)(l,{markdown:t.markdown})})})},g={args:{status:f.COMPLETE,actions:[{variant:`outlined`,children:`Learn More`,onClick:()=>{o(`Learn More clicked`)}}]}},_={args:{status:f.PENDING,actions:[{variant:`outlined`,children:`Learn More`,onClick:()=>{o(`Learn More clicked`)}}]}},v={args:{status:f.LOADING,actions:[]}},y={args:{status:f.COMPLETE,actions:[]}},b={args:{status:f.LOCKED,actions:[{variant:`outlined`,children:`Accept terms`,onClick:()=>{o(`Accept terms clicked`)}}]}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.LOADING,
    actions: []
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.COMPLETE,
    actions: []
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Complete`,`Pending`,`Loading`,`NoActions`,`Locked`]}))();export{g as Complete,v as Loading,b as Locked,y as NoActions,_ as Pending,x as __namedExportsOrder,h as default};