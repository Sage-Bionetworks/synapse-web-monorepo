import{v as s,z as i,b as n,s as o,H as u}from"./iframe-DIHutOM2.js";import{E as m}from"./EvaluationCard-CSP-biHU.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-BGSarMlT.js";import"./UserBadge-F-3JUNkT.js";import"./useUserBundle-C5_SG0-L.js";import"./useUserGroupHeader-DQOVdta_.js";import"./SkeletonTable-C4N-t1H3.js";import"./MenuItem-DK0615By.js";import"./Card-BmTXRzNL.js";import"./Chip-BE1NWb4W.js";import"./WarningDialog-D3rLyO5k.js";import"./ConfirmationDialog-PWqiGP-s.js";import"./DialogBase-BFJUh7rx.js";import"./Close-66Wa0jNb.js";import"./HelpPopover-Em0_eBy5.js";import"./MarkdownPopover-WQLNFQ0C.js";import"./LightTooltip-BMq0VrbL.js";import"./MarkdownSynapse-8m84fN3d.js";import"./SkeletonButton-zFoMoYHg.js";import"./SkeletonInlineBlock-CxHTYkDw.js";import"./SkeletonParagraph-BIGOfadt.js";import"./FormControlLabel-D-4Nscdf.js";import"./Checkbox-BUXxhWF5.js";import"./SwitchBase-GpXGIWUe.js";import"./CardContent-D3zFE-e3.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/Challenge/EvaluationCard",component:m},r={evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"},onEdit:e(),onModifyAccess:e(),onSubmit:e(),onDeleteSuccess:e()},t={args:r},a={parameters:{stack:"mock",msw:{handlers:[...i(n),o.get(`${n}/repo/v1/evaluation/:id/permissions`,()=>u.json({canChangePermissions:!0,canDeleteSubmissions:!0,canEditSubmissionStatuses:!0,canParticipate:!0,canPublicRead:!0,canView:!0,canViewPrivateSubmissionStatusAnnotations:!0,ownerPrincipalId:s,canEdit:!0,canSubmit:!0,canDelete:!0},{status:200})),o.delete(`${n}/repo/v1/evaluation/:id`,()=>new Response("",{status:200}))]}},args:{...r,evaluation:{...r.evaluation,ownerId:s.toString()}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
