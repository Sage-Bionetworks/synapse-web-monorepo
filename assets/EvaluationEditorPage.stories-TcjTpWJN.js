import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-r7gAu2bc.js";import{E as d}from"./EvaluationEditorPage-DuRVH5F9.js";import"./index-Chi_LkuB.js";import"./WarningDialog-B17A1Kds.js";import"./ConfirmationDialog-vZtrKvGV.js";import"./DialogBase-BOUiF06G.js";import"./Close-xlIC43VD.js";import"./HelpPopover-DIDZEU3E.js";import"./MarkdownPopover-DLh5Bk_h.js";import"./LightTooltip-CMMeaAaF.js";import"./MarkdownSynapse-2Kx7OuZk.js";import"./SkeletonButton-BM35HBbr.js";import"./SkeletonInlineBlock-CnfDTonB.js";import"./SkeletonTable-ChI727yy.js";import"./SkeletonParagraph-ENW1FsOv.js";import"./CreatedOnByUserDiv-BryQibn7.js";import"./UserBadge-0YnAM4bN.js";import"./useUserBundle-CoSjfhMR.js";import"./useSuspenseQuery-DnY7oDDS.js";import"./MenuItem-B0LSwwXU.js";import"./Card-B8EN43Pe.js";import"./Chip-Da8UDvbq.js";import"./DateTimePicker-CeGWgl_6.js";import"./useMobilePicker-CBDAP-kf.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-BHmcozRE.js";import"./index-abBLt8Ff.js";import"./ListItem-BFJw64wu.js";import"./listItemButtonClasses-BgX_caKS.js";import"./Tabs-DaLTnT9Y.js";import"./KeyboardArrowRight-C0m766Je.js";import"./CardContent-CtU2K69N.js";import"./Grid-UI9nWBLn.js";import"./upperFirst-DM0WkrEi.js";import"./_stringToArray-jwA7-Do0.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
