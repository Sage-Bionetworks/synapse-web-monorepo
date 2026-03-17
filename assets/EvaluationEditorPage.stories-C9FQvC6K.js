import{g as s,n as o,b as e,H as a,w as i,du as t}from"./iframe-Bd48Phhx.js";import{E as d}from"./EvaluationEditorPage-CRk99_g1.js";import"./index-Chi_LkuB.js";import"./WarningDialog-DrdOBsRl.js";import"./ConfirmationDialog-D4Di_An5.js";import"./DialogBase-DJeR-4bo.js";import"./Close-DEayXyHI.js";import"./HelpPopover-DCI79EJV.js";import"./MarkdownPopover-BdpxecKY.js";import"./LightTooltip-Baq7jYr-.js";import"./MarkdownSynapse-BQCReIPi.js";import"./SkeletonButton-yGLAaBDC.js";import"./SkeletonInlineBlock-BSKjVSEt.js";import"./SkeletonTable-DPwFQSrG.js";import"./SkeletonParagraph-keiL0wvn.js";import"./CreatedOnByUserDiv-fcBom4e8.js";import"./UserBadge-BNLsVG6W.js";import"./useUserBundle-C0wQg83z.js";import"./MenuItem-CNJlFnXk.js";import"./Card-BWa2aTBm.js";import"./Chip-Cnnt6mV5.js";import"./DateTimePicker-CPi9klKJ.js";import"./useMobilePicker-B1BfFB8f.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DfkNQN2o.js";import"./index-4gXpW4bf.js";import"./ListItem-BeCgj5OR.js";import"./listItemButtonClasses-BC6zKoHv.js";import"./Tabs-DHaLbeaK.js";import"./KeyboardArrowRight-D_zxrOmf.js";import"./CardContent-DTImMchf.js";import"./Grid-CZFhBtEB.js";import"./upperFirst-dupiQAjF.js";import"./_stringToArray-CPRNLisM.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
