import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-CV5uF1_e.js";import{E as d}from"./EvaluationEditorPage-DXUeMq8r.js";import"./index-Chi_LkuB.js";import"./WarningDialog-DaghbZ_P.js";import"./ConfirmationDialog-D2HwlyP0.js";import"./DialogBase-BBjGlBIj.js";import"./Close-BXWZan39.js";import"./HelpPopover-jZCDiU0J.js";import"./MarkdownPopover-DuJ5uVW5.js";import"./LightTooltip-CPpYn2Kh.js";import"./MarkdownSynapse-DKo3fnwU.js";import"./SkeletonButton-CpwnNhlN.js";import"./SkeletonInlineBlock-CfS9comD.js";import"./SkeletonTable-Dkaqgxy9.js";import"./SkeletonParagraph-CfoCBxY5.js";import"./CreatedOnByUserDiv-CMPiCm9o.js";import"./UserBadge-yVhGbWiX.js";import"./useUserBundle-9F9vUiBr.js";import"./useSuspenseQuery-CGczKAJn.js";import"./MenuItem-BzuAhGLX.js";import"./Card-DCUNa1gA.js";import"./Chip-KBD8jJOF.js";import"./DateTimePicker-b9045yvT.js";import"./useMobilePicker-CeN1p8MY.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-BQG2wuEQ.js";import"./index-Lq8AZYKI.js";import"./ListItem-eNRkFcKE.js";import"./listItemButtonClasses-zWm1TryB.js";import"./Tabs-BcUS44k5.js";import"./KeyboardArrowRight-HZca2CH0.js";import"./CardContent-CfR-cguO.js";import"./Grid-Pr30XWBi.js";import"./upperFirst-Bh2dLumI.js";import"./_stringToArray-BKx_A9Xk.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
