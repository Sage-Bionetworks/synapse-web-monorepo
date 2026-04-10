import{z as s,b as o,s as e,H as a,v as i,dl as t}from"./iframe-FsOg9uwU.js";import{E as d}from"./EvaluationEditorPage-uClcaX-N.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-BRxmHHcF.js";import"./UserBadge-BgWUpTwS.js";import"./useUserBundle-DlEfeCz8.js";import"./useUserGroupHeader-CLfJ9kmo.js";import"./SkeletonTable-D70G5IuO.js";import"./MenuItem-Cj71RViP.js";import"./Card-Bl03myfA.js";import"./Chip-CwjHvWgT.js";import"./WarningDialog-q_NSINy-.js";import"./ConfirmationDialog-CGiwaw_9.js";import"./DialogBase-D5H1TxpQ.js";import"./Close-wJLSQlcF.js";import"./HelpPopover-CsCYRymI.js";import"./MarkdownPopover-B4rff8pl.js";import"./LightTooltip-BHJ8VyPd.js";import"./MarkdownSynapse-B-j5Jwdf.js";import"./SkeletonButton-o5wIbKa8.js";import"./SkeletonInlineBlock-C-VJXZCx.js";import"./SkeletonParagraph-CbUekLjy.js";import"./FormControlLabel-CVGFhKb1.js";import"./Checkbox-oTkKgI0N.js";import"./SwitchBase-B6R5JrIN.js";import"./DateTimePicker-D9EW9OWz.js";import"./useMobilePicker-DSpmUJQv.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-COJ17Eit.js";import"./index-BE4_cl56.js";import"./ListItem-BbIUcrJF.js";import"./listItemButtonClasses-DlXbiyd-.js";import"./Tabs-BleNELhm.js";import"./KeyboardArrowRight-BelLxV6k.js";import"./CardContent-C2A5R3aK.js";import"./Grid-DTBMwOCR.js";import"./upperFirst-gquU-9F2.js";import"./_stringToArray-EQ8z8-zj.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,Q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
