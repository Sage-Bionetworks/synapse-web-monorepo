import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-DuFc9wy7.js";import{E as d}from"./EvaluationEditorPage-DZgbYopB.js";import"./index-Chi_LkuB.js";import"./WarningDialog-C0Wj4d-X.js";import"./ConfirmationDialog-CCgQxBD8.js";import"./DialogBase-BR60Qdy4.js";import"./Close-DDp2NBBe.js";import"./HelpPopover-DYKBAVc-.js";import"./MarkdownPopover-DymcBMfp.js";import"./LightTooltip-BztaycEr.js";import"./MarkdownSynapse-BVL-tgRC.js";import"./SkeletonButton-p5NHVcC3.js";import"./SkeletonInlineBlock-DWi7tVQO.js";import"./SkeletonTable-9HY8re28.js";import"./SkeletonParagraph-DXhZKBI2.js";import"./CreatedOnByUserDiv-HUSMkMqu.js";import"./UserBadge-B3eZrs9B.js";import"./useUserBundle-Dse17CN3.js";import"./useSuspenseQuery-DxSHSM8_.js";import"./MenuItem-BaPxBIGw.js";import"./Card-DG5CjRLq.js";import"./Chip-Bhz-2AzF.js";import"./DateTimePicker-DQNIsRTG.js";import"./useMobilePicker-Dx-y_DHs.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DdytQCmy.js";import"./index-CH5M0AIg.js";import"./ListItem-gDoknv0B.js";import"./listItemButtonClasses-FzgRrT9s.js";import"./Tabs-J7DrImLy.js";import"./KeyboardArrowRight-BniIMPW2.js";import"./CardContent-Bdt5wffe.js";import"./Grid-Cye-JFjr.js";import"./upperFirst-DFgpsIrw.js";import"./_stringToArray-C69-ND5j.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
