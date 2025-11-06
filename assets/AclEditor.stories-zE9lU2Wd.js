import{a3 as o,w as p,a4 as a}from"./iframe-B9toAp7a.js";import{A as m}from"./AclEditor-BA4azR1H.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-tT9515MJ.js";import"./useDebouncedEffect-D59uftUv.js";import"./use-deep-compare-effect.esm-Cl2Ri4if.js";import"./uniq-fknARjdf.js";import"./without-CD6bULX3.js";import"./UserBadge-BoBObQpt.js";import"./SkeletonTable-Ci-z4Kjh.js";import"./MenuItem-BZ_VEH8F.js";import"./Card-HZPz8khv.js";import"./Chip-CudXwLxi.js";import"./Select-aab027f3.esm-C6BRDs7I.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-P6dVTK0u.js";import"./TeamBadge-u020cHRi.js";import"./SkeletonButton-D4dnbEqI.js";import"./SkeletonInlineBlock-DARsQc6u.js";import"./SkeletonParagraph-DDetyv-w.js";import"./IconSvgButton-WKnP5KDC.js";import"./FormControlLabel-g_NAfEdo.js";import"./Checkbox-C2_MHdw4.js";import"./SwitchBase-Bmf2bXZK.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:m,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:a,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
