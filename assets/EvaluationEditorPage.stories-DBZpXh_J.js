import{g as s,n as o,b as e,H as a,w as i,du as t}from"./iframe-la5pZNJP.js";import{E as d}from"./EvaluationEditorPage-Zzl6c-Ww.js";import"./index-Chi_LkuB.js";import"./WarningDialog--11tylSB.js";import"./ConfirmationDialog-BYOqzzUy.js";import"./DialogBase-CC3Fom-D.js";import"./Close-CPzKBjYo.js";import"./HelpPopover-BinEOj-x.js";import"./MarkdownPopover-DWH2OeX9.js";import"./LightTooltip-CcK1WQdJ.js";import"./MarkdownSynapse-DdvlGI58.js";import"./SkeletonButton-Cnars53-.js";import"./SkeletonInlineBlock-IWHLRfGq.js";import"./SkeletonTable-jKVXe2RG.js";import"./SkeletonParagraph-D00HqPxF.js";import"./CreatedOnByUserDiv-Bf14FI6k.js";import"./UserBadge-rJYMep-q.js";import"./useUserBundle-DcSi2JrE.js";import"./MenuItem-fdQnDEWw.js";import"./Card-Bzw4JsT_.js";import"./Chip-og5LeUeY.js";import"./DateTimePicker-D3prLfbj.js";import"./useMobilePicker-IQJtMXmA.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-I9ib5FfS.js";import"./index-nbMMV5sL.js";import"./ListItem-DhHBcsGE.js";import"./listItemButtonClasses-DE4u_cVy.js";import"./Tabs-By0YdnD5.js";import"./KeyboardArrowRight-BXQFHTzo.js";import"./CardContent-DKayPXSy.js";import"./Grid-DjVp0Bgc.js";import"./upperFirst-DxE-tu1G.js";import"./_stringToArray-DiXa0QIl.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const z=["Entity","Evaluation"];export{n as Entity,r as Evaluation,z as __namedExportsOrder,q as default};
