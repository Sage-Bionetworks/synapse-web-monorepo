import{z as s,b as o,s as e,H as a,v as i,dm as t}from"./iframe-CFYObmv2.js";import{E as d}from"./EvaluationEditorPage-Dm8Hq6mQ.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-gZIVbry_.js";import"./UserBadge-CqWrPdDF.js";import"./useUserBundle-CFoU7ptg.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-D1Oc41tF.js";import"./MenuItem-1x19aVl7.js";import"./Card-CVTuX8UO.js";import"./Chip-DVyYNIMf.js";import"./WarningDialog-iRJ2Wt-d.js";import"./ConfirmationDialog-CL-fo0eW.js";import"./DialogBase-RIdyfWbA.js";import"./Close-Bc2bfKRm.js";import"./HelpPopover-X5bLlJph.js";import"./MarkdownPopover-BK0N2ea-.js";import"./LightTooltip-CtPj8f6G.js";import"./MarkdownSynapse-EyWbEoPB.js";import"./SkeletonButton-BAoT4yfs.js";import"./SkeletonInlineBlock-B8gtORn3.js";import"./SkeletonParagraph-2BG-wyQ2.js";import"./FormControlLabel-X6sNt4uF.js";import"./Checkbox-DqoMzdfH.js";import"./SwitchBase-CeR8qk8o.js";import"./DateTimePicker-C-mbChMw.js";import"./useMobilePicker-evK2P1Ed.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-BbcHVSig.js";import"./index-DTq8PnfG.js";import"./ListItem-BF6lJWtr.js";import"./listItemButtonClasses-tdOIFwDw.js";import"./Tabs-CWGfN-hl.js";import"./KeyboardArrowRight-DZ7uehMx.js";import"./CardContent-Dsax6H4v.js";import"./Grid-pC3FVRxR.js";import"./upperFirst-Be2UTRC5.js";import"./_stringToArray-DWemR0vi.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,Q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
