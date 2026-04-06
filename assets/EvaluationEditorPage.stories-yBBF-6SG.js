import{z as s,b as o,s as e,H as a,v as i,dl as t}from"./iframe-Dh1-Bj9i.js";import{E as d}from"./EvaluationEditorPage-CsODTOTM.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-DMFMmm4U.js";import"./UserBadge-awlVBRBe.js";import"./useUserBundle-BOEHsSlJ.js";import"./SkeletonTable-nkHHAelC.js";import"./MenuItem-DcI11cWZ.js";import"./Card-C6ntjiwM.js";import"./Chip-D6-vR_S7.js";import"./WarningDialog-CjizfIhq.js";import"./ConfirmationDialog-Dy9AxfBp.js";import"./DialogBase-Cs4R-zR2.js";import"./Close-D_7cgIwF.js";import"./HelpPopover-DkPOfTbO.js";import"./MarkdownPopover-D5SjgShk.js";import"./LightTooltip-DzvAkcfH.js";import"./MarkdownSynapse-IvCz3QWr.js";import"./SkeletonButton-C-IErnIc.js";import"./SkeletonInlineBlock-D9o-fuxy.js";import"./SkeletonParagraph-Cbgp8OCT.js";import"./FormControlLabel-CYMNTndx.js";import"./Checkbox-dmGiqlJj.js";import"./SwitchBase-C1MmJwCG.js";import"./DateTimePicker-xTeLvU7r.js";import"./useMobilePicker-B-KPbDxZ.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-CZyVwmJo.js";import"./index-DA_VxtNU.js";import"./ListItem-C4Z2ugj3.js";import"./listItemButtonClasses-l_taRAwC.js";import"./Tabs-DaxdICVu.js";import"./KeyboardArrowRight-CA2BTsgG.js";import"./CardContent-Cwzn81wV.js";import"./Grid-DVy6KkU3.js";import"./upperFirst-B-YhHOdv.js";import"./_stringToArray-BhltlimQ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,J={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const Q=["Entity","Evaluation"];export{n as Entity,r as Evaluation,Q as __namedExportsOrder,J as default};
