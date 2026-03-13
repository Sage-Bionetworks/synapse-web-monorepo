import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-DYqeQvAZ.js";import{A as i}from"./AccessRequirementAclEditor-QtQMopkX.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CIXmzSk2.js";import"./index-DB86q32y.js";import"./_baseOrderBy-CWcFLVxH.js";import"./_baseIteratee-CwqQCSfn.js";import"./_baseMap-BWiulIsu.js";import"./_baseEach-_LxsRH98.js";import"./useInfiniteQuery-SfBiKEGU.js";import"./AclEditor-CIHJQHeZ.js";import"./UserSearchBoxV2-C7Q6rX-d.js";import"./useDebouncedEffect-Bqmyfrfk.js";import"./use-deep-compare-effect.esm-nCiz3OyP.js";import"./uniq-CRer6ENb.js";import"./without-Cjtl0Rqb.js";import"./UserBadge-DTP3ILNA.js";import"./useUserBundle-DULvj39Z.js";import"./SkeletonTable-tbDH2wnj.js";import"./MenuItem-Cqn5rY2B.js";import"./Card-6CbmSVLL.js";import"./Chip-40aQ4DbO.js";import"./Select-aab027f3.esm-d6133iNI.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-D-OfYvzt.js";import"./TeamBadge-DpOqiH_U.js";import"./SkeletonButton-bpCoMqPJ.js";import"./SkeletonInlineBlock-CAM6iPYb.js";import"./SkeletonParagraph-CY2Bzkjl.js";import"./IconSvgButton-1BbBMsMw.js";import"./FormControlLabel-DILoqHH7.js";import"./Checkbox-C0Xf7xe7.js";import"./SwitchBase-BNafcXUF.js";import"./useUpdateAcl-i6HErVRi.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID)
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: '9602671'
  },
  parameters: {
    stack: 'development'
  }
}`,...t.parameters?.docs?.source}}};const ee=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,ee as __namedExportsOrder,$ as default};
