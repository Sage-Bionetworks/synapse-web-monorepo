import{a1 as o,v as s,a2 as t}from"./iframe-DvDPVyr3.js";import{A as i}from"./AclEditor-D-NAr0VP.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-BwdbHC8B.js";import"./useDebouncedEffect-JywINAjS.js";import"./UserBadge-BlKDuGTK.js";import"./useUserBundle--EY3PjCb.js";import"./SkeletonTable-0fE1v7Jp.js";import"./MenuItem-Dbhxy3EU.js";import"./Card-B9Wv_sea.js";import"./Chip-YSiJYC5a.js";import"./UserOrTeamBadge-BCBJ34Cp.js";import"./TeamBadge-Dc875krb.js";import"./Autocomplete-pax_CLk5.js";import"./usePreviousProps-BDKffoJB.js";import"./SkeletonButton-ChNWGaeP.js";import"./SkeletonInlineBlock-DTOZhiyP.js";import"./SkeletonParagraph-C4mex8S5.js";import"./IconSvgButton-B4JbGuRu.js";import"./FormControlLabel-D9Jvuq4Y.js";import"./Checkbox-F9Ku5hpR.js";import"./SwitchBase-DnKqddam.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
