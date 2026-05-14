import{n as e}from"./chunk-jRWAZmH_.js";import{I_ as t,Tv as n,an as r,cn as i,pn as a}from"./iframe-B5iSrlt2.js";import{n as o,t as s}from"./AclEditor-CBcSvRpL.js";var c,l,u,d;e((()=>{i(),a(),t(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Synapse/ACL Editor`,component:s,args:{availablePermissionLevels:[`CAN_REVIEW_SUBMISSIONS`,`IS_EXEMPTION_ELIGIBLE`],onAddPrincipalToAcl:c(),updateResourceAccessItem:c(),removeResourceAccessItem:c(),isLoading:!1,canEdit:!0,emptyText:`No permissions have been granted.`,showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},u={args:{resourceAccessList:[{principalId:999,accessType:[n.REVIEW_SUBMISSIONS]},{principalId:r,accessType:[n.EXEMPTION_ELIGIBLE]}]},parameters:{stack:`mock`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Demo`]}))();export{u as Demo,d as __namedExportsOrder,l as default};