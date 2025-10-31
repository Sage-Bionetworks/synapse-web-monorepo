import{a2 as o,w as p,a3 as a}from"./iframe-DkJtXMGY.js";import{A as m}from"./AclEditor-BwJwsBCU.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-q9HR-Gu6.js";import"./useDebouncedEffect-CbC68BJS.js";import"./use-deep-compare-effect.esm-aTxZvlU9.js";import"./uniq-BY50vU0D.js";import"./without-BNFOWFRc.js";import"./UserBadge-D10KGNES.js";import"./SkeletonTable-Boy2sN_O.js";import"./MenuItem-__VZzdvD.js";import"./Card-BrdkgB5x.js";import"./Chip-C5Eg6zQf.js";import"./Select-aab027f3.esm-BlNTofID.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-yADcIefg.js";import"./TeamBadge-Cz3XVBkB.js";import"./SkeletonButton-Wvy1B_g_.js";import"./SkeletonInlineBlock-BZs9NYqd.js";import"./SkeletonParagraph-D2M_qyIo.js";import"./IconSvgButton-DDBMYQHe.js";import"./FormControlLabel-BtRUWfK0.js";import"./Checkbox-1S1SsZEO.js";import"./SwitchBase-LVCk0Af2.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:m,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:a,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
