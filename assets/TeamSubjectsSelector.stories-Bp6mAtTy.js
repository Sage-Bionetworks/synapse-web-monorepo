import{R as d,r as i,j as e,P as u}from"./iframe-Dh27wMqB.js";import{T as s}from"./TeamSubjectsSelector-9VRudB3f.js";import"./index-r8ZA1smB.js";import"./useTeam-BWg9uv7a.js";import"./TeamBadge-DS4QVcyA.js";const{fn:j}=__STORYBOOK_MODULE_TEST__,E={title:"Governance/TeamSubjectsSelector",component:s,parameters:{stack:"development"},render:function(n){const[c,p]=i.useState(n.subjects);return e.jsx(e.Fragment,{children:e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(s,{subjects:c,onUpdate:m=>p(m)})})})}},t={args:{subjects:[{id:"3429759",type:d.TEAM}],onUpdate:j()}};var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    subjects: [{
      id: '3429759',
      type: RestrictableObjectType.TEAM
    }],
    onUpdate: fn()
  }
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const O=["Demo"];export{t as Demo,O as __namedExportsOrder,E as default};
