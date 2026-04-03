import{v as s,z as i,b as n,s as o,H as u}from"./iframe-DYswlUGP.js";import{E as m}from"./EvaluationCard-C_-bJF0S.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-Bt5FlFl0.js";import"./UserBadge-DUmGtykH.js";import"./useUserBundle-DOc2ZPa9.js";import"./SkeletonTable-D2i5wmbG.js";import"./MenuItem-_kEtlbZc.js";import"./Card-CwPDBa8H.js";import"./Chip-DAxgxn8_.js";import"./WarningDialog-B9lyfd4s.js";import"./ConfirmationDialog-BeOhck-W.js";import"./DialogBase-DElhgeR1.js";import"./Close-CREisBj0.js";import"./HelpPopover-CfOwihTA.js";import"./MarkdownPopover-WusZcULb.js";import"./LightTooltip-BnjP_fyR.js";import"./MarkdownSynapse-Dkd6SgfN.js";import"./SkeletonButton-DEMQuh9j.js";import"./SkeletonInlineBlock-CUdvST4e.js";import"./SkeletonParagraph-DYuPzAGZ.js";import"./FormControlLabel-D5Zyhonu.js";import"./Checkbox-BJOMAjKn.js";import"./SwitchBase-Dw5npIqo.js";import"./CardContent-CuYWymyU.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/Challenge/EvaluationCard",component:m},r={evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"},onEdit:e(),onModifyAccess:e(),onSubmit:e(),onDeleteSuccess:e()},t={args:r},a={parameters:{stack:"mock",msw:{handlers:[...i(n),o.get(`${n}/repo/v1/evaluation/:id/permissions`,()=>u.json({canChangePermissions:!0,canDeleteSubmissions:!0,canEditSubmissionStatuses:!0,canParticipate:!0,canPublicRead:!0,canView:!0,canViewPrivateSubmissionStatusAnnotations:!0,ownerPrincipalId:s,canEdit:!0,canSubmit:!0,canDelete:!0},{status:200})),o.delete(`${n}/repo/v1/evaluation/:id`,()=>new Response("",{status:200}))]}},args:{...r,evaluation:{...r.evaluation,ownerId:s.toString()}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
