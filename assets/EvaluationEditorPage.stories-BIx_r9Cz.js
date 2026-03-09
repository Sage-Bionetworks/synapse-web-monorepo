import{g as s,n as o,b as e,H as a,w as i,dv as t}from"./iframe-BVhGOjHR.js";import{E as d}from"./EvaluationEditorPage-D4W-JkmS.js";import"./index-Chi_LkuB.js";import"./WarningDialog-CPrMgZ-5.js";import"./ConfirmationDialog-Cv8Px1du.js";import"./DialogBase-DRrK0xBi.js";import"./Close-BMnT91sG.js";import"./HelpPopover-D6fqSHgm.js";import"./MarkdownPopover-DU6whr1F.js";import"./LightTooltip-vnEyTJDI.js";import"./MarkdownSynapse-BL-kClrd.js";import"./SkeletonButton-u72hHay5.js";import"./SkeletonInlineBlock-BxY577KC.js";import"./SkeletonTable-DsxcrpLy.js";import"./SkeletonParagraph-mwYfRmjy.js";import"./CreatedOnByUserDiv-BlLTNRS8.js";import"./UserBadge-CDmVMUNv.js";import"./useUserBundle-dXzxNskR.js";import"./MenuItem-CXPtROXT.js";import"./Card-DxFsJWCw.js";import"./Chip-DZiNGCO2.js";import"./DateTimePicker-BTryZJIj.js";import"./useMobilePicker-J7Fu9_pG.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-BlCMJ_To.js";import"./index-B8gzQCaZ.js";import"./ListItem-BrIwjY3U.js";import"./listItemButtonClasses-CguTVZpn.js";import"./Tabs-BNecdC9d.js";import"./KeyboardArrowRight-DTZbJjyK.js";import"./CardContent-J1r0IH11.js";import"./Grid-BoTHHcTR.js";import"./upperFirst-DnOz9TpK.js";import"./_stringToArray-CwLU1k9g.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
