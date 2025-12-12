import{O as m}from"./OpenData-fsP1sbCz.js";import"./iframe-Bv3225dD.js";import"./index-r8ZA1smB.js";const D={title:"Synapse/OpenData",component:m},e={name:"Public & Open Data",args:{isOpenData:!0,isPublic:!0,currentUserCanUpdateSharingSettings:!1}},a={name:"Non-Public & Open Data",args:{isOpenData:!0,isPublic:!1,currentUserCanUpdateSharingSettings:!0}},n={name:"Public & Non-Open Data",args:{isOpenData:!1,isPublic:!0,currentUserCanUpdateSharingSettings:!0}};var r,t,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Public & Open Data',
  args: {
    isOpenData: true,
    isPublic: true,
    currentUserCanUpdateSharingSettings: false
  }
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var i,c,o;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Non-Public & Open Data',
  args: {
    isOpenData: true,
    isPublic: false,
    currentUserCanUpdateSharingSettings: true
  }
}`,...(o=(c=a.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var u,p,l;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Public & Non-Open Data',
  args: {
    isOpenData: false,
    isPublic: true,
    currentUserCanUpdateSharingSettings: true
  }
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const b=["PublicOpenData","NonPublicOpenDataWithChangePermissions","NonOpenPublicDataWithChangePermissions"];export{n as NonOpenPublicDataWithChangePermissions,a as NonPublicOpenDataWithChangePermissions,e as PublicOpenData,b as __namedExportsOrder,D as default};
