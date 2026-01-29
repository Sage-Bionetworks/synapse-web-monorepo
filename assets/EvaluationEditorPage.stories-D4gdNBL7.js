import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-DOA--ypP.js";import{E as d}from"./EvaluationEditorPage-DUfE2rtf.js";import"./index-Chi_LkuB.js";import"./WarningDialog-PsVMDigs.js";import"./ConfirmationDialog-Bx9ardy9.js";import"./DialogBase-COBCl3WL.js";import"./Close-SOWXhUL2.js";import"./HelpPopover-CQR-J_g5.js";import"./MarkdownPopover-ByIhHE6X.js";import"./LightTooltip-Cp9tv2pP.js";import"./MarkdownSynapse-CorLAqOX.js";import"./SkeletonButton-SLwBY3oR.js";import"./SkeletonInlineBlock-BSyES9P5.js";import"./SkeletonTable-BN8TQIoy.js";import"./SkeletonParagraph-CKHoRTTC.js";import"./CreatedOnByUserDiv-CnCovTr_.js";import"./UserBadge-B-bcdv8r.js";import"./useUserBundle-CMLYFODb.js";import"./useSuspenseQuery-CH8JGQoS.js";import"./MenuItem-BXWiBucH.js";import"./Card-Cb051pi6.js";import"./Chip-B3zCMCcx.js";import"./DateTimePicker-Bc7c9Yb9.js";import"./useMobilePicker-BVbVLmZk.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-BjDFsFAu.js";import"./index-gKWz_61H.js";import"./ListItem-BaTpQ8xZ.js";import"./listItemButtonClasses-eIq3jCjC.js";import"./Tabs-CAJLCJ8T.js";import"./KeyboardArrowRight-BcwmSo_Z.js";import"./CardContent-Dob6jlup.js";import"./Grid-37fxI_NR.js";import"./upperFirst-DXFyXPvl.js";import"./_stringToArray-CS17RR0A.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn5585645'
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), http.get(\`\${MOCK_REPO_ORIGIN}/repo/v1/evaluation/:id\`, () => {
        return HttpResponse.json({
          id: '9614712',
          etag: 'a2b871cb-faa4-471a-8c23-b917c77fecb2',
          name: 'a',
          description: 'b',
          ownerId: MOCK_USER_ID.toString(),
          createdOn: '2021-03-02T22:16:14.552Z',
          contentSource: 'syn5585645',
          submissionInstructionsMessage: 'c',
          submissionReceiptMessage: 'c'
        }, {
          status: 200
        });
      }), http.post(\`\${MOCK_REPO_ORIGIN}/repo/v1/evaluation/:id/round/list\`, () => {
        return HttpResponse.json({
          page: [
          // Ended
          {
            id: '259',
            etag: '6f54c353-6c04-46b1-956d-096db1008bce',
            evaluationId: '9614712',
            roundStart: '2022-11-27T08:00:00.000Z',
            roundEnd: '2022-11-30T08:00:00.000Z'
          },
          // Ongoing
          {
            id: '260',
            etag: '6f54c353-6c04-46b1-956d-096db1008bce',
            evaluationId: '9614712',
            roundStart: dayjs().subtract(1, 'day').toISOString(),
            roundEnd: dayjs().add(2, 'day').toISOString()
          },
          // Future
          {
            id: '261',
            etag: '6f54c353-6c04-46b1-956d-096db1008bce',
            evaluationId: '9614712',
            roundStart: dayjs().add(1, 'week').toISOString(),
            roundEnd: dayjs().add(2, 'week').toISOString()
          }]
        }, {
          status: 200
        });
      })]
    }
  },
  args: {
    evaluationId: '9614712'
  }
}`,...r.parameters?.docs?.source}}};const A=["Entity","Evaluation"];export{n as Entity,r as Evaluation,A as __namedExportsOrder,z as default};
