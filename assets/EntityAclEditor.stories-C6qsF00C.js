import{o as e}from"./preload-helper-CsHsquCd.js";import{Xt as t,t as n}from"./dist-DyN41VtP.js";import{An as r,En as i}from"./synapse-client-C_QK7pog.js";import{r as a}from"./mock_user_profile-BgSYjn5K.js";import{n as o,t as s}from"./mockProject-BQjrcOm6.js";import{n as c,r as l}from"./mockFileEntity-BWts7s9M.js";import{$ as u,L as d,Q as f,X as p,Z as m,et as h,n as g,t as _,tt as v,z as y}from"./iframe-Bo9vZUB2.js";import{n as b,t as x}from"./EntityAclEditorModal-BGHium6s.js";var S,C,w,T,E,D,O,k,A,j;e((()=>{c(),p(),s(),b(),n(),a(),y(),r(),g(),S={title:`Synapse/Entity ACL Editor`,component:x,args:{open:!0}},C={args:{entityId:o.id},parameters:{stack:`mock`}},w={args:{entityId:o.id},parameters:{stack:`mock`,msw:{handlers:[d(i,{...o.bundle,benefactorAcl:{id:o.id,resourceAccess:[{principalId:999,accessType:[t.READ,t.DOWNLOAD,t.CREATE,t.UPDATE,t.DELETE,t.CHANGE_PERMISSIONS,t.CHANGE_SETTINGS,t.MODERATE]},{principalId:999,accessType:[t.READ]}]}}),..._(i)]}}},T={args:{entityId:m.id},parameters:{stack:`mock`}},E={args:{entityId:l.id},parameters:{stack:`mock`}},D={args:{entityId:f.id},parameters:{stack:`mock`}},O={args:{entityId:h.id},parameters:{stack:`mock`}},k={args:{entityId:u.id},parameters:{stack:`mock`}},A={args:{entityId:v.id},parameters:{stack:`mock`}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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