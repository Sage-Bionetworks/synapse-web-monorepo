import{a1 as o,v as s,a2 as t}from"./iframe-CtEx53-_.js";import{A as i}from"./AclEditor-BI37VRty.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-CCxUf5Ve.js";import"./useDebouncedEffect-B_oSl5Sa.js";import"./UserBadge-DEyjEyEt.js";import"./useUserBundle-CU45jpjR.js";import"./SkeletonTable-DXr3KoSK.js";import"./MenuItem-FhFL09-C.js";import"./Card-CEnckPzK.js";import"./Chip-DZZXMgyG.js";import"./UserOrTeamBadge-2XRFTVu7.js";import"./TeamBadge-0I4uK5gl.js";import"./Autocomplete-CgP-x_Uf.js";import"./usePreviousProps-BB8cbwq6.js";import"./SkeletonButton-BxJCEkFM.js";import"./SkeletonInlineBlock-CUTClj5h.js";import"./SkeletonParagraph-B7Iue5Hi.js";import"./IconSvgButton-tr_hs-mZ.js";import"./FormControlLabel-CkOhorz7.js";import"./Checkbox-OtBfanQo.js";import"./SwitchBase-BK1TFQJS.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
