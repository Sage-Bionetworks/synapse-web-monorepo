import{o as e}from"./preload-helper-CsHsquCd.js";import{F as t,t as n}from"./dist-C7SMz8Oe.js";import{Un as r,zn as i}from"./synapse-client-C0WJQHYT.js";import{d as a,i as o,u as s}from"./mockAccessRequirements-DG_Pt6wk.js";import{$ as c,B as l,Mt as u,Nt as d,Ot as f,V as p,Vt as m,a as h,d as g,et as _,f as v,kt as y,o as b,zt as x}from"./iframe-Cy3DmQic.js";import{n as S,t as C}from"./DataAccessRequestAccessorsFilesForm-DtgNhULG.js";var w,T,E,D,O;e((()=>{o(),d(),_(),m(),y(),p(),v(),b(),r(),n(),S(),w={title:`Governance/Data Access Request Flow/Managed Access Requirement/Step 2 - Accessors and Documentation`,component:C,parameters:{stack:`mock`,chromatic:{viewports:[600,1200]},msw:{handlers:[...g(i),...l(i),...h(i),...x(i),...f(i)]}},argTypes:{isAuthenticated:{type:`boolean`}},args:{isAuthenticated:!0}},T={args:{subjectId:c,subjectType:t.ENTITY,managedACTAccessRequirement:s,researchProjectId:u}},E={args:{subjectId:c,subjectType:t.ENTITY,managedACTAccessRequirement:a,researchProjectId:u}},D={args:{subjectId:c,subjectType:t.ENTITY,managedACTAccessRequirement:{...s,eDucTemplateId:`educ-template-123`},researchProjectId:u}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    subjectId: MOCK_FOLDER_ID,
    subjectType: RestrictableObjectType.ENTITY,
    managedACTAccessRequirement: mockManagedACTAccessRequirement,
    researchProjectId: MOCK_RESEARCH_PROJECT_ID
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    subjectId: MOCK_FOLDER_ID,
    subjectType: RestrictableObjectType.ENTITY,
    managedACTAccessRequirement: mockManagedAccessRequirementWithNoACL,
    researchProjectId: MOCK_RESEARCH_PROJECT_ID
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    subjectId: MOCK_FOLDER_ID,
    subjectType: RestrictableObjectType.ENTITY,
    managedACTAccessRequirement: {
      ...mockManagedACTAccessRequirement,
      eDucTemplateId: 'educ-template-123'
    },
    researchProjectId: MOCK_RESEARCH_PROJECT_ID
  }
}`,...D.parameters?.docs?.source}}},O=[`Request`,`Renewal`,`Step2EDucEnabled`]}))();export{E as Renewal,T as Request,D as Step2EDucEnabled,O as __namedExportsOrder,w as default};