import{g as s,n as o,b as e,H as a,w as i,du as t}from"./iframe-CDThL800.js";import{E as d}from"./EvaluationEditorPage-B0UFS6Fa.js";import"./index-Chi_LkuB.js";import"./WarningDialog-DOVKyoMX.js";import"./ConfirmationDialog-Die5M7Ig.js";import"./DialogBase-D7t67H5I.js";import"./Close-BK5tRb3m.js";import"./HelpPopover-Dcl1P8CO.js";import"./MarkdownPopover-BxrNYFSZ.js";import"./LightTooltip-CeD-Iueq.js";import"./MarkdownSynapse-D1fATXb_.js";import"./SkeletonButton-BWSz9WUF.js";import"./SkeletonInlineBlock-B-Z5JZ59.js";import"./SkeletonTable-CKMKjGQn.js";import"./SkeletonParagraph-DNn6pQr4.js";import"./CreatedOnByUserDiv-3K5ztqtq.js";import"./UserBadge-CfMPp4pO.js";import"./useUserBundle-Buy8yH5D.js";import"./MenuItem-DxhVkehk.js";import"./Card-BEiyf98S.js";import"./Chip-DKZciXua.js";import"./DateTimePicker-Dk-TCJNo.js";import"./useMobilePicker-TzkaqYJG.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DdLfdr_2.js";import"./index-BZVSFT2Q.js";import"./ListItem-DQYb0Uxh.js";import"./listItemButtonClasses-Cg2nCnuj.js";import"./Tabs-BQh56P9z.js";import"./KeyboardArrowRight-uZNt33O1.js";import"./CardContent-B-xBIM0-.js";import"./Grid-DS25EHc8.js";import"./upperFirst-CSLaLdzV.js";import"./_stringToArray-OSzAOFh9.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
