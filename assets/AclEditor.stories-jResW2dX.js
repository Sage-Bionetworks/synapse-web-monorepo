import{a3 as o,w as p,a4 as m}from"./iframe-DslgKmO_.js";import{A as a}from"./AclEditor-CudN5IBI.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-2Od06OU0.js";import"./useDebouncedEffect-BQp64cO4.js";import"./use-deep-compare-effect.esm-BXsVt7_r.js";import"./uniq-CbOJCRU-.js";import"./without-B0NuDHbk.js";import"./UserBadge-BanEe0Rj.js";import"./useUserBundle-tammJvdO.js";import"./useSuspenseQuery-x1rZi4HF.js";import"./SkeletonTable-B6rYfEE0.js";import"./MenuItem-CTidO0-V.js";import"./Card-CiAcqMR5.js";import"./Chip-BUIb0Z0i.js";import"./Select-aab027f3.esm-mE7rcB8J.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-Dl67vs4W.js";import"./TeamBadge-1DifeGiP.js";import"./SkeletonButton-CrnZOVdp.js";import"./SkeletonInlineBlock-iMtCHDfe.js";import"./SkeletonParagraph-CWIA3BjK.js";import"./IconSvgButton-qgC6Wt15.js";import"./FormControlLabel-BxxRdktG.js";import"./Checkbox-C0eLrhG9.js";import"./SwitchBase-DhgbMpez.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,K={title:"Synapse/ACL Editor",component:a,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:m,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const b=["Demo"];export{r as Demo,b as __namedExportsOrder,K as default};
