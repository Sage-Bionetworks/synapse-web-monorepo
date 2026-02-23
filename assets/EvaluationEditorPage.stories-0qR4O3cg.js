import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-bA05VlDB.js";import{E as d}from"./EvaluationEditorPage-BABO1MlS.js";import"./index-Chi_LkuB.js";import"./WarningDialog-BCq2cfyC.js";import"./ConfirmationDialog-C0bbEsUc.js";import"./DialogBase-vddOc5dA.js";import"./Close-BgXrYz09.js";import"./HelpPopover-BzTlr5XD.js";import"./MarkdownPopover-B1EOARnN.js";import"./LightTooltip-Blh-KN0r.js";import"./MarkdownSynapse-BUlv3hnh.js";import"./SkeletonButton-D2qH20IX.js";import"./SkeletonInlineBlock-D2v7KJSi.js";import"./SkeletonTable-C3k8u3nb.js";import"./SkeletonParagraph-DlcYTizK.js";import"./CreatedOnByUserDiv-CRWQfasB.js";import"./UserBadge-DmE9Q2UM.js";import"./useUserBundle-C5zElDJN.js";import"./useSuspenseQuery-Zel5Xy26.js";import"./MenuItem-DFGunzbN.js";import"./Card-D2Ee3gfr.js";import"./Chip-vyXQw8tV.js";import"./DateTimePicker-BVaP_t0_.js";import"./useMobilePicker-BvXyvak8.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DDPop6eJ.js";import"./index-C4a7Rce_.js";import"./ListItem-CINv7iyl.js";import"./listItemButtonClasses-DHhqHtAw.js";import"./Tabs-DWxN9EV-.js";import"./KeyboardArrowRight-DF5BrjGd.js";import"./CardContent-DmL6PUuU.js";import"./Grid-B7LF-N5n.js";import"./upperFirst-CPOzP5xu.js";import"./_stringToArray-C2ly521v.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
