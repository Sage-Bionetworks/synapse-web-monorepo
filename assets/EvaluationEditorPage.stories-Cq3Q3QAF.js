import{g as u,n as e,b as o,H as a,w as g,dG as t}from"./iframe-DslgKmO_.js";import{E as b}from"./EvaluationEditorPage-BDPIrVdR.js";import"./index-r8ZA1smB.js";import"./WarningDialog-KSKtoYhG.js";import"./ConfirmationDialog-CWzD-n3R.js";import"./DialogBase-Ityd6EiB.js";import"./Close-3QTznoYW.js";import"./HelpPopover-D-66GZ4O.js";import"./MarkdownPopover-Efr0b0ny.js";import"./LightTooltip-DtnUKaEX.js";import"./MarkdownSynapse-BtLlVZBF.js";import"./SkeletonButton-CrnZOVdp.js";import"./SkeletonInlineBlock-iMtCHDfe.js";import"./SkeletonTable-B6rYfEE0.js";import"./SkeletonParagraph-CWIA3BjK.js";import"./CreatedOnByUserDiv-CTjlpMd0.js";import"./UserBadge-BanEe0Rj.js";import"./useUserBundle-tammJvdO.js";import"./useSuspenseQuery-x1rZi4HF.js";import"./MenuItem-CTidO0-V.js";import"./Card-CiAcqMR5.js";import"./Chip-BUIb0Z0i.js";import"./DateTimePicker-B4pLXqrh.js";import"./useMobilePicker-B3h1Y76J.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-B8fX64h3.js";import"./index-CeAJJ3j5.js";import"./ListItem-86j4_waz.js";import"./listItemButtonClasses-XKo5iVko.js";import"./Tabs-Dii4DhJL.js";import"./KeyboardArrowRight-DOVLa2zs.js";import"./CardContent-C2uKljuK.js";import"./Grid-DPWZ7bDy.js";import"./upperFirst-Cv2A7MVY.js";import"./_stringToArray-CngHJspF.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,X={title:"Synapse/Challenge/EvaluationEditorPage",component:b,args:{onDeleteSuccess:S()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...u(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:g.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};var s,i,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const tt=["Entity","Evaluation"];export{n as Entity,r as Evaluation,tt as __namedExportsOrder,X as default};
