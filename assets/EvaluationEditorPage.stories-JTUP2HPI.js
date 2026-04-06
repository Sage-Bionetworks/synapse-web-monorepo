import{z as s,b as o,s as e,H as a,v as i,dl as t}from"./iframe-DEq4Fwc_.js";import{E as d}from"./EvaluationEditorPage-Cr9zfDVi.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-DCfnDVEP.js";import"./UserBadge-CQKGOV2g.js";import"./useUserBundle-DhUzGqE3.js";import"./SkeletonTable-CssHy_cG.js";import"./MenuItem-Q5cSc0me.js";import"./Card-Bft1ilTS.js";import"./Chip-CsLFe4y4.js";import"./WarningDialog-BEtx3FpM.js";import"./ConfirmationDialog-r9JWHI-k.js";import"./DialogBase-C4vq_sVg.js";import"./Close-YBK2a75v.js";import"./HelpPopover-kHe5ruIB.js";import"./MarkdownPopover-CvAv5IbO.js";import"./LightTooltip-YqL3Vmul.js";import"./MarkdownSynapse-C1TpcYQU.js";import"./SkeletonButton-Cgw-w1QX.js";import"./SkeletonInlineBlock-Ct1mjrTN.js";import"./SkeletonParagraph-C2zzRv3g.js";import"./FormControlLabel-DQYCrA3y.js";import"./Checkbox-CIkhFSee.js";import"./SwitchBase-BWvcTXOM.js";import"./DateTimePicker-CkqEO83k.js";import"./useMobilePicker-B5d5Z9pk.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DlEPbJTf.js";import"./index-f3FEnX0R.js";import"./ListItem-DYnvc5HH.js";import"./listItemButtonClasses-C9J4YaZ_.js";import"./Tabs-DOCMUQRS.js";import"./KeyboardArrowRight-BJXSBKtm.js";import"./CardContent-BV9qAyYz.js";import"./Grid-nazzqp4E.js";import"./upperFirst-Oj7g_MKl.js";import"./_stringToArray-D8U1rt3I.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,J={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const Q=["Entity","Evaluation"];export{n as Entity,r as Evaluation,Q as __namedExportsOrder,J as default};
