import{a3 as o,w as t,a4 as s}from"./iframe-CJi55ERg.js";import{A as i}from"./AclEditor-BmHwoj4K.js";import"./index-Chi_LkuB.js";import"./UserSearchBoxV2-uh-pUCfN.js";import"./useDebouncedEffect-DDbCKJnK.js";import"./use-deep-compare-effect.esm-B3Jc5xfm.js";import"./uniq-BXrBlj2h.js";import"./without-CjAIne9P.js";import"./UserBadge-Dffj96fH.js";import"./useUserBundle-B5WLYqAD.js";import"./useSuspenseQuery-Prdg1nCF.js";import"./SkeletonTable-DqghlvE9.js";import"./MenuItem-CXmp431F.js";import"./Card-C_RZE_cg.js";import"./Chip-DELPMDmB.js";import"./Select-aab027f3.esm-DC3Q4JiN.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DK0Y5dqS.js";import"./TeamBadge-Drq_7yhd.js";import"./SkeletonButton-Dh0pWoWT.js";import"./SkeletonInlineBlock-d0W0oi9e.js";import"./SkeletonParagraph-Bn6jXz5y.js";import"./IconSvgButton-8U5dlhVH.js";import"./FormControlLabel-O5Pr_avL.js";import"./Checkbox-DAAWAHE0.js";import"./SwitchBase-1IBRQWl4.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:t,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:s,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
