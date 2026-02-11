import{g as s,n as e,b as o,H as a,w as i,dI as t}from"./iframe-CKkRwo5v.js";import{E as d}from"./EvaluationEditorPage-BbbPd6hT.js";import"./index-Chi_LkuB.js";import"./WarningDialog-DIdNTlPt.js";import"./ConfirmationDialog-CVuhYKmi.js";import"./DialogBase-DdQNaVTV.js";import"./Close-CVsFjIhS.js";import"./HelpPopover-DZFuhU9d.js";import"./MarkdownPopover-niMIJG4k.js";import"./LightTooltip-Bt97fi6r.js";import"./MarkdownSynapse-COK-Gxgq.js";import"./SkeletonButton-DLboZNuU.js";import"./SkeletonInlineBlock-DfpGMDXv.js";import"./SkeletonTable-bRkZRSb0.js";import"./SkeletonParagraph-DGFhmrY6.js";import"./CreatedOnByUserDiv-CqRCgtEN.js";import"./UserBadge-B7iJoUd3.js";import"./useUserBundle-Biq_JT-q.js";import"./useSuspenseQuery-vP5ehhR0.js";import"./MenuItem-CL505aRp.js";import"./Card-Dl_jNj30.js";import"./Chip-Dbbmbwqm.js";import"./DateTimePicker-BfRVQBEL.js";import"./useMobilePicker-DmqDLC0E.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-fmj286Sl.js";import"./index-T5CXHaiH.js";import"./ListItem-y0JfTV8V.js";import"./listItemButtonClasses-CNogcDxo.js";import"./Tabs-BcJAE--E.js";import"./KeyboardArrowRight-DQVl2Cs-.js";import"./CardContent-98ZnsC-t.js";import"./Grid-C82W-1WD.js";import"./upperFirst-Qog4FFSu.js";import"./_stringToArray-DOQwUXWL.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
