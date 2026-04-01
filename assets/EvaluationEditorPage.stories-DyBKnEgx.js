import{g as s,n as e,b as o,H as a,w as i,du as t}from"./iframe-CvDTy6mw.js";import{E as d}from"./EvaluationEditorPage-DP_Vi6Vb.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-sMXpf4su.js";import"./UserBadge-PoyEvAzl.js";import"./useUserBundle-Dj5B8O2o.js";import"./SkeletonTable-DjmsDm7y.js";import"./MenuItem-DnOuV5Bw.js";import"./Card-DQ_YpR0y.js";import"./Chip-DmppX2NC.js";import"./WarningDialog-CLyw9HKH.js";import"./ConfirmationDialog-Cfqxxxlf.js";import"./DialogBase-DQQSlD3x.js";import"./Close-d7PqJiCL.js";import"./HelpPopover-Bk8Cc2qG.js";import"./MarkdownPopover-CX1rkX4a.js";import"./LightTooltip-Cn6AM7tu.js";import"./MarkdownSynapse-BqOzEXKP.js";import"./SkeletonButton-DrRqzwrL.js";import"./SkeletonInlineBlock-DRwNak6O.js";import"./SkeletonParagraph-DAWCny1c.js";import"./FormControlLabel-BBtghWJq.js";import"./Checkbox-D534fmQJ.js";import"./SwitchBase-JpV5kKh9.js";import"./DateTimePicker-DD6Q9dQb.js";import"./useMobilePicker-ilI3aC56.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-Cd5p1xI2.js";import"./index-CEVa6roL.js";import"./ListItem-DoXG3GUM.js";import"./listItemButtonClasses-DMs0uJ6l.js";import"./Tabs-OyL2qVUr.js";import"./KeyboardArrowRight-C0CoeaT9.js";import"./CardContent-CMiPmu8q.js";import"./Grid-B7-Uodf9.js";import"./upperFirst-aVmxrBwV.js";import"./_stringToArray-JpykP87n.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,J={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
