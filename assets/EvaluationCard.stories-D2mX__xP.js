import{v as s,z as i,b as n,s as o,H as u}from"./iframe-QSWh_nl6.js";import{E as m}from"./EvaluationCard-B4Bps5c4.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-BHrO3bp1.js";import"./UserBadge-B7mCgiDb.js";import"./useUserBundle-Dx6kjAkx.js";import"./useUserGroupHeader-Bv8jkTw1.js";import"./SkeletonTable-D0oXxerW.js";import"./MenuItem-DfWOa7RV.js";import"./Card-Dsubg--P.js";import"./Chip-BVgBfsjl.js";import"./WarningDialog-BtoGBElE.js";import"./ConfirmationDialog-CX4ewaN9.js";import"./DialogBase-D2MmUTIb.js";import"./Close-QryVeLEP.js";import"./HelpPopover-Bcffqgpu.js";import"./MarkdownPopover-c1W7vBzm.js";import"./LightTooltip-6Ty6ser2.js";import"./MarkdownSynapse-CJNodr3S.js";import"./SkeletonButton-Ca6I-8rV.js";import"./SkeletonInlineBlock-rFa2WtsV.js";import"./SkeletonParagraph-C2ql9lI3.js";import"./FormControlLabel-C2B2UHHo.js";import"./Checkbox-CqoChSP_.js";import"./SwitchBase-o_ZrMHWt.js";import"./CardContent-jMWkPHTb.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/Challenge/EvaluationCard",component:m},r={evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"},onEdit:e(),onModifyAccess:e(),onSubmit:e(),onDeleteSuccess:e()},t={args:r},a={parameters:{stack:"mock",msw:{handlers:[...i(n),o.get(`${n}/repo/v1/evaluation/:id/permissions`,()=>u.json({canChangePermissions:!0,canDeleteSubmissions:!0,canEditSubmissionStatuses:!0,canParticipate:!0,canPublicRead:!0,canView:!0,canViewPrivateSubmissionStatusAnnotations:!0,ownerPrincipalId:s,canEdit:!0,canSubmit:!0,canDelete:!0},{status:200})),o.delete(`${n}/repo/v1/evaluation/:id`,()=>new Response("",{status:200}))]}},args:{...r,evaluation:{...r.evaluation,ownerId:s.toString()}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
