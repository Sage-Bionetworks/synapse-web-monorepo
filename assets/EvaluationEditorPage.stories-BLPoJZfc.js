import{g as s,n as o,b as e,H as a,w as i,dt as t}from"./iframe-B7KGf7-k.js";import{E as d}from"./EvaluationEditorPage-CtPyFnfe.js";import"./index-Chi_LkuB.js";import"./WarningDialog-BHCp3zkT.js";import"./ConfirmationDialog-CfHwuMwA.js";import"./DialogBase-D0__VBEg.js";import"./Close-T1I-2ajn.js";import"./HelpPopover-rsd36_y9.js";import"./MarkdownPopover-CgOyBUHV.js";import"./LightTooltip-BjN2xTIz.js";import"./MarkdownSynapse-1Rv7JxA3.js";import"./SkeletonButton-DY-_GYdD.js";import"./SkeletonInlineBlock-C6U7Upal.js";import"./SkeletonTable-DLLgVxsK.js";import"./SkeletonParagraph-D-OkfrQQ.js";import"./CreatedOnByUserDiv-BhrRzjiJ.js";import"./UserBadge-O_YNKCQM.js";import"./useUserBundle-Dv5e5E2c.js";import"./MenuItem-BFpLBTs1.js";import"./Card-FkpFOr7A.js";import"./Chip-BchH_Wga.js";import"./DateTimePicker-BU4YtO-c.js";import"./useMobilePicker-BLQChuGw.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-MjOZVgFd.js";import"./index-bUombD9c.js";import"./ListItem-BFUFNJ5l.js";import"./listItemButtonClasses-DEJZgMDS.js";import"./Tabs-CeGHqF7Z.js";import"./KeyboardArrowRight-CDK73nY-.js";import"./CardContent-ZQzvy0N6.js";import"./Grid-BRTWVYn9.js";import"./upperFirst-CRfV52pe.js";import"./_stringToArray-DitouZPj.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
