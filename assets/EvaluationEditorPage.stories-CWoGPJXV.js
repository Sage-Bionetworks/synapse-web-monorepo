import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-BMVoK9rQ.js";import{E as d}from"./EvaluationEditorPage-CxABjp-i.js";import"./index-Chi_LkuB.js";import"./WarningDialog-CwVERCxg.js";import"./ConfirmationDialog-CkeTu_WW.js";import"./DialogBase-CLwOhWu_.js";import"./Close-B41_ESac.js";import"./HelpPopover-BkrnBFdK.js";import"./MarkdownPopover-Biqfmo0M.js";import"./LightTooltip-CgiGvVpE.js";import"./MarkdownSynapse-BM2SQbDn.js";import"./SkeletonButton-UgghPQrF.js";import"./SkeletonInlineBlock-BqTkLdlE.js";import"./SkeletonTable-7r8fiUSQ.js";import"./SkeletonParagraph-DdPi-rNG.js";import"./CreatedOnByUserDiv-ByjvDhDx.js";import"./UserBadge-D3W1hFC1.js";import"./useUserBundle-sdTO429-.js";import"./useSuspenseQuery-DZOIBk5v.js";import"./MenuItem-ClKAXsdA.js";import"./Card-dTGT8nbt.js";import"./Chip-Bv1Iw22F.js";import"./DateTimePicker-DY0U2EAy.js";import"./useMobilePicker-Dsj0KpsT.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-CrCJUmpP.js";import"./index-Asaz_d4d.js";import"./ListItem-Wbm_dWBo.js";import"./listItemButtonClasses-CNkVRPg1.js";import"./Tabs-BC6ER8Ds.js";import"./KeyboardArrowRight-Cuchu9qE.js";import"./CardContent-Bu2O1EYQ.js";import"./Grid-BYrXWW0x.js";import"./upperFirst-Du2Q0Raz.js";import"./_stringToArray-Bs2YyyvS.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
