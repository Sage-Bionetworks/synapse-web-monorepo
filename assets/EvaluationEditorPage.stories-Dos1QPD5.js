import{g as s,n as e,b as o,H as a,w as i,dI as t}from"./iframe-D5Jb4H7-.js";import{E as d}from"./EvaluationEditorPage-0rOmC0OU.js";import"./index-Chi_LkuB.js";import"./WarningDialog-B1oYi4P-.js";import"./ConfirmationDialog-Cf6HqVui.js";import"./DialogBase-DbS96YQV.js";import"./Close-CbOuO2km.js";import"./HelpPopover-zrq7Oti8.js";import"./MarkdownPopover-CET6pvp6.js";import"./LightTooltip-D5wkP_b3.js";import"./MarkdownSynapse-BYeobG0y.js";import"./SkeletonButton-C8q9GuK7.js";import"./SkeletonInlineBlock-B1J-x5sp.js";import"./SkeletonTable-CWnnOC4O.js";import"./SkeletonParagraph-1IqDxZQP.js";import"./CreatedOnByUserDiv-Bg3fw36p.js";import"./UserBadge-DVbiFxjq.js";import"./useUserBundle-B8Qf3-u2.js";import"./useSuspenseQuery-CJo7dxig.js";import"./MenuItem-BcAY2td_.js";import"./Card-DcE5VUZL.js";import"./Chip-BPCELKLJ.js";import"./DateTimePicker-DZexUrzq.js";import"./useMobilePicker-DW44Dpie.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-D7UfKMXD.js";import"./index-Q_YFCtqN.js";import"./ListItem-7z5wm-H2.js";import"./listItemButtonClasses-D_p-rgYX.js";import"./Tabs-DE7XjrQc.js";import"./KeyboardArrowRight-CB56mxE8.js";import"./CardContent-BQxUR5G2.js";import"./Grid-DSYoMefi.js";import"./upperFirst-BUh1CLsz.js";import"./_stringToArray-C1gJtnPV.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
