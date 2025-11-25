import{a3 as o,w as p,a4 as a}from"./iframe-BwBHmtLn.js";import{A as m}from"./AclEditor-C4Icie9t.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-DaWL0FRE.js";import"./useDebouncedEffect-DpMVCPWi.js";import"./use-deep-compare-effect.esm-B5pmyylT.js";import"./uniq-VDdpS32t.js";import"./without-DVxAInET.js";import"./UserBadge-BD5Fxkmm.js";import"./SkeletonTable-CwWx9Hg9.js";import"./MenuItem-CkdRDM7m.js";import"./Card-CWfuhv8s.js";import"./Chip-DeqIQwfV.js";import"./Select-aab027f3.esm-DjpxoWsa.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-DZFiBwXk.js";import"./TeamBadge-BVqTdxjR.js";import"./SkeletonButton-BTCaeByw.js";import"./SkeletonInlineBlock-ZHAchM_I.js";import"./SkeletonParagraph-CvcuNn1V.js";import"./IconSvgButton-RsII1qst.js";import"./FormControlLabel-Bd9SHTvK.js";import"./Checkbox-CrrPL_ha.js";import"./SwitchBase-DfrfkHUB.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:m,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:a,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    resourceAccessList: [{
      principalId: MOCK_USER_ID,
      accessType: [ACCESS_TYPE.REVIEW_SUBMISSIONS]
    }, {
      principalId: MOCK_TEAM_ID,
      accessType: [ACCESS_TYPE.EXEMPTION_ELIGIBLE]
    }]
  },
  parameters: {
    stack: 'mock'
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const v=["Demo"];export{r as Demo,v as __namedExportsOrder,k as default};
