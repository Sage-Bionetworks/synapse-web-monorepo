import{g as s,n as e,b as o,H as a,w as i,dF as t}from"./iframe-D92BdoG9.js";import{E as d}from"./EvaluationEditorPage-BPqk76G9.js";import"./index-Chi_LkuB.js";import"./WarningDialog-DlpWZaOb.js";import"./ConfirmationDialog--5BBCv73.js";import"./DialogBase-7QNHfM8i.js";import"./Close-CMNaFelZ.js";import"./HelpPopover-DwSVnQpf.js";import"./MarkdownPopover-DYuidQle.js";import"./LightTooltip-DHXuYbNh.js";import"./MarkdownSynapse-BXkVd7Pm.js";import"./SkeletonButton-DkZdiJnq.js";import"./SkeletonInlineBlock-BoREPhEN.js";import"./SkeletonTable-DmBSaFM1.js";import"./SkeletonParagraph-BlcJcRxn.js";import"./CreatedOnByUserDiv-BgGpJ2ti.js";import"./UserBadge-BNFHqCyR.js";import"./useUserBundle-BBzdm9g8.js";import"./useSuspenseQuery-B_1ZDlRS.js";import"./MenuItem-BJFdqxGb.js";import"./Card-CM0Ob5QK.js";import"./Chip-CniQq1ch.js";import"./DateTimePicker-rGsvKbfC.js";import"./useMobilePicker-DMWrPT4o.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-cVFlk2CZ.js";import"./index-CYdrGrZN.js";import"./ListItem-DEV60ndk.js";import"./listItemButtonClasses-BBgB7kdh.js";import"./Tabs-CG42ed2l.js";import"./KeyboardArrowRight-Bobd3mou.js";import"./CardContent-DS2VXwnw.js";import"./Grid-BmWkcZL3.js";import"./upperFirst-BDP6i2kZ.js";import"./_stringToArray-CbWQ4t_b.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
