import{z as s,b as o,s as e,H as a,v as i,dm as t}from"./iframe-D6P0nkNQ.js";import{E as d}from"./EvaluationEditorPage-XYlpJJRW.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-D13AfFzQ.js";import"./UserBadge-BfOkKJj6.js";import"./useUserBundle-Da75ZNju.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-B5s8sRSp.js";import"./MenuItem-BFhkC2rz.js";import"./Card-Km0k0NLl.js";import"./Chip-BsvDvlw9.js";import"./WarningDialog-Dg2BdDDQ.js";import"./ConfirmationDialog-DbhMChYr.js";import"./DialogBase-CYnhOgAU.js";import"./Close-BEd3pYVj.js";import"./HelpPopover-CaKE4C1W.js";import"./MarkdownPopover-C0soPO-I.js";import"./LightTooltip-Q195xsL6.js";import"./MarkdownSynapse-Csu_X-L3.js";import"./SkeletonButton-CpvcVcC6.js";import"./SkeletonInlineBlock-cwgAS3YS.js";import"./SkeletonParagraph-Dny_21Xp.js";import"./FormControlLabel-C3dQ3TAO.js";import"./Checkbox-BbO_eIS6.js";import"./SwitchBase-Cxiym2LW.js";import"./DateTimePicker-DvjM3Km_.js";import"./useMobilePicker-9kBQXbkK.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DCgVDyzB.js";import"./index-ClysohDO.js";import"./ListItem-BD8Vt6Tg.js";import"./listItemButtonClasses-JVruTrVe.js";import"./Tabs-CeDTZ6V1.js";import"./KeyboardArrowRight-CwA_hYFG.js";import"./CardContent-BfaYIXTb.js";import"./Grid-BDZmSCq2.js";import"./upperFirst-BPDVDv7N.js";import"./_stringToArray-X6SmT2C1.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,Q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
