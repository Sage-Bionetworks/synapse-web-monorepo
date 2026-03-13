import{g as s,n as o,b as e,H as a,w as i,du as t}from"./iframe-DR0uSfJB.js";import{E as d}from"./EvaluationEditorPage-D5ZFmZhu.js";import"./index-Chi_LkuB.js";import"./WarningDialog-CuSoM96W.js";import"./ConfirmationDialog-DZyRzdVz.js";import"./DialogBase-BCLn1mc7.js";import"./Close-DW5206ij.js";import"./HelpPopover-BiI80afJ.js";import"./MarkdownPopover-CdU2RNyH.js";import"./LightTooltip-CqEwD-qc.js";import"./MarkdownSynapse-BewMr670.js";import"./SkeletonButton-hycMW2ML.js";import"./SkeletonInlineBlock-Cc3tKGBX.js";import"./SkeletonTable-DQpC9D8t.js";import"./SkeletonParagraph-FBICusf3.js";import"./CreatedOnByUserDiv-CzsDpyc3.js";import"./UserBadge-H2XEmPKG.js";import"./useUserBundle-GG-xTFJo.js";import"./MenuItem-Fs-K7yfa.js";import"./Card-BtsV7fy1.js";import"./Chip-C7t_e7oc.js";import"./DateTimePicker-BHyB6bcv.js";import"./useMobilePicker-BH4J00Ps.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-Bgntno0J.js";import"./index-BHYxApRu.js";import"./ListItem-DwXaJExL.js";import"./listItemButtonClasses-B9kCoXz5.js";import"./Tabs-CvK4ArKL.js";import"./KeyboardArrowRight-7EQTvC4Y.js";import"./CardContent-DXPWygOu.js";import"./Grid-BsMBS9ZV.js";import"./upperFirst-BFJjlxCE.js";import"./_stringToArray-YOWTFc7I.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
