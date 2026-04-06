import{a1 as o,v as s,a2 as t}from"./iframe-DEq4Fwc_.js";import{A as i}from"./AclEditor-C4kkW92T.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-Duj3mjAc.js";import"./useDebouncedEffect-CjcHpG6N.js";import"./UserBadge-CQKGOV2g.js";import"./useUserBundle-DhUzGqE3.js";import"./SkeletonTable-CssHy_cG.js";import"./MenuItem-Q5cSc0me.js";import"./Card-Bft1ilTS.js";import"./Chip-CsLFe4y4.js";import"./UserOrTeamBadge-BZeoORq6.js";import"./TeamBadge-CSeFW5CF.js";import"./Autocomplete-BDzyqPVK.js";import"./usePreviousProps-D-IBZJIf.js";import"./SkeletonButton-Cgw-w1QX.js";import"./SkeletonInlineBlock-Ct1mjrTN.js";import"./SkeletonParagraph-C2zzRv3g.js";import"./IconSvgButton-DC3pxScj.js";import"./FormControlLabel-DQYCrA3y.js";import"./Checkbox-CIkhFSee.js";import"./SwitchBase-BWvcTXOM.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const D=["Demo"];export{e as Demo,D as __namedExportsOrder,y as default};
