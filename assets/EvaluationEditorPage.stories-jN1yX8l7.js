import{g as s,n as e,b as o,H as a,w as i,dI as t}from"./iframe-CL1UF9wq.js";import{E as d}from"./EvaluationEditorPage-CB-KDHaf.js";import"./index-Chi_LkuB.js";import"./WarningDialog-VWFHNP6T.js";import"./ConfirmationDialog-BgArY7GH.js";import"./DialogBase-D_WMzDU9.js";import"./Close-BWRQhN2m.js";import"./HelpPopover-jj4j5zDP.js";import"./MarkdownPopover-BLBfaCop.js";import"./LightTooltip-DY-wPTTk.js";import"./MarkdownSynapse-CdtBHZEE.js";import"./SkeletonButton-CYgioBCP.js";import"./SkeletonInlineBlock-CJQan7gL.js";import"./SkeletonTable-DMqnct0i.js";import"./SkeletonParagraph-D55VBz6b.js";import"./CreatedOnByUserDiv-COJppAx8.js";import"./UserBadge-CnO0Rkgm.js";import"./useUserBundle-BcHOhtU-.js";import"./useSuspenseQuery-LePCNQBH.js";import"./MenuItem-LKo31BtE.js";import"./Card-B9BQCfND.js";import"./Chip-DXWiT4yo.js";import"./DateTimePicker-BaN8Ah46.js";import"./useMobilePicker-J7eeA4ny.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DFPs_6TF.js";import"./index-D_p7qk7E.js";import"./ListItem-BwABetlb.js";import"./listItemButtonClasses-C02VQ1J6.js";import"./Tabs-DL2Gsrb_.js";import"./KeyboardArrowRight-dy3Z24dK.js";import"./CardContent-DRD_6_A0.js";import"./Grid-BA52H04o.js";import"./upperFirst-cu3C1wgQ.js";import"./_stringToArray-uahiwV50.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
