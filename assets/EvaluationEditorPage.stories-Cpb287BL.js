import{g as s,n as o,b as e,H as a,w as i,dv as t}from"./iframe-9Dp3veeu.js";import{E as d}from"./EvaluationEditorPage-jQj1_HT4.js";import"./index-Chi_LkuB.js";import"./WarningDialog-MvaJPqkX.js";import"./ConfirmationDialog-0O1Dp5pK.js";import"./DialogBase-wgKSPL2s.js";import"./Close-RKCQt29o.js";import"./HelpPopover-CV1i3nJO.js";import"./MarkdownPopover-DoQCnLPw.js";import"./LightTooltip-TjP4VxGs.js";import"./MarkdownSynapse-D2Pk-B6S.js";import"./SkeletonButton-COK1UYfn.js";import"./SkeletonInlineBlock-BcYTxiw0.js";import"./SkeletonTable-Cjl9F2Dt.js";import"./SkeletonParagraph-Cn0395FS.js";import"./CreatedOnByUserDiv-D_Z7UiAy.js";import"./UserBadge-Ct4ZfEmE.js";import"./useUserBundle-a5rfcdNm.js";import"./MenuItem-BJVfKgip.js";import"./Card--VJgiAYz.js";import"./Chip-gPffx778.js";import"./DateTimePicker-B_sywq7Z.js";import"./useMobilePicker-JjyIbzsn.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-mswjGCl0.js";import"./index-SBatv29g.js";import"./ListItem-BZFztavt.js";import"./listItemButtonClasses-DxeChUKh.js";import"./Tabs-BFE48Hzr.js";import"./KeyboardArrowRight-DJ2y5xT2.js";import"./CardContent-BNtDw5W8.js";import"./Grid-VfSnU_P-.js";import"./upperFirst-DHP0krsM.js";import"./_stringToArray-BrwavHBd.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
