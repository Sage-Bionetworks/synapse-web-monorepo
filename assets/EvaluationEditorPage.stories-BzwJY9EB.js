import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-PKSisnYN.js";import{E as d}from"./EvaluationEditorPage-PJQxW0vP.js";import"./index-Chi_LkuB.js";import"./WarningDialog-8VxXcu23.js";import"./ConfirmationDialog-S4M52zPJ.js";import"./DialogBase-CB9fyCxz.js";import"./Close-B6DB3YsI.js";import"./HelpPopover-DzDKur2h.js";import"./MarkdownPopover-DS7FUQk-.js";import"./LightTooltip-8SVgZs3S.js";import"./MarkdownSynapse-xcQCt-re.js";import"./SkeletonButton-BGdnvIuV.js";import"./SkeletonInlineBlock-CSwI3yx9.js";import"./SkeletonTable-Dkrc7QOG.js";import"./SkeletonParagraph-C0R5SJWX.js";import"./CreatedOnByUserDiv-BY5MCAii.js";import"./UserBadge-B34w-3Og.js";import"./useUserBundle-C9JUfD1-.js";import"./useSuspenseQuery-CtKV56yt.js";import"./MenuItem-DV5diNve.js";import"./Card-DCVbjVFH.js";import"./Chip-BQb8GEui.js";import"./DateTimePicker-BloeabSr.js";import"./useMobilePicker-CkJ-tfs9.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-CQijo6xw.js";import"./index-CHPH14xa.js";import"./ListItem-Rh9ybIpc.js";import"./listItemButtonClasses-CQsaMkk1.js";import"./Tabs-BdP0rsfW.js";import"./KeyboardArrowRight-MLpg2-Rj.js";import"./CardContent-DosQPz36.js";import"./Grid-Cd8xwGFy.js";import"./upperFirst-DPi6eO5y.js";import"./_stringToArray-DqWLkAWJ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
