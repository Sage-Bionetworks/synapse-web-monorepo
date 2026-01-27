import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-IkK4rSOB.js";import{E as d}from"./EvaluationEditorPage-ldoOVOWn.js";import"./index-Chi_LkuB.js";import"./WarningDialog-D0mMldvE.js";import"./ConfirmationDialog-Qnuw1A6n.js";import"./DialogBase-DjKiii1p.js";import"./Close-DJYHgqb-.js";import"./HelpPopover-N2Q7oHWa.js";import"./MarkdownPopover-DcD4fm5a.js";import"./LightTooltip-3kR8WXpt.js";import"./MarkdownSynapse-DW-6eoVs.js";import"./SkeletonButton-CzqxZow7.js";import"./SkeletonInlineBlock-CUWgPSJQ.js";import"./SkeletonTable-CHtYHCYt.js";import"./SkeletonParagraph-Ckq6DzI_.js";import"./CreatedOnByUserDiv-3ORWF3eg.js";import"./UserBadge-BZHK3KZB.js";import"./useUserBundle-B3YXjSMX.js";import"./useSuspenseQuery-D8qvYmV_.js";import"./MenuItem-BoKeqqou.js";import"./Card-bxb7eLCy.js";import"./Chip-Bi8EBQgs.js";import"./DateTimePicker-CpoA6ri5.js";import"./useMobilePicker-Crtjy2dl.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-Ds6s2SVQ.js";import"./index-C-PIi4pT.js";import"./ListItem-DkSWpsM8.js";import"./listItemButtonClasses-Bb4lMPv1.js";import"./Tabs-BepRYlM3.js";import"./KeyboardArrowRight-CpzkYzHs.js";import"./CardContent-DgD-7RrR.js";import"./Grid-BYRQuG6t.js";import"./upperFirst-gvFSFBMF.js";import"./_stringToArray-CmWyjKRG.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
