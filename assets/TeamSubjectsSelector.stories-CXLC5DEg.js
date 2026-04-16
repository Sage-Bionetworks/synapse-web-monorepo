import{R as c,r as p,j as e,P as m}from"./iframe-CDo31VQT.js";import{T as s}from"./TeamSubjectsSelector-b_zhLj1L.js";import"./index-Chi_LkuB.js";import"./useTeam-C84Ux9Eg.js";import"./TeamBadge-BKkuj7BD.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,T={title:"Governance/TeamSubjectsSelector",component:s,parameters:{stack:"development"},render:function(r){const[a,o]=p.useState(r.subjects);return e.jsx(e.Fragment,{children:e.jsx(m,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(s,{subjects:a,onUpdate:n=>o(n)})})})}},t={args:{subjects:[{id:"3429759",type:c.TEAM}],onUpdate:d()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    subjects: [{
      id: '3429759',
      type: RestrictableObjectType.TEAM
    }],
    onUpdate: fn()
  }
}`,...t.parameters?.docs?.source}}};const S=["Demo"];export{t as Demo,S as __namedExportsOrder,T as default};
