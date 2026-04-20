import{v as s,z as i,b as n,s as o,H as u}from"./iframe-CZUUdnAP.js";import{E as m}from"./EvaluationCard-Du4IhXfz.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-CJAbPgQo.js";import"./UserBadge-CgUWMwJt.js";import"./useUserBundle-CqpwNloT.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-B92SNSTz.js";import"./MenuItem-BQBfTSFf.js";import"./Card-BktRylCw.js";import"./Chip-vSFEg4gP.js";import"./WarningDialog-IIVCHAPY.js";import"./ConfirmationDialog-bHj4aTcl.js";import"./DialogBase-vGJ-9Ozq.js";import"./Close-C0cVzGCV.js";import"./HelpPopover-BVtbTHqG.js";import"./MarkdownPopover-D3m2bqb5.js";import"./LightTooltip-DSgBjgHB.js";import"./MarkdownSynapse-m6An14vR.js";import"./SkeletonButton-u1mXBMmd.js";import"./SkeletonInlineBlock-Dwwns8en.js";import"./SkeletonParagraph-Dccn5vm_.js";import"./FormControlLabel-Cv5LGeMa.js";import"./Checkbox-DsRD5Alo.js";import"./SwitchBase-B1xcpsp0.js";import"./CardContent-BPUVnyPT.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/Challenge/EvaluationCard",component:m},r={evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"},onEdit:e(),onModifyAccess:e(),onSubmit:e(),onDeleteSuccess:e()},t={args:r},a={parameters:{stack:"mock",msw:{handlers:[...i(n),o.get(`${n}/repo/v1/evaluation/:id/permissions`,()=>u.json({canChangePermissions:!0,canDeleteSubmissions:!0,canEditSubmissionStatuses:!0,canParticipate:!0,canPublicRead:!0,canView:!0,canViewPrivateSubmissionStatusAnnotations:!0,ownerPrincipalId:s,canEdit:!0,canSubmit:!0,canDelete:!0},{status:200})),o.delete(`${n}/repo/v1/evaluation/:id`,()=>new Response("",{status:200}))]}},args:{...r,evaluation:{...r.evaluation,ownerId:s.toString()}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
