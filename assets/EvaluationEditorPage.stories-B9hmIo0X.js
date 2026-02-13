import{g as s,n as e,b as o,H as a,w as i,dI as t}from"./iframe-vUTu6M8D.js";import{E as d}from"./EvaluationEditorPage-RSYR_sPx.js";import"./index-Chi_LkuB.js";import"./WarningDialog-CV601-7E.js";import"./ConfirmationDialog-BPtNL54i.js";import"./DialogBase-B4OLAYCG.js";import"./Close-BcTGfgsy.js";import"./HelpPopover-BizYwA07.js";import"./MarkdownPopover-CLoC-k0L.js";import"./LightTooltip-pWgB8TwE.js";import"./MarkdownSynapse-CF0aiU3p.js";import"./SkeletonButton-BfImOAlj.js";import"./SkeletonInlineBlock-Dw1qUrgT.js";import"./SkeletonTable-CYuF7-ZU.js";import"./SkeletonParagraph-DI0oUi2H.js";import"./CreatedOnByUserDiv-BR3gZT16.js";import"./UserBadge-DThzTs_4.js";import"./useUserBundle-Bg0iomTg.js";import"./useSuspenseQuery-p_6e0XOX.js";import"./MenuItem-BXKyPNc4.js";import"./Card-B4xCTS0I.js";import"./Chip-Cogs__Re.js";import"./DateTimePicker-MSpkaa5A.js";import"./useMobilePicker-BA2S9AMu.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-BD5UIL3y.js";import"./index-DwgiIHef.js";import"./ListItem-DQAnUC73.js";import"./listItemButtonClasses-DtmrCkrg.js";import"./Tabs-BQxv7HuZ.js";import"./KeyboardArrowRight-DOJaGB79.js";import"./CardContent-O4MsLWgH.js";import"./Grid-B1qkZWS2.js";import"./upperFirst-Bx-jjJD4.js";import"./_stringToArray-PiJZ8St7.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
