import{z as s,b as o,s as e,H as a,v as i,dl as t}from"./iframe-90f2SQV6.js";import{E as d}from"./EvaluationEditorPage-CnaODpoX.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-DSxv-e8S.js";import"./UserBadge-BhjoWwGQ.js";import"./useUserBundle-C1tRTjHW.js";import"./useUserGroupHeader-3u-W-R_V.js";import"./SkeletonTable-CUhBOjKD.js";import"./MenuItem-BuPaY9i0.js";import"./Card-BjkUBjOd.js";import"./Chip-DkWyanB2.js";import"./WarningDialog-BZygYE3J.js";import"./ConfirmationDialog-DhI1owhm.js";import"./DialogBase-BMvwer8M.js";import"./Close-BwldKowt.js";import"./HelpPopover-3OLq6Qvv.js";import"./MarkdownPopover-C7xEr92D.js";import"./LightTooltip-DEc6XzHa.js";import"./MarkdownSynapse-CYc-SfSz.js";import"./SkeletonButton-DayzDEfl.js";import"./SkeletonInlineBlock-5v-gOL2x.js";import"./SkeletonParagraph-Bta19Z9s.js";import"./FormControlLabel-DglLXMgl.js";import"./Checkbox-CF10eWfP.js";import"./SwitchBase-BM0I7EUL.js";import"./DateTimePicker-vyrhh8GU.js";import"./useMobilePicker-DNPJ2dYs.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-By0Yayj0.js";import"./index-DBtU2uN0.js";import"./ListItem-eNi2DDpy.js";import"./listItemButtonClasses-oeVRGQYM.js";import"./Tabs-DN_J4POC.js";import"./KeyboardArrowRight-DlH1NBWt.js";import"./CardContent-DCA9WJ-f.js";import"./Grid-BHxxwVIG.js";import"./upperFirst-DvyVuKm7.js";import"./_stringToArray-B_dQVT6z.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,Q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
