import{z as s,b as o,s as e,H as a,v as i,dl as t}from"./iframe-b13k1F7I.js";import{E as d}from"./EvaluationEditorPage-DqCqJWaj.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-Cmd-Va7H.js";import"./UserBadge-CsnCA53P.js";import"./useUserBundle-earXxlZb.js";import"./SkeletonTable-DL4vBEzw.js";import"./MenuItem-DH1v1_Sf.js";import"./Card-Ctn6KCGb.js";import"./Chip-DjWJ18GV.js";import"./WarningDialog-CYACOv88.js";import"./ConfirmationDialog-DlQ1ryI4.js";import"./DialogBase-UKhXgfvV.js";import"./Close-BXhjNoKM.js";import"./HelpPopover-DLt1mKAE.js";import"./MarkdownPopover-HHq_PWe6.js";import"./LightTooltip-C-QkzhbA.js";import"./MarkdownSynapse-DgVHOn26.js";import"./SkeletonButton-DVR5pv_e.js";import"./SkeletonInlineBlock-DRQHTWc8.js";import"./SkeletonParagraph-fVALJo5f.js";import"./FormControlLabel-CCbquEuR.js";import"./Checkbox-QC8XFCZJ.js";import"./SwitchBase-C4-cm1yw.js";import"./DateTimePicker-BoJdzwlO.js";import"./useMobilePicker-Rjz4jJMP.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DEYxwdGc.js";import"./index-BnGRXv6y.js";import"./ListItem-DzDRJtuQ.js";import"./listItemButtonClasses-buvqHCdw.js";import"./Tabs-CEXGJ2q4.js";import"./KeyboardArrowRight-CrQMuxYY.js";import"./CardContent-DD1LnYbD.js";import"./Grid-DVknrE2l.js";import"./upperFirst-D61JcFJw.js";import"./_stringToArray-mU-lGfHq.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,J={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
