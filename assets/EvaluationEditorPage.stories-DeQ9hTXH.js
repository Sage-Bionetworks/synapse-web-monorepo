import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-Du5t3CHa.js";import{E as d}from"./EvaluationEditorPage-DyJ95WOw.js";import"./index-Chi_LkuB.js";import"./WarningDialog-BAkl_glA.js";import"./ConfirmationDialog-DbxOMK7D.js";import"./DialogBase-D3TgpDMO.js";import"./Close-CgG9ZltC.js";import"./HelpPopover-BWwj0Dbm.js";import"./MarkdownPopover-C4H2y9lI.js";import"./LightTooltip-BC8WsuZj.js";import"./MarkdownSynapse-DUHpTVRI.js";import"./SkeletonButton-JJ15ovuj.js";import"./SkeletonInlineBlock-E_CX27Fe.js";import"./SkeletonTable-KNaihl5A.js";import"./SkeletonParagraph-BlwsXkyr.js";import"./CreatedOnByUserDiv-CyFMdjoy.js";import"./UserBadge-BVhpguWH.js";import"./useUserBundle-DutONjLY.js";import"./useSuspenseQuery-DK6Y2lqg.js";import"./MenuItem-B06U7Mh-.js";import"./Card-BA2JlBwy.js";import"./Chip-C9V27U36.js";import"./DateTimePicker-Cx4r7bbq.js";import"./useMobilePicker-CgCN6xlR.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-BH9hv3mE.js";import"./index-CNn6qoPA.js";import"./ListItem-MxuW_3Fh.js";import"./listItemButtonClasses-DCXsY9V-.js";import"./Tabs-D7olKNK9.js";import"./KeyboardArrowRight-bN2kJMi8.js";import"./CardContent-DIwQO5Ik.js";import"./Grid-CLZqbMyA.js";import"./upperFirst-CvYm35_-.js";import"./_stringToArray-BnAcqkBk.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
