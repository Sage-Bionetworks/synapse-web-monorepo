import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-B-xyH02x.js";import{E as d}from"./EvaluationEditorPage-DpAQR2tv.js";import"./index-Chi_LkuB.js";import"./WarningDialog-D8TFc684.js";import"./ConfirmationDialog-D9aFQcvZ.js";import"./DialogBase-Bm7WFoz5.js";import"./Close-BSQRjDbl.js";import"./HelpPopover-Bx7iTtjG.js";import"./MarkdownPopover-BdoLK-ES.js";import"./LightTooltip-C149eTsy.js";import"./MarkdownSynapse-CecSU3tu.js";import"./SkeletonButton-DjfAVN5h.js";import"./SkeletonInlineBlock-C-y9BK0k.js";import"./SkeletonTable-Bag6oVsL.js";import"./SkeletonParagraph-DEhsnig5.js";import"./CreatedOnByUserDiv-8zgpEaNZ.js";import"./UserBadge-BdL4OP-p.js";import"./useUserBundle-C9QAiHQ4.js";import"./useSuspenseQuery-C7ZzErHF.js";import"./MenuItem-Dlz7KwY1.js";import"./Card-CTmYONpx.js";import"./Chip-CRxMN-mm.js";import"./DateTimePicker-CJHwujB1.js";import"./useMobilePicker-wYPzL_k5.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-8in1Tt7f.js";import"./index-BJsp20bP.js";import"./ListItem-CXfG5eiy.js";import"./listItemButtonClasses-BtFgg0V9.js";import"./Tabs-CorV7xwu.js";import"./KeyboardArrowRight-CsAjXY4O.js";import"./CardContent-Z7H7h2uj.js";import"./Grid-BrbHm5Ne.js";import"./upperFirst-BbsCi8hK.js";import"./_stringToArray-Cyr9b7t7.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
