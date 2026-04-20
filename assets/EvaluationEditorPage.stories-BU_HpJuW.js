import{z as s,b as o,s as e,H as a,v as i,dm as t}from"./iframe-CZUUdnAP.js";import{E as d}from"./EvaluationEditorPage-CjFgojRn.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-CJAbPgQo.js";import"./UserBadge-CgUWMwJt.js";import"./useUserBundle-CqpwNloT.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-B92SNSTz.js";import"./MenuItem-BQBfTSFf.js";import"./Card-BktRylCw.js";import"./Chip-vSFEg4gP.js";import"./WarningDialog-IIVCHAPY.js";import"./ConfirmationDialog-bHj4aTcl.js";import"./DialogBase-vGJ-9Ozq.js";import"./Close-C0cVzGCV.js";import"./HelpPopover-BVtbTHqG.js";import"./MarkdownPopover-D3m2bqb5.js";import"./LightTooltip-DSgBjgHB.js";import"./MarkdownSynapse-m6An14vR.js";import"./SkeletonButton-u1mXBMmd.js";import"./SkeletonInlineBlock-Dwwns8en.js";import"./SkeletonParagraph-Dccn5vm_.js";import"./FormControlLabel-Cv5LGeMa.js";import"./Checkbox-DsRD5Alo.js";import"./SwitchBase-B1xcpsp0.js";import"./DateTimePicker-C_fXMDCG.js";import"./useMobilePicker-_RoP0l9W.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-BAHeUo69.js";import"./index-fDzCYU54.js";import"./ListItem-CgE_p33y.js";import"./listItemButtonClasses-DUz4wm5w.js";import"./Tabs-DVMuGK4a.js";import"./KeyboardArrowRight-B5lNRpHL.js";import"./CardContent-BPUVnyPT.js";import"./Grid-CYH6R9jX.js";import"./upperFirst-BxLOqPEe.js";import"./_stringToArray-BOY_Dgu1.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,Q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
