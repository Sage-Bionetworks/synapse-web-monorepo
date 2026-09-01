import{o as e}from"./preload-helper-CsHsquCd.js";import{_ as t,i as n,t as r}from"./core-CI8DLeHF.js";import{Fn as i,Ft as a,Nn as o,Rt as s,zn as c}from"./synapse-client-DT80sJpp.js";import{i as l,u}from"./mockAccessRequirements-D3RBN_Yq.js";import{At as d,Mt as f,St as p,a as m,bt as h,d as g,f as _,o as v,xt as y,yt as b}from"./iframe-CJtrl81X.js";import{n as x,t as S}from"./EDucPreviewStep-4nw5btDY.js";var C,w,T,E,D,O,k;e((()=>{l(),p(),f(),h(),_(),v(),o(),c(),r(),x(),C={...u,eDucTemplateId:`template-abc-123`},w=n.get(`${i}${a(y.id)}`,()=>t.json({fileHandleId:`mock-preview-file-handle-123`},{status:200})),T={title:`Governance/Data Access Request Flow/Managed Access Requirement/Step 2c - eDUC Preview`,component:S,parameters:{stack:`mock`,chromatic:{viewports:[600,1200]},msw:{handlers:[w,...g(i),...m(i),...d(i),...b(i)]}}},E={name:`eDUC preview step`,args:{managedACTAccessRequirement:C,previewSrcOverride:`https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf`}},D={name:`eDUC preview — error state`,parameters:{msw:{handlers:[n.get(`${i}${a(y.id)}`,()=>t.json({reason:`Preview could not be generated at this time.`},{status:500})),...g(i),...m(i),...d(i),...b(i)]}},args:{managedACTAccessRequirement:C}},O={name:`eDUC preview — user at signature quota`,parameters:{msw:{handlers:[w,n.get(`${i}${s(y.id)}`,()=>t.json({quota:3,remaining:0},{status:200})),...g(i),...m(i),...d(i),...b(i)]}},args:{managedACTAccessRequirement:C,previewSrcOverride:`https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf`}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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