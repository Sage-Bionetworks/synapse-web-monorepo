import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-DVNYwO2X.js";import{E as d}from"./EvaluationEditorPage-CS7Pk8_7.js";import"./index-Chi_LkuB.js";import"./WarningDialog-9BiFZ2rQ.js";import"./ConfirmationDialog-u7vUp13p.js";import"./DialogBase-D-pfxM0N.js";import"./Close-BRaPVnbs.js";import"./HelpPopover-CGudOJSg.js";import"./MarkdownPopover-BeI37cFn.js";import"./LightTooltip-bl3iHu17.js";import"./MarkdownSynapse-5ft7ZGQf.js";import"./SkeletonButton-CiDtB3IB.js";import"./SkeletonInlineBlock-Bgae_khf.js";import"./SkeletonTable-BpqkbE8o.js";import"./SkeletonParagraph-Bq0xaWku.js";import"./CreatedOnByUserDiv-eVdc2z7Z.js";import"./UserBadge-Q4jkqetP.js";import"./useUserBundle-DscWjVV3.js";import"./useSuspenseQuery-33kCA9BT.js";import"./MenuItem-Ci0bIVjj.js";import"./Card-C6iAvcUJ.js";import"./Chip-sOf8CffO.js";import"./DateTimePicker-BVXXkcGb.js";import"./useMobilePicker-CE8f5mHY.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-ixiV28qj.js";import"./index-9hqwGMA7.js";import"./ListItem-3zmpEz5q.js";import"./listItemButtonClasses-Bb6i5z9V.js";import"./Tabs-DmbfPqy2.js";import"./KeyboardArrowRight-B6jvsm1f.js";import"./CardContent-BZq-7t3v.js";import"./Grid-CwhdJPOL.js";import"./upperFirst-BO18g1er.js";import"./_stringToArray-S0Ut-cgz.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
