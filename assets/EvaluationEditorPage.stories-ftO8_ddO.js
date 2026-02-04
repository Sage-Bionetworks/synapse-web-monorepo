import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-9zwml_ZL.js";import{E as d}from"./EvaluationEditorPage-BEY3815H.js";import"./index-Chi_LkuB.js";import"./WarningDialog-BV5AHs02.js";import"./ConfirmationDialog-_IRTHH0j.js";import"./DialogBase-Hity4xAw.js";import"./Close-Bx_JZLf8.js";import"./HelpPopover-Cf3W3rHJ.js";import"./MarkdownPopover-BsgLS8bs.js";import"./LightTooltip-BlBY8chN.js";import"./MarkdownSynapse-eByBmLQG.js";import"./SkeletonButton-C8wU0a4y.js";import"./SkeletonInlineBlock-D9CRPwvT.js";import"./SkeletonTable-CtHOf3Y6.js";import"./SkeletonParagraph-jYvf1dwm.js";import"./CreatedOnByUserDiv-BL5VgdMK.js";import"./UserBadge-roJgG6JX.js";import"./useUserBundle-MekiU7Qn.js";import"./useSuspenseQuery-DROjoE-r.js";import"./MenuItem-DDbuquWO.js";import"./Card-DAP4jV0y.js";import"./Chip-D5tNn4lG.js";import"./DateTimePicker-CJEs4iv7.js";import"./useMobilePicker-DbB5wMA3.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-D8LtOSth.js";import"./index-qxRvCYco.js";import"./ListItem-COyOXpqD.js";import"./listItemButtonClasses-BHTt-fvf.js";import"./Tabs-BqvBwKHk.js";import"./KeyboardArrowRight-B6xAd100.js";import"./CardContent-DH_fcNp_.js";import"./Grid-BP7miAi3.js";import"./upperFirst-Bo5JCqMv.js";import"./_stringToArray-D5x3YCqC.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
