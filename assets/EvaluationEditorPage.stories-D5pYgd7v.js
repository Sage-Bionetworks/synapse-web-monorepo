import{g as s,n as o,b as e,H as a,w as i,du as t}from"./iframe-BnwOOxVB.js";import{E as d}from"./EvaluationEditorPage-rGFKAXZJ.js";import"./index-Chi_LkuB.js";import"./WarningDialog-pCioNjj7.js";import"./ConfirmationDialog-BdmzWONJ.js";import"./DialogBase-Dbn_HhWz.js";import"./Close-DsW9lEMH.js";import"./HelpPopover-f6Y-8lBt.js";import"./MarkdownPopover-dEsnVknt.js";import"./LightTooltip-BKLx-2zI.js";import"./MarkdownSynapse-CudWy8rb.js";import"./SkeletonButton-Cx1YwYzw.js";import"./SkeletonInlineBlock-CZWtZtay.js";import"./SkeletonTable-Dk7rdMrJ.js";import"./SkeletonParagraph-Bx2C1bW5.js";import"./CreatedOnByUserDiv-DSp00iWb.js";import"./UserBadge-CqwZjHo1.js";import"./useUserBundle-DzFa2F0q.js";import"./MenuItem-DUMDRQOA.js";import"./Card-Dxpi6uBT.js";import"./Chip-B5d3JXK1.js";import"./DateTimePicker-BiQiYB0r.js";import"./useMobilePicker-CwcAg0PT.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-QFRMT8fg.js";import"./index-BWFWUV0I.js";import"./ListItem-DFximy5l.js";import"./listItemButtonClasses-DGgrJKdk.js";import"./Tabs-Cdts2Tcp.js";import"./KeyboardArrowRight-sMosABA9.js";import"./CardContent-CBSqmpGv.js";import"./Grid-Dn3yFbHq.js";import"./upperFirst-s0sM1KMp.js";import"./_stringToArray-txMy1f-q.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
