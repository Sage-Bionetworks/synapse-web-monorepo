import{o as e}from"./preload-helper-CsHsquCd.js";import{P as t,t as n}from"./dist-DIvCtTVI.js";import{Dn as r,jn as i}from"./synapse-client-Xq07zvAa.js";import{d as a,i as o,u as s}from"./mockAccessRequirements-DrG-L53F.js";import{B as c,Ct as l,D as u,O as d,V as f,a as p,d as m,f as h,ft as g,ht as _,mt as v,o as y,pt as b,xt as x}from"./iframe-B76dhia5.js";import{n as S,t as C}from"./DataAccessRequestAccessorsFilesForm-BM0ut-OY.js";var w,T,E,D,O;e((()=>{o(),_(),f(),l(),b(),d(),h(),y(),i(),n(),S(),w={title:`Governance/Data Access Request Flow/Managed Access Requirement/Step 2 - Accessors and Documentation`,component:C,parameters:{stack:`mock`,chromatic:{viewports:[600,1200]},msw:{handlers:[...m(r),...u(r),...p(r),...x(r),...g(r)]}},argTypes:{isAuthenticated:{type:`boolean`}},args:{isAuthenticated:!0}},T={args:{subjectId:c,subjectType:t.ENTITY,managedACTAccessRequirement:s,researchProjectId:v}},E={args:{subjectId:c,subjectType:t.ENTITY,managedACTAccessRequirement:a,researchProjectId:v}},D={args:{subjectId:c,subjectType:t.ENTITY,managedACTAccessRequirement:{...s,eDucTemplateId:`educ-template-123`},researchProjectId:v}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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