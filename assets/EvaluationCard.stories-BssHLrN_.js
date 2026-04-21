import{v as s,z as i,b as n,s as o,H as u}from"./iframe-BDH9K3aQ.js";import{E as m}from"./EvaluationCard-DccL-CVc.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-h3Pt7TAq.js";import"./UserBadge-B2zVNa36.js";import"./useUserBundle-BHTJB607.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-DpnDnZ6A.js";import"./MenuItem-x7e5wLEf.js";import"./Card-BL3I6Ntg.js";import"./Chip-DozeHiZL.js";import"./WarningDialog-B-I0se2l.js";import"./ConfirmationDialog-Baaf23T_.js";import"./DialogBase-B3CH9IvN.js";import"./Close-BQ3Dsdqr.js";import"./HelpPopover-rgAqoORW.js";import"./MarkdownPopover-DSGPjAkb.js";import"./LightTooltip-CH8V7Sc-.js";import"./MarkdownSynapse-BfgcgRyQ.js";import"./SkeletonButton-8Qglx0Lx.js";import"./SkeletonInlineBlock-C7j3Fduy.js";import"./SkeletonParagraph-4XI-GQEQ.js";import"./FormControlLabel-hO8hM_0u.js";import"./Checkbox-Bh-etNab.js";import"./SwitchBase-DtmVnPYE.js";import"./CardContent-DXr8nEpZ.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/Challenge/EvaluationCard",component:m},r={evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"},onEdit:e(),onModifyAccess:e(),onSubmit:e(),onDeleteSuccess:e()},t={args:r},a={parameters:{stack:"mock",msw:{handlers:[...i(n),o.get(`${n}/repo/v1/evaluation/:id/permissions`,()=>u.json({canChangePermissions:!0,canDeleteSubmissions:!0,canEditSubmissionStatuses:!0,canParticipate:!0,canPublicRead:!0,canView:!0,canViewPrivateSubmissionStatusAnnotations:!0,ownerPrincipalId:s,canEdit:!0,canSubmit:!0,canDelete:!0},{status:200})),o.delete(`${n}/repo/v1/evaluation/:id`,()=>new Response("",{status:200}))]}},args:{...r,evaluation:{...r.evaluation,ownerId:s.toString()}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: evaluationArgs
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), http.get(\`\${MOCK_REPO_ORIGIN}/repo/v1/evaluation/:id/permissions\`, () => {
        return HttpResponse.json({
          canChangePermissions: true,
          canDeleteSubmissions: true,
          canEditSubmissionStatuses: true,
          canParticipate: true,
          canPublicRead: true,
          canView: true,
          canViewPrivateSubmissionStatusAnnotations: true,
          ownerPrincipalId: MOCK_USER_ID,
          canEdit: true,
          canSubmit: true,
          canDelete: true
        }, {
          status: 200
        });
      }), http.delete(\`\${MOCK_REPO_ORIGIN}/repo/v1/evaluation/:id\`, () => new Response('', {
        status: 200
      }))]
    }
  },
  args: {
    ...evaluationArgs,
    evaluation: {
      ...evaluationArgs.evaluation,
      ownerId: MOCK_USER_ID.toString()
    }
  }
}`,...a.parameters?.docs?.source}}};const G=["Card","CardWithDeleteModal"];export{t as Card,a as CardWithDeleteModal,G as __namedExportsOrder,y as default};
