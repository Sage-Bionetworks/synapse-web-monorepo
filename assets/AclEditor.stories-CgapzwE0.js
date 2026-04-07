import{a1 as o,v as s,a2 as t}from"./iframe-CA42Mn9q.js";import{A as i}from"./AclEditor-pUIDyQ_5.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-Cfies7rm.js";import"./useDebouncedEffect-DYtqXnBy.js";import"./UserBadge-BKVFzTvo.js";import"./useUserBundle-BhbwoHT_.js";import"./SkeletonTable--UszwM1d.js";import"./MenuItem-BtHpeBI3.js";import"./Card-CaU8zpDF.js";import"./Chip-CtbWqGj5.js";import"./UserOrTeamBadge-BKHSk8CN.js";import"./TeamBadge-BoejoXMi.js";import"./Autocomplete-CgHWwNDH.js";import"./usePreviousProps-B1BOdqtH.js";import"./SkeletonButton-BBbLk1YB.js";import"./SkeletonInlineBlock-COfhdDsT.js";import"./SkeletonParagraph-CDHIPMz9.js";import"./IconSvgButton-D4r_VC0z.js";import"./FormControlLabel-DyBRYtGv.js";import"./Checkbox-DGCzgHVy.js";import"./SwitchBase-COFpZMHN.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
