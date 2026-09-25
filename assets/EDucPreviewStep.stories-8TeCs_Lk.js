import{o as e}from"./preload-helper-CsHsquCd.js";import{_ as t,i as n,t as r}from"./core-CI8DLeHF.js";import{Hn as i,In as a,Rn as o,Rt as s,Vt as c}from"./synapse-client-DLq2ojcm.js";import{i as l,u}from"./mockAccessRequirements-Bh3YFkvB.js";import{Dt as d,Et as f,Lt as p,Ot as m,a as h,d as g,f as _,kt as v,o as y,zt as b}from"./iframe-CKguA2sm.js";import{n as x,t as S}from"./EDucPreviewStep-C9jYzwgU.js";var C,w,T,E,D,O,k;e((()=>{l(),v(),b(),d(),_(),y(),a(),i(),r(),x(),C={...u,eDucTemplateId:`template-abc-123`},w=n.get(`${o}${s(m.id)}`,()=>t.json({fileHandleId:`mock-preview-file-handle-123`},{status:200})),T={title:`Governance/Data Access Request Flow/Managed Access Requirement/Step 2c - eDUC Preview`,component:S,parameters:{stack:`mock`,chromatic:{viewports:[600,1200]},msw:{handlers:[w,...g(o),...h(o),...p(o),...f(o)]}}},E={name:`eDUC preview step`,args:{managedACTAccessRequirement:C,previewSrcOverride:`https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf`}},D={name:`eDUC preview — error state`,parameters:{msw:{handlers:[n.get(`${o}${s(m.id)}`,()=>t.json({reason:`Preview could not be generated at this time.`},{status:500})),...g(o),...h(o),...p(o),...f(o)]}},args:{managedACTAccessRequirement:C}},O={name:`eDUC preview — user at signature quota`,parameters:{msw:{handlers:[w,n.get(`${o}${c(m.id)}`,()=>t.json({quota:3,remaining:0},{status:200})),...g(o),...h(o),...p(o),...f(o)]}},args:{managedACTAccessRequirement:C,previewSrcOverride:`https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf`}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'eDUC preview step',
  args: {
    managedACTAccessRequirement: eDucManagedACTAccessRequirement,
    // The real portal servlet is not served in Storybook, so point the iframe at a public
    // sample PDF that the browser can render directly.
    previewSrcOverride: 'https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'eDUC preview — error state',
  parameters: {
    msw: {
      handlers: [http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_REQUEST_PREVIEW(MOCK_DATA_ACCESS_REQUEST.id)}\`, () => HttpResponse.json({
        reason: 'Preview could not be generated at this time.'
      }, {
        status: 500
      })), ...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN)]
    }
  },
  args: {
    managedACTAccessRequirement: eDucManagedACTAccessRequirement
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'eDUC preview — user at signature quota',
  parameters: {
    msw: {
      handlers: [previewHandler, http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_REQUEST_SIGNATURE_QUOTA(MOCK_DATA_ACCESS_REQUEST.id)}\`, () => HttpResponse.json({
        quota: 3,
        remaining: 0
      }, {
        status: 200
      })), ...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN)]
    }
  },
  args: {
    managedACTAccessRequirement: eDucManagedACTAccessRequirement,
    previewSrcOverride: 'https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf'
  }
}`,...O.parameters?.docs?.source}}},k=[`Preview`,`PreviewError`,`PreviewAtQuota`]}))();export{E as Preview,O as PreviewAtQuota,D as PreviewError,k as __namedExportsOrder,T as default};