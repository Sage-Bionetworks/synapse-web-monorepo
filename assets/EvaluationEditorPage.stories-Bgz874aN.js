import{g as s,n as o,b as e,H as a,w as i,du as t}from"./iframe-BBruIU4b.js";import{E as d}from"./EvaluationEditorPage-qEv0rBCn.js";import"./index-Chi_LkuB.js";import"./WarningDialog-CTBEBVCY.js";import"./ConfirmationDialog-DuDymoxB.js";import"./DialogBase-Bhfpkjm2.js";import"./Close-CJayIifx.js";import"./HelpPopover-CCBG3dLd.js";import"./MarkdownPopover-DAFqt0iV.js";import"./LightTooltip-DDmzhRDz.js";import"./MarkdownSynapse-DP7rBl4U.js";import"./SkeletonButton-D4FgXHH-.js";import"./SkeletonInlineBlock-B2nZJXUY.js";import"./SkeletonTable-Bpj6qcuq.js";import"./SkeletonParagraph-D6h0sWgH.js";import"./CreatedOnByUserDiv-C0dwJz48.js";import"./UserBadge-LCaLYAxT.js";import"./useUserBundle-R9FqDICm.js";import"./MenuItem-qoVLjmZ_.js";import"./Card-DMjhx-ez.js";import"./Chip-BT9IXi55.js";import"./DateTimePicker-Cuj7_AHb.js";import"./useMobilePicker-Chs3MB-x.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-QAzuqCUt.js";import"./index-C4S4nEIu.js";import"./ListItem-X--2tE5P.js";import"./listItemButtonClasses-DxkoXDit.js";import"./Tabs-BrujAkRu.js";import"./KeyboardArrowRight-C3DJa5e5.js";import"./CardContent-DIglYdkf.js";import"./Grid-Dy8qASXu.js";import"./upperFirst-DlROaczH.js";import"./_stringToArray-D8_zZa06.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
