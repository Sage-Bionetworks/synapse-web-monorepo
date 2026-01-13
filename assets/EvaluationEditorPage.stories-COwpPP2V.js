import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-z21gSILm.js";import{E as d}from"./EvaluationEditorPage-Dn64oE2_.js";import"./index-Chi_LkuB.js";import"./WarningDialog-BRSmms4A.js";import"./ConfirmationDialog-C8lFb7mH.js";import"./DialogBase-DQK4XqJC.js";import"./Close-qryw1NjU.js";import"./HelpPopover-Boy-nK2n.js";import"./MarkdownPopover-BmUk5Bqy.js";import"./LightTooltip-S0tAvjiv.js";import"./MarkdownSynapse-DllhcJ_D.js";import"./SkeletonButton-Q38ELWwJ.js";import"./SkeletonInlineBlock-DuFis4qM.js";import"./SkeletonTable-HmkSCDv0.js";import"./SkeletonParagraph-DwVqH0kg.js";import"./CreatedOnByUserDiv-Bx1my8Pr.js";import"./UserBadge-nSpluHjM.js";import"./useUserBundle-Bi_03OP-.js";import"./useSuspenseQuery-BDbBJqHo.js";import"./MenuItem-BqzvmG8S.js";import"./Card-BBNGqpZ7.js";import"./Chip-rCXgsppD.js";import"./DateTimePicker-CZ8GyPmN.js";import"./useMobilePicker-CziU9u3j.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-eK22iVz-.js";import"./index-BRmRy84u.js";import"./ListItem-Cc1k8A6D.js";import"./listItemButtonClasses-Oj7JTGQ5.js";import"./Tabs-DPuUSCfT.js";import"./KeyboardArrowRight-DG1y5pLF.js";import"./CardContent-DmOz2Uut.js";import"./Grid-ZG61elFB.js";import"./upperFirst-CwuAAFJV.js";import"./_stringToArray-BKJiITJZ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
