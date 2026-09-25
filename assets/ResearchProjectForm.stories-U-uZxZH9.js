import{o as e}from"./preload-helper-CsHsquCd.js";import{Hn as t,Rn as n}from"./synapse-client-DLq2ojcm.js";import{i as r,u as i}from"./mockAccessRequirements-Bh3YFkvB.js";import{Dt as a,E as o,Et as s,Lt as c,T as l,a as u,d,f,o as p,zt as m}from"./iframe-CKguA2sm.js";import{n as h,t as g}from"./ResearchProjectForm-t0St33HT.js";var _,v,y,b;e((()=>{r(),m(),a(),o(),f(),p(),t(),h(),_={title:`Governance/Data Access Request Flow/Managed Access Requirement/Step 1 - Research Project Information`,component:g,parameters:{stack:`mock`,chromatic:{viewports:[600,1200]},msw:{handlers:[...l(n),...c(n),...s(n),...u(n)]}}},v={name:`Step 1 - Research Project Information`,args:{managedACTAccessRequirement:i}},y={name:`Step 1 - eDUC enabled (with PI selector + email)`,parameters:{msw:{handlers:[...l(n),...c(n),...s(n),...u(n),...d(n)]}},args:{managedACTAccessRequirement:{...i,eDucTemplateId:`template-abc-123`}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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