import{z as s,b as o,s as e,H as a,v as i,dm as t}from"./iframe-DvEsUTpQ.js";import{E as d}from"./EvaluationEditorPage-CgsvMxms.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-Mesft7Ef.js";import"./UserBadge-CXcwNTSZ.js";import"./useUserBundle-wmllpVgG.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-Dt5bLLrY.js";import"./MenuItem-DvqM882a.js";import"./Card-BwCmC7e8.js";import"./Chip-DM8j9a4z.js";import"./WarningDialog-XkImYRiB.js";import"./ConfirmationDialog-DkIXQsLU.js";import"./DialogBase-DjSguv9P.js";import"./Close-g9h1bwgZ.js";import"./HelpPopover-KzPfIUfL.js";import"./MarkdownPopover-zfAn5NTB.js";import"./LightTooltip-CPlesbUn.js";import"./MarkdownSynapse-G6S7jkSU.js";import"./SkeletonButton-Dd7TiKIa.js";import"./SkeletonInlineBlock-D94lxhr7.js";import"./SkeletonParagraph-lw_IwEhg.js";import"./FormControlLabel-BcuVfQyz.js";import"./Checkbox-Cq6VSCz7.js";import"./SwitchBase-jh5RIPFl.js";import"./DateTimePicker-CLMyHOG4.js";import"./useMobilePicker-DNUFT8e0.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-aYqiAxnk.js";import"./index-BttQD56F.js";import"./ListItem-CoP1faAk.js";import"./listItemButtonClasses-BiArEVo7.js";import"./Tabs-DBhcrtNR.js";import"./KeyboardArrowRight-FlfFobUx.js";import"./CardContent-CujrLUJa.js";import"./Grid-CjxcWtBh.js";import"./upperFirst-Bns2QFJV.js";import"./_stringToArray-BfD7RTLk.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,Q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
