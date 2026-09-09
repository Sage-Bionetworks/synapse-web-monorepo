import{o as e}from"./preload-helper-CsHsquCd.js";import{F as t,t as n}from"./dist-C7SMz8Oe.js";import{Ln as r,Vn as i}from"./synapse-client-CnbOkvM7.js";import{d as a,i as o,u as s}from"./mockAccessRequirements-CG0rLaMU.js";import{Et as c,F as l,J as u,Mt as d,P as f,Pt as p,St as m,Tt as h,a as g,d as _,f as v,o as y,q as b,xt as x}from"./iframe-BfNIqv2O.js";import{n as S,t as C}from"./DataAccessRequestAccessorsFilesForm-DRFIlyTu.js";var w,T,E,D,O;e((()=>{o(),c(),u(),p(),m(),l(),v(),y(),i(),n(),S(),w={title:`Governance/Data Access Request Flow/Managed Access Requirement/Step 2 - Accessors and Documentation`,component:C,parameters:{stack:`mock`,chromatic:{viewports:[600,1200]},msw:{handlers:[..._(r),...f(r),...g(r),...d(r),...x(r)]}},argTypes:{isAuthenticated:{type:`boolean`}},args:{isAuthenticated:!0}},T={args:{subjectId:b,subjectType:t.ENTITY,managedACTAccessRequirement:s,researchProjectId:h}},E={args:{subjectId:b,subjectType:t.ENTITY,managedACTAccessRequirement:a,researchProjectId:h}},D={args:{subjectId:b,subjectType:t.ENTITY,managedACTAccessRequirement:{...s,eDucTemplateId:`educ-template-123`},researchProjectId:h}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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