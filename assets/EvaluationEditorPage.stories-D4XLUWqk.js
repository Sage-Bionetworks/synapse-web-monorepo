import{g as s,n as o,b as e,H as a,w as i,dv as t}from"./iframe-CCrcZxgU.js";import{E as d}from"./EvaluationEditorPage-F2K4V5hn.js";import"./index-Chi_LkuB.js";import"./WarningDialog-BYL5rTCj.js";import"./ConfirmationDialog-D414-GDQ.js";import"./DialogBase-CeubuD3-.js";import"./Close-CM4W6Pks.js";import"./HelpPopover-BR72KBQJ.js";import"./MarkdownPopover-BZ4yirLT.js";import"./LightTooltip-BQGvE2MH.js";import"./MarkdownSynapse-FC1rcF9v.js";import"./SkeletonButton-BtsVrZX-.js";import"./SkeletonInlineBlock-D21wux6D.js";import"./SkeletonTable-Ba707JDB.js";import"./SkeletonParagraph--DCUjqtN.js";import"./CreatedOnByUserDiv-Cc9T2T4H.js";import"./UserBadge-foBknIQ2.js";import"./useUserBundle-BX_9QzHX.js";import"./MenuItem-BOrJnNIc.js";import"./Card-B7y7fXMD.js";import"./Chip-BosvP6Bi.js";import"./DateTimePicker-RVH2DRXL.js";import"./useMobilePicker-BPSVgqdy.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-Bc1aF6fK.js";import"./index-DOETxQEh.js";import"./ListItem-PU0ILmJV.js";import"./listItemButtonClasses-DBBBInAv.js";import"./Tabs-hsaDgFub.js";import"./KeyboardArrowRight-DlxQeLq6.js";import"./CardContent-Do97V6B4.js";import"./Grid-BBptQ3XV.js";import"./upperFirst-BrU4mVeI.js";import"./_stringToArray-BloE5-Rr.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
