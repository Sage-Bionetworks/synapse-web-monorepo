import{z as s,b as o,s as e,H as a,v as i,dl as t}from"./iframe-AuqRm6Xj.js";import{E as d}from"./EvaluationEditorPage-9ta-L95B.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-pORM7dXW.js";import"./UserBadge-94-bM4a7.js";import"./useUserBundle-B1FabnzQ.js";import"./SkeletonTable-C0VRg4xn.js";import"./MenuItem-e1skeM_z.js";import"./Card-D38Rt5-Y.js";import"./Chip-DC7pM5qx.js";import"./WarningDialog-9fSwh9nN.js";import"./ConfirmationDialog-VlIF6_Hw.js";import"./DialogBase-Bp-oXsnD.js";import"./Close-wXc8W0YL.js";import"./HelpPopover-u8xzPavD.js";import"./MarkdownPopover-Dmj83Psx.js";import"./LightTooltip-BMQNdjTq.js";import"./MarkdownSynapse-DiqCpyPK.js";import"./SkeletonButton-De9SiVJE.js";import"./SkeletonInlineBlock-CL4j-wc-.js";import"./SkeletonParagraph-B6IfoMOd.js";import"./FormControlLabel-hQp6mAf4.js";import"./Checkbox-MxfcR8V3.js";import"./SwitchBase-DkN8Vn3a.js";import"./DateTimePicker-nwGTyVtb.js";import"./useMobilePicker-CLTyanpy.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-CPdugysm.js";import"./index-D5YJAeH4.js";import"./ListItem-BjxUNqaO.js";import"./listItemButtonClasses-Bdg07ZGq.js";import"./Tabs-BlcqIIZJ.js";import"./KeyboardArrowRight-ClPnM8Pa.js";import"./CardContent-v3174aBG.js";import"./Grid-DZvB9Er5.js";import"./upperFirst-Ds8KtOl2.js";import"./_stringToArray-CNcORhQd.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,J={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
