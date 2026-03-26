import{g as s,n as o,b as e,H as a,w as i,du as t}from"./iframe-D7hmFFD3.js";import{E as d}from"./EvaluationEditorPage-C6l7Ncsi.js";import"./index-Chi_LkuB.js";import"./WarningDialog-CmfctdYd.js";import"./ConfirmationDialog-D56eSZEC.js";import"./DialogBase-C0-vtQvS.js";import"./Close-1n6W943I.js";import"./HelpPopover-B0CLm-hu.js";import"./MarkdownPopover-BlNh2jNC.js";import"./LightTooltip-C6WNo1mK.js";import"./MarkdownSynapse-BOtk1yaV.js";import"./SkeletonButton-BRppMIVv.js";import"./SkeletonInlineBlock-J2_tfC8B.js";import"./SkeletonTable-DwOxfj-6.js";import"./SkeletonParagraph-RrPVfHxb.js";import"./CreatedOnByUserDiv-Ctb78jSA.js";import"./UserBadge-Ba74d-w4.js";import"./useUserBundle-DevMQvcY.js";import"./MenuItem-seRjpzQC.js";import"./Card-CUtKvHak.js";import"./Chip-CwHKBceN.js";import"./DateTimePicker-jMSC_PSj.js";import"./useMobilePicker-Ih1fFSu-.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-C2O8OJYd.js";import"./index-DkPQYPLq.js";import"./ListItem-BR9q5kUr.js";import"./listItemButtonClasses-DF1yMI__.js";import"./Tabs-BB9K_PPC.js";import"./KeyboardArrowRight-uUyAWirS.js";import"./CardContent-BGQx36Iz.js";import"./Grid-ByKjz8_y.js";import"./upperFirst-DtM51xSN.js";import"./_stringToArray-CL0GOyZg.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
