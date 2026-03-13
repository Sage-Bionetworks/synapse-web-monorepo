import{g as s,n as o,b as e,H as a,w as i,du as t}from"./iframe-SpTPUL8m.js";import{E as d}from"./EvaluationEditorPage-B9rFjx0p.js";import"./index-Chi_LkuB.js";import"./WarningDialog-BKLE9oMr.js";import"./ConfirmationDialog-Dh3Su1ip.js";import"./DialogBase-BJEwHP0p.js";import"./Close-CXggAjW9.js";import"./HelpPopover-BfVFLmxW.js";import"./MarkdownPopover-DmG1p_lZ.js";import"./LightTooltip-thM4wO9l.js";import"./MarkdownSynapse-D10-Vf-V.js";import"./SkeletonButton-BZ4aKRQm.js";import"./SkeletonInlineBlock-QplUKVpF.js";import"./SkeletonTable-BuAR6CBE.js";import"./SkeletonParagraph-CB5oiNEg.js";import"./CreatedOnByUserDiv-D9g1fqYK.js";import"./UserBadge-WsW3e6pV.js";import"./useUserBundle-CMEzZcsf.js";import"./MenuItem-DMW1-yIZ.js";import"./Card-DnzMTA9B.js";import"./Chip-BbzLJe0J.js";import"./DateTimePicker-BHZKE7CM.js";import"./useMobilePicker-BIoqT-XY.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-B4haAT7H.js";import"./index-BPOVYvhU.js";import"./ListItem-C5FE55VF.js";import"./listItemButtonClasses-DD21Mqvg.js";import"./Tabs-CQE3DpGg.js";import"./KeyboardArrowRight-D7j6nB_I.js";import"./CardContent-Hv20-qZH.js";import"./Grid-BjgyTgS9.js";import"./upperFirst-CjX_vy75.js";import"./_stringToArray-RgUygvco.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
