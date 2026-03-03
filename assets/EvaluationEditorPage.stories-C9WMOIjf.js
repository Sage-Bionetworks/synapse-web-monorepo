import{g as s,n as o,b as e,H as a,w as i,dt as t}from"./iframe-DRnLZq4W.js";import{E as d}from"./EvaluationEditorPage-CqHCUPV1.js";import"./index-Chi_LkuB.js";import"./WarningDialog-D-wrTjZE.js";import"./ConfirmationDialog-CeVKY213.js";import"./DialogBase-DBv4DzqI.js";import"./Close-Lw7VtlJf.js";import"./HelpPopover-QWyK0RpX.js";import"./MarkdownPopover-DkKnwS9d.js";import"./LightTooltip-BATo5oyN.js";import"./MarkdownSynapse-BmDBsUdI.js";import"./SkeletonButton-DKOFMwSN.js";import"./SkeletonInlineBlock-qphYniCB.js";import"./SkeletonTable-BRvwRKgI.js";import"./SkeletonParagraph-gWuTxaCe.js";import"./CreatedOnByUserDiv-Cc0SpU4C.js";import"./UserBadge-CuN2K17l.js";import"./useUserBundle-CVIljxhV.js";import"./MenuItem-FdihTtHL.js";import"./Card-Boln_G58.js";import"./Chip-X2PFaiz1.js";import"./DateTimePicker-DuzHFl-e.js";import"./useMobilePicker-CLusb-Sj.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment--Hh6Lf7Q.js";import"./index-C6Fl73J9.js";import"./ListItem-CTleHzKz.js";import"./listItemButtonClasses-B9Hm_ZqE.js";import"./Tabs-I2C72dZ1.js";import"./KeyboardArrowRight-sTgRoBfy.js";import"./CardContent-C-mJjhdf.js";import"./Grid-ocV7cG9J.js";import"./upperFirst-DPFgwHHX.js";import"./_stringToArray-K7U9nsGD.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
