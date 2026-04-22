import{z as s,b as o,s as e,H as a,v as i,dm as t}from"./iframe-bna6ux0d.js";import{E as d}from"./EvaluationEditorPage-BOGsgjIq.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-CGn9_2Og.js";import"./UserBadge-CXfpHech.js";import"./useUserBundle-BCDvFxlz.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-l3mzz3bl.js";import"./MenuItem-BE6gGCeL.js";import"./Card-DCXe5QKg.js";import"./Chip-ezXqmltp.js";import"./WarningDialog-Dtcg1sjZ.js";import"./ConfirmationDialog-Dnw58mjo.js";import"./DialogBase-DHwP3U6I.js";import"./Close-BHQzAyPk.js";import"./HelpPopover-BFjmdZ6s.js";import"./MarkdownPopover-kqSOJAjB.js";import"./LightTooltip-DeQMhnGN.js";import"./MarkdownSynapse-DhbP1fl7.js";import"./SkeletonButton-CvFlnbQG.js";import"./SkeletonInlineBlock-BZMaSP8M.js";import"./SkeletonParagraph-BWjRwEhH.js";import"./FormControlLabel-CxLJMSC7.js";import"./Checkbox-BBLtg65l.js";import"./SwitchBase-D6zfVctk.js";import"./DateTimePicker-Ch2hIrae.js";import"./useMobilePicker-iu8alEv4.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DpMOogZ9.js";import"./index-BPlgQcL-.js";import"./ListItem-DRSgKKyv.js";import"./listItemButtonClasses-g5sUZ5P1.js";import"./Tabs-C53BSAUR.js";import"./KeyboardArrowRight-Crz34rJd.js";import"./CardContent-xo3D3-Tm.js";import"./Grid-CBuvr_YL.js";import"./upperFirst-DZ1EHlnh.js";import"./_stringToArray-BlJjRsZz.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,Q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const V=["Entity","Evaluation"];export{n as Entity,r as Evaluation,V as __namedExportsOrder,Q as default};
