import{R as c,r as p,j as e,P as m}from"./iframe-BFtw_QUH.js";import{T as s}from"./TeamSubjectsSelector-BvBFS01O.js";import"./index-Chi_LkuB.js";import"./useTeam-BpR1EecZ.js";import"./TeamBadge-B7N-YTMh.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,T={title:"Governance/TeamSubjectsSelector",component:s,parameters:{stack:"development"},render:function(r){const[a,o]=p.useState(r.subjects);return e.jsx(e.Fragment,{children:e.jsx(m,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(s,{subjects:a,onUpdate:n=>o(n)})})})}},t={args:{subjects:[{id:"3429759",type:c.TEAM}],onUpdate:d()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    subjects: [{
      id: '3429759',
      type: RestrictableObjectType.TEAM
    }],
    onUpdate: fn()
  }
}`,...t.parameters?.docs?.source}}};const S=["Demo"];export{t as Demo,S as __namedExportsOrder,T as default};
