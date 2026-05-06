import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Gt as n,Jh as r,Kt as i,Wt as a,Zh as o,_f as s,cn as c,l,u}from"./iframe-K8MLH6ew.js";import{n as d,t as f}from"./EvaluationEditorPage-e2bZcPCa.js";var p,m,h,g,_,v;e((()=>{u(),c(),o(),p=t(s(),1),a(),d(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:`Synapse/Challenge/EvaluationEditorPage`,component:f,args:{onDeleteSuccess:m()}},g={args:{entityId:`syn5585645`}},_={parameters:{stack:`mock`,msw:{handlers:[...l(r),i.get(`${r}/repo/v1/evaluation/:id`,()=>n.json({id:`9614712`,etag:`a2b871cb-faa4-471a-8c23-b917c77fecb2`,name:`a`,description:`b`,ownerId:`999`,createdOn:`2021-03-02T22:16:14.552Z`,contentSource:`syn5585645`,submissionInstructionsMessage:`c`,submissionReceiptMessage:`c`},{status:200})),i.post(`${r}/repo/v1/evaluation/:id/round/list`,()=>n.json({page:[{id:`259`,etag:`6f54c353-6c04-46b1-956d-096db1008bce`,evaluationId:`9614712`,roundStart:`2022-11-27T08:00:00.000Z`,roundEnd:`2022-11-30T08:00:00.000Z`},{id:`260`,etag:`6f54c353-6c04-46b1-956d-096db1008bce`,evaluationId:`9614712`,roundStart:(0,p.default)().subtract(1,`day`).toISOString(),roundEnd:(0,p.default)().add(2,`day`).toISOString()},{id:`261`,etag:`6f54c353-6c04-46b1-956d-096db1008bce`,evaluationId:`9614712`,roundStart:(0,p.default)().add(1,`week`).toISOString(),roundEnd:(0,p.default)().add(2,`week`).toISOString()}]},{status:200}))]}},args:{evaluationId:`9614712`}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn5585645'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Entity`,`Evaluation`]}))();export{g as Entity,_ as Evaluation,v as __namedExportsOrder,h as default};