import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-BMyGeve0.js";import{A as c}from"./AccessRequirementAclEditor-mq5gi8AF.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-YPXOrsHS.js";import"./index-D4olMQqi.js";import"./_baseOrderBy-M6YhyYJW.js";import"./_baseIteratee-DmZh1ikp.js";import"./_baseMap-7niBu5kX.js";import"./_baseEach-Dz2o9pba.js";import"./useQueries-C9hmeEBs.js";import"./useInfiniteQuery-TUyJsnEQ.js";import"./AclEditor-5-jlTClu.js";import"./UserSearchBoxV2-CsH1PO8a.js";import"./useDebouncedEffect-FBgA56S7.js";import"./use-deep-compare-effect.esm-YcNwKKf6.js";import"./uniq-B7AesGtx.js";import"./without-BVpbMo0D.js";import"./UserBadge-BteVYeu4.js";import"./SkeletonTable-DlFasnP9.js";import"./MenuItem-BW_PF2Vf.js";import"./Card-CCjI6n3F.js";import"./Chip-7xwsG1n1.js";import"./Select-aab027f3.esm-BQTpensv.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-CQka3CPT.js";import"./TeamBadge-zzeQUSKQ.js";import"./SkeletonButton-Bk8uTKNs.js";import"./SkeletonInlineBlock-C3rHjTF4.js";import"./SkeletonParagraph-B_kTspc1.js";import"./IconSvgButton-CGFZscZx.js";import"./FormControlLabel-lPD3-OXR.js";import"./Checkbox-CcvRFkl_.js";import"./SwitchBase-ioZOas69.js";import"./useUpdateAcl-DsXnUJey.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var E,R,u;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID)
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(u=(R=s.parameters)==null?void 0:R.docs)==null?void 0:u.source}}};var A,_,g;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    accessRequirementId: '9602671'
  },
  parameters: {
    stack: 'development'
  }
}`,...(g=(_=t.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const ce=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,ce as __namedExportsOrder,ie as default};
