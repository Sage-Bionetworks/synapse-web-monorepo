import{g as s,n as e,b as o,H as a,w as i,du as t}from"./iframe-Du6HmmeA.js";import{E as d}from"./EvaluationEditorPage-CK8TSDFF.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-OuoZ9oXl.js";import"./UserBadge-BCnNbvVE.js";import"./useUserBundle-Bri-n8ny.js";import"./SkeletonTable-DFkOLILK.js";import"./MenuItem-CKx8ssIT.js";import"./Card--Uz_bnlD.js";import"./Chip-CcMLA9LH.js";import"./WarningDialog-BuX3qKIz.js";import"./ConfirmationDialog-C8KHwV0t.js";import"./DialogBase-Bo2YvE_C.js";import"./Close-Cg0hP_SZ.js";import"./HelpPopover-DpT2pzHF.js";import"./MarkdownPopover-QWNYSrbD.js";import"./LightTooltip-zyXlWYi4.js";import"./MarkdownSynapse-BKsKuzoi.js";import"./SkeletonButton-B7NYOcGY.js";import"./SkeletonInlineBlock-hXkytNVp.js";import"./SkeletonParagraph-xJMe6-dP.js";import"./FormControlLabel-M309XaQU.js";import"./Checkbox-DZjIxL5f.js";import"./SwitchBase-oOV7dY8w.js";import"./DateTimePicker-CPMgWtaZ.js";import"./useMobilePicker-ChsU1gnC.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DZ6ZGb5c.js";import"./index-IUqGcT1d.js";import"./ListItem-dLoTxdvw.js";import"./listItemButtonClasses-D181yDZA.js";import"./Tabs-C3p_uPou.js";import"./KeyboardArrowRight-DA86Cq-g.js";import"./CardContent-lwmpulhJ.js";import"./Grid-DJP8P6kx.js";import"./upperFirst-CJ2rb_vR.js";import"./_stringToArray-BSteRl_h.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,J={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
