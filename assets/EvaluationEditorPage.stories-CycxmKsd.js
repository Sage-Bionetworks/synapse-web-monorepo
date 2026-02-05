import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-D5_h0PF9.js";import{E as d}from"./EvaluationEditorPage-fkOAec5g.js";import"./index-Chi_LkuB.js";import"./WarningDialog-CDWQskwv.js";import"./ConfirmationDialog-BGdn1nyH.js";import"./DialogBase-BSPbIEb2.js";import"./Close-PtWlikut.js";import"./HelpPopover-Cdyc7PIT.js";import"./MarkdownPopover-DYStciEH.js";import"./LightTooltip-B0jdMCwN.js";import"./MarkdownSynapse-rMn4dUa6.js";import"./SkeletonButton-CnXRIIps.js";import"./SkeletonInlineBlock-DCpTDBDa.js";import"./SkeletonTable-C0hupK0t.js";import"./SkeletonParagraph-C3Ev59KW.js";import"./CreatedOnByUserDiv-CUuuxwZF.js";import"./UserBadge-yiMBLQpE.js";import"./useUserBundle-29JhTBEU.js";import"./useSuspenseQuery-BZOc09Ao.js";import"./MenuItem-CyRowmJi.js";import"./Card-LsjfYv2Y.js";import"./Chip-CBZ7YR6P.js";import"./DateTimePicker-CpmdCSSs.js";import"./useMobilePicker-BcJ4AW-v.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-Bt8e14jV.js";import"./index-DihqrFgA.js";import"./ListItem-DQfH65mv.js";import"./listItemButtonClasses-D-qzCweW.js";import"./Tabs-DhSucA6U.js";import"./KeyboardArrowRight-DIoA8GmN.js";import"./CardContent-BgtfDiZj.js";import"./Grid-D-UfU3T_.js";import"./upperFirst-DiwDROhZ.js";import"./_stringToArray-C0EI7guw.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const A=["Entity","Evaluation"];export{n as Entity,r as Evaluation,A as __namedExportsOrder,z as default};
