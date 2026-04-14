import{z as s,b as o,s as e,H as a,v as i,dl as t}from"./iframe-xuGDYskk.js";import{E as d}from"./EvaluationEditorPage-M9i3dgo9.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-BRoTfcVk.js";import"./UserBadge-BorFtQsG.js";import"./useUserBundle-DtSERE0H.js";import"./useUserGroupHeader-CzZ91UGJ.js";import"./SkeletonTable-Bn51DOnQ.js";import"./MenuItem-D1rBKZNi.js";import"./Card-B4NJfnf-.js";import"./Chip-Ckkk-5JS.js";import"./WarningDialog-Bug27RLi.js";import"./ConfirmationDialog-CeVmcrd5.js";import"./DialogBase-D_8BDBtZ.js";import"./Close-DW9kzD-X.js";import"./HelpPopover-w8ni5A6U.js";import"./MarkdownPopover-DTgCpJv6.js";import"./LightTooltip-lMMHMay2.js";import"./MarkdownSynapse-Dqj1e4cl.js";import"./SkeletonButton-Ba2syrHs.js";import"./SkeletonInlineBlock-CuJjaS51.js";import"./SkeletonParagraph-BP-szXpV.js";import"./FormControlLabel-7w8AtTFx.js";import"./Checkbox-C5w0MlgT.js";import"./SwitchBase-BP58HNZ_.js";import"./DateTimePicker--NBZ33dL.js";import"./useMobilePicker-Bya3Gpvs.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-D4HCwoEr.js";import"./index-D8fOn0Se.js";import"./ListItem-wbeJVpNQ.js";import"./listItemButtonClasses-DhUDG0R8.js";import"./Tabs-xp6AEFcu.js";import"./KeyboardArrowRight-DqzKYgWG.js";import"./CardContent-CQvfTnOO.js";import"./Grid-OGEpIkgy.js";import"./upperFirst-B8FqrXy-.js";import"./_stringToArray-DmSMGfbi.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,Q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
