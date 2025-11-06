import{a3 as o,w as p,a4 as a}from"./iframe-ynK1h1ZQ.js";import{A as m}from"./AclEditor-C5Ksx42D.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-W8ljJJsJ.js";import"./useDebouncedEffect-BJDhFDWg.js";import"./use-deep-compare-effect.esm-D95pMM68.js";import"./uniq-BBr-0w4l.js";import"./without-CH2SkLb2.js";import"./UserBadge-Czj3y833.js";import"./SkeletonTable-CyuXTNTX.js";import"./MenuItem-AKaHxYJT.js";import"./Card-BdM9B7UJ.js";import"./Chip-9C2a3vCF.js";import"./Select-aab027f3.esm-DBG4C-QL.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-BCM0bza-.js";import"./TeamBadge-Bfx59cif.js";import"./SkeletonButton-Bwr03Ql7.js";import"./SkeletonInlineBlock-C3nmwKQa.js";import"./SkeletonParagraph-DikrQ7Cm.js";import"./IconSvgButton-CUy9kivG.js";import"./FormControlLabel-NofvAP8Q.js";import"./Checkbox-CGzkhN5U.js";import"./SwitchBase-DQA_xSey.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:m,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:a,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
