import{o as e}from"./preload-helper-CsHsquCd.js";import{P as t,t as n}from"./dist-DIvCtTVI.js";import{Fn as r,zn as i}from"./synapse-client-DT80sJpp.js";import{d as a,i as o,u as s}from"./mockAccessRequirements-D9S2eq8I.js";import{At as c,Ct as l,G as u,K as d,M as f,Mt as p,N as m,a as h,bt as g,d as _,f as v,o as y,wt as b,yt as x}from"./iframe-C_Dvo9n0.js";import{n as S,t as C}from"./DataAccessRequestAccessorsFilesForm-NotBWhuC.js";var w,T,E,D,O;e((()=>{o(),b(),d(),p(),g(),m(),v(),y(),i(),n(),S(),w={title:`Governance/Data Access Request Flow/Managed Access Requirement/Step 2 - Accessors and Documentation`,component:C,parameters:{stack:`mock`,chromatic:{viewports:[600,1200]},msw:{handlers:[..._(r),...f(r),...h(r),...c(r),...x(r)]}},argTypes:{isAuthenticated:{type:`boolean`}},args:{isAuthenticated:!0}},T={args:{subjectId:u,subjectType:t.ENTITY,managedACTAccessRequirement:s,researchProjectId:l}},E={args:{subjectId:u,subjectType:t.ENTITY,managedACTAccessRequirement:a,researchProjectId:l}},D={args:{subjectId:u,subjectType:t.ENTITY,managedACTAccessRequirement:{...s,eDucTemplateId:`educ-template-123`},researchProjectId:l}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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