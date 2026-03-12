import{g as s,n as o,b as e,H as a,w as i,dv as t}from"./iframe-CpfV3NOk.js";import{E as d}from"./EvaluationEditorPage-DXwGtMLd.js";import"./index-Chi_LkuB.js";import"./WarningDialog-cwONdyoM.js";import"./ConfirmationDialog-DY31ZGPr.js";import"./DialogBase-CPT43OGP.js";import"./Close-C1wfyqfV.js";import"./HelpPopover-D1HFzEEY.js";import"./MarkdownPopover-SqpB0xea.js";import"./LightTooltip-Nh7QLXl8.js";import"./MarkdownSynapse-D21W3bY-.js";import"./SkeletonButton-AQOmCgu3.js";import"./SkeletonInlineBlock-DUNC2gO4.js";import"./SkeletonTable-DOJ0zD5O.js";import"./SkeletonParagraph-D5apqSdK.js";import"./CreatedOnByUserDiv-Bqm2RSr5.js";import"./UserBadge-BfZ-Dzq0.js";import"./useUserBundle-C27HsRJe.js";import"./MenuItem-JjjD7Qco.js";import"./Card-Dk_Qq8ND.js";import"./Chip-D0au_Ohq.js";import"./DateTimePicker-BqpGy_dA.js";import"./useMobilePicker-C9oNh6Xz.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-CciChbho.js";import"./index-C4-1Fb9W.js";import"./ListItem-Du6L42EC.js";import"./listItemButtonClasses-D4ELf39w.js";import"./Tabs-BAnBowqT.js";import"./KeyboardArrowRight-BZ2nuQSG.js";import"./CardContent-CTo7bz1M.js";import"./Grid-DCDxxMQ3.js";import"./upperFirst-CKgMx-Jr.js";import"./_stringToArray-Zcpd6I3k.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
