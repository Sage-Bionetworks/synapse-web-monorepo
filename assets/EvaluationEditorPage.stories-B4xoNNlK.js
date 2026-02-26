import{g as s,n as o,b as e,H as a,w as i,dt as t}from"./iframe-CZFJJ8mF.js";import{E as d}from"./EvaluationEditorPage-07SlF2-b.js";import"./index-Chi_LkuB.js";import"./WarningDialog-vpbXSsol.js";import"./ConfirmationDialog-CGBNjPCW.js";import"./DialogBase-DDBsPCb6.js";import"./Close-wucZufu-.js";import"./HelpPopover-C73Dk8f0.js";import"./MarkdownPopover-By4CdHrM.js";import"./LightTooltip-DVNwweRq.js";import"./MarkdownSynapse-E3IF_o1S.js";import"./SkeletonButton-1FI8gwoL.js";import"./SkeletonInlineBlock-CK8FFc-3.js";import"./SkeletonTable-Q3nUli7s.js";import"./SkeletonParagraph-DvXQwRCq.js";import"./CreatedOnByUserDiv-8_I5WNt9.js";import"./UserBadge-CErUOSm-.js";import"./useUserBundle-d_Y8_V2h.js";import"./MenuItem-DISZCm2g.js";import"./Card-ak_L_vjx.js";import"./Chip-BSOTX2SF.js";import"./DateTimePicker-awZv2EGB.js";import"./useMobilePicker-nOYPlyO2.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-BLXlr0JA.js";import"./index-DHCSsY1o.js";import"./ListItem-DQvd6W6q.js";import"./listItemButtonClasses-B4WhvPvv.js";import"./Tabs-BuFKobXH.js";import"./KeyboardArrowRight-kcGw3obp.js";import"./CardContent-B-VnVErI.js";import"./Grid-B-_g8vQZ.js";import"./upperFirst-CTOAMEmR.js";import"./_stringToArray-Dwvglf_m.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const z=["Entity","Evaluation"];export{n as Entity,r as Evaluation,z as __namedExportsOrder,q as default};
