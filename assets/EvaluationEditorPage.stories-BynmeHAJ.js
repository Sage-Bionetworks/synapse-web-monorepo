import{g as s,n as o,b as e,H as a,w as i,dv as t}from"./iframe-CMt_VWB6.js";import{E as d}from"./EvaluationEditorPage-D9f3xO2y.js";import"./index-Chi_LkuB.js";import"./WarningDialog-Dn9LVO2p.js";import"./ConfirmationDialog-DAAIkUCV.js";import"./DialogBase-BioY0WeR.js";import"./Close-JIZxqLvI.js";import"./HelpPopover-xOn9G6UQ.js";import"./MarkdownPopover-CsiHNvec.js";import"./LightTooltip-7kZK-MU9.js";import"./MarkdownSynapse-_5g5FMG-.js";import"./SkeletonButton-8Q59D0HR.js";import"./SkeletonInlineBlock-CT1ZajhA.js";import"./SkeletonTable-DytwZ5o7.js";import"./SkeletonParagraph-LH_zBhkQ.js";import"./CreatedOnByUserDiv-Bvo4vbbR.js";import"./UserBadge-DsDwTznR.js";import"./useUserBundle-1FwjZewl.js";import"./MenuItem-B3mmchc7.js";import"./Card-D0g3auxF.js";import"./Chip-CyQCL8kX.js";import"./DateTimePicker-R9JnhTrW.js";import"./useMobilePicker-C-8KNvxC.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-CYSaZVIE.js";import"./index-CXnGKoIL.js";import"./ListItem-DsZE78Aa.js";import"./listItemButtonClasses-DcR7PE9G.js";import"./Tabs-D5_GQ8T3.js";import"./KeyboardArrowRight-FChfxsz2.js";import"./CardContent-CwwtTUsa.js";import"./Grid-B6aLYPDX.js";import"./upperFirst-CHceWICW.js";import"./_stringToArray-DpQhj-KT.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
