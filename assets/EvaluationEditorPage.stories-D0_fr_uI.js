import{z as s,b as o,s as e,H as a,v as i,dl as t}from"./iframe-DvDPVyr3.js";import{E as d}from"./EvaluationEditorPage-CUtTgCm7.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-DwXr75Py.js";import"./UserBadge-BlKDuGTK.js";import"./useUserBundle--EY3PjCb.js";import"./SkeletonTable-0fE1v7Jp.js";import"./MenuItem-Dbhxy3EU.js";import"./Card-B9Wv_sea.js";import"./Chip-YSiJYC5a.js";import"./WarningDialog-D_ciNuyR.js";import"./ConfirmationDialog-hJY-6MQc.js";import"./DialogBase-J8iZt42d.js";import"./Close-Dl87lOTy.js";import"./HelpPopover-B9l6QfUy.js";import"./MarkdownPopover-1Vxonhz2.js";import"./LightTooltip-A87-OJtX.js";import"./MarkdownSynapse-CFI-ggll.js";import"./SkeletonButton-ChNWGaeP.js";import"./SkeletonInlineBlock-DTOZhiyP.js";import"./SkeletonParagraph-C4mex8S5.js";import"./FormControlLabel-D9Jvuq4Y.js";import"./Checkbox-F9Ku5hpR.js";import"./SwitchBase-DnKqddam.js";import"./DateTimePicker-DsSk4S6e.js";import"./useMobilePicker-DkK_bQzz.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-Pz2jkrRk.js";import"./index-Cd-T-abm.js";import"./ListItem-h2kuWjMH.js";import"./listItemButtonClasses-Bw2THj84.js";import"./Tabs-DuEn23wO.js";import"./KeyboardArrowRight-CqoGc7xp.js";import"./CardContent-CpgBHdV6.js";import"./Grid-7B2QSBEP.js";import"./upperFirst-Dj8QDPzR.js";import"./_stringToArray-qyTth_0F.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,J={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
