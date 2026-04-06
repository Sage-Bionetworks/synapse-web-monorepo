import{z as s,b as o,s as e,H as a,v as i,dl as t}from"./iframe-BPNyJNxm.js";import{E as d}from"./EvaluationEditorPage-DGvIcjB9.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-Cx5vJPsm.js";import"./UserBadge-BPa7l308.js";import"./useUserBundle-D2j_CZi9.js";import"./SkeletonTable-DBeYWS70.js";import"./MenuItem-CEXBRyzq.js";import"./Card-B4zIQ-hG.js";import"./Chip-Hk6f0McD.js";import"./WarningDialog-BvuWHwa6.js";import"./ConfirmationDialog-BpyGFD_j.js";import"./DialogBase-DSrJGPMK.js";import"./Close-wqX4il5f.js";import"./HelpPopover-cbCWQpx5.js";import"./MarkdownPopover-DYWWH0E2.js";import"./LightTooltip-D69z1M63.js";import"./MarkdownSynapse-D3aSYsDm.js";import"./SkeletonButton-DKmXtnFb.js";import"./SkeletonInlineBlock-YVxGd7KG.js";import"./SkeletonParagraph-BxBZJF2o.js";import"./FormControlLabel-DMh_lHXX.js";import"./Checkbox-G1oNYZiA.js";import"./SwitchBase-BHyxwE7g.js";import"./DateTimePicker-CCnnrsD8.js";import"./useMobilePicker-DDtxPT7P.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-CqYm3I5Z.js";import"./index-Br3ickc1.js";import"./ListItem-d4IiLeG1.js";import"./listItemButtonClasses-Ds1B8RjS.js";import"./Tabs-DgcQIQZq.js";import"./KeyboardArrowRight-QkE9j28i.js";import"./CardContent-DROGwA3Q.js";import"./Grid-BO2Ij0QT.js";import"./upperFirst-ByG2WLne.js";import"./_stringToArray-3y_jUrCI.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,J={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
