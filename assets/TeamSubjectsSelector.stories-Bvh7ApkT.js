import{R as c,r as p,j as e,P as m}from"./iframe-05B79XZ4.js";import{T as s}from"./TeamSubjectsSelector-CRJ1hSCu.js";import"./index-Chi_LkuB.js";import"./useTeam-lV1SSuUd.js";import"./TeamBadge-CO8-8NXt.js";import"./useRealmPrincipals-CjyVyGCP.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,S={title:"Governance/TeamSubjectsSelector",component:s,parameters:{stack:"development"},render:function(r){const[a,o]=p.useState(r.subjects);return e.jsx(e.Fragment,{children:e.jsx(m,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(s,{subjects:a,onUpdate:n=>o(n)})})})}},t={args:{subjects:[{id:"3429759",type:c.TEAM}],onUpdate:i()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    subjects: [{
      id: '3429759',
      type: RestrictableObjectType.TEAM
    }],
    onUpdate: fn()
  }
}`,...t.parameters?.docs?.source}}};const _=["Demo"];export{t as Demo,_ as __namedExportsOrder,S as default};
