import{O as r}from"./OpenData-CR74uSdF.js";import"./iframe-Fj4lak5c.js";import"./index-Chi_LkuB.js";const c={title:"Synapse/OpenData",component:r},e={name:"Public & Open Data",args:{isOpenData:!0,isPublic:!0,currentUserCanUpdateSharingSettings:!1}},a={name:"Non-Public & Open Data",args:{isOpenData:!0,isPublic:!1,currentUserCanUpdateSharingSettings:!0}},n={name:"Public & Non-Open Data",args:{isOpenData:!1,isPublic:!0,currentUserCanUpdateSharingSettings:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Public & Open Data',
  args: {
    isOpenData: true,
    isPublic: true,
    currentUserCanUpdateSharingSettings: false
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Non-Public & Open Data',
  args: {
    isOpenData: true,
    isPublic: false,
    currentUserCanUpdateSharingSettings: true
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Public & Non-Open Data',
  args: {
    isOpenData: false,
    isPublic: true,
    currentUserCanUpdateSharingSettings: true
  }
}`,...n.parameters?.docs?.source}}};const o=["PublicOpenData","NonPublicOpenDataWithChangePermissions","NonOpenPublicDataWithChangePermissions"];export{n as NonOpenPublicDataWithChangePermissions,a as NonPublicOpenDataWithChangePermissions,e as PublicOpenData,o as __namedExportsOrder,c as default};
