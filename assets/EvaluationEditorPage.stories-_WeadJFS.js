import{z as s,b as o,s as e,H as a,v as i,dm as t}from"./iframe-BnuiMoX_.js";import{E as d}from"./EvaluationEditorPage-D_vHua9C.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-BSSAnr3H.js";import"./UserBadge-C04__7Q8.js";import"./useUserBundle-MQOAsYfr.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-B_UPgtXl.js";import"./MenuItem-CJFsHkvO.js";import"./Card-C1dzVdqQ.js";import"./Chip-iaML2TUf.js";import"./WarningDialog-DLks3A__.js";import"./ConfirmationDialog-trKeO__a.js";import"./DialogBase-ZChlIQOE.js";import"./Close-DJ29z905.js";import"./HelpPopover-x83RozMQ.js";import"./MarkdownPopover-Cm0YthTk.js";import"./LightTooltip-DUGbboAh.js";import"./MarkdownSynapse-DkYu3x07.js";import"./SkeletonButton-CgoQvaBi.js";import"./SkeletonInlineBlock-DxCr7zGd.js";import"./SkeletonParagraph-BQZp8fCk.js";import"./FormControlLabel-DGDrtWSS.js";import"./Checkbox-DbZ9UnIo.js";import"./SwitchBase-FDevkp1d.js";import"./DateTimePicker-C4S_KJCB.js";import"./useMobilePicker-BGME4DlW.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-CRm3jirr.js";import"./index-Jll9ObM-.js";import"./ListItem-D5svrYbh.js";import"./listItemButtonClasses-B1OKIsgL.js";import"./Tabs-CvJCiwSR.js";import"./KeyboardArrowRight-DAiYrBjO.js";import"./CardContent-DIzyBTwE.js";import"./Grid-CqU-Fml2.js";import"./upperFirst-BJqNHn3x.js";import"./_stringToArray-DamUorDa.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,Q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
