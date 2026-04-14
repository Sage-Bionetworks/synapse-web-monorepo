import{v as s,z as i,b as n,s as o,H as u}from"./iframe-C5G3mSsR.js";import{E as m}from"./EvaluationCard-BIlabCmy.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-CkyBWr8s.js";import"./UserBadge-CvgJynwa.js";import"./useUserBundle-b7Uv0-A-.js";import"./useUserGroupHeader-9PNLN8Yb.js";import"./SkeletonTable-q_wTrDuF.js";import"./MenuItem-DBKy37Hp.js";import"./Card-cZbkiVcl.js";import"./Chip-j4Xp3f_v.js";import"./WarningDialog-xdFdmTEX.js";import"./ConfirmationDialog-Br5927dU.js";import"./DialogBase-D3E-ORM4.js";import"./Close-DMmJiCqc.js";import"./HelpPopover-TqGD_tY5.js";import"./MarkdownPopover-C1geqiut.js";import"./LightTooltip-BCSWtQqF.js";import"./MarkdownSynapse-BKYTzrKF.js";import"./SkeletonButton-_Eu_07NL.js";import"./SkeletonInlineBlock-BpaxCT_H.js";import"./SkeletonParagraph-B8DwnroK.js";import"./FormControlLabel-k-SWrQ8f.js";import"./Checkbox-CB1vuwHn.js";import"./SwitchBase-CO_2vZSB.js";import"./CardContent-Dct1stPE.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,y={title:"Synapse/Challenge/EvaluationCard",component:m},r={evaluation:{id:"9614690",etag:"6f8aa977-527e-4b2f-9d87-beab2db99503",name:"Sample Evaluation Queue",description:"This is a sample Evaluation Queue",ownerId:"3345868",createdOn:"2021-01-05T00:41:11.670Z",contentSource:"syn23679309",submissionInstructionsMessage:"Do a barrel roll",submissionReceiptMessage:"We received your submission"},onEdit:e(),onModifyAccess:e(),onSubmit:e(),onDeleteSuccess:e()},t={args:r},a={parameters:{stack:"mock",msw:{handlers:[...i(n),o.get(`${n}/repo/v1/evaluation/:id/permissions`,()=>u.json({canChangePermissions:!0,canDeleteSubmissions:!0,canEditSubmissionStatuses:!0,canParticipate:!0,canPublicRead:!0,canView:!0,canViewPrivateSubmissionStatusAnnotations:!0,ownerPrincipalId:s,canEdit:!0,canSubmit:!0,canDelete:!0},{status:200})),o.delete(`${n}/repo/v1/evaluation/:id`,()=>new Response("",{status:200}))]}},args:{...r,evaluation:{...r.evaluation,ownerId:s.toString()}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
