import{z as s,b as o,s as e,H as a,v as i,dl as t}from"./iframe-BqdsSWZd.js";import{E as d}from"./EvaluationEditorPage-hBj3tmLr.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-BJVmdIV9.js";import"./UserBadge-CBefG1yG.js";import"./useUserBundle-D7Oq3eOX.js";import"./SkeletonTable-BNCsFwsu.js";import"./MenuItem-BDOSlvEx.js";import"./Card-rcxhgfJE.js";import"./Chip-QNpY_KS_.js";import"./WarningDialog-C4NWIeAe.js";import"./ConfirmationDialog-DfDAoE1B.js";import"./DialogBase-DhimsSeU.js";import"./Close-CiwYrWW2.js";import"./HelpPopover-Bj_HEu0H.js";import"./MarkdownPopover-1NSkQgo1.js";import"./LightTooltip-DuUAsYAd.js";import"./MarkdownSynapse-Cq3G3Ysd.js";import"./SkeletonButton-DQlCUFlj.js";import"./SkeletonInlineBlock-BTiJ2BO_.js";import"./SkeletonParagraph-CITKHxXA.js";import"./FormControlLabel-0ry4_IyI.js";import"./Checkbox-ZoMln06J.js";import"./SwitchBase-D249JllU.js";import"./DateTimePicker-BzxF5JLG.js";import"./useMobilePicker-hSR6z2r-.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-BGljoWLI.js";import"./index-BGf55DBP.js";import"./ListItem-DvJ2ih-D.js";import"./listItemButtonClasses-DPyNCkQ_.js";import"./Tabs-RAivAKYT.js";import"./KeyboardArrowRight-B3AqKuPy.js";import"./CardContent-BV72vwvl.js";import"./Grid-Z1x-TWzV.js";import"./upperFirst-BLvHbXjh.js";import"./_stringToArray-Bay21gZg.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,J={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
