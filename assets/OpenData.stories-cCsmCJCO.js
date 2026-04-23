import{n as e}from"./chunk-zsgVPwQN.js";import{n as t,t as n}from"./OpenData-P0VF03DS.js";var r,i,a,o,s;e((()=>{t(),r={title:`Synapse/OpenData`,component:n},i={name:`Public & Open Data`,args:{isOpenData:!0,isPublic:!0,currentUserCanUpdateSharingSettings:!1}},a={name:`Non-Public & Open Data`,args:{isOpenData:!0,isPublic:!1,currentUserCanUpdateSharingSettings:!0}},o={name:`Public & Non-Open Data`,args:{isOpenData:!1,isPublic:!0,currentUserCanUpdateSharingSettings:!0}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Public & Open Data',
  args: {
    isOpenData: true,
    isPublic: true,
    currentUserCanUpdateSharingSettings: false
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Non-Public & Open Data',
  args: {
    isOpenData: true,
    isPublic: false,
    currentUserCanUpdateSharingSettings: true
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Public & Non-Open Data',
  args: {
    isOpenData: false,
    isPublic: true,
    currentUserCanUpdateSharingSettings: true
  }
}`,...o.parameters?.docs?.source}}},s=[`PublicOpenData`,`NonPublicOpenDataWithChangePermissions`,`NonOpenPublicDataWithChangePermissions`]}))();export{o as NonOpenPublicDataWithChangePermissions,a as NonPublicOpenDataWithChangePermissions,i as PublicOpenData,s as __namedExportsOrder,r as default};