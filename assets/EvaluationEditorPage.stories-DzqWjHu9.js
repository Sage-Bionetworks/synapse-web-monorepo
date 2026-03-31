import{g as s,n as e,b as o,H as a,w as i,du as t}from"./iframe-DhpKet55.js";import{E as d}from"./EvaluationEditorPage-DkG_pHDp.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-Bstt1kFj.js";import"./UserBadge-BXdGqvgB.js";import"./useUserBundle-MoKPhqqG.js";import"./SkeletonTable-CDPXZ6i1.js";import"./MenuItem-DFY-M91_.js";import"./Card-bvHfdi3z.js";import"./Chip-9P7ZQoxZ.js";import"./WarningDialog-DjU6I82A.js";import"./ConfirmationDialog-C_059iZP.js";import"./DialogBase-CQOhgDpz.js";import"./Close-gzmIzwoR.js";import"./HelpPopover-CPRkTcWQ.js";import"./MarkdownPopover-BFmylr6y.js";import"./LightTooltip-B31RTkkv.js";import"./MarkdownSynapse-BSCmNA0L.js";import"./SkeletonButton-DB6VnDRU.js";import"./SkeletonInlineBlock-BpymSWGX.js";import"./SkeletonParagraph-CQn9tuId.js";import"./FormControlLabel-BmYM2_bg.js";import"./Checkbox-Cyn-RvsF.js";import"./SwitchBase-CwwNy5Jt.js";import"./DateTimePicker-qr5hJyA0.js";import"./useMobilePicker-DfzGAk9L.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DQcV6WFD.js";import"./index-CpJ472Wk.js";import"./ListItem-C9y8yrZY.js";import"./listItemButtonClasses-BKQfmJ0n.js";import"./Tabs-bBaYhfiw.js";import"./KeyboardArrowRight-DrUHhAVX.js";import"./CardContent-DHpdUs5k.js";import"./Grid-emFPcA4V.js";import"./upperFirst-CXCrUz2k.js";import"./_stringToArray-CClOioEo.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,J={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const Q=["Entity","Evaluation"];export{n as Entity,r as Evaluation,Q as __namedExportsOrder,J as default};
