import{a3 as o,w as p,a4 as a}from"./iframe-kh7i1csa.js";import{A as m}from"./AclEditor-B0gvTzNS.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-Ca-x9gNQ.js";import"./useDebouncedEffect-TX9PC0FH.js";import"./use-deep-compare-effect.esm-B88DIzUC.js";import"./uniq-C6C8K34y.js";import"./without-B_273GKB.js";import"./UserBadge-CdRmIen3.js";import"./SkeletonTable-BqcwQAxC.js";import"./MenuItem-CfQGt1HR.js";import"./Card-CcySjyv2.js";import"./Chip-BOVRxSkP.js";import"./Select-aab027f3.esm-CSUHZq12.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-lWvXpb5L.js";import"./TeamBadge-Cl2ueHwO.js";import"./SkeletonButton-B_CN37W2.js";import"./SkeletonInlineBlock-ClnumZW6.js";import"./SkeletonParagraph-BnqUYHvv.js";import"./IconSvgButton-B0BhcpsN.js";import"./FormControlLabel-BdtGU7On.js";import"./Checkbox-BwE9-nDN.js";import"./SwitchBase-jMUczUFb.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ACL Editor",component:m,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:a,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
