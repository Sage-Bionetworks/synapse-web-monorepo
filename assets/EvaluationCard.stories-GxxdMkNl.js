import{v as s,z as i,b as n,s as o,H as u}from"./iframe-BuKUHwYF.js";import{E as m}from"./EvaluationCard-CiQFyi-7.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-BJtjH6c2.js";import"./UserBadge-DwsW3g_K.js";import"./useUserBundle-DkD9QSSJ.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-Ca_8DlU1.js";import"./MenuItem-DmEYYO79.js";import"./Card-B6TgluZN.js";import"./Chip-D3Gu_L5i.js";import"./WarningDialog-3b3jl7wK.js";import"./ConfirmationDialog-BDmP_pr5.js";import"./DialogBase-C4vg5HBd.js";import"./Close-D3qIPQRQ.js";import"./HelpPopover-D_lIBi9b.js";import"./MarkdownPopover-NRLWKKDC.js";import"./LightTooltip-C8cY03H6.js";import"./MarkdownSynapse-CiDjaR4B.js";import"./SkeletonButton-DoOKAwEq.js";import"./SkeletonInlineBlock-Cs7usZ_r.js";import"./SkeletonParagraph-CA2_vLea.js";import"./FormControlLabel-BQKBoEMA.js";import"./Checkbox-rNgXiDJm.js";import"./SwitchBase-Cq5wm8XC.js";import"./CardContent-BbzCXS88.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/Challenge/EvaluationCard",component:m},r={evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"},onEdit:e(),onModifyAccess:e(),onSubmit:e(),onDeleteSuccess:e()},t={args:r},a={parameters:{stack:"mock",msw:{handlers:[...i(n),o.get(`${n}/repo/v1/evaluation/:id/permissions`,()=>u.json({canChangePermissions:!0,canDeleteSubmissions:!0,canEditSubmissionStatuses:!0,canParticipate:!0,canPublicRead:!0,canView:!0,canViewPrivateSubmissionStatusAnnotations:!0,ownerPrincipalId:s,canEdit:!0,canSubmit:!0,canDelete:!0},{status:200})),o.delete(`${n}/repo/v1/evaluation/:id`,()=>new Response("",{status:200}))]}},args:{...r,evaluation:{...r.evaluation,ownerId:s.toString()}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
