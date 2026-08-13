import{o as e}from"./preload-helper-CsHsquCd.js";import{Dn as t,jn as n}from"./synapse-client-Xq07zvAa.js";import{i as r,u as i}from"./mockAccessRequirements-DrG-L53F.js";import{C as a,Ct as o,a as s,d as c,f as l,ft as u,o as d,pt as f,w as p,xt as m}from"./iframe-B76dhia5.js";import{n as h,t as g}from"./ResearchProjectForm-DP1PkAT1.js";var _,v,y,b;e((()=>{r(),o(),f(),p(),l(),d(),n(),h(),_={title:`Governance/Data Access Request Flow/Managed Access Requirement/Step 1 - Research Project Information`,component:g,parameters:{stack:`mock`,chromatic:{viewports:[600,1200]},msw:{handlers:[...a(t),...m(t),...u(t),...s(t)]}}},v={name:`Step 1 - Research Project Information`,args:{managedACTAccessRequirement:i}},y={name:`Step 1 - eDUC enabled (with PI selector + email)`,parameters:{msw:{handlers:[...a(t),...m(t),...u(t),...s(t),...c(t)]}},args:{managedACTAccessRequirement:{...i,eDucTemplateId:`template-abc-123`}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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