import{a3 as o,w as p,a4 as a}from"./iframe-LzC64RFw.js";import{A as m}from"./AclEditor-DzM9OJfe.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-CA1b-8JK.js";import"./useDebouncedEffect-BCiJ5I7r.js";import"./use-deep-compare-effect.esm-pDleGhR2.js";import"./uniq-BefGSpfh.js";import"./without-6fmx_9-y.js";import"./UserBadge-DAx78NA6.js";import"./SkeletonTable-B5BlJQjs.js";import"./MenuItem-D_lpwZtj.js";import"./Card-N0RtOQAA.js";import"./Chip-Ct1mISe7.js";import"./Select-aab027f3.esm-xng_5ekx.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-zWtNR6B6.js";import"./TeamBadge-CHlfG-eA.js";import"./SkeletonButton-CdCi0Vv2.js";import"./SkeletonInlineBlock-BId9Rt5h.js";import"./SkeletonParagraph-ClnTvL1Q.js";import"./IconSvgButton-DasnPpX_.js";import"./FormControlLabel-DdwLBMPg.js";import"./Checkbox-DFkw0--6.js";import"./SwitchBase-BcH_m2kQ.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:m,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:a,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
