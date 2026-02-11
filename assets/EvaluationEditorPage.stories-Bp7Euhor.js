import{g as s,n as e,b as o,H as a,w as i,dI as t}from"./iframe-BNuX63Gg.js";import{E as d}from"./EvaluationEditorPage-DTyD4SeJ.js";import"./index-Chi_LkuB.js";import"./WarningDialog-D7WpjJSA.js";import"./ConfirmationDialog-w4vciXYo.js";import"./DialogBase-CT_QCuKJ.js";import"./Close-DnYx9FSk.js";import"./HelpPopover-BxitrOSl.js";import"./MarkdownPopover-Cqj5utYy.js";import"./LightTooltip-B2c4vJ-r.js";import"./MarkdownSynapse-CllS4xt7.js";import"./SkeletonButton-Q_wdDaMT.js";import"./SkeletonInlineBlock-BaXmg-Ho.js";import"./SkeletonTable-B24h57Dq.js";import"./SkeletonParagraph-Bh-mJsSp.js";import"./CreatedOnByUserDiv-Cs6eoYDd.js";import"./UserBadge-DiHQ1_7F.js";import"./useUserBundle-BeMY8viL.js";import"./useSuspenseQuery-5mc94Bck.js";import"./MenuItem-QgPCDudv.js";import"./Card-o20fYyBP.js";import"./Chip-Dbkz0kTt.js";import"./DateTimePicker-Bpr1xBY7.js";import"./useMobilePicker-lqY7_3tD.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-k3B2jUW5.js";import"./index-CsZzG_M-.js";import"./ListItem-Dn0E00jq.js";import"./listItemButtonClasses-Bekp9Iwc.js";import"./Tabs-DRDjC5BE.js";import"./KeyboardArrowRight-B9iy6Wvj.js";import"./CardContent-ByvxWK6u.js";import"./Grid-DJDQfnqx.js";import"./upperFirst-BNcLNK9a.js";import"./_stringToArray-BgAzkCSB.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
