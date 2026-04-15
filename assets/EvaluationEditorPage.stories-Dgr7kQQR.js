import{z as s,b as o,s as e,H as a,v as i,dl as t}from"./iframe-ufwdWoqd.js";import{E as d}from"./EvaluationEditorPage-W2dgh08z.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-woB7sLCE.js";import"./UserBadge-sHUnGDAj.js";import"./useUserBundle-D634yYlN.js";import"./useUserGroupHeader-BOzrLmfs.js";import"./SkeletonTable-Dud8tXGA.js";import"./MenuItem-W_wmPF7v.js";import"./Card-CFTn_BNL.js";import"./Chip-CSBIn4pT.js";import"./WarningDialog-BdIVSEmD.js";import"./ConfirmationDialog-B8w3enam.js";import"./DialogBase-Dsbgm9mp.js";import"./Close-Dv4tXZl4.js";import"./HelpPopover-sYQ3nyHD.js";import"./MarkdownPopover-FbcchaUo.js";import"./LightTooltip-DY5-pD6A.js";import"./MarkdownSynapse-CMjYBWsu.js";import"./SkeletonButton-LGNxHtYx.js";import"./SkeletonInlineBlock-DJWeJEjH.js";import"./SkeletonParagraph-Br9-4-N8.js";import"./FormControlLabel-evRqPcVo.js";import"./Checkbox-BW97U62k.js";import"./SwitchBase-7Y4vQbXh.js";import"./DateTimePicker-CBNutHDE.js";import"./useMobilePicker-DMwymfuV.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-t_rDXNaL.js";import"./index-BjTsD0iq.js";import"./ListItem-BX3WYecu.js";import"./listItemButtonClasses-DMNU0X-z.js";import"./Tabs-D2mdX2Ss.js";import"./KeyboardArrowRight-CAYnBLFn.js";import"./CardContent-B4Xs89Rb.js";import"./Grid-Dast737N.js";import"./upperFirst-37ndr7ON.js";import"./_stringToArray-Bn6i7VoJ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,Q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
