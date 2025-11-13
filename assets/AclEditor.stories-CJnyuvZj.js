import{a3 as o,w as p,a4 as a}from"./iframe-DIMEjUPI.js";import{A as m}from"./AclEditor-BM0hAcuI.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-B9sTkcA0.js";import"./useDebouncedEffect-DaLmThxq.js";import"./use-deep-compare-effect.esm-CscDK2fK.js";import"./uniq-DbRT9xcm.js";import"./without-djj7wUZg.js";import"./UserBadge-ewXLXfpL.js";import"./SkeletonTable-DUsfALmI.js";import"./MenuItem-BkjCu_eC.js";import"./Card-DixV1MtV.js";import"./Chip-ZO2rUNAI.js";import"./Select-aab027f3.esm-BIth0W2N.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-BN9kFwEt.js";import"./TeamBadge-Bc8o9zsp.js";import"./SkeletonButton-ojrK8vH7.js";import"./SkeletonInlineBlock-Dg59gf8O.js";import"./SkeletonParagraph-DE5PaDJj.js";import"./IconSvgButton-ndEvh0kz.js";import"./FormControlLabel-t4K93ayt.js";import"./Checkbox-B0OQN17i.js";import"./SwitchBase-mG08y7Oi.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:m,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:a,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
