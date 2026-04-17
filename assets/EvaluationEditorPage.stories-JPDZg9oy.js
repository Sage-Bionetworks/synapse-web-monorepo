import{z as s,b as o,s as e,H as a,v as i,dm as t}from"./iframe-DjCs0N9T.js";import{E as d}from"./EvaluationEditorPage-h2kSyQCr.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-BJPv7hCl.js";import"./UserBadge-BDehV7Zq.js";import"./useUserBundle-Bj8x-K_h.js";import"./SkeletonTable-C6E9liFP.js";import"./MenuItem-DkdGwV6_.js";import"./Card-CYz3fxIC.js";import"./Chip-DtYkZqnx.js";import"./WarningDialog-DZ6TSs3W.js";import"./ConfirmationDialog-DtaMK8Wg.js";import"./DialogBase-G442yd3L.js";import"./Close-BtUXOgnJ.js";import"./HelpPopover-Cv3rcWtw.js";import"./MarkdownPopover-ERQh7wwa.js";import"./LightTooltip-Mucs5Dmz.js";import"./MarkdownSynapse-BphwuRUM.js";import"./SkeletonButton-ra5Cjzqp.js";import"./SkeletonInlineBlock-BcoZAk2Q.js";import"./SkeletonParagraph-COuF-1cd.js";import"./FormControlLabel-DzJTgcEX.js";import"./Checkbox-s3F0M9zi.js";import"./SwitchBase-VN_kzZ6i.js";import"./DateTimePicker-Bnq-UUBB.js";import"./useMobilePicker-DR0CjRtO.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-CXfrf1bx.js";import"./index-Cwlx-Oul.js";import"./ListItem-D6drZVGT.js";import"./listItemButtonClasses-BUKlHMDZ.js";import"./Tabs-CIatcdEQ.js";import"./KeyboardArrowRight-ACF3_gxk.js";import"./CardContent-CIsWzT2U.js";import"./Grid-CSIVzVil.js";import"./upperFirst-B48Q7qYE.js";import"./_stringToArray-CHqkicUz.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,J={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
