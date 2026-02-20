import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-CKbLOTsP.js";import{E as d}from"./EvaluationEditorPage-Cp1fGYmB.js";import"./index-Chi_LkuB.js";import"./WarningDialog-C-o5c1rQ.js";import"./ConfirmationDialog-Cpo9FRDD.js";import"./DialogBase-Yec6-9FP.js";import"./Close-BeDMsUE7.js";import"./HelpPopover-BR9cC52u.js";import"./MarkdownPopover-6_Y0Co8e.js";import"./LightTooltip-CgnSmSvt.js";import"./MarkdownSynapse-DMmwxLiP.js";import"./SkeletonButton-8Vj3L_5j.js";import"./SkeletonInlineBlock-D5PXFjGc.js";import"./SkeletonTable-DmfimDzq.js";import"./SkeletonParagraph-Kah2Bnvf.js";import"./CreatedOnByUserDiv-CkuFzgab.js";import"./UserBadge-BUkR_2ZS.js";import"./useUserBundle-iM-7ZdVq.js";import"./useSuspenseQuery-uKlZGoJr.js";import"./MenuItem-BEEnz0ed.js";import"./Card-DPRsPfvm.js";import"./Chip-CxgxE7T3.js";import"./DateTimePicker-SaX0Tjj_.js";import"./useMobilePicker-CGci3V8v.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-B2TMA_5Y.js";import"./index-Dm4n4t0Y.js";import"./ListItem-DDxI0YKz.js";import"./listItemButtonClasses-CxlrSwUL.js";import"./Tabs-BxmWGvHT.js";import"./KeyboardArrowRight-Df-2jg7J.js";import"./CardContent-dpQkVLGw.js";import"./Grid-Bi_dYFOR.js";import"./upperFirst-BvyZrU_H.js";import"./_stringToArray-DxbSjhtC.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const A=["Entity","Evaluation"];export{n as Entity,r as Evaluation,A as __namedExportsOrder,z as default};
