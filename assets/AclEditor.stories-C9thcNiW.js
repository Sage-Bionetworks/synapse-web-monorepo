import{a4 as o,w as t,a5 as s}from"./iframe-CDA0-aTC.js";import{A as i}from"./AclEditor-B0UnP7qo.js";import"./index-Chi_LkuB.js";import"./UserSearchBoxV2-Cv9zVEbb.js";import"./useDebouncedEffect-BVP3V7ge.js";import"./use-deep-compare-effect.esm-CdqlNPw4.js";import"./uniq-BwP3as-X.js";import"./without-CjA7TAIG.js";import"./UserBadge-CeyI1m7V.js";import"./useUserBundle-h3_N8fPQ.js";import"./SkeletonTable-CTSMcV9b.js";import"./MenuItem-D14RUsdm.js";import"./Card-CNpk9I0N.js";import"./Chip-iqmVqxV9.js";import"./Select-aab027f3.esm-lUYbg3gW.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BvRwu4Gs.js";import"./TeamBadge-QVyNcFNM.js";import"./SkeletonButton-CyZvMjY_.js";import"./SkeletonInlineBlock-CP8CpyNB.js";import"./SkeletonParagraph-BVmBcN9J.js";import"./IconSvgButton-DaI2wIRr.js";import"./FormControlLabel-Bnc2UF74.js";import"./Checkbox-BuF5DqZv.js";import"./SwitchBase-CzJWdvEs.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:t,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:s,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const k=["Demo"];export{r as Demo,k as __namedExportsOrder,U as default};
