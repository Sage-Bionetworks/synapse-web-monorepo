import{g as s,n as o,b as e,H as a,w as i,du as t}from"./iframe-BVIZDvjc.js";import{E as d}from"./EvaluationEditorPage-B49PLt_F.js";import"./index-Chi_LkuB.js";import"./WarningDialog-B6HdsgFc.js";import"./ConfirmationDialog-D-x0uIwM.js";import"./DialogBase-S6GlCR1h.js";import"./Close-B2iBzLNH.js";import"./HelpPopover-D_ahQJhV.js";import"./MarkdownPopover-BEAyCTTW.js";import"./LightTooltip-GG2U7cEt.js";import"./MarkdownSynapse-C1-7S77D.js";import"./SkeletonButton-D1SYxzVe.js";import"./SkeletonInlineBlock-CEdkX1JK.js";import"./SkeletonTable-CtaVYpmw.js";import"./SkeletonParagraph-BSFvRjJJ.js";import"./CreatedOnByUserDiv-DO6gHF3b.js";import"./UserBadge-BloHpBvi.js";import"./useUserBundle-BViq3gOv.js";import"./MenuItem-CO-Q0A-K.js";import"./Card-BGbetZvK.js";import"./Chip-Bzu_y-sk.js";import"./DateTimePicker-DZGv5mmP.js";import"./useMobilePicker-CoD6RFkX.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DxKfXZXb.js";import"./index-DNB6jgYr.js";import"./ListItem-BJ06OWeo.js";import"./listItemButtonClasses-BXxyGXVq.js";import"./Tabs-CFohSbQD.js";import"./KeyboardArrowRight-B5q2K8cZ.js";import"./CardContent-Dpla3XB_.js";import"./Grid-BWKWw_LY.js";import"./upperFirst-KecrI_kz.js";import"./_stringToArray-BB2Gjbo6.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
