import{g as s,n as o,b as e,H as a,w as i,dt as t}from"./iframe-CxpGQRBF.js";import{E as d}from"./EvaluationEditorPage-BPdDdr-x.js";import"./index-Chi_LkuB.js";import"./WarningDialog-X-UY3Et6.js";import"./ConfirmationDialog-48YNczn8.js";import"./DialogBase-VRRvXcss.js";import"./Close-BVGSUcxq.js";import"./HelpPopover-Bah9lcl8.js";import"./MarkdownPopover-BXPyAi3h.js";import"./LightTooltip-DF3uJOWM.js";import"./MarkdownSynapse-D7ZvzCtj.js";import"./SkeletonButton-8uBDlMQq.js";import"./SkeletonInlineBlock-DzPT_dbg.js";import"./SkeletonTable-B9WKv7bd.js";import"./SkeletonParagraph-BVjbv9Tg.js";import"./CreatedOnByUserDiv-D-u-Eq81.js";import"./UserBadge-CQ7vqXnO.js";import"./useUserBundle-CnIXmd2O.js";import"./MenuItem-B0A_VAcM.js";import"./Card-DNCBPWYU.js";import"./Chip-CAv6xn2G.js";import"./DateTimePicker-C02t4U2V.js";import"./useMobilePicker-Iq8Zc_Cu.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DI-ivuGT.js";import"./index-Bxpms_sx.js";import"./ListItem-CUaNCzSQ.js";import"./listItemButtonClasses-HW3kQ_L8.js";import"./Tabs-hkqWjW1l.js";import"./KeyboardArrowRight-CsLf-yh2.js";import"./CardContent-kUYkqWVJ.js";import"./Grid-DzCEe4zi.js";import"./upperFirst-D37inkiw.js";import"./_stringToArray-CK4NZKR9.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
