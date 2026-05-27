import{n as e}from"./chunk-jRWAZmH_.js";import{$ as t,F as n,J as r,L as i,Ov as a,Q as o,X as s,Y as c,Z as l,ag as u,cg as d,in as f,n as p,nn as m,pn as h,rn as g,t as _,tn as v,z_ as y}from"./iframe-BoKLMKIS.js";import{n as b,t as x}from"./EntityAclEditorModal-Bwg8ltKj.js";var S,C,w,T,E,D,O,k,A,j;e((()=>{v(),r(),g(),b(),y(),h(),i(),d(),p(),S={title:`Synapse/Entity ACL Editor`,component:x,args:{open:!0}},C={args:{entityId:f.id},parameters:{stack:`mock`}},w={args:{entityId:f.id},parameters:{stack:`mock`,msw:{handlers:[n(u,{...f.bundle,benefactorAcl:{id:f.id,resourceAccess:[{principalId:999,accessType:[a.READ,a.DOWNLOAD,a.CREATE,a.UPDATE,a.DELETE,a.CHANGE_PERMISSIONS,a.CHANGE_SETTINGS,a.MODERATE]},{principalId:999,accessType:[a.READ]}]}}),..._(u)]}}},T={args:{entityId:c.id},parameters:{stack:`mock`}},E={args:{entityId:m.id},parameters:{stack:`mock`}},D={args:{entityId:s.id},parameters:{stack:`mock`}},O={args:{entityId:o.id},parameters:{stack:`mock`}},k={args:{entityId:l.id},parameters:{stack:`mock`}},A={args:{entityId:t.id},parameters:{stack:`mock`}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: mockProject.id
  },
  parameters: {
    stack: 'mock'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: mockProject.id
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [getEntityBundleHandler(MOCK_REPO_ORIGIN, {
        ...mockProject.bundle,
        benefactorAcl: {
          id: mockProject.id,
          resourceAccess: [{
            principalId: MOCK_USER_ID,
            accessType: [ACCESS_TYPE.READ, ACCESS_TYPE.DOWNLOAD, ACCESS_TYPE.CREATE, ACCESS_TYPE.UPDATE, ACCESS_TYPE.DELETE, ACCESS_TYPE.CHANGE_PERMISSIONS, ACCESS_TYPE.CHANGE_SETTINGS, ACCESS_TYPE.MODERATE]
          }, {
            principalId: MOCK_USER_ID,
            accessType: [ACCESS_TYPE.READ]
          }]
        }
      }), ...getHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: mockFileEntityCurrentUserCannotEdit.id
  },
  parameters: {
    stack: 'mock'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: mockFileEntity.id
  },
  parameters: {
    stack: 'mock'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: mockFileEntityWithLocalSharingSettingsData.id
  },
  parameters: {
    stack: 'mock'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: mockFileOpenDataWithPublicRead.id
  },
  parameters: {
    stack: 'mock'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: mockFileOpenDataWithNoPublicRead.id
  },
  parameters: {
    stack: 'mock'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: mockFilePublicReadNoOpenData.id
  },
  parameters: {
    stack: 'mock'
  }
}`,...A.parameters?.docs?.source}}},j=[`Project`,`DuplicatePrincipal`,`ReadOnly`,`InheritedFile`,`LocalSharingSettings`,`OpenDataPublicCanRead`,`OpenDataNoPublicRead`,`NoOpenDataWithPublicRead`]}))();export{w as DuplicatePrincipal,E as InheritedFile,D as LocalSharingSettings,A as NoOpenDataWithPublicRead,k as OpenDataNoPublicRead,O as OpenDataPublicCanRead,C as Project,T as ReadOnly,j as __namedExportsOrder,S as default};