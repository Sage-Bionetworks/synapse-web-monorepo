import{n as e}from"./chunk-jRWAZmH_.js";import{O_ as t,cn as n,en as r,mv as i,rn as a}from"./iframe-DIvGBLSL.js";import{n as o,t as s}from"./AclEditor-BINndlAC.js";var c,l,u,d;e((()=>{a(),n(),t(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Synapse/ACL Editor`,component:s,args:{availablePermissionLevels:[`CAN_REVIEW_SUBMISSIONS`,`IS_EXEMPTION_ELIGIBLE`],onAddPrincipalToAcl:c(),updateResourceAccessItem:c(),removeResourceAccessItem:c(),isLoading:!1,canEdit:!0,emptyText:`No permissions have been granted.`,showAddRemovePublicButton:!0,showNotifyCheckbox:!0}},u={args:{resourceAccessList:[{principalId:999,accessType:[i.REVIEW_SUBMISSIONS]},{principalId:r,accessType:[i.EXEMPTION_ELIGIBLE]}]},parameters:{stack:`mock`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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