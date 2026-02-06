import{a4 as o,w as t,a5 as s}from"./iframe-Ya-g_qay.js";import{A as i}from"./AclEditor-f4bYNpmJ.js";import"./index-Chi_LkuB.js";import"./UserSearchBoxV2-DvibNAE2.js";import"./useDebouncedEffect-CN-niWjm.js";import"./use-deep-compare-effect.esm-MAGuoYEF.js";import"./uniq-06ZLqp-Y.js";import"./without-BAVy4GBx.js";import"./UserBadge-BKdC7vtq.js";import"./useUserBundle-CPxLoWOx.js";import"./useSuspenseQuery-ajSSmE51.js";import"./SkeletonTable-gSh9dXdS.js";import"./MenuItem-BuXikWov.js";import"./Card-ZIbsqxVQ.js";import"./Chip-CWV3Xi6n.js";import"./Select-aab027f3.esm-CAzAUSfc.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BpgjzD55.js";import"./TeamBadge-H-bZaQzx.js";import"./SkeletonButton-WGw1QxaV.js";import"./SkeletonInlineBlock-BhpPIW12.js";import"./SkeletonParagraph-B7nhBI0o.js";import"./IconSvgButton-C2pSjmnN.js";import"./FormControlLabel-D1Z2Cjqs.js";import"./Checkbox-iublSEO5.js";import"./SwitchBase-CIlRr3Ri.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:t,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:s,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
