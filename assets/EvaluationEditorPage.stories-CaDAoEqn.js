import{z as s,b as o,s as e,H as a,v as i,dl as t}from"./iframe-CkF2RhKN.js";import{E as d}from"./EvaluationEditorPage-6IYvRg86.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-Ut0m_Nog.js";import"./UserBadge-Yb-L8AxF.js";import"./useUserBundle-DQZHVi7_.js";import"./SkeletonTable-_Ae5KVb-.js";import"./MenuItem-Bn_zQ0BD.js";import"./Card-BR9tyc2m.js";import"./Chip-BzTGJFEB.js";import"./WarningDialog-BEpwuCEg.js";import"./ConfirmationDialog-Dx2givAp.js";import"./DialogBase-BynSzgi7.js";import"./Close-C30i0cHB.js";import"./HelpPopover-8yvHKAte.js";import"./MarkdownPopover-ChhMW5W_.js";import"./LightTooltip-C4-8pTH-.js";import"./MarkdownSynapse-CUvWST4S.js";import"./SkeletonButton-szKajW48.js";import"./SkeletonInlineBlock-BHo_rHpz.js";import"./SkeletonParagraph-D5pjFcDJ.js";import"./FormControlLabel-CvAqaT5C.js";import"./Checkbox-BYhyDoP4.js";import"./SwitchBase-Cfp9yLa-.js";import"./DateTimePicker-Dw51vm6T.js";import"./useMobilePicker-BXvNRuwO.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-CSB9Jqcy.js";import"./index-Ci6ZMoUD.js";import"./ListItem-l8Rfb5x-.js";import"./listItemButtonClasses-D_9PsBch.js";import"./Tabs-ChEzzDaN.js";import"./KeyboardArrowRight-yi5L5RKQ.js";import"./CardContent-CcZMVLKy.js";import"./Grid-bBoM1obv.js";import"./upperFirst-DvMIqR2L.js";import"./_stringToArray-DswosarG.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,J={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
