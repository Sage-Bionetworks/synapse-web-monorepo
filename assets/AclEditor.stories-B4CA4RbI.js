import{a3 as o,w as p,a4 as a}from"./iframe-0_E6QA5q.js";import{A as m}from"./AclEditor-3CACB6Lm.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-CvkcmSIf.js";import"./useDebouncedEffect-Ao0Nja3b.js";import"./use-deep-compare-effect.esm-DEjD50c5.js";import"./uniq-BJz7K6kn.js";import"./without-CNgVXslo.js";import"./UserBadge-KfQC8GAX.js";import"./SkeletonTable-DeeOmUeM.js";import"./MenuItem-CAzHj_Ft.js";import"./Card-BUNvL0MS.js";import"./Chip-CGQIXmoB.js";import"./Select-aab027f3.esm-7hivo9pn.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-DMPpIigh.js";import"./TeamBadge-CD1foUec.js";import"./SkeletonButton-B7g5trXc.js";import"./SkeletonInlineBlock-C6wGBfZc.js";import"./SkeletonParagraph--7EvjUiD.js";import"./IconSvgButton-CA2C6z4f.js";import"./FormControlLabel-CaOULE1P.js";import"./Checkbox-CKD6Zm0i.js";import"./SwitchBase-D-sUOWXD.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:m,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:a,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
