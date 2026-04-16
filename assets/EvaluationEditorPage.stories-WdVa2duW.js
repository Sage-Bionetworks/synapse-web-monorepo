import{z as s,b as o,s as e,H as a,v as i,dm as t}from"./iframe-DUQkn8iF.js";import{E as d}from"./EvaluationEditorPage-CicmF90P.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-B66iNHuY.js";import"./UserBadge-BLdSt8lg.js";import"./useUserBundle-2e6WFDdI.js";import"./useUserGroupHeader-DjnwW-1A.js";import"./SkeletonTable-Dx_jF5OF.js";import"./MenuItem-BPgUr9lg.js";import"./Card-CxsQey3A.js";import"./Chip-DTXJglpB.js";import"./WarningDialog-CVc1McKJ.js";import"./ConfirmationDialog-56MHZonu.js";import"./DialogBase-Bjwp1F6F.js";import"./Close-CoWf9EwA.js";import"./HelpPopover-O-SP5MD7.js";import"./MarkdownPopover-BqXoJ5YF.js";import"./LightTooltip-D6czb-Qe.js";import"./MarkdownSynapse-Dmjjzt7C.js";import"./SkeletonButton-COaCvHBG.js";import"./SkeletonInlineBlock-S0DMpc3c.js";import"./SkeletonParagraph-BzReNLH2.js";import"./FormControlLabel-ULAaK-Wz.js";import"./Checkbox-C83dxoX4.js";import"./SwitchBase-DmNt2wvQ.js";import"./DateTimePicker-7l4CbUxB.js";import"./useMobilePicker-DM4tIIZL.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DLNyfFZu.js";import"./index-B-0M8h1t.js";import"./ListItem-CJtum1E6.js";import"./listItemButtonClasses-D9mub51c.js";import"./Tabs-C-Kdc5i7.js";import"./KeyboardArrowRight-CSJwPPR7.js";import"./CardContent-5ZNR31O8.js";import"./Grid-BtW5NgRp.js";import"./upperFirst-BZZVjSGv.js";import"./_stringToArray-CVFqhsS7.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,Q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
