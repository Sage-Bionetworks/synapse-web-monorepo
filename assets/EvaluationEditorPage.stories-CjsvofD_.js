import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-Byg5KEO3.js";import{E as d}from"./EvaluationEditorPage-BEWqoeOk.js";import"./index-Chi_LkuB.js";import"./WarningDialog-B1yN9PBE.js";import"./ConfirmationDialog-JsFCfxK0.js";import"./DialogBase-CnDWnT2B.js";import"./Close-CpMA1DKn.js";import"./HelpPopover-CT10kuL6.js";import"./MarkdownPopover-DISWB6lN.js";import"./LightTooltip-MazkSLsv.js";import"./MarkdownSynapse-DUFzxpBi.js";import"./SkeletonButton-4jGLqIPK.js";import"./SkeletonInlineBlock-BMXq3IDQ.js";import"./SkeletonTable-DoPPIijf.js";import"./SkeletonParagraph-Bg9PA-th.js";import"./CreatedOnByUserDiv-BELA0Ebr.js";import"./UserBadge-BLjnlATj.js";import"./useUserBundle-CIHk5rZS.js";import"./useSuspenseQuery-BsTrDnpu.js";import"./MenuItem-CHAd-f9u.js";import"./Card-BiYdDpof.js";import"./Chip-S8C0h81Q.js";import"./DateTimePicker-BHEJwkeU.js";import"./useMobilePicker-CyKauUs-.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-qFRcmL-P.js";import"./index-ChYi0wId.js";import"./ListItem-Dhqn4tAo.js";import"./listItemButtonClasses-CSdhhBnK.js";import"./Tabs-B5W1XeFg.js";import"./KeyboardArrowRight-DhN1Xb6w.js";import"./CardContent-CwElkTsi.js";import"./Grid-DxpU9yRv.js";import"./upperFirst-CnTzh5Xg.js";import"./_stringToArray-DkWWY5vk.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
