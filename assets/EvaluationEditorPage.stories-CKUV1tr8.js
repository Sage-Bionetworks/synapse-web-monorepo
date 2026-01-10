import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-Pdm4gHko.js";import{E as d}from"./EvaluationEditorPage-Ba94FxkS.js";import"./index-Chi_LkuB.js";import"./WarningDialog-DM7OXJ3s.js";import"./ConfirmationDialog-ewD4gxwv.js";import"./DialogBase-bF1STKBD.js";import"./Close-B5qXrF4s.js";import"./HelpPopover-DyzmZgtg.js";import"./MarkdownPopover-D9mZ0BlU.js";import"./LightTooltip-DYCkK4-y.js";import"./MarkdownSynapse-CRRjtehd.js";import"./SkeletonButton-KgZa_W_5.js";import"./SkeletonInlineBlock-DSI3AO38.js";import"./SkeletonTable-C47tnEUn.js";import"./SkeletonParagraph-DMN2Qcp6.js";import"./CreatedOnByUserDiv-DPsdYdTp.js";import"./UserBadge-wxpXkL3B.js";import"./useUserBundle-Bz1L6r6d.js";import"./useSuspenseQuery-2zOEkQmi.js";import"./MenuItem-D1_ZdkN0.js";import"./Card-C6gQHDcr.js";import"./Chip-D7Y4i0b0.js";import"./DateTimePicker-BNqO7hj1.js";import"./useMobilePicker-xl2HQYqi.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-CY6iHKEJ.js";import"./index-DFJ7Q3Tb.js";import"./ListItem-CaARSvW0.js";import"./listItemButtonClasses-mwEcVMPS.js";import"./Tabs-CkvR7jS-.js";import"./KeyboardArrowRight-DJ5-WBvT.js";import"./CardContent-C4NcwAXc.js";import"./Grid-BhJcUTyz.js";import"./upperFirst-BFlvU_Dv.js";import"./_stringToArray-CXA9Joek.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const A=["Entity","Evaluation"];export{n as Entity,r as Evaluation,A as __namedExportsOrder,z as default};
