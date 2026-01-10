import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-DtOCV9ZO.js";import{E as d}from"./EvaluationEditorPage-DopCkLpx.js";import"./index-Chi_LkuB.js";import"./WarningDialog-DyG6iWlv.js";import"./ConfirmationDialog-BIEXc5Nr.js";import"./DialogBase-BWg90ihX.js";import"./Close-D6GiZp3q.js";import"./HelpPopover-Cdi7BMOo.js";import"./MarkdownPopover-DA9u2k23.js";import"./LightTooltip-7xtsJ5TU.js";import"./MarkdownSynapse-DtveY7cQ.js";import"./SkeletonButton-BW-Av5i1.js";import"./SkeletonInlineBlock-CzzA0rkX.js";import"./SkeletonTable-DpWsxm1f.js";import"./SkeletonParagraph-BvB6yuWG.js";import"./CreatedOnByUserDiv-C2aJjJaM.js";import"./UserBadge-_qm-t3iK.js";import"./useUserBundle-DsiIiz9w.js";import"./useSuspenseQuery-SVjMJt8R.js";import"./MenuItem-BuDWfjYg.js";import"./Card-D-t8GO5w.js";import"./Chip-Br7md4nX.js";import"./DateTimePicker-CKPveisY.js";import"./useMobilePicker-BDrq4E9u.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-Dih-NTfn.js";import"./index-CtezEvjc.js";import"./ListItem-Cj4hV5OB.js";import"./listItemButtonClasses-WkkuZrVR.js";import"./Tabs-GVPRwF5d.js";import"./KeyboardArrowRight-vvMt6Shh.js";import"./CardContent-Cjgv5Voa.js";import"./Grid-C1XjfvKJ.js";import"./upperFirst-CN63WRoy.js";import"./_stringToArray-C4hRpv5Q.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
