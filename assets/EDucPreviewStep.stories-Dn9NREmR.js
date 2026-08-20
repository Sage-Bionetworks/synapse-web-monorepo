import{o as e}from"./preload-helper-CsHsquCd.js";import{_ as t,i as n,t as r}from"./core-CI8DLeHF.js";import{Fn as i,Pt as a,jn as o,kn as s}from"./synapse-client-DJe3j8_l.js";import{i as c,u as l}from"./mockAccessRequirements-DrG-L53F.js";import{At as u,Mt as d,St as f,a as p,bt as m,d as h,f as g,o as _,xt as v,yt as y}from"./iframe-s2yGHo7n.js";import{n as b,t as x}from"./EDucPreviewStep-ByJL8hY_.js";var S,C,w,T,E;e((()=>{c(),f(),d(),m(),g(),_(),s(),i(),r(),b(),S={...l,eDucTemplateId:`template-abc-123`},C={title:`Governance/Data Access Request Flow/Managed Access Requirement/Step 2c - eDUC Preview`,component:x,parameters:{stack:`mock`,chromatic:{viewports:[600,1200]},msw:{handlers:[n.get(`${o}${a(v.id)}`,()=>t.json({fileHandleId:`mock-preview-file-handle-123`},{status:200})),...h(o),...p(o),...u(o),...y(o)]}}},w={name:`eDUC preview step`,args:{managedACTAccessRequirement:S,previewSrcOverride:`https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf`}},T={name:`eDUC preview — error state`,parameters:{msw:{handlers:[n.get(`${o}${a(v.id)}`,()=>t.json({reason:`Preview could not be generated at this time.`},{status:500})),...h(o),...p(o),...u(o),...y(o)]}},args:{managedACTAccessRequirement:S}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'eDUC preview step',
  args: {
    managedACTAccessRequirement: eDucManagedACTAccessRequirement,
    // The real portal servlet is not served in Storybook, so point the iframe at a public
    // sample PDF that the browser can render directly.
    previewSrcOverride: 'https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`Preview`,`PreviewError`]}))();export{w as Preview,T as PreviewError,E as __namedExportsOrder,C as default};