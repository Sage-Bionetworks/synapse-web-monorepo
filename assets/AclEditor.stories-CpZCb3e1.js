import{a3 as o,w as p,a4 as a}from"./iframe-C7HGvOUl.js";import{A as m}from"./AclEditor-D71qCxGm.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-DoKqiuz-.js";import"./useDebouncedEffect-uJhF23_X.js";import"./use-deep-compare-effect.esm-gDonvwry.js";import"./uniq-CSsZv0Eo.js";import"./without-BB2cuDg0.js";import"./UserBadge-Bj0YRfAa.js";import"./SkeletonTable-COY9zVYr.js";import"./MenuItem-CIAKLYgH.js";import"./Card-C57WWo12.js";import"./Chip-DuMKcKGN.js";import"./Select-aab027f3.esm-CAVdbtFx.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-BdVhGHd0.js";import"./TeamBadge-DN5YD07B.js";import"./SkeletonButton-CkeZGoyu.js";import"./SkeletonInlineBlock-CsElFq45.js";import"./SkeletonParagraph-CttTbUME.js";import"./IconSvgButton-DUeTQ8ta.js";import"./FormControlLabel-DMzFAHMb.js";import"./Checkbox-bhYdc4KW.js";import"./SwitchBase-BdB58K7f.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:m,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:a,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
