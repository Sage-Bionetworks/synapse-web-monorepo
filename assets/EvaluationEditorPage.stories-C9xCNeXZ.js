import{g as s,n as o,b as e,H as a,w as i,dv as t}from"./iframe-DJOT8ubk.js";import{E as d}from"./EvaluationEditorPage-2USx5PI4.js";import"./index-Chi_LkuB.js";import"./WarningDialog-C8oy6PaZ.js";import"./ConfirmationDialog-D-4hDJN8.js";import"./DialogBase-C-V5Cw2E.js";import"./Close-DdNyWCxq.js";import"./HelpPopover-Ce02sqI5.js";import"./MarkdownPopover-DiesQhNw.js";import"./LightTooltip-C1GNiWuq.js";import"./MarkdownSynapse-BCTt75oT.js";import"./SkeletonButton-AJ5Zwmr0.js";import"./SkeletonInlineBlock-x0qIf0wc.js";import"./SkeletonTable-DlP5X3HC.js";import"./SkeletonParagraph-COpY1z9l.js";import"./CreatedOnByUserDiv-A7Dq86j9.js";import"./UserBadge-BlJ5RAMM.js";import"./useUserBundle-B3bDvO5I.js";import"./MenuItem-D1_UwcJ_.js";import"./Card-CGE0J5vP.js";import"./Chip-OZ5AEEU1.js";import"./DateTimePicker-BizqX1tb.js";import"./useMobilePicker-VqhC_brq.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-BLNpvc8n.js";import"./index-C3UiH5jH.js";import"./ListItem-B_CEgXdE.js";import"./listItemButtonClasses-ClnhnfoV.js";import"./Tabs-DryfmWXe.js";import"./KeyboardArrowRight-Phc3Kbrh.js";import"./CardContent-CL6Cbt7H.js";import"./Grid-CIa2Y_N7.js";import"./upperFirst-CpaaBeiL.js";import"./_stringToArray-DZjMAZPh.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const z=["Entity","Evaluation"];export{n as Entity,r as Evaluation,z as __namedExportsOrder,q as default};
