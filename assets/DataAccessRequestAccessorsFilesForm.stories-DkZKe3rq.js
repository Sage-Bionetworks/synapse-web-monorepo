import{o as e}from"./preload-helper-CsHsquCd.js";import{F as t,t as n}from"./dist-C7SMz8Oe.js";import{Un as r,zn as i}from"./synapse-client-b99e5Uz3.js";import{d as a,i as o,u as s}from"./mockAccessRequirements-Bh3YFkvB.js";import{$ as c,B as l,Bt as u,Dt as d,Mt as f,Ot as p,Q as m,Rt as h,a as g,d as _,f as v,jt as y,o as b,z as x}from"./iframe-sRqtHeU1.js";import{n as S,t as C}from"./DataAccessRequestAccessorsFilesForm-BAwe2yHH.js";var w,T,E,D,O;e((()=>{o(),f(),c(),u(),p(),l(),v(),b(),r(),n(),S(),w={title:`Governance/Data Access Request Flow/Managed Access Requirement/Step 2 - Accessors and Documentation`,component:C,parameters:{stack:`mock`,chromatic:{viewports:[600,1200]},msw:{handlers:[..._(i),...x(i),...g(i),...h(i),...d(i)]}},argTypes:{isAuthenticated:{type:`boolean`}},args:{isAuthenticated:!0}},T={args:{subjectId:m,subjectType:t.ENTITY,managedACTAccessRequirement:s,researchProjectId:y}},E={args:{subjectId:m,subjectType:t.ENTITY,managedACTAccessRequirement:a,researchProjectId:y}},D={args:{subjectId:m,subjectType:t.ENTITY,managedACTAccessRequirement:{...s,eDucTemplateId:`educ-template-123`},researchProjectId:y}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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