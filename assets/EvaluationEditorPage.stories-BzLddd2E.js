import{z as s,b as o,s as e,H as a,v as i,dl as t}from"./iframe-C9UTN7n5.js";import{E as d}from"./EvaluationEditorPage-BKMQVVkG.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-CpRVOn2b.js";import"./UserBadge-CKhduYdW.js";import"./useUserBundle-B2NBOQIN.js";import"./useUserGroupHeader-DBo-Weqm.js";import"./SkeletonTable-BS4xHemf.js";import"./MenuItem-CX39S6wD.js";import"./Card-l1x67oDf.js";import"./Chip-kWAD_96F.js";import"./WarningDialog-BO-Rcs1c.js";import"./ConfirmationDialog-DQr-jfg-.js";import"./DialogBase-Mn6aWoit.js";import"./Close-CvxtVEvK.js";import"./HelpPopover-DluswABb.js";import"./MarkdownPopover-C9AtG64Z.js";import"./LightTooltip-DamcjSi2.js";import"./MarkdownSynapse-CW6ImeEG.js";import"./SkeletonButton-DrgaJ-bm.js";import"./SkeletonInlineBlock-D-Jy1SSP.js";import"./SkeletonParagraph-C7pb8176.js";import"./FormControlLabel-DVTQJ-pq.js";import"./Checkbox-EGzeyNI9.js";import"./SwitchBase-CC_UmhM1.js";import"./DateTimePicker-CATq1dLa.js";import"./useMobilePicker-CPRaeE6n.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-BgHugj3i.js";import"./index-C0fxb07w.js";import"./ListItem-BV4Jjguv.js";import"./listItemButtonClasses-Dh3m0zIa.js";import"./Tabs-CYVUwAu5.js";import"./KeyboardArrowRight-CFDP3z_9.js";import"./CardContent-p2AmfcMi.js";import"./Grid-UfL_zCbJ.js";import"./upperFirst-P6SbilB-.js";import"./_stringToArray-CWWzRGBt.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,Q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
