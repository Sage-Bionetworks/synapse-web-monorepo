import{g as u,n as a,b as e,H as o,w as g,dO as t}from"./iframe-SFoYirDz.js";import{E as b}from"./EvaluationEditorPage-CV-eDsfs.js";import"./index-r8ZA1smB.js";import"./WarningDialog-om3MqaC3.js";import"./ConfirmationDialog-Sxdwb5-l.js";import"./DialogBase-inZlHGFS.js";import"./Close-BJ49k-BP.js";import"./HelpPopover-BLir_Etv.js";import"./MarkdownPopover-DPeUsc6W.js";import"./LightTooltip--axdJ8pX.js";import"./MarkdownSynapse-CC4Dnhut.js";import"./SkeletonButton-Di0Yg_Uv.js";import"./SkeletonInlineBlock-DrZRW3Px.js";import"./SkeletonTable-Drqg7wxh.js";import"./SkeletonParagraph-D_k7-Stv.js";import"./CreatedOnByUserDiv-oqqRI8Ru.js";import"./UserBadge-DEHXVbtz.js";import"./MenuItem-CfJpQ_dM.js";import"./Card-CkGOMELO.js";import"./Chip-05FYIvnY.js";import"./DateTimePicker--icMKJuB.js";import"./useMobilePicker-cpbXCnpz.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DrnIpz85.js";import"./index-CPHx5Zd7.js";import"./ListItem-X7Sn9QrN.js";import"./listItemButtonClasses-DTmMqNul.js";import"./Tabs-JvICd9PT.js";import"./KeyboardArrowRight-oYtnNlA9.js";import"./CardContent-BO6rsxGD.js";import"./Grid-DgxOnKrN.js";import"./upperFirst-q4MXDRJD.js";import"./_stringToArray-CSjYbj2F.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,V={title:"Synapse/Challenge/EvaluationEditorPage",component:b,args:{onDeleteSuccess:S()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...u(e),a.get(`${e}/repo/v1/evaluation/:id`,()=>o.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:g.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),a.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>o.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};var s,i,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    entityId: 'syn5585645'
  }
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,c,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const W=["Entity","Evaluation"];export{n as Entity,r as Evaluation,W as __namedExportsOrder,V as default};
