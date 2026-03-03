import{g as s,n as o,b as e,H as a,w as i,dt as t}from"./iframe-B_O9kSix.js";import{E as d}from"./EvaluationEditorPage-DiHyie36.js";import"./index-Chi_LkuB.js";import"./WarningDialog-Bt6qZUOR.js";import"./ConfirmationDialog-DzRI3wIo.js";import"./DialogBase-DwQ32IO2.js";import"./Close-BwmNujrW.js";import"./HelpPopover-CCcniF6w.js";import"./MarkdownPopover-DRJsMIka.js";import"./LightTooltip-GgpSSUJ5.js";import"./MarkdownSynapse-DfLA11xe.js";import"./SkeletonButton-BM1gzNpw.js";import"./SkeletonInlineBlock-B4Ftzl0H.js";import"./SkeletonTable-DPjCujA-.js";import"./SkeletonParagraph-CyxH5Rsx.js";import"./CreatedOnByUserDiv-ER3kbqT6.js";import"./UserBadge-DxRMin_1.js";import"./useUserBundle-BrtD0xy9.js";import"./MenuItem-BcwwJPC9.js";import"./Card-DeLay9_m.js";import"./Chip-DJkWIvUs.js";import"./DateTimePicker-BTUfkhm4.js";import"./useMobilePicker-j8QllUja.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-WLvlrKwx.js";import"./index-CIA9_xQz.js";import"./ListItem--hghDhXv.js";import"./listItemButtonClasses-CS700FRz.js";import"./Tabs-B0Gj6UPf.js";import"./KeyboardArrowRight-kHW_TRx7.js";import"./CardContent-uwNyC1PR.js";import"./Grid-DpqNCaG6.js";import"./upperFirst-VIDeSkKN.js";import"./_stringToArray-BjAqpVUC.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
