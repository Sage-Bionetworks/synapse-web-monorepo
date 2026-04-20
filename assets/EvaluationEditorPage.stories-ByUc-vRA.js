import{z as s,b as o,s as e,H as a,v as i,dm as t}from"./iframe-BuKUHwYF.js";import{E as d}from"./EvaluationEditorPage-smkrlLIF.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-BJtjH6c2.js";import"./UserBadge-DwsW3g_K.js";import"./useUserBundle-DkD9QSSJ.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-Ca_8DlU1.js";import"./MenuItem-DmEYYO79.js";import"./Card-B6TgluZN.js";import"./Chip-D3Gu_L5i.js";import"./WarningDialog-3b3jl7wK.js";import"./ConfirmationDialog-BDmP_pr5.js";import"./DialogBase-C4vg5HBd.js";import"./Close-D3qIPQRQ.js";import"./HelpPopover-D_lIBi9b.js";import"./MarkdownPopover-NRLWKKDC.js";import"./LightTooltip-C8cY03H6.js";import"./MarkdownSynapse-CiDjaR4B.js";import"./SkeletonButton-DoOKAwEq.js";import"./SkeletonInlineBlock-Cs7usZ_r.js";import"./SkeletonParagraph-CA2_vLea.js";import"./FormControlLabel-BQKBoEMA.js";import"./Checkbox-rNgXiDJm.js";import"./SwitchBase-Cq5wm8XC.js";import"./DateTimePicker-C6laZgzw.js";import"./useMobilePicker-FFwjvKwG.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-BorpTZZE.js";import"./index-BkSKqIFv.js";import"./ListItem-BzWaE6Rk.js";import"./listItemButtonClasses-l-4efrzS.js";import"./Tabs-Bfnxuk7u.js";import"./KeyboardArrowRight-BNqJKDnO.js";import"./CardContent-BbzCXS88.js";import"./Grid-D5sZRbIA.js";import"./upperFirst-DHLEpJC3.js";import"./_stringToArray-Cgw3FR8k.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,Q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const V=["Entity","Evaluation"];export{n as Entity,r as Evaluation,V as __namedExportsOrder,Q as default};
