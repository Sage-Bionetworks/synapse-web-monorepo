import{o as e}from"./preload-helper-CsHsquCd.js";import{_ as t,i as n,t as r}from"./core-CI8DLeHF.js";import{An as i,Pn as a}from"./synapse-client-X8YVhSMz.js";import{i as o,u as s}from"./mockAccessRequirements-DrG-L53F.js";import{At as c,Mt as l,St as u,a as d,bt as f,d as p,f as m,o as h,xt as g,yt as _}from"./iframe-TChxhzP0.js";import{n as v,t as y}from"./EDucPreviewStep-bfijYLTy.js";var b,x,S,C,w;e((()=>{o(),u(),l(),f(),m(),h(),a(),r(),v(),b={...s,eDucTemplateId:`template-abc-123`},x={title:`Governance/Data Access Request Flow/Managed Access Requirement/Step 2c - eDUC Preview`,component:y,parameters:{stack:`mock`,chromatic:{viewports:[600,1200]},msw:{handlers:[n.get(`${i}/repo/v1/dataAccessRequest/${g.id}/preview`,()=>t.json({fileHandleId:`mock-preview-file-handle-123`},{status:200})),...p(i),...d(i),...c(i),..._(i)]}}},S={name:`eDUC preview step`,args:{managedACTAccessRequirement:b,previewSrcOverride:`https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf`}},C={name:`eDUC preview — error state`,parameters:{msw:{handlers:[n.get(`${i}/repo/v1/dataAccessRequest/${g.id}/preview`,()=>t.json({reason:`Preview could not be generated at this time.`},{status:500})),...p(i),...d(i),...c(i),..._(i)]}},args:{managedACTAccessRequirement:b}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'eDUC preview step',
  args: {
    managedACTAccessRequirement: eDucManagedACTAccessRequirement,
    // The real portal servlet is not served in Storybook, so point the iframe at a public
    // sample PDF that the browser can render directly.
    previewSrcOverride: 'https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'eDUC preview — error state',
  parameters: {
    msw: {
      handlers: [http.get(\`\${MOCK_REPO_ORIGIN}/repo/v1/dataAccessRequest/\${MOCK_DATA_ACCESS_REQUEST.id}/preview\`, () => HttpResponse.json({
        reason: 'Preview could not be generated at this time.'
      }, {
        status: 500
      })), ...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN)]
    }
  },
  args: {
    managedACTAccessRequirement: eDucManagedACTAccessRequirement
  }
}`,...C.parameters?.docs?.source}}},w=[`Preview`,`PreviewError`]}))();export{S as Preview,C as PreviewError,w as __namedExportsOrder,x as default};