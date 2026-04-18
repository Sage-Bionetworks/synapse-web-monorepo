import{v as s,z as i,b as n,s as o,H as u}from"./iframe-vLBQZPS1.js";import{E as m}from"./EvaluationCard-CIePv0bJ.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-BgrgvIET.js";import"./UserBadge-PCszth9B.js";import"./useUserBundle-BzYdunjk.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-vLDxttH1.js";import"./MenuItem-B9IS4RBy.js";import"./Card-vpuDZNT5.js";import"./Chip-BwFdox-s.js";import"./WarningDialog-B9DYsdJI.js";import"./ConfirmationDialog-DhT3Kl3D.js";import"./DialogBase-MXOqe2PM.js";import"./Close-w9C8mbRP.js";import"./HelpPopover-BDS7EbF2.js";import"./MarkdownPopover-DJzEVvrc.js";import"./LightTooltip-FFjGpbV1.js";import"./MarkdownSynapse-LkluOMjb.js";import"./SkeletonButton-Bpq0DUhs.js";import"./SkeletonInlineBlock-Ck9MEOcu.js";import"./SkeletonParagraph-BdLk36IL.js";import"./FormControlLabel-ChegGM40.js";import"./Checkbox-C06X4GkF.js";import"./SwitchBase-BpROeQ6w.js";import"./CardContent-CcYHKoT1.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/Challenge/EvaluationCard",component:m},r={evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"},onEdit:e(),onModifyAccess:e(),onSubmit:e(),onDeleteSuccess:e()},t={args:r},a={parameters:{stack:"mock",msw:{handlers:[...i(n),o.get(`${n}/repo/v1/evaluation/:id/permissions`,()=>u.json({canChangePermissions:!0,canDeleteSubmissions:!0,canEditSubmissionStatuses:!0,canParticipate:!0,canPublicRead:!0,canView:!0,canViewPrivateSubmissionStatusAnnotations:!0,ownerPrincipalId:s,canEdit:!0,canSubmit:!0,canDelete:!0},{status:200})),o.delete(`${n}/repo/v1/evaluation/:id`,()=>new Response("",{status:200}))]}},args:{...r,evaluation:{...r.evaluation,ownerId:s.toString()}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
