import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-D92BdoG9.js";import{A as i}from"./AccessRequirementAclEditor-BruQ_Cgg.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-ubIn3UUp.js";import"./index-CYdrGrZN.js";import"./_baseOrderBy-Bz-jU8fr.js";import"./_baseIteratee-CHqDSNyX.js";import"./_baseMap-PntIsZSQ.js";import"./_baseEach-Ot8mX9XG.js";import"./useQueries-B2gtnRyW.js";import"./useInfiniteQuery-wn2juHd0.js";import"./AclEditor-Daz6zYgz.js";import"./useRealmPrincipals-c1OtnzHz.js";import"./UserSearchBoxV2-DCQtQ3zP.js";import"./useDebouncedEffect-D9OyDsvv.js";import"./use-deep-compare-effect.esm-BmxS3Z7I.js";import"./uniq-DjBXqiF7.js";import"./without-DoqBO4f-.js";import"./UserBadge-BNFHqCyR.js";import"./useUserBundle-BBzdm9g8.js";import"./useSuspenseQuery-B_1ZDlRS.js";import"./SkeletonTable-DmBSaFM1.js";import"./MenuItem-BJFdqxGb.js";import"./Card-CM0Ob5QK.js";import"./Chip-CniQq1ch.js";import"./Select-aab027f3.esm-DCi0DAYG.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-FohF2T8N.js";import"./TeamBadge-FuWHFXf_.js";import"./SkeletonButton-DkZdiJnq.js";import"./SkeletonInlineBlock-BoREPhEN.js";import"./SkeletonParagraph-BlcJcRxn.js";import"./IconSvgButton-B3pTtMpY.js";import"./FormControlLabel-lXpCaRp3.js";import"./Checkbox-Dd-GqwcY.js";import"./SwitchBase-C-CWJzfm.js";import"./useUpdateAcl-DrcX9XRj.js";const se={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const te=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,te as __namedExportsOrder,se as default};
