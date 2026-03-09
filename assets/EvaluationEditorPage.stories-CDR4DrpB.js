import{g as s,n as o,b as e,H as a,w as i,dv as t}from"./iframe-BEF4MEGo.js";import{E as d}from"./EvaluationEditorPage-B6NAe-l2.js";import"./index-Chi_LkuB.js";import"./WarningDialog-gH8twsRI.js";import"./ConfirmationDialog-CSdXW-H0.js";import"./DialogBase-C-U41h-h.js";import"./Close-CpFdUeMZ.js";import"./HelpPopover-DCEUptUW.js";import"./MarkdownPopover-D6Nnm8NP.js";import"./LightTooltip-u_zYTDNY.js";import"./MarkdownSynapse-2vacgikM.js";import"./SkeletonButton-DtUWEjyN.js";import"./SkeletonInlineBlock-B_sSYUYb.js";import"./SkeletonTable-B7lcCt2v.js";import"./SkeletonParagraph-kmlFPk4O.js";import"./CreatedOnByUserDiv-CRbbW7QR.js";import"./UserBadge-Du1rJukw.js";import"./useUserBundle-BSq5yoVT.js";import"./MenuItem-kdifhyeS.js";import"./Card-CqODmY2j.js";import"./Chip-Cww2ggjY.js";import"./DateTimePicker-DJWZ-3SO.js";import"./useMobilePicker-hYQItkxq.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DujUKlye.js";import"./index-CPBFcEpw.js";import"./ListItem-B6o86zKv.js";import"./listItemButtonClasses-BgbB4LY1.js";import"./Tabs-BomuG8IX.js";import"./KeyboardArrowRight-C8YR3WTn.js";import"./CardContent-DpIZn0yJ.js";import"./Grid-BDAXk-a3.js";import"./upperFirst-Cp8ZXVC-.js";import"./_stringToArray-DthGnG6n.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
