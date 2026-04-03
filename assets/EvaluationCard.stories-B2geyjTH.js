import{v as s,z as i,b as n,s as o,H as u}from"./iframe-AuqRm6Xj.js";import{E as m}from"./EvaluationCard-B7wI-ZKI.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-pORM7dXW.js";import"./UserBadge-94-bM4a7.js";import"./useUserBundle-B1FabnzQ.js";import"./SkeletonTable-C0VRg4xn.js";import"./MenuItem-e1skeM_z.js";import"./Card-D38Rt5-Y.js";import"./Chip-DC7pM5qx.js";import"./WarningDialog-9fSwh9nN.js";import"./ConfirmationDialog-VlIF6_Hw.js";import"./DialogBase-Bp-oXsnD.js";import"./Close-wXc8W0YL.js";import"./HelpPopover-u8xzPavD.js";import"./MarkdownPopover-Dmj83Psx.js";import"./LightTooltip-BMQNdjTq.js";import"./MarkdownSynapse-DiqCpyPK.js";import"./SkeletonButton-De9SiVJE.js";import"./SkeletonInlineBlock-CL4j-wc-.js";import"./SkeletonParagraph-B6IfoMOd.js";import"./FormControlLabel-hQp6mAf4.js";import"./Checkbox-MxfcR8V3.js";import"./SwitchBase-DkN8Vn3a.js";import"./CardContent-v3174aBG.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/Challenge/EvaluationCard",component:m},r={evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"},onEdit:e(),onModifyAccess:e(),onSubmit:e(),onDeleteSuccess:e()},t={args:r},a={parameters:{stack:"mock",msw:{handlers:[...i(n),o.get(`${n}/repo/v1/evaluation/:id/permissions`,()=>u.json({canChangePermissions:!0,canDeleteSubmissions:!0,canEditSubmissionStatuses:!0,canParticipate:!0,canPublicRead:!0,canView:!0,canViewPrivateSubmissionStatusAnnotations:!0,ownerPrincipalId:s,canEdit:!0,canSubmit:!0,canDelete:!0},{status:200})),o.delete(`${n}/repo/v1/evaluation/:id`,()=>new Response("",{status:200}))]}},args:{...r,evaluation:{...r.evaluation,ownerId:s.toString()}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
