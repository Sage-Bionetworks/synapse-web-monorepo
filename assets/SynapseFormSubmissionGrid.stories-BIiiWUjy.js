import{hV as t,jl as u,n as c,j as l,jO as f,b as o,H as n}from"./iframe-Cb9YNozx.js";import{S as e}from"./types-CP9zjM1W.js";import{S as p}from"./SynapseFormSubmissionGrid-Dr0whXd7.js";import"./index-Chi_LkuB.js";import"./WideButton-CM-jTJF6.js";import"./ConfirmationDialog-Cy0nFlwJ.js";import"./DialogBase-CgXBzYW4.js";import"./Close-CQaXLTm7.js";import"./HelpPopover-BQnaThHT.js";import"./MarkdownPopover-DhA9uHcY.js";import"./LightTooltip-CdqBbLFh.js";import"./MarkdownSynapse-DVECeIy7.js";import"./SkeletonButton-n18AgO8O.js";import"./SkeletonInlineBlock-Cy31Etok.js";import"./SkeletonTable-D9G853Nf.js";import"./SkeletonParagraph-C98TKSTr.js";import"./WarningDialog-CzYfpJYU.js";e.TODO,e.ERROR,e.COMPLETED;e.TODO,e.ERROR,e.COMPLETED,e.COMPLETED;e.COMPLETED,e.COMPLETED,e.COMPLETED;e.PROGRESS;const g={nextPageToken:"123",page:[{formDataId:"25",etag:"10977a7f-e3a4-11e9-94e2-02c936c5ff9c",groupId:"9",name:"AlinaNewAPIProdTest.json",createdBy:"3391841",createdOn:"2019-09-30T17:01:51.622Z",modifiedOn:"2019-09-30T17:02:20.399Z",dataFileHandleId:"43485087",submissionStatus:{state:t.WAITING_FOR_SUBMISSION}}]},I={page:[{formDataId:"33",etag:"11240522-e403-11e9-94e2-02c936c5ff9c",groupId:"9",name:"d.json",createdBy:"3391841",createdOn:"2019-10-01T04:22:13.755Z",modifiedOn:"2019-10-01T04:22:13.755Z",dataFileHandleId:"43505207",submissionStatus:{submittedOn:"2019-10-01T04:22:23.511Z",state:t.SUBMITTED_WAITING_FOR_REVIEW}},{formDataId:"32",etag:"df863d6c-e402-11e9-94e2-02c936c5ff9c",groupId:"9",name:"zxcz.json",createdBy:"3391841",createdOn:"2019-10-01T04:18:27.523Z",modifiedOn:"2019-10-01T04:18:27.523Z",dataFileHandleId:"43504979",submissionStatus:{submittedOn:"2019-10-01T04:21:00.269Z",state:t.SUBMITTED_WAITING_FOR_REVIEW}},{formDataId:"31",etag:"a057855f-e401-11e9-94e2-02c936c5ff9c",groupId:"9",name:"Full data submit only.json",createdBy:"3391841",createdOn:"2019-10-01T04:11:43.660Z",modifiedOn:"2019-10-01T04:11:56.364Z",dataFileHandleId:"43504590",submissionStatus:{submittedOn:"2019-10-01T04:12:04.769Z",state:t.SUBMITTED_WAITING_FOR_REVIEW}},{formDataId:"29",etag:"32e85704-e400-11e9-94e2-02c936c5ff9c",groupId:"9",name:"Jeremy Lambert.json",createdBy:"3391841",createdOn:"2019-10-01T03:54:10.880Z",modifiedOn:"2019-10-01T03:54:10.880Z",dataFileHandleId:"43503572",submissionStatus:{submittedOn:"2019-10-01T04:01:51.672Z",state:t.SUBMITTED_WAITING_FOR_REVIEW}}]},G={title:"Portals/SynapseFormSubmissionsGrid",parameters:{stack:"mock"},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0},render:i=>{const{isAuthenticated:d,...a}=i;return l.jsx(f,{children:m=>l.jsx(p,{token:m.accessToken,...a})})}};function O(){return[c.post(`${o}/repo/v1/form/data/list`,async({request:i})=>{const d=await i.json(),a=200;return d.filterByState?.includes(t.WAITING_FOR_SUBMISSION)?n.json(g,{status:a}):n.json(I,{status:a})})]}const s={parameters:{msw:{handlers:[u(o),c.post(`${o}/repo/v1/form/data/list`,()=>n.json({page:[]},{status:200}))]}},args:{pathpart:"/Apply/FormSubmission",formGroupId:"9",itemNoun:"Compound",formClass:"drug-upload-tool"}},r={parameters:{msw:{handlers:[...u(o),...O()]}},args:{...s.args}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
