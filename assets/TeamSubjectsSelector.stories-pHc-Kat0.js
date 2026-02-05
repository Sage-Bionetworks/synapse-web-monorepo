import{R as c,r as p,j as e,P as m}from"./iframe-D5_h0PF9.js";import{T as s}from"./TeamSubjectsSelector-PerZpkCO.js";import"./index-Chi_LkuB.js";import"./useTeam-B4djKXjT.js";import"./TeamBadge-DuR7sYdc.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,T={title:"Governance/TeamSubjectsSelector",component:s,parameters:{stack:"development"},render:function(r){const[a,o]=p.useState(r.subjects);return e.jsx(e.Fragment,{children:e.jsx(m,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(s,{subjects:a,onUpdate:n=>o(n)})})})}},t={args:{subjects:[{id:"3429759",type:c.TEAM}],onUpdate:d()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    subjects: [{
      id: '3429759',
      type: RestrictableObjectType.TEAM
    }],
    onUpdate: fn()
  }
}`,...t.parameters?.docs?.source}}};const S=["Demo"];export{t as Demo,S as __namedExportsOrder,T as default};
