import{z as s,b as o,s as e,H as a,v as i,dm as t}from"./iframe-CDo31VQT.js";import{E as d}from"./EvaluationEditorPage-B2y7at1w.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-CkTSoAIH.js";import"./UserBadge-CglgAQ0Y.js";import"./useUserBundle-BO5FAfwo.js";import"./useUserGroupHeader-Cf-nNW5u.js";import"./SkeletonTable-DUiAsn0J.js";import"./MenuItem-CM8kbxyL.js";import"./Card-BmXOSgoq.js";import"./Chip-B6hxaUER.js";import"./WarningDialog-Coju4BnC.js";import"./ConfirmationDialog-C5P_AirD.js";import"./DialogBase-E8WFtgAh.js";import"./Close-CuElEuLY.js";import"./HelpPopover-C32osPto.js";import"./MarkdownPopover-CvGVbAgl.js";import"./LightTooltip-xFNFrir-.js";import"./MarkdownSynapse-BY4P5oyv.js";import"./SkeletonButton-5CdV1WvK.js";import"./SkeletonInlineBlock-DWU8rLPE.js";import"./SkeletonParagraph-KDbQ1Dqi.js";import"./FormControlLabel-D6JSzQu3.js";import"./Checkbox-BRd7sRay.js";import"./SwitchBase-UfViqCLi.js";import"./DateTimePicker-u5b-DwzO.js";import"./useMobilePicker-CjFSX0YQ.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-CNJrB_wJ.js";import"./index-n3RJ91jU.js";import"./ListItem-DqmEqhXu.js";import"./listItemButtonClasses-B5zecWfz.js";import"./Tabs-D8rwUmLT.js";import"./KeyboardArrowRight-kAZ2KuTk.js";import"./CardContent-BPS1kYHm.js";import"./Grid-B6QExvce.js";import"./upperFirst-BQEOlow0.js";import"./_stringToArray-CEU3m42K.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,Q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
