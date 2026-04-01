import{w as s,g as i,n as o,b as a,H as u}from"./iframe-CvDTy6mw.js";import{E as m}from"./EvaluationCard-Dv7NKl9n.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-sMXpf4su.js";import"./UserBadge-PoyEvAzl.js";import"./useUserBundle-Dj5B8O2o.js";import"./SkeletonTable-DjmsDm7y.js";import"./MenuItem-DnOuV5Bw.js";import"./Card-DQ_YpR0y.js";import"./Chip-DmppX2NC.js";import"./WarningDialog-CLyw9HKH.js";import"./ConfirmationDialog-Cfqxxxlf.js";import"./DialogBase-DQQSlD3x.js";import"./Close-d7PqJiCL.js";import"./HelpPopover-Bk8Cc2qG.js";import"./MarkdownPopover-CX1rkX4a.js";import"./LightTooltip-Cn6AM7tu.js";import"./MarkdownSynapse-BqOzEXKP.js";import"./SkeletonButton-DrRqzwrL.js";import"./SkeletonInlineBlock-DRwNak6O.js";import"./SkeletonParagraph-DAWCny1c.js";import"./FormControlLabel-BBtghWJq.js";import"./Checkbox-D534fmQJ.js";import"./SwitchBase-JpV5kKh9.js";import"./CardContent-CMiPmu8q.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/Challenge/EvaluationCard",component:m},r={evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"},onEdit:e(),onModifyAccess:e(),onSubmit:e(),onDeleteSuccess:e()},t={args:r},n={parameters:{stack:"mock",msw:{handlers:[...i(a),o.get(`${a}/repo/v1/evaluation/:id/permissions`,()=>u.json({canChangePermissions:!0,canDeleteSubmissions:!0,canEditSubmissionStatuses:!0,canParticipate:!0,canPublicRead:!0,canView:!0,canViewPrivateSubmissionStatusAnnotations:!0,ownerPrincipalId:s,canEdit:!0,canSubmit:!0,canDelete:!0},{status:200})),o.delete(`${a}/repo/v1/evaluation/:id`,()=>new Response("",{status:200}))]}},args:{...r,evaluation:{...r.evaluation,ownerId:s.toString()}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
