import{w as s,g as i,n as o,b as a,H as u}from"./iframe-BHpb1ner.js";import{E as m}from"./EvaluationCard-Djf9Buq5.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-Cqqkvk8-.js";import"./UserBadge-Q7hpWjW2.js";import"./useUserBundle-DSde-19S.js";import"./SkeletonTable-C5MYC27c.js";import"./MenuItem-tefU5X3f.js";import"./Card-BMPVT45X.js";import"./Chip-BwbGtSpr.js";import"./WarningDialog-Kf8p17o6.js";import"./ConfirmationDialog-BBn8sgdh.js";import"./DialogBase-BbLmDA72.js";import"./Close-a0iRQpbL.js";import"./HelpPopover-CnWfGqNH.js";import"./MarkdownPopover-C_qk4xql.js";import"./LightTooltip-BOjaJFFL.js";import"./MarkdownSynapse-DDUpKj2I.js";import"./SkeletonButton-L8FvKIZ9.js";import"./SkeletonInlineBlock-CZB6gyiy.js";import"./SkeletonParagraph-DtQNsEbz.js";import"./FormControlLabel-tODm-4uQ.js";import"./Checkbox-CKMpfQYH.js";import"./SwitchBase-D-w4aRLo.js";import"./CardContent-DOMrPNHZ.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/Challenge/EvaluationCard",component:m},r={evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"},onEdit:e(),onModifyAccess:e(),onSubmit:e(),onDeleteSuccess:e()},t={args:r},n={parameters:{stack:"mock",msw:{handlers:[...i(a),o.get(`${a}/repo/v1/evaluation/:id/permissions`,()=>u.json({canChangePermissions:!0,canDeleteSubmissions:!0,canEditSubmissionStatuses:!0,canParticipate:!0,canPublicRead:!0,canView:!0,canViewPrivateSubmissionStatusAnnotations:!0,ownerPrincipalId:s,canEdit:!0,canSubmit:!0,canDelete:!0},{status:200})),o.delete(`${a}/repo/v1/evaluation/:id`,()=>new Response("",{status:200}))]}},args:{...r,evaluation:{...r.evaluation,ownerId:s.toString()}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: evaluationArgs
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const y=["Card","CardWithDeleteModal"];export{t as Card,n as CardWithDeleteModal,y as __namedExportsOrder,k as default};
