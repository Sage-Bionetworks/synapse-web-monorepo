import{g as u,n as a,b as e,H as o,w as g,dJ as t}from"./iframe-CeAgldvM.js";import{E as b}from"./EvaluationEditorPage-B4ZXLBKf.js";import"./index-r8ZA1smB.js";import"./WarningDialog-DgGHeD3O.js";import"./ConfirmationDialog-DPE1BIMW.js";import"./DialogBase-D0T8g2Im.js";import"./Close-o2F78_KZ.js";import"./HelpPopover-8snckHwd.js";import"./MarkdownPopover-ivtTXFwj.js";import"./LightTooltip-CNmsWsyw.js";import"./MarkdownSynapse-Dy8cp58X.js";import"./SkeletonButton-BvXrs4_f.js";import"./SkeletonInlineBlock-n6Wdtn3U.js";import"./SkeletonTable-D9BGXwSf.js";import"./SkeletonParagraph-DsPtfc6R.js";import"./CreatedOnByUserDiv-DfKt21zc.js";import"./UserBadge-CaFI6Pfa.js";import"./MenuItem-DcOlOGUi.js";import"./Card-CNJbGh-i.js";import"./Chip-D7iOhvvK.js";import"./DateTimePicker-igMtrm77.js";import"./useMobilePicker-C3hj4_NZ.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-B2OACvV_.js";import"./index-T3jL32n1.js";import"./ListItem-Dby61Cvn.js";import"./listItemButtonClasses-CMCJD7br.js";import"./Tabs-CHHcJm1-.js";import"./KeyboardArrowRight-BReZDkuh.js";import"./CardContent-DOim9R1t.js";import"./Grid-BMIT_ZcX.js";import"./upperFirst-X3YobmpQ.js";import"./_stringToArray-BssHECbG.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,V={title:"Synapse/Challenge/EvaluationEditorPage",component:b,args:{onDeleteSuccess:S()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...u(e),a.get(`${e}/repo/v1/evaluation/:id`,()=>o.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:g.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),a.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>o.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};var s,i,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    entityId: 'syn5585645'
  }
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,c,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const W=["Entity","Evaluation"];export{n as Entity,r as Evaluation,W as __namedExportsOrder,V as default};
