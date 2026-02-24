import{g as s,n as e,b as o,H as a,w as i,dF as t}from"./iframe-BQS6qtw3.js";import{E as d}from"./EvaluationEditorPage-CS721T8c.js";import"./index-Chi_LkuB.js";import"./WarningDialog-DrhKoIsi.js";import"./ConfirmationDialog-ycX2jcUO.js";import"./DialogBase-BFxYZZoa.js";import"./Close-DNav6fH0.js";import"./HelpPopover-qCLkd-Tk.js";import"./MarkdownPopover-DTfEgFmO.js";import"./LightTooltip-CsVEpTPe.js";import"./MarkdownSynapse-DVax0Jmd.js";import"./SkeletonButton-Cq3ID3gv.js";import"./SkeletonInlineBlock-D36uEl4g.js";import"./SkeletonTable-EcKAjw5h.js";import"./SkeletonParagraph-C3oZhxG8.js";import"./CreatedOnByUserDiv-D9NMwCUt.js";import"./UserBadge-CNqK9ajB.js";import"./useUserBundle-BrF0shF6.js";import"./useSuspenseQuery-z742AnhG.js";import"./MenuItem-C3kzUxKu.js";import"./Card-OQD5P-Gx.js";import"./Chip-ecDlwPeu.js";import"./DateTimePicker-BbckSJYo.js";import"./useMobilePicker-Coss7P6q.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-BbhrgGW0.js";import"./index-DIRtHi4A.js";import"./ListItem-CHHP6nus.js";import"./listItemButtonClasses-B9xhDk9q.js";import"./Tabs-ByN1WqRH.js";import"./KeyboardArrowRight-DRwO80wh.js";import"./CardContent-CD6wX0jA.js";import"./Grid-3RO3DzDO.js";import"./upperFirst-CQALxJIQ.js";import"./_stringToArray-Wk_N1-ZK.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
