import{z as s,b as o,s as e,H as a,v as i,dm as t}from"./iframe-DIHutOM2.js";import{E as d}from"./EvaluationEditorPage-CHU7Ljhz.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-BGSarMlT.js";import"./UserBadge-F-3JUNkT.js";import"./useUserBundle-C5_SG0-L.js";import"./useUserGroupHeader-DQOVdta_.js";import"./SkeletonTable-C4N-t1H3.js";import"./MenuItem-DK0615By.js";import"./Card-BmTXRzNL.js";import"./Chip-BE1NWb4W.js";import"./WarningDialog-D3rLyO5k.js";import"./ConfirmationDialog-PWqiGP-s.js";import"./DialogBase-BFJUh7rx.js";import"./Close-66Wa0jNb.js";import"./HelpPopover-Em0_eBy5.js";import"./MarkdownPopover-WQLNFQ0C.js";import"./LightTooltip-BMq0VrbL.js";import"./MarkdownSynapse-8m84fN3d.js";import"./SkeletonButton-zFoMoYHg.js";import"./SkeletonInlineBlock-CxHTYkDw.js";import"./SkeletonParagraph-BIGOfadt.js";import"./FormControlLabel-D-4Nscdf.js";import"./Checkbox-BUXxhWF5.js";import"./SwitchBase-GpXGIWUe.js";import"./DateTimePicker-Cl1DrFjD.js";import"./useMobilePicker-9vvD9uRi.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-BViqjaeh.js";import"./index-C9LEM1Gs.js";import"./ListItem-DR_bYojC.js";import"./listItemButtonClasses-4A0QUsPX.js";import"./Tabs-BCHhuIgC.js";import"./KeyboardArrowRight-C384hWSS.js";import"./CardContent-D3zFE-e3.js";import"./Grid-BawCSdC7.js";import"./upperFirst-D13unfWY.js";import"./_stringToArray-YoAP_RKC.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,Q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
