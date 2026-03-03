import{g as s,n as o,b as e,H as a,w as i,dt as t}from"./iframe-CR9Kppk9.js";import{E as d}from"./EvaluationEditorPage-vdKaTWF4.js";import"./index-Chi_LkuB.js";import"./WarningDialog-ze4oZLr5.js";import"./ConfirmationDialog-BXteRzfy.js";import"./DialogBase-DXW71yq5.js";import"./Close-4K7Ixs7T.js";import"./HelpPopover-DZ345V92.js";import"./MarkdownPopover-olh3PRGS.js";import"./LightTooltip-z2lc9QXh.js";import"./MarkdownSynapse-C76XvQvw.js";import"./SkeletonButton-DgY4znPZ.js";import"./SkeletonInlineBlock-D-RkmMYK.js";import"./SkeletonTable-DJdtHoqT.js";import"./SkeletonParagraph-DAQxrYxE.js";import"./CreatedOnByUserDiv-DRb9C8Uk.js";import"./UserBadge-CJm2e0vF.js";import"./useUserBundle-BZz123Kg.js";import"./MenuItem-CatSzqG9.js";import"./Card-NdZ0o22H.js";import"./Chip-B6UQirNv.js";import"./DateTimePicker-BwvR6g1s.js";import"./useMobilePicker-DtbsY0am.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-CFkyeD7R.js";import"./index-CTj_7GLi.js";import"./ListItem-BNgmpKyp.js";import"./listItemButtonClasses-DLwIaZt5.js";import"./Tabs-C0nCq_Si.js";import"./KeyboardArrowRight-DitGbZal.js";import"./CardContent-DvtqsK6J.js";import"./Grid-Dh0yaqaz.js";import"./upperFirst-BLd1ikYZ.js";import"./_stringToArray-BEAGm0ly.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
