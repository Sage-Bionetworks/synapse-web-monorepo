import{g as s,a as o,u as a,H as e,x as i,du as t}from"./iframe-CxvUBa5Y.js";import{E as d}from"./EvaluationEditorPage-CPmbUNTJ.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-B1miUbu4.js";import"./UserBadge-CBzWW9-k.js";import"./useUserBundle-DzpyjFTE.js";import"./SkeletonTable-BIWVFjZB.js";import"./MenuItem-DuGrHJFB.js";import"./Card-BvmC2OsO.js";import"./Chip-CztKYxS2.js";import"./WarningDialog-Cckmi5Q9.js";import"./ConfirmationDialog-DHjGwc95.js";import"./DialogBase-CwWInD0g.js";import"./Close-CiAhw48q.js";import"./HelpPopover-T0cT0kQU.js";import"./MarkdownPopover-Ciurpa6y.js";import"./LightTooltip-BgyTyQ_i.js";import"./MarkdownSynapse-CvjlntGs.js";import"./SkeletonButton-DyDLkSqK.js";import"./SkeletonInlineBlock-Bhdwhqi9.js";import"./SkeletonParagraph-D_UqSVhv.js";import"./FormControlLabel-BSBqVtPb.js";import"./Checkbox-CXn5HuEC.js";import"./SwitchBase-CVvjvYlh.js";import"./DateTimePicker-Cyz9PCkP.js";import"./useMobilePicker-BSDKtg6B.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-C5q0dHp4.js";import"./index-C1Mm4JJE.js";import"./ListItem-C-OjmJ8p.js";import"./listItemButtonClasses-D_qmBppn.js";import"./Tabs-Dgc0D0ej.js";import"./KeyboardArrowRight-B8hoNxeR.js";import"./CardContent-D6WHXgK7.js";import"./Grid-DHGOxpyh.js";import"./upperFirst-D4gtrvMB.js";import"./_stringToArray-CLiWWyz1.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,J={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),a.get(`${o}/repo/v1/evaluation/:id`,()=>e.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),a.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>e.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
