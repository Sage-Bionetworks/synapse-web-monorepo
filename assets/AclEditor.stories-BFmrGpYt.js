import{a3 as o,w as p,a4 as a}from"./iframe-Dz8P-dI2.js";import{A as m}from"./AclEditor-X4WsoZdt.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-BtghZ0wZ.js";import"./useDebouncedEffect-DK49tbEt.js";import"./use-deep-compare-effect.esm-Dnjq1VY6.js";import"./uniq-B4CkjmWE.js";import"./without-N0-FNHx8.js";import"./UserBadge-Bv1QVAAu.js";import"./SkeletonTable-s01CyjIZ.js";import"./MenuItem-MnHW3c-e.js";import"./Card-BxGgGoYt.js";import"./Chip-Cj9us3E8.js";import"./Select-aab027f3.esm-ArI-hnlb.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-8D3EJwIA.js";import"./TeamBadge-CCJFUw_x.js";import"./SkeletonButton-2qZCOB9B.js";import"./SkeletonInlineBlock-DU5NVTXg.js";import"./SkeletonParagraph-DjiISGk9.js";import"./IconSvgButton-D2E-Itiz.js";import"./FormControlLabel-U_2oimB5.js";import"./Checkbox-B47vyOHs.js";import"./SwitchBase-B9lWykMd.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:m,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:a,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
