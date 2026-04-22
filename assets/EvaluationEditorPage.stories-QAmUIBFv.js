import{z as s,b as o,s as e,H as a,v as i,dm as t}from"./iframe-CseC-baw.js";import{E as d}from"./EvaluationEditorPage-WznAVHvt.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-CtTDyRap.js";import"./UserBadge-CsME2JGa.js";import"./useUserBundle-DcGFbwia.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-BSCFUHCb.js";import"./MenuItem-JA9eMCvt.js";import"./Card-CkAhX4H-.js";import"./Chip-8D96B7uR.js";import"./WarningDialog-DsImCuRn.js";import"./ConfirmationDialog-CcRCdpta.js";import"./DialogBase-BvEmiGuX.js";import"./Close-CEWvO-tT.js";import"./HelpPopover-Bv1OIhKO.js";import"./MarkdownPopover-jmvUxWZs.js";import"./LightTooltip-Dys4qYAB.js";import"./MarkdownSynapse-DWH-mAwE.js";import"./SkeletonButton-CcHwUw1K.js";import"./SkeletonInlineBlock-dgjaDxOx.js";import"./SkeletonParagraph-BnipCtVU.js";import"./FormControlLabel-yR_OFq_k.js";import"./Checkbox-cR5eTvXg.js";import"./SwitchBase-viy3IhPp.js";import"./DateTimePicker-B54GFHl_.js";import"./useMobilePicker-D5dJquX_.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-CAgOA8W-.js";import"./index-Cs-oxnB7.js";import"./ListItem-YIxnHUO0.js";import"./listItemButtonClasses-BOJ5pjAV.js";import"./Tabs-BF7rMN_1.js";import"./KeyboardArrowRight-CuyrQo4h.js";import"./CardContent-BpHXMQib.js";import"./Grid-DLfQ-OhD.js";import"./upperFirst-KbdjWoxv.js";import"./_stringToArray-WPfo-JdD.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,Q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
