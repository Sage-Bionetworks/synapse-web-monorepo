import{n as e}from"./chunk-zsgVPwQN.js";import{lt as t,t as n}from"./dist-jiKX-16m.js";import{Tn as r,xn as i}from"./SynapseClient-BzG4sNth.js";import{r as a}from"./mock_user_profile-NKYbA1Kn.js";import{n as o,t as s}from"./mockProject-BNR0UZ5B.js";import{n as c,r as l}from"./mockFileEntity-CgV97cUL.js";import{r as u,t as d}from"./handlers-BPtzUCod.js";import{a as f,c as p,l as m,o as h,s as g,u as _}from"./entity-C1UYB_oe.js";import{r as v,t as y}from"./entityHandlers-Cw4TpSeT.js";import{n as b,t as x}from"./EntityAclEditorModal-DsiVe-Fj.js";var S,C,w,T,E,D,O,k,A,j;e((()=>{c(),f(),s(),b(),n(),a(),v(),r(),u(),S={title:`Synapse/Entity ACL Editor`,component:x,args:{open:!0}},C={args:{entityId:o.id},parameters:{stack:`mock`}},w={args:{entityId:o.id},parameters:{stack:`mock`,msw:{handlers:[y(i,{...o.bundle,benefactorAcl:{id:o.id,resourceAccess:[{principalId:999,accessType:[t.READ,t.DOWNLOAD,t.CREATE,t.UPDATE,t.DELETE,t.CHANGE_PERMISSIONS,t.CHANGE_SETTINGS,t.MODERATE]},{principalId:999,accessType:[t.READ]}]}}),...d(i)]}}},T={args:{entityId:h.id},parameters:{stack:`mock`}},E={args:{entityId:l.id},parameters:{stack:`mock`}},D={args:{entityId:g.id},parameters:{stack:`mock`}},O={args:{entityId:m.id},parameters:{stack:`mock`}},k={args:{entityId:p.id},parameters:{stack:`mock`}},A={args:{entityId:_.id},parameters:{stack:`mock`}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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