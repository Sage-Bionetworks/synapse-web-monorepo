import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-Bvh78Lip.js";import{E as d}from"./EvaluationEditorPage-Bq3gWFa0.js";import"./index-Chi_LkuB.js";import"./WarningDialog-DSn6nGM4.js";import"./ConfirmationDialog-Cmxx7cdh.js";import"./DialogBase-CCsdoegG.js";import"./Close-CJJqWftx.js";import"./HelpPopover-BLWEr8Pu.js";import"./MarkdownPopover-rYIJ3MR9.js";import"./LightTooltip-BdYR1aB0.js";import"./MarkdownSynapse-BqKPy748.js";import"./SkeletonButton-3kp2DVDd.js";import"./SkeletonInlineBlock-ferE3Pfl.js";import"./SkeletonTable-CLqiC9iF.js";import"./SkeletonParagraph-D3tb0h1Y.js";import"./CreatedOnByUserDiv-DSK03XwX.js";import"./UserBadge-C91cu101.js";import"./useUserBundle-EnZFVQAK.js";import"./useSuspenseQuery-Bos4-4YQ.js";import"./MenuItem-CDGWVe-G.js";import"./Card-Bm2XEhIM.js";import"./Chip-BCnYHX9c.js";import"./DateTimePicker-DPJMLLbW.js";import"./useMobilePicker-8mWxFLi1.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-D3O-nv6n.js";import"./index-C5Az4rP9.js";import"./ListItem-B-yciqvL.js";import"./listItemButtonClasses-BKblHEER.js";import"./Tabs-Brpvkg6L.js";import"./KeyboardArrowRight-Cgvra8Ng.js";import"./CardContent-C17P63uQ.js";import"./Grid-eXtr296u.js";import"./upperFirst-D_buzMp1.js";import"./_stringToArray-B2PqjMtk.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
