import{g as s,n as o,b as e,H as a,w as i,du as t}from"./iframe-D4RhuUSg.js";import{E as d}from"./EvaluationEditorPage-BPS3U23w.js";import"./index-Chi_LkuB.js";import"./WarningDialog-DI42a_ul.js";import"./ConfirmationDialog-D7q7Ar98.js";import"./DialogBase-xh78bCQG.js";import"./Close-BGSokGDZ.js";import"./HelpPopover-bJT0vM-b.js";import"./MarkdownPopover-1mRSSIgl.js";import"./LightTooltip-LqJznVX-.js";import"./MarkdownSynapse-BEHMyjE6.js";import"./SkeletonButton-Bvto0rCs.js";import"./SkeletonInlineBlock-BZISNmq5.js";import"./SkeletonTable-Caa1erkn.js";import"./SkeletonParagraph-BcdCn_6W.js";import"./CreatedOnByUserDiv-CFgDXBQr.js";import"./UserBadge-eWfgoGeZ.js";import"./useUserBundle-CoadtSFD.js";import"./MenuItem-DfQMZE47.js";import"./Card-FlQYIFIB.js";import"./Chip-BZ-RMLLV.js";import"./DateTimePicker-C9LmS6ex.js";import"./useMobilePicker-NxJu4hee.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-C7jpa9bB.js";import"./index-CH5hbzgU.js";import"./ListItem-jCoRCBkX.js";import"./listItemButtonClasses-C1mk8-jI.js";import"./Tabs-DP6KPQoF.js";import"./KeyboardArrowRight-DE1uqpL8.js";import"./CardContent-C4Gb5eV2.js";import"./Grid-BVIMhD78.js";import"./upperFirst-B_saytCw.js";import"./_stringToArray-ComI0YPw.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
