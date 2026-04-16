import{z as s,b as o,s as e,H as a,v as i,dm as t}from"./iframe-BJt7q_JV.js";import{E as d}from"./EvaluationEditorPage-Bk3AwUJY.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-CDP8_a07.js";import"./UserBadge-Bct9zt1u.js";import"./useUserBundle-DxuM9JQF.js";import"./useUserGroupHeader-D1CyPOkN.js";import"./SkeletonTable-BoHNQ0XH.js";import"./MenuItem-DUuZTALA.js";import"./Card-C9SkN0MX.js";import"./Chip-D4cY5ocF.js";import"./WarningDialog-w6FfQzPw.js";import"./ConfirmationDialog-DhIfbqQu.js";import"./DialogBase-DNgmg92r.js";import"./Close-CnuYTtXB.js";import"./HelpPopover-BKPDM7P7.js";import"./MarkdownPopover-iIdPMRk3.js";import"./LightTooltip-boxSQgEG.js";import"./MarkdownSynapse-BHezFvPm.js";import"./SkeletonButton-CQzFd6lb.js";import"./SkeletonInlineBlock-DWTLId8s.js";import"./SkeletonParagraph-76490YmJ.js";import"./FormControlLabel-BZzQmDal.js";import"./Checkbox-Beiu9b0t.js";import"./SwitchBase-B6wo5qcW.js";import"./DateTimePicker-CYqAuSpm.js";import"./useMobilePicker-CBplxm2q.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-v7fhpYFD.js";import"./index-D1KUKnNi.js";import"./ListItem-CS-Guzgl.js";import"./listItemButtonClasses-CLI1Iss5.js";import"./Tabs-BooHiB-G.js";import"./KeyboardArrowRight-C9e9Jqvi.js";import"./CardContent-Cc9Rgysu.js";import"./Grid-DFP1jire.js";import"./upperFirst-_HcW0Gnt.js";import"./_stringToArray-DKrnOmzL.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,Q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const V=["Entity","Evaluation"];export{n as Entity,r as Evaluation,V as __namedExportsOrder,Q as default};
