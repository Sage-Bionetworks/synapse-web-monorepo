import{z as s,b as o,s as e,H as a,v as i,dl as t}from"./iframe-BknA5AKQ.js";import{E as d}from"./EvaluationEditorPage-DB2O62xK.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-hSrmdDLm.js";import"./UserBadge-CFsuA3am.js";import"./useUserBundle-CpQAXbXo.js";import"./SkeletonTable-DbyGjMNM.js";import"./MenuItem-BQAxjpVg.js";import"./Card-C9qx6pdO.js";import"./Chip-CVnCUFdM.js";import"./WarningDialog-E8GrSC7L.js";import"./ConfirmationDialog-DEKZKJ8u.js";import"./DialogBase-2oKzQzDh.js";import"./Close-Dt0xqxPt.js";import"./HelpPopover-CoqMnHLA.js";import"./MarkdownPopover-UDNbtmIF.js";import"./LightTooltip-T0pPDs7d.js";import"./MarkdownSynapse-D0cltami.js";import"./SkeletonButton-DS3-vsq6.js";import"./SkeletonInlineBlock-CJPbZx5E.js";import"./SkeletonParagraph-COPAUoGX.js";import"./FormControlLabel-D6qH4hbx.js";import"./Checkbox-X4PIicdY.js";import"./SwitchBase-BdMKy0_S.js";import"./DateTimePicker-6PledBNy.js";import"./useMobilePicker-DjM-cwPw.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-CKHpUtme.js";import"./index-CB5up3MK.js";import"./ListItem-ODMa0BLI.js";import"./listItemButtonClasses-Fsi9w07s.js";import"./Tabs-emnfpVhX.js";import"./KeyboardArrowRight-C_N0xNkn.js";import"./CardContent-DYIREkxC.js";import"./Grid-BIn9HLJX.js";import"./upperFirst-bHGFv7YF.js";import"./_stringToArray-mB4kN7eO.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,J={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
