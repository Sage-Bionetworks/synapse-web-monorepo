import{o as e}from"./preload-helper-CsHsquCd.js";import{P as t,t as n}from"./dist-DIvCtTVI.js";import{Mn as r,On as i}from"./synapse-client-Bq-D85Gh.js";import{d as a,i as o,u as s}from"./mockAccessRequirements-DrG-L53F.js";import{Et as c,G as l,K as u,M as d,N as f,Ot as p,_t as m,a as h,bt as g,d as _,f as v,o as y,vt as b,yt as x}from"./iframe-DTlz8hxF.js";import{n as S,t as C}from"./DataAccessRequestAccessorsFilesForm-4NLSKm2Z.js";var w,T,E,D,O;e((()=>{o(),g(),u(),p(),b(),f(),v(),y(),r(),n(),S(),w={title:`Governance/Data Access Request Flow/Managed Access Requirement/Step 2 - Accessors and Documentation`,component:C,parameters:{stack:`mock`,chromatic:{viewports:[600,1200]},msw:{handlers:[..._(i),...d(i),...h(i),...c(i),...m(i)]}},argTypes:{isAuthenticated:{type:`boolean`}},args:{isAuthenticated:!0}},T={args:{subjectId:l,subjectType:t.ENTITY,managedACTAccessRequirement:s,researchProjectId:x}},E={args:{subjectId:l,subjectType:t.ENTITY,managedACTAccessRequirement:a,researchProjectId:x}},D={args:{subjectId:l,subjectType:t.ENTITY,managedACTAccessRequirement:{...s,eDucTemplateId:`educ-template-123`},researchProjectId:x}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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