import{v as s,z as i,b as n,s as o,H as u}from"./iframe-CFYObmv2.js";import{E as m}from"./EvaluationCard-V4OEhSN-.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-gZIVbry_.js";import"./UserBadge-CqWrPdDF.js";import"./useUserBundle-CFoU7ptg.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-D1Oc41tF.js";import"./MenuItem-1x19aVl7.js";import"./Card-CVTuX8UO.js";import"./Chip-DVyYNIMf.js";import"./WarningDialog-iRJ2Wt-d.js";import"./ConfirmationDialog-CL-fo0eW.js";import"./DialogBase-RIdyfWbA.js";import"./Close-Bc2bfKRm.js";import"./HelpPopover-X5bLlJph.js";import"./MarkdownPopover-BK0N2ea-.js";import"./LightTooltip-CtPj8f6G.js";import"./MarkdownSynapse-EyWbEoPB.js";import"./SkeletonButton-BAoT4yfs.js";import"./SkeletonInlineBlock-B8gtORn3.js";import"./SkeletonParagraph-2BG-wyQ2.js";import"./FormControlLabel-X6sNt4uF.js";import"./Checkbox-DqoMzdfH.js";import"./SwitchBase-CeR8qk8o.js";import"./CardContent-Dsax6H4v.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/Challenge/EvaluationCard",component:m},r={evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"},onEdit:e(),onModifyAccess:e(),onSubmit:e(),onDeleteSuccess:e()},t={args:r},a={parameters:{stack:"mock",msw:{handlers:[...i(n),o.get(`${n}/repo/v1/evaluation/:id/permissions`,()=>u.json({canChangePermissions:!0,canDeleteSubmissions:!0,canEditSubmissionStatuses:!0,canParticipate:!0,canPublicRead:!0,canView:!0,canViewPrivateSubmissionStatusAnnotations:!0,ownerPrincipalId:s,canEdit:!0,canSubmit:!0,canDelete:!0},{status:200})),o.delete(`${n}/repo/v1/evaluation/:id`,()=>new Response("",{status:200}))]}},args:{...r,evaluation:{...r.evaluation,ownerId:s.toString()}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
