import{n as e}from"./chunk-jRWAZmH_.js";import{$t as t,F as n,G as r,J as i,K as a,N as o,Qh as s,Qt as c,U as l,W as u,Xt as d,Yh as f,Zt as p,cn as m,hv as h,k_ as g,n as _,q as v,t as y}from"./iframe-BjzKDBgV.js";import{n as b,t as x}from"./EntityAclEditorModal-2dMouFLf.js";var S,C,w,T,E,D,O,k,A,j;e((()=>{d(),l(),c(),b(),g(),m(),n(),s(),_(),S={title:`Synapse/Entity ACL Editor`,component:x,args:{open:!0}},C={args:{entityId:t.id},parameters:{stack:`mock`}},w={args:{entityId:t.id},parameters:{stack:`mock`,msw:{handlers:[o(f,{...t.bundle,benefactorAcl:{id:t.id,resourceAccess:[{principalId:999,accessType:[h.READ,h.DOWNLOAD,h.CREATE,h.UPDATE,h.DELETE,h.CHANGE_PERMISSIONS,h.CHANGE_SETTINGS,h.MODERATE]},{principalId:999,accessType:[h.READ]}]}}),...y(f)]}}},T={args:{entityId:u.id},parameters:{stack:`mock`}},E={args:{entityId:p.id},parameters:{stack:`mock`}},D={args:{entityId:r.id},parameters:{stack:`mock`}},O={args:{entityId:v.id},parameters:{stack:`mock`}},k={args:{entityId:a.id},parameters:{stack:`mock`}},A={args:{entityId:i.id},parameters:{stack:`mock`}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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