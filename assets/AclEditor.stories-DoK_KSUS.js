import{a4 as o,w as t,a5 as s}from"./iframe-D6-EgIYn.js";import{A as i}from"./AclEditor-m75R77BD.js";import"./index-Chi_LkuB.js";import"./useRealmPrincipals-BYFcXE6T.js";import"./UserSearchBoxV2-CFe_tRJX.js";import"./useDebouncedEffect-B25vgBYV.js";import"./use-deep-compare-effect.esm-C9A8HvcU.js";import"./uniq-BP7VOetn.js";import"./without-D3Y5b0qW.js";import"./UserBadge-CjWzxbLB.js";import"./useUserBundle-CyWCEqcm.js";import"./useSuspenseQuery-CDWRAkW_.js";import"./SkeletonTable-Cw1xCxvL.js";import"./MenuItem-CdqoCxWB.js";import"./Card-dKshTQst.js";import"./Chip-C2QYErxj.js";import"./Select-aab027f3.esm-BcIyEF9O.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-D005yRYk.js";import"./TeamBadge-0XuX1o3A.js";import"./SkeletonButton-BgAZzTmz.js";import"./SkeletonInlineBlock-CkGbAtvq.js";import"./SkeletonParagraph-DzfgVu65.js";import"./IconSvgButton-t96Ji5HG.js";import"./FormControlLabel-I4j_CSGI.js";import"./Checkbox-Bv8D7Yjv.js";import"./SwitchBase-BDm3YM90.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,v={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:t,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:s,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const K=["Demo"];export{r as Demo,K as __namedExportsOrder,v as default};
