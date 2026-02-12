import{g as s,n as e,b as o,H as a,w as i,dI as t}from"./iframe-Es1qDbGP.js";import{E as d}from"./EvaluationEditorPage-DNHkfsBV.js";import"./index-Chi_LkuB.js";import"./WarningDialog-cJCIucIW.js";import"./ConfirmationDialog-Dm9z241S.js";import"./DialogBase-CnbWvOma.js";import"./Close-B3u-lq2b.js";import"./HelpPopover-C93LpQuO.js";import"./MarkdownPopover-BNqNuP7X.js";import"./LightTooltip-BYZb259d.js";import"./MarkdownSynapse-Bc_1YooS.js";import"./SkeletonButton-Dk6hA76Q.js";import"./SkeletonInlineBlock-ClWMeLhu.js";import"./SkeletonTable-lZm0nrpb.js";import"./SkeletonParagraph-DsApyNFa.js";import"./CreatedOnByUserDiv-CZJT6vDW.js";import"./UserBadge-CRnAPqN0.js";import"./useUserBundle-B6mxhG5s.js";import"./useSuspenseQuery-CeVxUvBp.js";import"./MenuItem-B-EqIPb7.js";import"./Card-DHB9ti2h.js";import"./Chip-BzTFnY_r.js";import"./DateTimePicker-CAIUY1Bc.js";import"./useMobilePicker-Dkj3l6oW.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-B9W83M_P.js";import"./index-BV5A7KqH.js";import"./ListItem-0DBm3wmV.js";import"./listItemButtonClasses-D8lNtuSI.js";import"./Tabs-BeIbdfTO.js";import"./KeyboardArrowRight-DSf6mbJg.js";import"./CardContent-DxPkmukI.js";import"./Grid-BeEIUbCD.js";import"./upperFirst-DU7DLSeT.js";import"./_stringToArray-Dd0NILJL.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
