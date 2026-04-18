import{a1 as o,v as s,a2 as t}from"./iframe-vLBQZPS1.js";import{A as i}from"./AclEditor-BSk2jt86.js";import"./index-Chi_LkuB.js";import"./UserSearchBox-D5sremVT.js";import"./useDebouncedEffect-BW4_TbpK.js";import"./UserBadge-PCszth9B.js";import"./useUserBundle-BzYdunjk.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-vLDxttH1.js";import"./MenuItem-B9IS4RBy.js";import"./Card-vpuDZNT5.js";import"./Chip-BwFdox-s.js";import"./UserOrTeamBadge-BrN8Qpje.js";import"./TeamBadge-B0XMle2i.js";import"./Autocomplete-BxsEBMw_.js";import"./usePreviousProps-ChDDB4-s.js";import"./SkeletonButton-Bpq0DUhs.js";import"./SkeletonInlineBlock-Ck9MEOcu.js";import"./SkeletonParagraph-BdLk36IL.js";import"./IconSvgButton-BZQkEXPU.js";import"./FormControlLabel-ChegGM40.js";import"./Checkbox-C06X4GkF.js";import"./SwitchBase-BpROeQ6w.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/ACL Editor",component:i,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:r(),updateResourceAccessItem:r(),removeResourceAccessItem:r(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},e={args:{resourceAccessList:[{principalId:s,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:t,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
