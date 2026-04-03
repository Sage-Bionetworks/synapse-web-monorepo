import{z as s,b as o,s as e,H as a,v as i,dl as t}from"./iframe-BfB6FrYj.js";import{E as d}from"./EvaluationEditorPage-BC-mgH0A.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-Cya_WHYc.js";import"./UserBadge-Db9DswDw.js";import"./useUserBundle-3O_Oxfpc.js";import"./SkeletonTable-KlaWzsOV.js";import"./MenuItem-CG4XGW7R.js";import"./Card-CnH2dOyE.js";import"./Chip-H1nC51OX.js";import"./WarningDialog-CF8S8GdW.js";import"./ConfirmationDialog-DRAawVI6.js";import"./DialogBase-Oo5YqmVI.js";import"./Close-BRAhiQKl.js";import"./HelpPopover-BCQ8LHno.js";import"./MarkdownPopover-DQe0NYIR.js";import"./LightTooltip-BjAj_W1D.js";import"./MarkdownSynapse-BMEskP2u.js";import"./SkeletonButton-CyKkbiIk.js";import"./SkeletonInlineBlock-CtmRc0d4.js";import"./SkeletonParagraph-CD0x-Nfw.js";import"./FormControlLabel-jJq3AgOA.js";import"./Checkbox-CZIHvRti.js";import"./SwitchBase-CpXG8q-V.js";import"./DateTimePicker-BTlLIJeb.js";import"./useMobilePicker-MCb89ubn.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-B4GfmCdD.js";import"./index-DcdQR_Vf.js";import"./ListItem-D5pRGaNH.js";import"./listItemButtonClasses-8UczhBBp.js";import"./Tabs-BsPstjbT.js";import"./KeyboardArrowRight-BHviQNSD.js";import"./CardContent-DaTpwJui.js";import"./Grid-CKKdVltP.js";import"./upperFirst-D03b-PSY.js";import"./_stringToArray-njCGQe-O.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,J={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const Q=["Entity","Evaluation"];export{n as Entity,r as Evaluation,Q as __namedExportsOrder,J as default};
