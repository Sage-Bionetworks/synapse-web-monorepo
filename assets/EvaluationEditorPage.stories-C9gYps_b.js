import{g as u,n as e,b as o,H as a,w as g,dG as t}from"./iframe-oNn-8uxy.js";import{E as b}from"./EvaluationEditorPage-C2tfShSR.js";import"./index-r8ZA1smB.js";import"./WarningDialog-Bc5JLx1e.js";import"./ConfirmationDialog-SzA8si7K.js";import"./DialogBase-B-cSqcPd.js";import"./Close-BSLNouGJ.js";import"./HelpPopover-CEM-d7vz.js";import"./MarkdownPopover-Cg7ChiRL.js";import"./LightTooltip-DLMoSUZw.js";import"./MarkdownSynapse-ChplHHtD.js";import"./SkeletonButton-D_D34Tmd.js";import"./SkeletonInlineBlock-B6YJwBFk.js";import"./SkeletonTable-iW-77ZUO.js";import"./SkeletonParagraph-DAXRxcWE.js";import"./CreatedOnByUserDiv-wbJm1XAn.js";import"./UserBadge-bqUdhPgI.js";import"./useUserBundle-BvaO0LNa.js";import"./useSuspenseQuery-yMS-8lGQ.js";import"./MenuItem-2EGLr3CI.js";import"./Card-Dp1pXqZt.js";import"./Chip-D6UDoJiu.js";import"./DateTimePicker-C-SohmIa.js";import"./useMobilePicker-CQ3E14Lu.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-C89tsuJ7.js";import"./index-BI05yMk-.js";import"./ListItem-4ynGeyht.js";import"./listItemButtonClasses-CFDgqxPI.js";import"./Tabs-CvgD4dKz.js";import"./KeyboardArrowRight-Bm729pwP.js";import"./CardContent-DDtY-zmf.js";import"./Grid-B6PH2Zpw.js";import"./upperFirst-Cnqst-wB.js";import"./_stringToArray-DogVKuYH.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,X={title:"Synapse/Challenge/EvaluationEditorPage",component:b,args:{onDeleteSuccess:S()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...u(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:g.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};var s,i,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
