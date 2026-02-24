import{R as c,r as p,j as e,P as m}from"./iframe-but96Lfh.js";import{T as s}from"./TeamSubjectsSelector-mQa5n0mY.js";import"./index-Chi_LkuB.js";import"./useTeam-oWkuzgAq.js";import"./TeamBadge-B17fGlRB.js";import"./useRealmPrincipals-aJ_zfM8u.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,S={title:"Governance/TeamSubjectsSelector",component:s,parameters:{stack:"development"},render:function(r){const[a,o]=p.useState(r.subjects);return e.jsx(e.Fragment,{children:e.jsx(m,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(s,{subjects:a,onUpdate:n=>o(n)})})})}},t={args:{subjects:[{id:"3429759",type:c.TEAM}],onUpdate:i()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    subjects: [{
      id: '3429759',
      type: RestrictableObjectType.TEAM
    }],
    onUpdate: fn()
  }
}`,...t.parameters?.docs?.source}}};const _=["Demo"];export{t as Demo,_ as __namedExportsOrder,S as default};
