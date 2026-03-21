import{g as s,n as o,b as e,H as a,w as i,du as t}from"./iframe-BfspjTcY.js";import{E as d}from"./EvaluationEditorPage-BQsHfINF.js";import"./index-Chi_LkuB.js";import"./WarningDialog-CnBkKVAy.js";import"./ConfirmationDialog-DD_w1pfY.js";import"./DialogBase-YXAFhqm6.js";import"./Close-CgzhAH0t.js";import"./HelpPopover-BxZZ394S.js";import"./MarkdownPopover-BHvvQ330.js";import"./LightTooltip-CyF_hJD9.js";import"./MarkdownSynapse-CyM223lc.js";import"./SkeletonButton-CkY0YDZ2.js";import"./SkeletonInlineBlock-PuABnjtw.js";import"./SkeletonTable-BM0lpKNC.js";import"./SkeletonParagraph-Snv-dM4k.js";import"./CreatedOnByUserDiv-j82Ul8Gh.js";import"./UserBadge-DtX7R756.js";import"./useUserBundle-BGI9EtOn.js";import"./MenuItem-CJRlDMpO.js";import"./Card-Jgx718_A.js";import"./Chip-BneT6US4.js";import"./DateTimePicker-DUQnf3Nd.js";import"./useMobilePicker-Cy90_td1.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-D5mU8ThJ.js";import"./index-C387dLAZ.js";import"./ListItem-CmbCyKxv.js";import"./listItemButtonClasses-C-o7y1-n.js";import"./Tabs-BnuDtMUh.js";import"./KeyboardArrowRight-CnKNFwO_.js";import"./CardContent-DJ_TTcdL.js";import"./Grid-IcPGk4Ih.js";import"./upperFirst-CUwFfCjV.js";import"./_stringToArray-DzWSUBzA.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const z=["Entity","Evaluation"];export{n as Entity,r as Evaluation,z as __namedExportsOrder,q as default};
