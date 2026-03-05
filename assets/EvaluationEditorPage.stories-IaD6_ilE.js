import{g as s,n as o,b as e,H as a,w as i,dt as t}from"./iframe-C-OH83az.js";import{E as d}from"./EvaluationEditorPage-BYAavKS7.js";import"./index-Chi_LkuB.js";import"./WarningDialog-BuRgXwOA.js";import"./ConfirmationDialog-Dh8vuXen.js";import"./DialogBase-BmaLomxP.js";import"./Close-CkkNh_Xs.js";import"./HelpPopover-D09YDRBj.js";import"./MarkdownPopover-CwJ2NCps.js";import"./LightTooltip-Bdkire5h.js";import"./MarkdownSynapse-Fbj0BNYf.js";import"./SkeletonButton-C4_qqbr_.js";import"./SkeletonInlineBlock-Deti-BYJ.js";import"./SkeletonTable-BU7f8Esd.js";import"./SkeletonParagraph-W1N8UnVm.js";import"./CreatedOnByUserDiv-Zv0xK75O.js";import"./UserBadge-OIG0vUKz.js";import"./useUserBundle-BCf2iZ1B.js";import"./MenuItem-CBuyGD8v.js";import"./Card-DrWs0ymP.js";import"./Chip-9GXO3NGV.js";import"./DateTimePicker-CcdFfH9H.js";import"./useMobilePicker-9SEDdxFL.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DAs_nL6j.js";import"./index-CqzNnuyO.js";import"./ListItem-CVicDMcC.js";import"./listItemButtonClasses-By6B-hWh.js";import"./Tabs-BxgzbLAz.js";import"./KeyboardArrowRight-CTn-RKA2.js";import"./CardContent-D66jnE2y.js";import"./Grid-CRh4aExu.js";import"./upperFirst-C-BLdYx7.js";import"./_stringToArray-Vc6S5bMC.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
