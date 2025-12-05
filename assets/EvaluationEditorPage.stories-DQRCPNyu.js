import{g as u,n as e,b as o,H as a,w as g,dG as t}from"./iframe-WhfIvkO3.js";import{E as b}from"./EvaluationEditorPage-a9WJkmih.js";import"./index-r8ZA1smB.js";import"./WarningDialog-BwLUu6K3.js";import"./ConfirmationDialog-DiLnWHAQ.js";import"./DialogBase-Crh1Kg5E.js";import"./Close-CmSe9oF4.js";import"./HelpPopover-DFlbq1oD.js";import"./MarkdownPopover-CFtct9XU.js";import"./LightTooltip-BPRV-Vss.js";import"./MarkdownSynapse-DpQsv1qU.js";import"./SkeletonButton-qFC4BpI5.js";import"./SkeletonInlineBlock-BW6N_xDK.js";import"./SkeletonTable-Di0hBp4_.js";import"./SkeletonParagraph-D0-idZNQ.js";import"./CreatedOnByUserDiv-DdAHCi0W.js";import"./UserBadge-BWSKMWPf.js";import"./useUserBundle-CRHh6Xmh.js";import"./useSuspenseQuery-dzosinIB.js";import"./MenuItem-Dje8pbb_.js";import"./Card-OO0EePdq.js";import"./Chip-BbqPcVoT.js";import"./DateTimePicker-4ugAuIA3.js";import"./useMobilePicker-DNB2_gE1.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-By-00YBB.js";import"./index-sVzarH1I.js";import"./ListItem-NOMhssXa.js";import"./listItemButtonClasses-BHYF_LrE.js";import"./Tabs-DmYC_uUQ.js";import"./KeyboardArrowRight-CUnfx-8d.js";import"./CardContent-D6zPi1W4.js";import"./Grid-pdQLRbNP.js";import"./upperFirst-xHDOZxGb.js";import"./_stringToArray-0lDT-Pel.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,X={title:"Synapse/Challenge/EvaluationEditorPage",component:b,args:{onDeleteSuccess:S()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...u(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:g.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};var s,i,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
