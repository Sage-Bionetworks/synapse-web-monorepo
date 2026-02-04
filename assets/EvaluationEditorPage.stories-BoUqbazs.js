import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-PYPp7xnK.js";import{E as d}from"./EvaluationEditorPage-D-W9sP6v.js";import"./index-Chi_LkuB.js";import"./WarningDialog-mZUJ_Oks.js";import"./ConfirmationDialog-2zXE13iH.js";import"./DialogBase-d_CECZtd.js";import"./Close-NsSVTbKR.js";import"./HelpPopover-CRuNxnYI.js";import"./MarkdownPopover-CTfESMzb.js";import"./LightTooltip-DTNQsZN6.js";import"./MarkdownSynapse-nwSv3Tm6.js";import"./SkeletonButton-CWan3o9p.js";import"./SkeletonInlineBlock-CdKZUiWg.js";import"./SkeletonTable-CVr3KqkK.js";import"./SkeletonParagraph-DNnDNfQN.js";import"./CreatedOnByUserDiv-DR26Rcfq.js";import"./UserBadge-Dhz-w7oT.js";import"./useUserBundle-Cc0t0_AU.js";import"./useSuspenseQuery-DpR9wtQx.js";import"./MenuItem-h2F7yZes.js";import"./Card-Dcs6KWbP.js";import"./Chip-BkoJj4oN.js";import"./DateTimePicker-CTTjmbNy.js";import"./useMobilePicker-DYnder3M.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-BaTsBSFG.js";import"./index-1SI29lko.js";import"./ListItem-CRuVS9h5.js";import"./listItemButtonClasses-wHWe-ALw.js";import"./Tabs-Dr4951SE.js";import"./KeyboardArrowRight-Bn8-GVTG.js";import"./CardContent-BzfDfGGT.js";import"./Grid-v4mjr64H.js";import"./upperFirst-gQP4xssU.js";import"./_stringToArray-DumEo2UC.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
