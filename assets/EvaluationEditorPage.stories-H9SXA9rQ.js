import{g as s,n as e,b as o,H as a,w as i,du as t}from"./iframe-Cr4rsgj7.js";import{E as d}from"./EvaluationEditorPage-C898KGOD.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-D5c2IPOB.js";import"./UserBadge-DqLO5d9Y.js";import"./useUserBundle-DQ1m5zbR.js";import"./SkeletonTable-wr8tjygS.js";import"./MenuItem-Ct9EBmwz.js";import"./Card-9HzHl1Tz.js";import"./Chip-DjKXoZBc.js";import"./WarningDialog-Cos7QXVf.js";import"./ConfirmationDialog-D9Jug8b8.js";import"./DialogBase-1oSnX0hp.js";import"./Close-Ci5OvHK6.js";import"./HelpPopover-DdF66tTF.js";import"./MarkdownPopover-D3AmFDvC.js";import"./LightTooltip-DsylXgAu.js";import"./MarkdownSynapse-CDDbIt-9.js";import"./SkeletonButton-C33Abn2f.js";import"./SkeletonInlineBlock-w--GqSHA.js";import"./SkeletonParagraph-DJhgoEyf.js";import"./FormControlLabel-B7TVOkEX.js";import"./Checkbox-c-nz78k5.js";import"./SwitchBase-Cc_wLOhS.js";import"./DateTimePicker-_waSvBpI.js";import"./useMobilePicker-CRkd62XZ.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-CvShDDup.js";import"./index-MNSnOiaj.js";import"./ListItem-BsDg2xNA.js";import"./listItemButtonClasses-CyyPIGmf.js";import"./Tabs-leahSl_H.js";import"./KeyboardArrowRight-BuRhVmU6.js";import"./CardContent-Ysgi9mnc.js";import"./Grid-WJmRpyZS.js";import"./upperFirst-DR0i9Lp8.js";import"./_stringToArray-xld9z9Gr.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,J={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
