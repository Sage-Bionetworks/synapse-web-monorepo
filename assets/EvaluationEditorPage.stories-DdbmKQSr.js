import{g as s,n as o,b as e,H as a,w as i,dv as t}from"./iframe-BFOdDDU9.js";import{E as d}from"./EvaluationEditorPage-DES60mDw.js";import"./index-Chi_LkuB.js";import"./WarningDialog-C0sSnIPW.js";import"./ConfirmationDialog-DE_sDXrs.js";import"./DialogBase-CqjTgUyd.js";import"./Close-BiMPyEJa.js";import"./HelpPopover-BGoqvETW.js";import"./MarkdownPopover-DNOZWbzO.js";import"./LightTooltip-CvVy39ak.js";import"./MarkdownSynapse-CvUwVk43.js";import"./SkeletonButton-DqU7tug-.js";import"./SkeletonInlineBlock-DA2_ugLR.js";import"./SkeletonTable-YSrwQoxW.js";import"./SkeletonParagraph-tO6IeoMO.js";import"./CreatedOnByUserDiv-Dd5pmRU-.js";import"./UserBadge-D59lDHcb.js";import"./useUserBundle-DCqqdgaq.js";import"./MenuItem-PnDY4AEM.js";import"./Card-O6nQpaBG.js";import"./Chip-D2x9BPaK.js";import"./DateTimePicker-BfNjNo2Z.js";import"./useMobilePicker-DvdQMuBj.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-Cn7M2egv.js";import"./index-DDJJe_s9.js";import"./ListItem-CYmW793j.js";import"./listItemButtonClasses-ByFlDGo4.js";import"./Tabs-UO7EtSpl.js";import"./KeyboardArrowRight-D74rIE2H.js";import"./CardContent-BJQvjTQQ.js";import"./Grid-DZ39djx4.js";import"./upperFirst-CWVEt-e3.js";import"./_stringToArray-CstA7w_i.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
