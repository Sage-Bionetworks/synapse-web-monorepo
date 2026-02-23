import{g as s,n as e,b as o,H as a,w as i,dF as t}from"./iframe-81JeKJJY.js";import{E as d}from"./EvaluationEditorPage-Bs9GmM7j.js";import"./index-Chi_LkuB.js";import"./WarningDialog-DtzhuyFy.js";import"./ConfirmationDialog-BVlCcFDa.js";import"./DialogBase-D68R31mJ.js";import"./Close-6ce7Xvww.js";import"./HelpPopover-DYuSk176.js";import"./MarkdownPopover-Bj6RQTTJ.js";import"./LightTooltip-DwzQ7zV9.js";import"./MarkdownSynapse-lWMCRscm.js";import"./SkeletonButton-DXhUVC8E.js";import"./SkeletonInlineBlock-D-xx-S6B.js";import"./SkeletonTable-CUpkK98S.js";import"./SkeletonParagraph-c7JB1JZa.js";import"./CreatedOnByUserDiv-Cy-COqqz.js";import"./UserBadge-C_ROUIr4.js";import"./useUserBundle-C7u0mSik.js";import"./useSuspenseQuery-CSCSqsGh.js";import"./MenuItem-K-et9hkH.js";import"./Card-C2XPVAe2.js";import"./Chip-BUhAw0AO.js";import"./DateTimePicker-DUQWEAr9.js";import"./useMobilePicker-vbStbiIJ.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-FjWrqdCx.js";import"./index-hxZfLxrn.js";import"./ListItem-DwgOBYpm.js";import"./listItemButtonClasses-BsodkClp.js";import"./Tabs-Dur5Mr0p.js";import"./KeyboardArrowRight-oIlptSzV.js";import"./CardContent-D6MqlENH.js";import"./Grid-4r4V-CeP.js";import"./upperFirst-Cj_MQfDV.js";import"./_stringToArray-BNWvrDVO.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
