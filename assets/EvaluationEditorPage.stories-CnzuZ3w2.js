import{g as s,a as o,u as a,H as e,x as i,du as t}from"./iframe-DWQ8siyH.js";import{E as d}from"./EvaluationEditorPage-BZ88323y.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-DUNzsbTH.js";import"./UserBadge-DnxnUVWx.js";import"./useUserBundle-C6KLzzS2.js";import"./SkeletonTable-pyMLa-VH.js";import"./MenuItem-B0BEM2XP.js";import"./Card-WCaqP096.js";import"./Chip--ZUBGmuC.js";import"./WarningDialog-BjSzAhqU.js";import"./ConfirmationDialog-CP1Ez-p2.js";import"./DialogBase-CQETkKuv.js";import"./Close-DMjBYuim.js";import"./HelpPopover-BNtY5zzD.js";import"./MarkdownPopover-Bj7uEVPu.js";import"./LightTooltip-BRCcdYv9.js";import"./MarkdownSynapse-BZXBdfm0.js";import"./SkeletonButton-Drh7CQoD.js";import"./SkeletonInlineBlock-U2SdkY6_.js";import"./SkeletonParagraph-BzFwIbvm.js";import"./FormControlLabel-BVEDJFnl.js";import"./Checkbox-DB5drz-0.js";import"./SwitchBase-CaB4uxt0.js";import"./DateTimePicker-_1SAYcn1.js";import"./useMobilePicker-Dc2OG2Qy.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-BF6MAbQt.js";import"./index-Dx8jX-FA.js";import"./ListItem-C1Ju9U5d.js";import"./listItemButtonClasses-BRcdgKHq.js";import"./Tabs-Bxy6vhUu.js";import"./KeyboardArrowRight-CWBVXY2q.js";import"./CardContent-K4fRgjn1.js";import"./Grid-CHqLmyHD.js";import"./upperFirst-BeZfMxpW.js";import"./_stringToArray--7DxExgH.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,J={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),a.get(`${o}/repo/v1/evaluation/:id`,()=>e.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),a.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>e.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
