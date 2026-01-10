import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-_xC4R-9l.js";import{E as d}from"./EvaluationEditorPage-CUjsrcJO.js";import"./index-Chi_LkuB.js";import"./WarningDialog-CETE4k_6.js";import"./ConfirmationDialog-CL4wb7EO.js";import"./DialogBase-Dp6M9JD0.js";import"./Close-BfP40Jkn.js";import"./HelpPopover-1mww7JNK.js";import"./MarkdownPopover-C9UGNyb0.js";import"./LightTooltip-C7ewj1jU.js";import"./MarkdownSynapse-Ct3w_uzW.js";import"./SkeletonButton-DYUdhb7U.js";import"./SkeletonInlineBlock-BJckmeYC.js";import"./SkeletonTable-8K81cLuT.js";import"./SkeletonParagraph-BJTsWPfq.js";import"./CreatedOnByUserDiv-BlvsaTkx.js";import"./UserBadge-D50lroBs.js";import"./useUserBundle-rH4zVLMU.js";import"./useSuspenseQuery-BY1RfPC9.js";import"./MenuItem-DRoOm8dg.js";import"./Card-Dc_-EwgO.js";import"./Chip-m593CfK4.js";import"./DateTimePicker-D2tli53_.js";import"./useMobilePicker-DFR52jrA.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-D-Vq-fjb.js";import"./index-CUKFaSIZ.js";import"./ListItem-MZnaYUw3.js";import"./listItemButtonClasses-BMDJa5nh.js";import"./Tabs-B2Umgj7s.js";import"./KeyboardArrowRight-DOtI3rZ6.js";import"./CardContent-C8g3gVgW.js";import"./Grid-DCv41BH4.js";import"./upperFirst-BnJuTmkn.js";import"./_stringToArray-C6qNY92J.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
