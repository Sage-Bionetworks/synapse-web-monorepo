import{z as s,b as o,s as e,H as a,v as i,dl as t}from"./iframe-BFtw_QUH.js";import{E as d}from"./EvaluationEditorPage-CuMVeB_w.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-NWsWV9-Z.js";import"./UserBadge-Bh5lHfno.js";import"./useUserBundle-CUqXhyvg.js";import"./useUserGroupHeader-BQ7DrkF-.js";import"./SkeletonTable-CwH7xhuw.js";import"./MenuItem-BSH3FhSr.js";import"./Card-CxpAtWPZ.js";import"./Chip-CtpBh3N1.js";import"./WarningDialog-De2NcgBE.js";import"./ConfirmationDialog-DMF1vChz.js";import"./DialogBase-Cw5G9tCf.js";import"./Close-QS7unxGx.js";import"./HelpPopover-6Oy9kimx.js";import"./MarkdownPopover-DJba9PaX.js";import"./LightTooltip-BdZaegEb.js";import"./MarkdownSynapse-CJdYnncr.js";import"./SkeletonButton-CsTw-ZPX.js";import"./SkeletonInlineBlock-BmmJQ24u.js";import"./SkeletonParagraph-DsZs81_F.js";import"./FormControlLabel-DZ2iiYCt.js";import"./Checkbox-BC1SCJw9.js";import"./SwitchBase-C1pJsVMO.js";import"./DateTimePicker-BVpE9SED.js";import"./useMobilePicker-CIjq4UvY.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-Cjg1c1kq.js";import"./index-CFaVGWZ0.js";import"./ListItem-C67FS7Y0.js";import"./listItemButtonClasses-rrzIeHbz.js";import"./Tabs-ABwAKqo1.js";import"./KeyboardArrowRight-zxZKw_78.js";import"./CardContent-BJG_7ql6.js";import"./Grid-BXgscMMC.js";import"./upperFirst-DvDn1CXI.js";import"./_stringToArray-ClEJEngk.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,Q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
