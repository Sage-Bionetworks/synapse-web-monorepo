import{g as s,n as o,b as e,H as a,w as i,du as t}from"./iframe-CIPlMaLT.js";import{E as d}from"./EvaluationEditorPage-D_p8HW4v.js";import"./index-Chi_LkuB.js";import"./WarningDialog-DgPWvkYJ.js";import"./ConfirmationDialog-fVjFifBD.js";import"./DialogBase-LmDxIN7q.js";import"./Close-BmqKwCBp.js";import"./HelpPopover-BQ8z_T0o.js";import"./MarkdownPopover-DNuS7K0n.js";import"./LightTooltip-DW0Ye48E.js";import"./MarkdownSynapse-DBktvvdU.js";import"./SkeletonButton-BYZF9tG6.js";import"./SkeletonInlineBlock-1S1r7zTT.js";import"./SkeletonTable-CWf8URW0.js";import"./SkeletonParagraph--qeTTP7n.js";import"./CreatedOnByUserDiv-CZFhH_7M.js";import"./UserBadge-BE1Nldxc.js";import"./useUserBundle-o77XsN2e.js";import"./MenuItem-D7kngZjY.js";import"./Card-C5MMO-uO.js";import"./Chip-CesnYDs9.js";import"./DateTimePicker-D4SKQOui.js";import"./useMobilePicker-6Esk_bHx.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-Be9iSZX5.js";import"./index-Bv4HrMwv.js";import"./ListItem-Wmzual6U.js";import"./listItemButtonClasses-CZQkbgT_.js";import"./Tabs-Dww5dP_8.js";import"./KeyboardArrowRight-BD4Aiv6p.js";import"./CardContent-BVwADYcw.js";import"./Grid-DMW95j0d.js";import"./upperFirst-vGx6q4Oj.js";import"./_stringToArray-NKTgbcb6.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
