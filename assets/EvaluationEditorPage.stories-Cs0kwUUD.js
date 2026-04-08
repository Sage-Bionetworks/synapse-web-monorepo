import{z as s,b as o,s as e,H as a,v as i,dl as t}from"./iframe-D5wXuBlT.js";import{E as d}from"./EvaluationEditorPage-BE4uVAso.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-CKYxTi2e.js";import"./UserBadge-DCI1SK4W.js";import"./useUserBundle-DXvZDWUx.js";import"./useUserGroupHeader-YQoyU-aV.js";import"./SkeletonTable-DQgfKfH3.js";import"./MenuItem-Cg9aYM9o.js";import"./Card-Ds8mqMQ7.js";import"./Chip-CY4F66V8.js";import"./WarningDialog-ChGN_J34.js";import"./ConfirmationDialog-DkVuItCQ.js";import"./DialogBase-B7NPj_K8.js";import"./Close-B44_taEp.js";import"./HelpPopover-B270wGmb.js";import"./MarkdownPopover-D357WAt_.js";import"./LightTooltip-Bqvn3Vpy.js";import"./MarkdownSynapse-DIWDvDqy.js";import"./SkeletonButton-1p1-0lGV.js";import"./SkeletonInlineBlock-Djh2iYmW.js";import"./SkeletonParagraph-CICWHgmn.js";import"./FormControlLabel-DdIGgxtb.js";import"./Checkbox-etgoUHJj.js";import"./SwitchBase-CF4iIkRZ.js";import"./DateTimePicker-BBC7johy.js";import"./useMobilePicker-B8mZT-oJ.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-4H-w-rZR.js";import"./index-2JT8eoUE.js";import"./ListItem-B4U0zoJ2.js";import"./listItemButtonClasses-eFpAcuWL.js";import"./Tabs-DM85ZW3i.js";import"./KeyboardArrowRight-Di2ZZHeY.js";import"./CardContent-BAO-cZDf.js";import"./Grid-DWXQACcQ.js";import"./upperFirst-5yJNq48B.js";import"./_stringToArray-6PGnF21L.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,Q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
