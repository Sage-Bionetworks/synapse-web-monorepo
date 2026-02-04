import{a3 as o,w as t,a4 as s}from"./iframe-C64n1GD8.js";import{A as i}from"./AclEditor-CtYJSF6-.js";import"./index-Chi_LkuB.js";import"./UserSearchBoxV2-CEOaBZBE.js";import"./useDebouncedEffect-B1LnpUgj.js";import"./use-deep-compare-effect.esm-DM9VHs1k.js";import"./uniq-DGMRWxbl.js";import"./without-C01j4c9t.js";import"./UserBadge-gsVQwvQr.js";import"./useUserBundle-D00teTqN.js";import"./useSuspenseQuery-DKR51829.js";import"./SkeletonTable-QL6vSy9n.js";import"./MenuItem-BnAVJRr4.js";import"./Card-BkBy63xK.js";import"./Chip-B6rIlUNr.js";import"./Select-aab027f3.esm-BnGTkP-J.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BDkiNsf3.js";import"./TeamBadge-BDXFLMIb.js";import"./SkeletonButton-BHX6f9gP.js";import"./SkeletonInlineBlock-CDYMy8y_.js";import"./SkeletonParagraph-Duc3bDvV.js";import"./IconSvgButton-ZI2NH7SN.js";import"./FormControlLabel-DFd8tF3Z.js";import"./Checkbox-D83KQWHy.js";import"./SwitchBase-D7SWinHy.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:t,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:s,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const v=["Demo"];export{r as Demo,v as __namedExportsOrder,k as default};
