import{o as e}from"./preload-helper-CsHsquCd.js";import{_ as t,i as n,t as r}from"./core-CI8DLeHF.js";import{Ht as i,Ln as a,Rt as o,Tt as s,Un as c,Ut as l,Vt as u,zn as d}from"./synapse-client-b99e5Uz3.js";import{i as f,u as p}from"./mockAccessRequirements-Bh3YFkvB.js";import{At as m,Bt as h,Dt as g,Et as _,Ot as v,Rt as y,a as b,d as x,f as S,kt as C,o as w}from"./iframe-F_p8aheI.js";import{n as T,r as E,t as D}from"./EDucPreviewStep-CLh59YIF.js";function O(e){let{canUpdateEnvelope:r,signatureStatus:i=_}=e;return[n.get(`${d}${s(p.id)}`,()=>t.json({...C,eDucSignatureEnvelopeId:`docusign-envelope-123`})),n.get(`${d}${l(C.id)}`,()=>t.json(i)),n.get(`${d}${u(C.id)}`,()=>t.json({result:r}))]}function k(e,r){return n.get(`${d}${i(C.id)}`,()=>t.json({quota:e,remaining:r},{status:200}))}var A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;e((()=>{f(),m(),h(),v(),S(),w(),a(),c(),r(),E(),{expect:A,userEvent:j,waitFor:M,within:N}=__STORYBOOK_MODULE_TEST__,P={...p,eDucTemplateId:`template-abc-123`},F=`https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf`,I=n.get(`${d}${o(C.id)}`,()=>t.json({fileHandleId:`mock-preview-file-handle-123`},{status:200})),L={title:`Governance/Data Access Request Flow/Managed Access Requirement/Step 2c - eDUC Preview`,component:D,parameters:{stack:`mock`,chromatic:{viewports:[600,1200]},msw:{handlers:[I,...x(d),...b(d),...y(d),...g(d)]}}},R=async({canvasElement:e})=>{let t=await N(e.ownerDocument.body).findByRole(`button`,{name:T});await M(()=>A(t).toBeEnabled()),await j.click(t)},z={name:`eDUC preview step`,args:{managedACTAccessRequirement:P,previewSrcOverride:F}},B={name:`eDUC preview — in-flight envelope that can still be updated`,parameters:{msw:{handlers:[...O({canUpdateEnvelope:!0}),I,...x(d),...b(d),...y(d),...g(d)]}},args:{managedACTAccessRequirement:P,previewSrcOverride:F}},V={name:`eDUC preview — in-flight envelope that cannot be updated`,parameters:{msw:{handlers:[...O({canUpdateEnvelope:!1,signatureStatus:{..._,ducStatus:`completed`}}),I,...x(d),...b(d),...y(d),...g(d)]}},args:{managedACTAccessRequirement:P,previewSrcOverride:F}},H={name:`eDUC preview — "keep or replace" confirmation`,parameters:B.parameters,args:B.args,play:R},U={name:`eDUC preview — "restart signing" confirmation`,parameters:V.parameters,args:V.args,play:R},W={name:`eDUC preview — error state`,parameters:{msw:{handlers:[n.get(`${d}${o(C.id)}`,()=>t.json({reason:`Preview could not be generated at this time.`},{status:500})),...x(d),...b(d),...y(d),...g(d)]}},args:{managedACTAccessRequirement:P}},G={name:`eDUC preview — user at signature quota`,parameters:{msw:{handlers:[I,k(3,0),...x(d),...b(d),...y(d),...g(d)]}},args:{managedACTAccessRequirement:P,previewSrcOverride:F}},K={name:`eDUC preview — at signature quota with an in-flight envelope`,parameters:{msw:{handlers:[...O({canUpdateEnvelope:!1}),I,k(3,0),...x(d),...b(d),...y(d),...g(d)]}},args:{managedACTAccessRequirement:P,previewSrcOverride:F}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'eDUC preview step',
  args: {
    managedACTAccessRequirement: eDucManagedACTAccessRequirement,
    // The real portal servlet is not served in Storybook, so point the iframe at a public
    // sample PDF that the browser can render directly.
    previewSrcOverride: SAMPLE_PDF_URL
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'eDUC preview — in-flight envelope that can still be updated',
  parameters: {
    msw: {
      handlers: [...inFlightEnvelopeHandlers({
        canUpdateEnvelope: true
      }), previewHandler, ...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN)]
    }
  },
  args: {
    managedACTAccessRequirement: eDucManagedACTAccessRequirement,
    previewSrcOverride: SAMPLE_PDF_URL
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'eDUC preview — in-flight envelope that cannot be updated',
  parameters: {
    msw: {
      handlers: [...inFlightEnvelopeHandlers({
        canUpdateEnvelope: false,
        signatureStatus: {
          ...MOCK_EDUC_SIGNATURE_STATUS,
          ducStatus: 'completed'
        }
      }), previewHandler, ...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN)]
    }
  },
  args: {
    managedACTAccessRequirement: eDucManagedACTAccessRequirement,
    previewSrcOverride: SAMPLE_PDF_URL
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'eDUC preview — "keep or replace" confirmation',
  parameters: PreviewWithUpdatableEnvelope.parameters,
  args: PreviewWithUpdatableEnvelope.args,
  play: openSendConfirmation
}`,...H.parameters?.docs?.source},description:{story:`Pressing Send on a correctable envelope asks the user to choose, because only they know whether
their edits are material enough to warrant collecting signatures again.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'eDUC preview — "restart signing" confirmation',
  parameters: PreviewWithUnupdatableEnvelope.parameters,
  args: PreviewWithUnupdatableEnvelope.args,
  play: openSendConfirmation
}`,...U.parameters?.docs?.source},description:{story:`The same action on an envelope DocuSign can no longer correct, where replacing it is the only
way to deliver the user's changes.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'eDUC preview — user at signature quota',
  parameters: {
    msw: {
      handlers: [previewHandler, quotaHandler(3, 0), ...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN)]
    }
  },
  args: {
    managedACTAccessRequirement: eDucManagedACTAccessRequirement,
    previewSrcOverride: SAMPLE_PDF_URL
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'eDUC preview — at signature quota with an in-flight envelope',
  parameters: {
    msw: {
      handlers: [...inFlightEnvelopeHandlers({
        canUpdateEnvelope: false
      }), previewHandler, quotaHandler(3, 0), ...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN), ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN)]
    }
  },
  args: {
    managedACTAccessRequirement: eDucManagedACTAccessRequirement,
    previewSrcOverride: SAMPLE_PDF_URL
  }
}`,...K.parameters?.docs?.source},description:{story:`At quota with an envelope that still looks correctable, so Send stays enabled — updating an
envelope spends no routings. Pressing Send runs a precheck that disagrees, and because a
recreate would spend a routing the user doesn't have, the quota is reported instead of the
"start a new signature request?" confirmation.`,...K.parameters?.docs?.description}}},q=[`Preview`,`PreviewWithUpdatableEnvelope`,`PreviewWithUnupdatableEnvelope`,`KeepOrReplaceConfirmation`,`RestartSigningConfirmation`,`PreviewError`,`PreviewAtQuota`,`PreviewAtQuotaWithInFlightEnvelope`]}))();export{H as KeepOrReplaceConfirmation,z as Preview,G as PreviewAtQuota,K as PreviewAtQuotaWithInFlightEnvelope,W as PreviewError,V as PreviewWithUnupdatableEnvelope,B as PreviewWithUpdatableEnvelope,U as RestartSigningConfirmation,q as __namedExportsOrder,L as default};