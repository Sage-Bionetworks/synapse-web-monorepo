import{g as s,n as e,b as o,H as a,w as i,du as t}from"./iframe-BHpb1ner.js";import{E as d}from"./EvaluationEditorPage-IqXjZQa9.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-Cqqkvk8-.js";import"./UserBadge-Q7hpWjW2.js";import"./useUserBundle-DSde-19S.js";import"./SkeletonTable-C5MYC27c.js";import"./MenuItem-tefU5X3f.js";import"./Card-BMPVT45X.js";import"./Chip-BwbGtSpr.js";import"./WarningDialog-Kf8p17o6.js";import"./ConfirmationDialog-BBn8sgdh.js";import"./DialogBase-BbLmDA72.js";import"./Close-a0iRQpbL.js";import"./HelpPopover-CnWfGqNH.js";import"./MarkdownPopover-C_qk4xql.js";import"./LightTooltip-BOjaJFFL.js";import"./MarkdownSynapse-DDUpKj2I.js";import"./SkeletonButton-L8FvKIZ9.js";import"./SkeletonInlineBlock-CZB6gyiy.js";import"./SkeletonParagraph-DtQNsEbz.js";import"./FormControlLabel-tODm-4uQ.js";import"./Checkbox-CKMpfQYH.js";import"./SwitchBase-D-w4aRLo.js";import"./DateTimePicker-CnebF8Hh.js";import"./useMobilePicker-D3YQZ9M7.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-Cs6EwrEI.js";import"./index-6DuJwvLX.js";import"./ListItem-Dw7Z8Blg.js";import"./listItemButtonClasses-VYj_cBrn.js";import"./Tabs-BN4VB5Hv.js";import"./KeyboardArrowRight-DZ9giVSm.js";import"./CardContent-DOMrPNHZ.js";import"./Grid-DXXI8_-f.js";import"./upperFirst-CQoGSvug.js";import"./_stringToArray-CnKCBAyx.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,J={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
