import{z as s,b as o,s as e,H as a,v as i,dm as t}from"./iframe-ggb9BT7g.js";import{E as d}from"./EvaluationEditorPage-DlPtOTRs.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-DY16ySv6.js";import"./UserBadge-DEEeycwe.js";import"./useUserBundle-t5nTyqdV.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-ByepoAwi.js";import"./MenuItem-Dz7N7FME.js";import"./Card-BrUEDoBm.js";import"./Chip-CisBGjg3.js";import"./WarningDialog-Cr6-w-Lp.js";import"./ConfirmationDialog-Csdoq0fQ.js";import"./DialogBase-De2IOlxW.js";import"./Close-DUdLCtLc.js";import"./HelpPopover-C6C-iAVu.js";import"./MarkdownPopover-DpZurWOd.js";import"./LightTooltip-DB2Zm8A-.js";import"./MarkdownSynapse-CcYYvyZJ.js";import"./SkeletonButton-CUOVs3Oy.js";import"./SkeletonInlineBlock-C6q-RqyQ.js";import"./SkeletonParagraph-CEmjW8Ho.js";import"./FormControlLabel-CAUCzVir.js";import"./Checkbox-Dsv8Lvn8.js";import"./SwitchBase-Cb1YcC8J.js";import"./DateTimePicker-D0s2b7cO.js";import"./useMobilePicker-DFUbmvBT.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-9jY0V4pv.js";import"./index-BsBFOmKs.js";import"./ListItem-B0UpKkuu.js";import"./listItemButtonClasses-CeAtuF-Z.js";import"./Tabs-CYxWSM54.js";import"./KeyboardArrowRight-C6VCpvwR.js";import"./CardContent-DF245DcY.js";import"./Grid-BTHwFXUN.js";import"./upperFirst-BQgGVOiA.js";import"./_stringToArray-DY_tWekW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,Q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
