import{o as e}from"./preload-helper-CsHsquCd.js";import{_ as t,i as n,t as r}from"./core-CI8DLeHF.js";import{Pn as i,Rn as a}from"./synapse-client-CmSRto0s.js";import{i as o}from"./mock_user_profile-DpGVXyMi.js";import{d as s,f as c}from"./iframe-CynZA66X.js";import{n as l,t as u}from"./EvaluationCard-CxhufFFp.js";var d,f,p,m,h,g;e((()=>{c(),o(),a(),r(),l(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Synapse/Challenge/EvaluationCard`,component:u},p={evaluation:{id:`9614690`,etag:`6f8aa977-527e-4b2f-9d87-beab2db99503`,name:`Sample Evaluation Queue`,description:`This is a sample Evaluation Queue`,ownerId:`3345868`,createdOn:`2021-01-05T00:41:11.670Z`,contentSource:`syn23679309`,submissionInstructionsMessage:`Do a barrel roll`,submissionReceiptMessage:`We received your submission`},onEdit:d(),onModifyAccess:d(),onSubmit:d(),onDeleteSuccess:d()},m={args:p},h={parameters:{stack:`mock`,msw:{handlers:[...s(i),n.get(`${i}/repo/v1/evaluation/:id/permissions`,()=>t.json({canChangePermissions:!0,canDeleteSubmissions:!0,canEditSubmissionStatuses:!0,canParticipate:!0,canPublicRead:!0,canView:!0,canViewPrivateSubmissionStatusAnnotations:!0,ownerPrincipalId:999,canEdit:!0,canSubmit:!0,canDelete:!0},{status:200})),n.delete(`${i}/repo/v1/evaluation/:id`,()=>new Response(``,{status:200}))]}},args:{...p,evaluation:{...p.evaluation,ownerId:`999`}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: evaluationArgs
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Card`,`CardWithDeleteModal`]}))();export{m as Card,h as CardWithDeleteModal,g as __namedExportsOrder,f as default};