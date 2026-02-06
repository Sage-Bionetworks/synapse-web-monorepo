import{a4 as o,w as t,a5 as s}from"./iframe-CL1UF9wq.js";import{A as i}from"./AclEditor-CwE2Tjy7.js";import"./index-Chi_LkuB.js";import"./UserSearchBoxV2-BaM_QAoS.js";import"./useDebouncedEffect-wae5cBnA.js";import"./use-deep-compare-effect.esm-BsYNt22s.js";import"./uniq-BczlDYoN.js";import"./without-BjgmvzHg.js";import"./UserBadge-CnO0Rkgm.js";import"./useUserBundle-BcHOhtU-.js";import"./useSuspenseQuery-LePCNQBH.js";import"./SkeletonTable-DMqnct0i.js";import"./MenuItem-LKo31BtE.js";import"./Card-B9BQCfND.js";import"./Chip-DXWiT4yo.js";import"./Select-aab027f3.esm-ClNr34_w.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-Cz4F3ETX.js";import"./TeamBadge-QzNTY3sF.js";import"./SkeletonButton-CYgioBCP.js";import"./SkeletonInlineBlock-CJQan7gL.js";import"./SkeletonParagraph-D55VBz6b.js";import"./IconSvgButton-BJLO1Lq0.js";import"./FormControlLabel-CYpBZGqx.js";import"./Checkbox-D2ule7FR.js";import"./SwitchBase-CZN2jDS4.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:t,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:s,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const v=["Demo"];export{r as Demo,v as __namedExportsOrder,k as default};
