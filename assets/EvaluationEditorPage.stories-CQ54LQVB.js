import{g as s,n as e,b as o,H as a,w as i,dI as t}from"./iframe-T7oLJ25f.js";import{E as d}from"./EvaluationEditorPage-Doy_Itk6.js";import"./index-Chi_LkuB.js";import"./WarningDialog-C6LyDb11.js";import"./ConfirmationDialog-CRRWyf25.js";import"./DialogBase-J7aweyN2.js";import"./Close-1h43D8ey.js";import"./HelpPopover-DSXOOapj.js";import"./MarkdownPopover-BuaJIUS8.js";import"./LightTooltip-d_5FyQ04.js";import"./MarkdownSynapse-BEmtf9mM.js";import"./SkeletonButton-BbQ1D2mw.js";import"./SkeletonInlineBlock-DDBz5ks6.js";import"./SkeletonTable-Iucvd8oY.js";import"./SkeletonParagraph-O68Vr_JV.js";import"./CreatedOnByUserDiv-DLiaKYiZ.js";import"./UserBadge-BGdm1g_K.js";import"./useUserBundle-DLS_5O5Y.js";import"./useSuspenseQuery-0xwwePGu.js";import"./MenuItem-CcVKVUSq.js";import"./Card-DUua1aJ8.js";import"./Chip-CoqraAOn.js";import"./DateTimePicker-B387e-vB.js";import"./useMobilePicker-C2hgrICS.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-CMkqhLYZ.js";import"./index-BdhaPNFV.js";import"./ListItem-CG491Iyl.js";import"./listItemButtonClasses-BHIkM2n8.js";import"./Tabs-DJr_c8Qj.js";import"./KeyboardArrowRight-CP_yZkxx.js";import"./CardContent-Bg0xt09D.js";import"./Grid-D792T7zJ.js";import"./upperFirst-Js5tMKXQ.js";import"./_stringToArray-CGGzxCkF.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
