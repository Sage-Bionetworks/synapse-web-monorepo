import{hY as t,jm as u,n as c,j as l,jQ as f,b as o,H as n}from"./iframe-C1Apx41K.js";import{S as e}from"./types-CP9zjM1W.js";import{S as p}from"./SynapseFormSubmissionGrid-_qSnA9nn.js";import"./index-Chi_LkuB.js";import"./WideButton-0rvfPVOd.js";import"./ConfirmationDialog-BvosZqG2.js";import"./DialogBase-D25MustV.js";import"./Close-BYfoF0T4.js";import"./HelpPopover-B8LQHL_b.js";import"./MarkdownPopover-DHmJN8ko.js";import"./LightTooltip-Dd6uBPZU.js";import"./MarkdownSynapse-CjERrYjm.js";import"./SkeletonButton-D8PmJqDh.js";import"./SkeletonInlineBlock-CfPdCjit.js";import"./SkeletonTable-4nPmJRNn.js";import"./SkeletonParagraph-D2VtG1zT.js";import"./WarningDialog-B-7islS2.js";e.TODO,e.ERROR,e.COMPLETED;e.TODO,e.ERROR,e.COMPLETED,e.COMPLETED;e.COMPLETED,e.COMPLETED,e.COMPLETED;e.PROGRESS;const g={nextPageToken:"123",page:[{formDataId:"25",etag:"10977a7f-e3a4-11e9-94e2-02c936c5ff9c",groupId:"9",name:"AlinaNewAPIProdTest.json",createdBy:"3391841",createdOn:"2019-09-30T17:01:51.622Z",modifiedOn:"2019-09-30T17:02:20.399Z",dataFileHandleId:"43485087",submissionStatus:{state:t.WAITING_FOR_SUBMISSION}}]},I={page:[{formDataId:"33",etag:"11240522-e403-11e9-94e2-02c936c5ff9c",groupId:"9",name:"d.json",createdBy:"3391841",createdOn:"2019-10-01T04:22:13.755Z",modifiedOn:"2019-10-01T04:22:13.755Z",dataFileHandleId:"43505207",submissionStatus:{submittedOn:"2019-10-01T04:22:23.511Z",state:t.SUBMITTED_WAITING_FOR_REVIEW}},{formDataId:"32",etag:"df863d6c-e402-11e9-94e2-02c936c5ff9c",groupId:"9",name:"zxcz.json",createdBy:"3391841",createdOn:"2019-10-01T04:18:27.523Z",modifiedOn:"2019-10-01T04:18:27.523Z",dataFileHandleId:"43504979",submissionStatus:{submittedOn:"2019-10-01T04:21:00.269Z",state:t.SUBMITTED_WAITING_FOR_REVIEW}},{formDataId:"31",etag:"a057855f-e401-11e9-94e2-02c936c5ff9c",groupId:"9",name:"Full data submit only.json",createdBy:"3391841",createdOn:"2019-10-01T04:11:43.660Z",modifiedOn:"2019-10-01T04:11:56.364Z",dataFileHandleId:"43504590",submissionStatus:{submittedOn:"2019-10-01T04:12:04.769Z",state:t.SUBMITTED_WAITING_FOR_REVIEW}},{formDataId:"29",etag:"32e85704-e400-11e9-94e2-02c936c5ff9c",groupId:"9",name:"Jeremy Lambert.json",createdBy:"3391841",createdOn:"2019-10-01T03:54:10.880Z",modifiedOn:"2019-10-01T03:54:10.880Z",dataFileHandleId:"43503572",submissionStatus:{submittedOn:"2019-10-01T04:01:51.672Z",state:t.SUBMITTED_WAITING_FOR_REVIEW}}]},G={title:"Portals/SynapseFormSubmissionsGrid",parameters:{stack:"mock"},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0},render:i=>{const{isAuthenticated:d,...a}=i;return l.jsx(f,{children:m=>l.jsx(p,{token:m.accessToken,...a})})}};function O(){return[c.post(`${o}/repo/v1/form/data/list`,async({request:i})=>{const d=await i.json(),a=200;return d.filterByState?.includes(t.WAITING_FOR_SUBMISSION)?n.json(g,{status:a}):n.json(I,{status:a})})]}const s={parameters:{msw:{handlers:[u(o),c.post(`${o}/repo/v1/form/data/list`,()=>n.json({page:[]},{status:200}))]}},args:{pathpart:"/Apply/FormSubmission",formGroupId:"9",itemNoun:"Compound",formClass:"drug-upload-tool"}},r={parameters:{msw:{handlers:[...u(o),...O()]}},args:{...s.args}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getHandlers(MOCK_REPO_ORIGIN), http.post(\`\${MOCK_REPO_ORIGIN}/repo/v1/form/data/list\`, () => {
        return HttpResponse.json({
          page: []
        }, {
          status: 200
        });
      })]
    }
  },
  args: {
    pathpart: '/Apply/FormSubmission',
    formGroupId: '9',
    itemNoun: 'Compound',
    formClass: 'drug-upload-tool'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [...getHandlers(MOCK_REPO_ORIGIN), ...listFormDataHandlers()]
    }
  },
  args: {
    ...NoSubmissions.args
  }
}`,...r.parameters?.docs?.source}}};const H=["NoSubmissions","HasSubmissions"];export{r as HasSubmissions,s as NoSubmissions,H as __namedExportsOrder,G as default};
