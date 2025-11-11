import{a3 as o,w as p,a4 as a}from"./iframe-Dc6hcGlJ.js";import{A as m}from"./AclEditor-Dr6-5lXx.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-Du9brpZJ.js";import"./useDebouncedEffect-Dcl0CwkH.js";import"./use-deep-compare-effect.esm-DAxrCKuX.js";import"./uniq-CmgWG2RM.js";import"./without-Csfr21Xn.js";import"./UserBadge-H-ZUUhh9.js";import"./SkeletonTable-C5xUm_Zr.js";import"./MenuItem-CX3e5zAM.js";import"./Card-XI7C-k8U.js";import"./Chip-DqtQxgW8.js";import"./Select-aab027f3.esm-CzWM7AzP.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-DJhSh2pf.js";import"./TeamBadge-CRyOzZ5j.js";import"./SkeletonButton-BXWOXl9N.js";import"./SkeletonInlineBlock-CGB-MCvO.js";import"./SkeletonParagraph-BA9ytrTV.js";import"./IconSvgButton-B8KxlzYb.js";import"./FormControlLabel-Bn_oKwrc.js";import"./Checkbox-B_hMZXjl.js";import"./SwitchBase-BDfbjiC7.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:m,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:a,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
