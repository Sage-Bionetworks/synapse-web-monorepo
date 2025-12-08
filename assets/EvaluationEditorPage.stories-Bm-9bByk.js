import{g as u,n as e,b as o,H as a,w as g,dG as t}from"./iframe-CQ5-qSaZ.js";import{E as b}from"./EvaluationEditorPage-CMOL8vNQ.js";import"./index-r8ZA1smB.js";import"./WarningDialog-BFkimE2C.js";import"./ConfirmationDialog-BEtNAcjp.js";import"./DialogBase-CfmFQsU6.js";import"./Close-C9wv_I6B.js";import"./HelpPopover-B2AzDKTB.js";import"./MarkdownPopover-CO3_N7sV.js";import"./LightTooltip-68JRYdNY.js";import"./MarkdownSynapse-BZ3RNnEb.js";import"./SkeletonButton-c9WGL7V6.js";import"./SkeletonInlineBlock-DeFYqaGd.js";import"./SkeletonTable-BtsmZ8DU.js";import"./SkeletonParagraph-BA_ojVwN.js";import"./CreatedOnByUserDiv-CrFtW11M.js";import"./UserBadge-B_sM3xEu.js";import"./useUserBundle-DvCkv3lX.js";import"./useSuspenseQuery-Be5C3Dgn.js";import"./MenuItem-C2vxNPoL.js";import"./Card-Ds8RS4sw.js";import"./Chip-CIMnCwMP.js";import"./DateTimePicker-pvNMkRTv.js";import"./useMobilePicker-lTuSS1xw.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-BsIm8kGA.js";import"./index-CMGxuthB.js";import"./ListItem-Ll8eJkm3.js";import"./listItemButtonClasses-BKccAi9X.js";import"./Tabs-C60Lnwmn.js";import"./KeyboardArrowRight-zkLx16_4.js";import"./CardContent-DrcAnh1i.js";import"./Grid-Cae-tzkS.js";import"./upperFirst-0m96xDBs.js";import"./_stringToArray-DXLsqiFu.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,X={title:"Synapse/Challenge/EvaluationEditorPage",component:b,args:{onDeleteSuccess:S()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...u(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:g.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};var s,i,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
