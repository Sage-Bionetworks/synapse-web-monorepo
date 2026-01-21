import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-DrCEazsW.js";import{E as d}from"./EvaluationEditorPage-BwcEesUG.js";import"./index-Chi_LkuB.js";import"./WarningDialog-DIrbidi1.js";import"./ConfirmationDialog-Dhl79wf0.js";import"./DialogBase-BH_HDzHK.js";import"./Close-CxIjT6Fh.js";import"./HelpPopover-DbOYMGtK.js";import"./MarkdownPopover-C7OUxN4B.js";import"./LightTooltip-CVm0W9H0.js";import"./MarkdownSynapse-cqZxM6bP.js";import"./SkeletonButton-C4mWmh8D.js";import"./SkeletonInlineBlock-DNr-Di6Y.js";import"./SkeletonTable-BtmY8UyV.js";import"./SkeletonParagraph-DxARbxEV.js";import"./CreatedOnByUserDiv-B-5C6iKr.js";import"./UserBadge-y9zJuYcg.js";import"./useUserBundle-CYm_bsjI.js";import"./useSuspenseQuery-DQ6p8VKt.js";import"./MenuItem-C2nlmzrP.js";import"./Card-CTrSj87E.js";import"./Chip-DN_sqkiV.js";import"./DateTimePicker-DkWB9qA7.js";import"./useMobilePicker-De91kmwU.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-kJ61WKYx.js";import"./index-Bxv-iQH3.js";import"./ListItem-BRzpHifX.js";import"./listItemButtonClasses-DDwCKa2g.js";import"./Tabs-jbNovT7m.js";import"./KeyboardArrowRight-CERRywI9.js";import"./CardContent-eysjoFr9.js";import"./Grid-DyO_a-po.js";import"./upperFirst-BFbhhrSF.js";import"./_stringToArray-CSy8OKzI.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
