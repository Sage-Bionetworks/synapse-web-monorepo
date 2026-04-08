import{z as s,b as o,s as e,H as a,v as i,dl as t}from"./iframe-CtEx53-_.js";import{E as d}from"./EvaluationEditorPage-ElBfS0OM.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-BhT22y3C.js";import"./UserBadge-DEyjEyEt.js";import"./useUserBundle-CU45jpjR.js";import"./SkeletonTable-DXr3KoSK.js";import"./MenuItem-FhFL09-C.js";import"./Card-CEnckPzK.js";import"./Chip-DZZXMgyG.js";import"./WarningDialog-BPa1oZ0h.js";import"./ConfirmationDialog-D10OfoxA.js";import"./DialogBase-ChLejIKB.js";import"./Close-DYbs631P.js";import"./HelpPopover-DPQexwMD.js";import"./MarkdownPopover-D5Nx0R4H.js";import"./LightTooltip-Ceq6WBqp.js";import"./MarkdownSynapse-DIm3O9Y2.js";import"./SkeletonButton-BxJCEkFM.js";import"./SkeletonInlineBlock-CUTClj5h.js";import"./SkeletonParagraph-B7Iue5Hi.js";import"./FormControlLabel-CkOhorz7.js";import"./Checkbox-OtBfanQo.js";import"./SwitchBase-BK1TFQJS.js";import"./DateTimePicker-DCQRoaPc.js";import"./useMobilePicker-CgBz4_uz.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-BUDwCpRQ.js";import"./index-rzZ2fsR5.js";import"./ListItem-BLzejjV0.js";import"./listItemButtonClasses-CYdXg08h.js";import"./Tabs-Bqhhs8W4.js";import"./KeyboardArrowRight-DYjrqIxA.js";import"./CardContent-EwGdCE5Y.js";import"./Grid-Dx2Bd5oi.js";import"./upperFirst-DXve1lNB.js";import"./_stringToArray-C-GUunsV.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,J={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
