import{a3 as o,w as p,a4 as a}from"./iframe-BbBIbNbJ.js";import{A as m}from"./AclEditor-1Lcld-8j.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-TygQWuxq.js";import"./useDebouncedEffect-DCfbw7rb.js";import"./use-deep-compare-effect.esm-DK8jsI9o.js";import"./uniq-Ncn24Eei.js";import"./without-BHRnFZwV.js";import"./UserBadge-h7JHA6Ak.js";import"./SkeletonTable-DeosQDQ2.js";import"./MenuItem-C_GiViVf.js";import"./Card-BSNHgx80.js";import"./Chip-BGbET8g7.js";import"./Select-aab027f3.esm-baO3FIkz.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-DLRC_B-r.js";import"./TeamBadge-CMR_5LRt.js";import"./SkeletonButton-C0rZfSx5.js";import"./SkeletonInlineBlock-DVbB2SaF.js";import"./SkeletonParagraph-Cre22j3C.js";import"./IconSvgButton-DiGFfIUN.js";import"./FormControlLabel-xeZuQ2kI.js";import"./Checkbox-ChI1OoXu.js";import"./SwitchBase-Oj29ESmW.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:m,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:a,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
