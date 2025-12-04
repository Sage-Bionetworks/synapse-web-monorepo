import{a3 as o,w as p,a4 as m}from"./iframe-BjuWmOGi.js";import{A as a}from"./AclEditor-Bj1wi7dH.js";import"./index-r8ZA1smB.js";import"./UserSearchBoxV2-E3EEBGsI.js";import"./useDebouncedEffect-DmU8aYLM.js";import"./use-deep-compare-effect.esm-CKvc0cS6.js";import"./uniq-CmRSxbmj.js";import"./without-B10tC6pS.js";import"./UserBadge-CUAwb9LE.js";import"./useUserBundle-B95nWVpb.js";import"./useSuspenseQuery-DmE9zOqq.js";import"./SkeletonTable-CigWUdbM.js";import"./MenuItem-D-8sEbrT.js";import"./Card-DL7hh3kA.js";import"./Chip-Ce4i36Hi.js";import"./Select-aab027f3.esm-0q2lS6KB.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-mZUanJpv.js";import"./TeamBadge-B3nrrbfj.js";import"./SkeletonButton-DB1uc2E1.js";import"./SkeletonInlineBlock-CVuN0wiI.js";import"./SkeletonParagraph-D6mW9cd8.js";import"./IconSvgButton-COfAcLHH.js";import"./FormControlLabel-Pg9rhhJW.js";import"./Checkbox-Ckhn1YcA.js";import"./SwitchBase-VeURP3dA.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,K={title:"Synapse/ACL Editor",component:a,args:{availablePermissionLevels:["CAN_REVIEW_SUBMISSIONS","IS_EXEMPTION_ELIGIBLE"],onAddPrincipalToAcl:e(),updateResourceAccessItem:e(),removeResourceAccessItem:e(),isLoading:!1,canEdit:!0,emptyText:"No permissions have been granted.",showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},r={args:{resourceAccessList:[{principalId:p,accessType:[o.REVIEW_SUBMISSIONS]},{principalId:m,accessType:[o.EXEMPTION_ELIGIBLE]}]},parameters:{stack:"mock"}};var t,s,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const b=["Demo"];export{r as Demo,b as __namedExportsOrder,K as default};
