import{g as s,n as o,b as e,H as a,w as i,dt as t}from"./iframe-DmJPOOU_.js";import{E as d}from"./EvaluationEditorPage-Bywa5h68.js";import"./index-Chi_LkuB.js";import"./WarningDialog-W7Dpbh1B.js";import"./ConfirmationDialog-hpX1a8na.js";import"./DialogBase-D-N6jGJj.js";import"./Close-DOrDhmY8.js";import"./HelpPopover-CH-RPBO_.js";import"./MarkdownPopover-BCp9ClLr.js";import"./LightTooltip-Cww8R-MD.js";import"./MarkdownSynapse-C6q6tMz7.js";import"./SkeletonButton-Cd2blMTY.js";import"./SkeletonInlineBlock-rRVfoSJd.js";import"./SkeletonTable-B15aTznV.js";import"./SkeletonParagraph-B8-jdRST.js";import"./CreatedOnByUserDiv-Bu_xS1nU.js";import"./UserBadge-BnbYUF_2.js";import"./useUserBundle-BrqV_bO4.js";import"./MenuItem-DeCPXHAD.js";import"./Card-DctfhZcj.js";import"./Chip-CM8JUIti.js";import"./DateTimePicker-Dxy5w_sf.js";import"./useMobilePicker-BlQW_RpD.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DNfIMo8Y.js";import"./index-BXFJdLDG.js";import"./ListItem-CeZm0VNM.js";import"./listItemButtonClasses-CS68_jdA.js";import"./Tabs-BnjAkChX.js";import"./KeyboardArrowRight-DXt3h4Nz.js";import"./CardContent-D-Xu_9KW.js";import"./Grid-7soIe3w7.js";import"./upperFirst-BecBc5Zo.js";import"./_stringToArray-DabP9IIl.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
