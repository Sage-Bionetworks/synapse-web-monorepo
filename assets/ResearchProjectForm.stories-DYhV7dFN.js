import{o as e}from"./preload-helper-CsHsquCd.js";import{Pn as t,Rn as n}from"./synapse-client-CmSRto0s.js";import{i as r,u as i}from"./mockAccessRequirements-DmlB6Yg0.js";import{At as a,C as o,Mt as s,a as c,bt as l,d as u,f as d,o as f,w as p,yt as m}from"./iframe-XP_5eFjZ.js";import{n as h,t as g}from"./ResearchProjectForm-5UOy5lVG.js";var _,v,y,b;e((()=>{r(),s(),l(),p(),d(),f(),n(),h(),_={title:`Governance/Data Access Request Flow/Managed Access Requirement/Step 1 - Research Project Information`,component:g,parameters:{stack:`mock`,chromatic:{viewports:[600,1200]},msw:{handlers:[...o(t),...a(t),...m(t),...c(t)]}}},v={name:`Step 1 - Research Project Information`,args:{managedACTAccessRequirement:i}},y={name:`Step 1 - eDUC enabled (with PI selector + email)`,parameters:{msw:{handlers:[...o(t),...a(t),...m(t),...c(t),...u(t)]}},args:{managedACTAccessRequirement:{...i,eDucTemplateId:`template-abc-123`}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Step 1 - Research Project Information',
  args: {
    managedACTAccessRequirement: mockManagedACTAccessRequirement
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Step 1 - eDUC enabled (with PI selector + email)',
  parameters: {
    msw: {
      handlers: [...getResearchProjectHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN), ...getUserProfileHandlers(MOCK_REPO_ORIGIN)]
    }
  },
  args: {
    managedACTAccessRequirement: {
      ...mockManagedACTAccessRequirement,
      eDucTemplateId: 'template-abc-123'
    }
  }
}`,...y.parameters?.docs?.source}}},b=[`Step1`,`Step1EDucEnabled`]}))();export{v as Step1,y as Step1EDucEnabled,b as __namedExportsOrder,_ as default};