import{g as s,n as o,b as e,H as a,w as i,du as t}from"./iframe-B7gyTvXJ.js";import{E as d}from"./EvaluationEditorPage-CcWENogu.js";import"./index-Chi_LkuB.js";import"./WarningDialog-DEv-0fAl.js";import"./ConfirmationDialog-B3QhZ0u5.js";import"./DialogBase--rdhqJoF.js";import"./Close-BtEQAkrf.js";import"./HelpPopover-CgJi15Pc.js";import"./MarkdownPopover-CtJuHvPt.js";import"./LightTooltip-DabWC6y6.js";import"./MarkdownSynapse-27_wa5xd.js";import"./SkeletonButton-BISD75XD.js";import"./SkeletonInlineBlock-w4q-zSuw.js";import"./SkeletonTable-DjMRvgKw.js";import"./SkeletonParagraph-DmG5QWjf.js";import"./CreatedOnByUserDiv-Bx-lC6nM.js";import"./UserBadge-qo_IX7jY.js";import"./useUserBundle-CZajkvxD.js";import"./MenuItem-Dou85YW3.js";import"./Card-DfwGulL0.js";import"./Chip-CZ04a0tX.js";import"./DateTimePicker-BQrU5My1.js";import"./useMobilePicker-BOlFBuSh.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DkUah7Gt.js";import"./index-WdAvK5aU.js";import"./ListItem-BrhDRM0I.js";import"./listItemButtonClasses-buXogD7e.js";import"./Tabs-i4Y6Eu5o.js";import"./KeyboardArrowRight-Y7isli1G.js";import"./CardContent-TDE1ZQks.js";import"./Grid-DuwlkHi3.js";import"./upperFirst-DTxPefNO.js";import"./_stringToArray-BGs7cAA1.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
