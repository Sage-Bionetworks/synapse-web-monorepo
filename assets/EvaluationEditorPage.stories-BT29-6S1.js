import{z as s,b as o,s as e,H as a,v as i,dm as t}from"./iframe-C6yCTbiI.js";import{E as d}from"./EvaluationEditorPage-IvR40Xef.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-CVo_D8eA.js";import"./UserBadge-CJBcuBDD.js";import"./useUserBundle-BUCs7RFl.js";import"./useUserGroupHeader-5j2MpiwC.js";import"./SkeletonTable-BTe-OCwr.js";import"./MenuItem-CKNKfHkT.js";import"./Card-CwMidbhG.js";import"./Chip-DN5j6xVl.js";import"./WarningDialog-CqMn0b1F.js";import"./ConfirmationDialog-BfhgLdtZ.js";import"./DialogBase-Blh69WLu.js";import"./Close-ZVMj15KJ.js";import"./HelpPopover-CL5CAAmH.js";import"./MarkdownPopover-CU_-CB6C.js";import"./LightTooltip-COIY3s5G.js";import"./MarkdownSynapse-BPE6Gggh.js";import"./SkeletonButton-BSw7ANLA.js";import"./SkeletonInlineBlock-kzXVwRpV.js";import"./SkeletonParagraph-CZqj6TP0.js";import"./FormControlLabel-blAWuUdq.js";import"./Checkbox-BvslvcYh.js";import"./SwitchBase-C0tFzd3x.js";import"./DateTimePicker-DeEpK_Hc.js";import"./useMobilePicker-mt4sp3DE.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-SMteQumw.js";import"./index-B3SxQMwi.js";import"./ListItem-B-_eQXBk.js";import"./listItemButtonClasses-BevsLqTj.js";import"./Tabs-DDTwZG9d.js";import"./KeyboardArrowRight-ewEojX5V.js";import"./CardContent-BvRZLNi4.js";import"./Grid-BC0gKlm6.js";import"./upperFirst-CUHxV2tZ.js";import"./_stringToArray-SuWKZAoM.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,Q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const V=["Entity","Evaluation"];export{n as Entity,r as Evaluation,V as __namedExportsOrder,Q as default};
