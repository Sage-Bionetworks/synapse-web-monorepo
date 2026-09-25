import{o as e}from"./preload-helper-CsHsquCd.js";import{F as t,t as n}from"./dist-C7SMz8Oe.js";import{Hn as r,Rn as i}from"./synapse-client-DLq2ojcm.js";import{d as a,i as o,u as s}from"./mockAccessRequirements-Bh3YFkvB.js";import{$ as c,At as l,B as u,Dt as d,Et as f,Lt as p,Q as m,a as h,d as g,f as _,jt as v,o as y,z as b,zt as x}from"./iframe-CKguA2sm.js";import{n as S,t as C}from"./DataAccessRequestAccessorsFilesForm-DtRSNU7B.js";var w,T,E,D,O;e((()=>{o(),v(),c(),x(),d(),u(),_(),y(),r(),n(),S(),w={title:`Governance/Data Access Request Flow/Managed Access Requirement/Step 2 - Accessors and Documentation`,component:C,parameters:{stack:`mock`,chromatic:{viewports:[600,1200]},msw:{handlers:[...g(i),...b(i),...h(i),...p(i),...f(i)]}},argTypes:{isAuthenticated:{type:`boolean`}},args:{isAuthenticated:!0}},T={args:{subjectId:m,subjectType:t.ENTITY,managedACTAccessRequirement:s,researchProjectId:l}},E={args:{subjectId:m,subjectType:t.ENTITY,managedACTAccessRequirement:a,researchProjectId:l}},D={args:{subjectId:m,subjectType:t.ENTITY,managedACTAccessRequirement:{...s,eDucTemplateId:`educ-template-123`},researchProjectId:l}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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