import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-C9XoSndX.js";import{E as d}from"./EvaluationEditorPage-Cz7COHe3.js";import"./index-Chi_LkuB.js";import"./WarningDialog-DxmYKVd9.js";import"./ConfirmationDialog-Br1NI2DF.js";import"./DialogBase-Cj-WAIZM.js";import"./Close-DQGHtad4.js";import"./HelpPopover-IrQkWv7k.js";import"./MarkdownPopover-B2ZwGiYT.js";import"./LightTooltip-BoJkh92j.js";import"./MarkdownSynapse-BVsgkF4B.js";import"./SkeletonButton-CuEV4gB3.js";import"./SkeletonInlineBlock-By8cLyCE.js";import"./SkeletonTable-Dor9v2L-.js";import"./SkeletonParagraph-CP_Py8Yj.js";import"./CreatedOnByUserDiv-Lo5kSAF2.js";import"./UserBadge-BjmUf9sF.js";import"./useUserBundle-DccLYS0o.js";import"./useSuspenseQuery-OCydU3mN.js";import"./MenuItem-BtlH2e7k.js";import"./Card-D0mEAM9A.js";import"./Chip-DUl13jbe.js";import"./DateTimePicker-BoQw-wrQ.js";import"./useMobilePicker-ZDV2EGm2.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DLR1O-kH.js";import"./index-CkRaXIId.js";import"./ListItem-xnPVm_RY.js";import"./listItemButtonClasses-ocFg7dLL.js";import"./Tabs-Bp9ny5AV.js";import"./KeyboardArrowRight-C-zsTcT5.js";import"./CardContent-JUvcZibk.js";import"./Grid-BwPq8zDR.js";import"./upperFirst-STbLqbfM.js";import"./_stringToArray-pQtIBZMS.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
