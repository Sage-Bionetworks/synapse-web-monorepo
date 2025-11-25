import{g as u,n as a,b as e,H as o,w as g,dJ as t}from"./iframe-BwBHmtLn.js";import{E as b}from"./EvaluationEditorPage-BiEDZeL0.js";import"./index-r8ZA1smB.js";import"./WarningDialog-DNW01GvB.js";import"./ConfirmationDialog-LuKTcSOQ.js";import"./DialogBase-CGGylDq4.js";import"./Close-BfixGz6h.js";import"./HelpPopover-CaVwFHNp.js";import"./MarkdownPopover-BoTNWuCk.js";import"./LightTooltip-B1vNEQPg.js";import"./MarkdownSynapse-C2XjXP5O.js";import"./SkeletonButton-BTCaeByw.js";import"./SkeletonInlineBlock-ZHAchM_I.js";import"./SkeletonTable-CwWx9Hg9.js";import"./SkeletonParagraph-CvcuNn1V.js";import"./CreatedOnByUserDiv-B9IDOLMD.js";import"./UserBadge-BD5Fxkmm.js";import"./MenuItem-CkdRDM7m.js";import"./Card-CWfuhv8s.js";import"./Chip-DeqIQwfV.js";import"./DateTimePicker-BReFKTRO.js";import"./useMobilePicker-DCZyx8nK.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-CRwuWGqd.js";import"./index-Cofbk_Be.js";import"./ListItem-K23_5bnf.js";import"./listItemButtonClasses-qkDTYFPm.js";import"./Tabs-BeoGRdvJ.js";import"./KeyboardArrowRight-C-63BGv5.js";import"./CardContent-CIeNaF9R.js";import"./Grid-DVF-F4ru.js";import"./upperFirst-DdcNGQqu.js";import"./_stringToArray-U0f9qiZE.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,V={title:"Synapse/Challenge/EvaluationEditorPage",component:b,args:{onDeleteSuccess:S()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...u(e),a.get(`${e}/repo/v1/evaluation/:id`,()=>o.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:g.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),a.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>o.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};var s,i,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
