import{a3 as o,w as p,a4 as a}from"./iframe-CQAvee5F.js";import{A as m}from"./AclEditor-iMU7V6kH.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-DDso0pcZ.js";import"./useDebouncedEffect-CJcFQkuy.js";import"./use-deep-compare-effect.esm-DC102v78.js";import"./uniq-D0pi3ffb.js";import"./without-BcXQhdk6.js";import"./UserBadge-ChS5ZWfy.js";import"./SkeletonTable-n8bsuBVZ.js";import"./MenuItem-CHCA8JKh.js";import"./Card-DLy0NJ-o.js";import"./Chip-yjRG6i6C.js";import"./Select-aab027f3.esm-DwycKIAM.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-BGqT0PHu.js";import"./TeamBadge-BC0DBUSc.js";import"./SkeletonButton-BbTQsPlY.js";import"./SkeletonInlineBlock-QfDnwJMw.js";import"./SkeletonParagraph-BHKzvjmx.js";import"./IconSvgButton-CruNpS3T.js";import"./FormControlLabel-CfYT5tSK.js";import"./Checkbox-B9l7tm8b.js";import"./SwitchBase-4nAtzau0.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:m,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:a,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
