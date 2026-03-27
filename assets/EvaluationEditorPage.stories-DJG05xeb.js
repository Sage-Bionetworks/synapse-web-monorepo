import{g as s,n as o,b as e,H as a,w as i,du as t}from"./iframe-C0AexDGo.js";import{E as d}from"./EvaluationEditorPage-CuvlQNb5.js";import"./index-Chi_LkuB.js";import"./WarningDialog-Nc1d4AAP.js";import"./ConfirmationDialog-Tlg0AvaS.js";import"./DialogBase-DEQixVmG.js";import"./Close-BSsXOVcm.js";import"./HelpPopover-CVzUoBki.js";import"./MarkdownPopover-DABKYL5O.js";import"./LightTooltip-D8PwR5sb.js";import"./MarkdownSynapse-BQk4puC1.js";import"./SkeletonButton-BkD5G1Zw.js";import"./SkeletonInlineBlock-BJifXgdu.js";import"./SkeletonTable-ButMnzRS.js";import"./SkeletonParagraph-BSPRuMA0.js";import"./CreatedOnByUserDiv-DHPkzACy.js";import"./UserBadge-KYcTRXZe.js";import"./useUserBundle-BrZlfjEn.js";import"./MenuItem-CS8tSfW4.js";import"./Card-CavtJPUI.js";import"./Chip-7BiG69Cu.js";import"./DateTimePicker-CXBIuG-Q.js";import"./useMobilePicker-zbSe08dh.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-9zUz1kYm.js";import"./index-BLmC8C9J.js";import"./ListItem-NycXdyyE.js";import"./listItemButtonClasses-BVWTFNxv.js";import"./Tabs-wOvJRsCJ.js";import"./KeyboardArrowRight-Cr_-2_Rz.js";import"./CardContent-CVltfLbO.js";import"./Grid-BoLhaorR.js";import"./upperFirst-DX7MWV4n.js";import"./_stringToArray-DigW8jJB.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(e),o.get(`${e}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),o.post(`${e}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
