import{x as s,g as i,a as n,u as o,H as u}from"./iframe-DW4EtDFR.js";import{E as m}from"./EvaluationCard-DgR1Q01u.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-BgoV76d8.js";import"./UserBadge-BDGrhvHF.js";import"./useUserBundle-0eDzSDJE.js";import"./SkeletonTable-ItfNMNmd.js";import"./MenuItem-Cc9sDD7i.js";import"./Card-C9YZLq29.js";import"./Chip-CUP-lTls.js";import"./WarningDialog-CPbRFHxm.js";import"./ConfirmationDialog-BP8fvy3x.js";import"./DialogBase-CQkYTY7H.js";import"./Close-_nKTpQqj.js";import"./HelpPopover-BJUnqSJY.js";import"./MarkdownPopover-Ddkoqa14.js";import"./LightTooltip-RHqCPVzc.js";import"./MarkdownSynapse-BRThLhl9.js";import"./SkeletonButton-DsCjZbv1.js";import"./SkeletonInlineBlock-ItfWjoQ8.js";import"./SkeletonParagraph-B74Z-tR5.js";import"./FormControlLabel-D6ErXhmT.js";import"./Checkbox-DrHdzPHL.js";import"./SwitchBase-DzaBh5YX.js";import"./CardContent-BIUFHrFT.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/Challenge/EvaluationCard",component:m},r={evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"},onEdit:e(),onModifyAccess:e(),onSubmit:e(),onDeleteSuccess:e()},t={args:r},a={parameters:{stack:"mock",msw:{handlers:[...i(n),o.get(`${n}/repo/v1/evaluation/:id/permissions`,()=>u.json({canChangePermissions:!0,canDeleteSubmissions:!0,canEditSubmissionStatuses:!0,canParticipate:!0,canPublicRead:!0,canView:!0,canViewPrivateSubmissionStatusAnnotations:!0,ownerPrincipalId:s,canEdit:!0,canSubmit:!0,canDelete:!0},{status:200})),o.delete(`${n}/repo/v1/evaluation/:id`,()=>new Response("",{status:200}))]}},args:{...r,evaluation:{...r.evaluation,ownerId:s.toString()}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const y=["Card","CardWithDeleteModal"];export{t as Card,a as CardWithDeleteModal,y as __namedExportsOrder,k as default};
