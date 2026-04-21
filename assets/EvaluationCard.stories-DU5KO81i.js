import{v as s,z as i,b as n,s as o,H as u}from"./iframe-B_8Pbtyy.js";import{E as m}from"./EvaluationCard-BQt-Wz3A.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-Bsdj-TFD.js";import"./UserBadge-C_HLmkM9.js";import"./useUserBundle-AYZLZe6H.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-DZYgPiW7.js";import"./MenuItem-B5j_dwt3.js";import"./Card-TCSc9gJb.js";import"./Chip-CrOe6yxn.js";import"./WarningDialog-CkD-8qCw.js";import"./ConfirmationDialog-Cj7M6sK5.js";import"./DialogBase-BsBgus9N.js";import"./Close-DmraeU9A.js";import"./HelpPopover-DFhkNVag.js";import"./MarkdownPopover-CqCpxQwy.js";import"./LightTooltip-DL-di1QQ.js";import"./MarkdownSynapse-HYoIGTcS.js";import"./SkeletonButton-C2boYaKt.js";import"./SkeletonInlineBlock-ChbxFlxk.js";import"./SkeletonParagraph-CanILnI9.js";import"./FormControlLabel-Dkt0Kpn_.js";import"./Checkbox-DCx96Ow5.js";import"./SwitchBase-CoXKjNiI.js";import"./CardContent-DPkcQWx7.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/Challenge/EvaluationCard",component:m},r={evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"},onEdit:e(),onModifyAccess:e(),onSubmit:e(),onDeleteSuccess:e()},t={args:r},a={parameters:{stack:"mock",msw:{handlers:[...i(n),o.get(`${n}/repo/v1/evaluation/:id/permissions`,()=>u.json({canChangePermissions:!0,canDeleteSubmissions:!0,canEditSubmissionStatuses:!0,canParticipate:!0,canPublicRead:!0,canView:!0,canViewPrivateSubmissionStatusAnnotations:!0,ownerPrincipalId:s,canEdit:!0,canSubmit:!0,canDelete:!0},{status:200})),o.delete(`${n}/repo/v1/evaluation/:id`,()=>new Response("",{status:200}))]}},args:{...r,evaluation:{...r.evaluation,ownerId:s.toString()}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
