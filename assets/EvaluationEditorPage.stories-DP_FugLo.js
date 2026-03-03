import{g as s,n as o,b as e,H as a,w as i,dt as t}from"./iframe-BkPHOFWj.js";import{E as d}from"./EvaluationEditorPage-Bj3Cr8gm.js";import"./index-Chi_LkuB.js";import"./WarningDialog-BAOw-BV2.js";import"./ConfirmationDialog-Ba_H-keT.js";import"./DialogBase-BfMmSQyK.js";import"./Close-DeRoSJW0.js";import"./HelpPopover-D25ENwTX.js";import"./MarkdownPopover-CcRV06SZ.js";import"./LightTooltip-Cy8km7pR.js";import"./MarkdownSynapse-HVoFGBlz.js";import"./SkeletonButton-Du8eM1ph.js";import"./SkeletonInlineBlock-DNcFzW0b.js";import"./SkeletonTable-byD91yhK.js";import"./SkeletonParagraph-Bk8dDX0J.js";import"./CreatedOnByUserDiv-BW3e6ITv.js";import"./UserBadge-DzJeSzo3.js";import"./useUserBundle-BSvNFjH2.js";import"./MenuItem-BtphKdVT.js";import"./Card-Banr9iBM.js";import"./Chip-C5nNw1tU.js";import"./DateTimePicker-BewVYF1K.js";import"./useMobilePicker-B2isVhm5.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-CCVeZZ2B.js";import"./index-ZxbTHjgY.js";import"./ListItem-C9d7TIRU.js";import"./listItemButtonClasses-AE8LoPH9.js";import"./Tabs-BrfjOIEK.js";import"./KeyboardArrowRight-CVEcENwl.js";import"./CardContent-BqkonWlQ.js";import"./Grid-xxQroJ24.js";import"./upperFirst-DXYG7wRm.js";import"./_stringToArray-Qnu1McrL.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
