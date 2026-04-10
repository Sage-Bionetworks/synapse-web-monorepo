import{v as s,z as i,b as n,s as o,H as u}from"./iframe-90f2SQV6.js";import{E as m}from"./EvaluationCard-CW4QX8j7.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-DSxv-e8S.js";import"./UserBadge-BhjoWwGQ.js";import"./useUserBundle-C1tRTjHW.js";import"./useUserGroupHeader-3u-W-R_V.js";import"./SkeletonTable-CUhBOjKD.js";import"./MenuItem-BuPaY9i0.js";import"./Card-BjkUBjOd.js";import"./Chip-DkWyanB2.js";import"./WarningDialog-BZygYE3J.js";import"./ConfirmationDialog-DhI1owhm.js";import"./DialogBase-BMvwer8M.js";import"./Close-BwldKowt.js";import"./HelpPopover-3OLq6Qvv.js";import"./MarkdownPopover-C7xEr92D.js";import"./LightTooltip-DEc6XzHa.js";import"./MarkdownSynapse-CYc-SfSz.js";import"./SkeletonButton-DayzDEfl.js";import"./SkeletonInlineBlock-5v-gOL2x.js";import"./SkeletonParagraph-Bta19Z9s.js";import"./FormControlLabel-DglLXMgl.js";import"./Checkbox-CF10eWfP.js";import"./SwitchBase-BM0I7EUL.js";import"./CardContent-DCA9WJ-f.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/Challenge/EvaluationCard",component:m},r={evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"},onEdit:e(),onModifyAccess:e(),onSubmit:e(),onDeleteSuccess:e()},t={args:r},a={parameters:{stack:"mock",msw:{handlers:[...i(n),o.get(`${n}/repo/v1/evaluation/:id/permissions`,()=>u.json({canChangePermissions:!0,canDeleteSubmissions:!0,canEditSubmissionStatuses:!0,canParticipate:!0,canPublicRead:!0,canView:!0,canViewPrivateSubmissionStatusAnnotations:!0,ownerPrincipalId:s,canEdit:!0,canSubmit:!0,canDelete:!0},{status:200})),o.delete(`${n}/repo/v1/evaluation/:id`,()=>new Response("",{status:200}))]}},args:{...r,evaluation:{...r.evaluation,ownerId:s.toString()}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
