import{g as s,n as e,b as o,H as a,w as i,dF as t}from"./iframe-but96Lfh.js";import{E as d}from"./EvaluationEditorPage-B3iIuMir.js";import"./index-Chi_LkuB.js";import"./WarningDialog-BMqfj0oP.js";import"./ConfirmationDialog-FXSIJylJ.js";import"./DialogBase-DSLNZs-A.js";import"./Close-CnPFHJzh.js";import"./HelpPopover-DJt2W7Ho.js";import"./MarkdownPopover-BsvfqRJd.js";import"./LightTooltip-C4VFVSMC.js";import"./MarkdownSynapse-WMpHNlyQ.js";import"./SkeletonButton-XqPM6IMR.js";import"./SkeletonInlineBlock-CsI4ERDm.js";import"./SkeletonTable-CiaLgFbO.js";import"./SkeletonParagraph-k5_8qyuU.js";import"./CreatedOnByUserDiv-Bf6OhPyM.js";import"./UserBadge-C7dtc7se.js";import"./useUserBundle-TiYb8Qhd.js";import"./useSuspenseQuery-HIpnOhi4.js";import"./MenuItem-BvQCkNiO.js";import"./Card-Dg122fQn.js";import"./Chip-DMb_4koX.js";import"./DateTimePicker-er4hkqku.js";import"./useMobilePicker-CaE4C30c.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DCI0twhl.js";import"./index-DM_ZQyY8.js";import"./ListItem-DD3ZX6mL.js";import"./listItemButtonClasses-VEW-oVva.js";import"./Tabs-CN6w8gwf.js";import"./KeyboardArrowRight-B8UVeqZP.js";import"./CardContent-B-zTRLeA.js";import"./Grid-BgLOPLBo.js";import"./upperFirst-CKW-nVHY.js";import"./_stringToArray-BIgHEhDs.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
