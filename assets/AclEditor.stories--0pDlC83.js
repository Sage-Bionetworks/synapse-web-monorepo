import{a2 as o,w as p,a3 as a}from"./iframe-Ci1lmE8g.js";import{A as m}from"./AclEditor-ChdbCbHk.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-CViwSSrF.js";import"./useDebouncedEffect-B_A-YylX.js";import"./use-deep-compare-effect.esm-CoZjJuVi.js";import"./uniq-DZseOKB0.js";import"./without-BMXd1Ulk.js";import"./UserBadge-DRfGM4AR.js";import"./SkeletonTable-DkbE7er9.js";import"./MenuItem-DNhPNPdH.js";import"./Card-B9m98vxz.js";import"./Chip-7ZjY8iwO.js";import"./Select-aab027f3.esm-CQJYo76m.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-BLAOGy8C.js";import"./TeamBadge-BtVGBgEB.js";import"./SkeletonButton-CC-6gNoS.js";import"./SkeletonInlineBlock-B2RYwmUI.js";import"./SkeletonParagraph-ITJPOI8x.js";import"./IconSvgButton-C8-x8Lkw.js";import"./FormControlLabel-CP9zrs5G.js";import"./Checkbox-CfXy5gYt.js";import"./SwitchBase-Dywev717.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:m,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:a,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
