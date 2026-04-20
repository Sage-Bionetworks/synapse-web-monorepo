import{a1 as o,v as s,a2 as t}from"./iframe-BnuiMoX_.js";import{A as i}from"./AclEditor-BIvBRaAJ.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-kyeiexqJ.js";import"./useDebouncedEffect-p58N9oTf.js";import"./UserBadge-C04__7Q8.js";import"./useUserBundle-MQOAsYfr.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-B_UPgtXl.js";import"./MenuItem-CJFsHkvO.js";import"./Card-C1dzVdqQ.js";import"./Chip-iaML2TUf.js";import"./UserOrTeamBadge-DeUK1hGM.js";import"./TeamBadge-U5E-aD0J.js";import"./Autocomplete-DDE1rP2z.js";import"./usePreviousProps-DWT1NPvn.js";import"./SkeletonButton-CgoQvaBi.js";import"./SkeletonInlineBlock-DxCr7zGd.js";import"./SkeletonParagraph-BQZp8fCk.js";import"./IconSvgButton-eEylnJlt.js";import"./FormControlLabel-DGDrtWSS.js";import"./Checkbox-DbZ9UnIo.js";import"./SwitchBase-FDevkp1d.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const f=["Demo"];export{e as Demo,f as __namedExportsOrder,D as default};
