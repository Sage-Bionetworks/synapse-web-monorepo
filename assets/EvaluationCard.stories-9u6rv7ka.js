import{v as s,z as i,b as n,s as o,H as u}from"./iframe-DvEsUTpQ.js";import{E as m}from"./EvaluationCard-CS33Vaqz.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-Mesft7Ef.js";import"./UserBadge-CXcwNTSZ.js";import"./useUserBundle-wmllpVgG.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-Dt5bLLrY.js";import"./MenuItem-DvqM882a.js";import"./Card-BwCmC7e8.js";import"./Chip-DM8j9a4z.js";import"./WarningDialog-XkImYRiB.js";import"./ConfirmationDialog-DkIXQsLU.js";import"./DialogBase-DjSguv9P.js";import"./Close-g9h1bwgZ.js";import"./HelpPopover-KzPfIUfL.js";import"./MarkdownPopover-zfAn5NTB.js";import"./LightTooltip-CPlesbUn.js";import"./MarkdownSynapse-G6S7jkSU.js";import"./SkeletonButton-Dd7TiKIa.js";import"./SkeletonInlineBlock-D94lxhr7.js";import"./SkeletonParagraph-lw_IwEhg.js";import"./FormControlLabel-BcuVfQyz.js";import"./Checkbox-Cq6VSCz7.js";import"./SwitchBase-jh5RIPFl.js";import"./CardContent-CujrLUJa.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/Challenge/EvaluationCard",component:m},r={evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"},onEdit:e(),onModifyAccess:e(),onSubmit:e(),onDeleteSuccess:e()},t={args:r},a={parameters:{stack:"mock",msw:{handlers:[...i(n),o.get(`${n}/repo/v1/evaluation/:id/permissions`,()=>u.json({canChangePermissions:!0,canDeleteSubmissions:!0,canEditSubmissionStatuses:!0,canParticipate:!0,canPublicRead:!0,canView:!0,canViewPrivateSubmissionStatusAnnotations:!0,ownerPrincipalId:s,canEdit:!0,canSubmit:!0,canDelete:!0},{status:200})),o.delete(`${n}/repo/v1/evaluation/:id`,()=>new Response("",{status:200}))]}},args:{...r,evaluation:{...r.evaluation,ownerId:s.toString()}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
