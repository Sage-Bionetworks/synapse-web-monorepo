import{g as s,n as o,b as e,H as a,w as i,dt as t}from"./iframe-CAtQIdHN.js";import{E as d}from"./EvaluationEditorPage-sytpo6qB.js";import"./index-Chi_LkuB.js";import"./WarningDialog-DwpDoMyr.js";import"./ConfirmationDialog-DyMwO9XA.js";import"./DialogBase-nASrT1FI.js";import"./Close-D6EAZUK8.js";import"./HelpPopover-gTGEtHsE.js";import"./MarkdownPopover-BwU3z6dR.js";import"./LightTooltip-B_-PEZcf.js";import"./MarkdownSynapse-Bl9eZLoo.js";import"./SkeletonButton-ikrND2s9.js";import"./SkeletonInlineBlock-BsYWVoeU.js";import"./SkeletonTable-CGYf92GP.js";import"./SkeletonParagraph-BrBu-G7u.js";import"./CreatedOnByUserDiv-BOP5lWG2.js";import"./UserBadge-CJEZfb06.js";import"./useUserBundle-CwtPx6I8.js";import"./MenuItem-CMeMzyXl.js";import"./Card-CS8vcmlr.js";import"./Chip-CfWpGXU5.js";import"./DateTimePicker-Cp7ABq47.js";import"./useMobilePicker-qwNz3Yju.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-2BEVXnBh.js";import"./index-DVkiAmff.js";import"./ListItem-B2k86Eei.js";import"./listItemButtonClasses-DmHw4WH8.js";import"./Tabs-D8f3f-hN.js";import"./KeyboardArrowRight-DJnldEa8.js";import"./CardContent-IOhxTCTR.js";import"./Grid-B9xtwq2L.js";import"./upperFirst-BHjqO1Qb.js";import"./_stringToArray-Oy0YPGoi.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
