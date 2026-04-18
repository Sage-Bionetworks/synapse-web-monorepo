import{v as s,z as i,b as n,s as o,H as u}from"./iframe-BnslxpU_.js";import{E as m}from"./EvaluationCard-ChOHi33k.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-D-eu8IeU.js";import"./UserBadge-BgBEo1dQ.js";import"./useUserBundle-C1FSIxUt.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-CoVehSLQ.js";import"./MenuItem-DtwhjM27.js";import"./Card-CRK3-fg-.js";import"./Chip-Bn_oC1Yj.js";import"./WarningDialog-ByZeK7If.js";import"./ConfirmationDialog-zoPPJpy4.js";import"./DialogBase-BFSEb07D.js";import"./Close-zw5i39wh.js";import"./HelpPopover-DEMZmKs_.js";import"./MarkdownPopover--8H7HGCA.js";import"./LightTooltip-CSsPVoOw.js";import"./MarkdownSynapse-CiX0_RGH.js";import"./SkeletonButton-5fVnmkER.js";import"./SkeletonInlineBlock-DPXtIPY8.js";import"./SkeletonParagraph-B0oRHwOu.js";import"./FormControlLabel-DFnjR6do.js";import"./Checkbox-LdJOabl-.js";import"./SwitchBase-D8Y_Jyat.js";import"./CardContent-DmKUiC51.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/Challenge/EvaluationCard",component:m},r={evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"},onEdit:e(),onModifyAccess:e(),onSubmit:e(),onDeleteSuccess:e()},t={args:r},a={parameters:{stack:"mock",msw:{handlers:[...i(n),o.get(`${n}/repo/v1/evaluation/:id/permissions`,()=>u.json({canChangePermissions:!0,canDeleteSubmissions:!0,canEditSubmissionStatuses:!0,canParticipate:!0,canPublicRead:!0,canView:!0,canViewPrivateSubmissionStatusAnnotations:!0,ownerPrincipalId:s,canEdit:!0,canSubmit:!0,canDelete:!0},{status:200})),o.delete(`${n}/repo/v1/evaluation/:id`,()=>new Response("",{status:200}))]}},args:{...r,evaluation:{...r.evaluation,ownerId:s.toString()}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
