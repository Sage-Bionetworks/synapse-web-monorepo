import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-B-rWBBOy.js";import{E as d}from"./EvaluationEditorPage-DIGETsnC.js";import"./index-Chi_LkuB.js";import"./WarningDialog-DRthvQf7.js";import"./ConfirmationDialog-CTssCfny.js";import"./DialogBase-CPTrGtI1.js";import"./Close-CpX3wYP0.js";import"./HelpPopover-q5ekk2th.js";import"./MarkdownPopover-b-Sbeuph.js";import"./LightTooltip-BemyKtyu.js";import"./MarkdownSynapse-CjIEyYww.js";import"./SkeletonButton-C55ygy2r.js";import"./SkeletonInlineBlock-Cpev2ljV.js";import"./SkeletonTable-GTeIPnR6.js";import"./SkeletonParagraph-IppQ387m.js";import"./CreatedOnByUserDiv-CseYqUlH.js";import"./UserBadge-ChgBnm4h.js";import"./useUserBundle-rX-QoUXs.js";import"./useSuspenseQuery-BilXPZyB.js";import"./MenuItem-rdxON32h.js";import"./Card-D938tlRh.js";import"./Chip-WQPXL1Rn.js";import"./DateTimePicker-C3hYvKsi.js";import"./useMobilePicker-C22HmEzy.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-EMuIDNUH.js";import"./index-BmrJEvkQ.js";import"./ListItem-ChCGYBcn.js";import"./listItemButtonClasses-Borf8tjx.js";import"./Tabs-CQM_Dviu.js";import"./KeyboardArrowRight-Cn5zzdUM.js";import"./CardContent-91H8nNJ9.js";import"./Grid-BdoL564Q.js";import"./upperFirst-14rbrisy.js";import"./_stringToArray-UQFMmfq_.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
