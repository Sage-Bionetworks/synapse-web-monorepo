import{g as s,n as o,b as e,H as a,w as i,du as t}from"./iframe-pozrfGX9.js";import{E as d}from"./EvaluationEditorPage-BkryCDmi.js";import"./index-Chi_LkuB.js";import"./WarningDialog-DkYQN_OB.js";import"./ConfirmationDialog-pkD1Ofo-.js";import"./DialogBase-B6KdTX5Z.js";import"./Close-DSWu6oeE.js";import"./HelpPopover-CXWVW84-.js";import"./MarkdownPopover-DP57655n.js";import"./LightTooltip-B0VARp2j.js";import"./MarkdownSynapse-B4RP0lap.js";import"./SkeletonButton-BVG9V-0l.js";import"./SkeletonInlineBlock-COIr5uPh.js";import"./SkeletonTable-B877ikOr.js";import"./SkeletonParagraph-QqDrbm_v.js";import"./CreatedOnByUserDiv-lv7mRuYD.js";import"./UserBadge-DNs5g3Fi.js";import"./useUserBundle-dJrxo5eU.js";import"./MenuItem-CtrC7AXY.js";import"./Card-CdSoIgQr.js";import"./Chip-SQ2CRNke.js";import"./DateTimePicker-yqwXV69w.js";import"./useMobilePicker-CW5c1Owb.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-__MMDfls.js";import"./index-DK5SCnFS.js";import"./ListItem-C23Uagvh.js";import"./listItemButtonClasses-DKZCNe1d.js";import"./Tabs-DuzcUC0l.js";import"./KeyboardArrowRight-DSNrGj28.js";import"./CardContent-CW1L5Tww.js";import"./Grid-CKjOzNfL.js";import"./upperFirst-Cn9uuzR9.js";import"./_stringToArray-DZNwqZqA.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
