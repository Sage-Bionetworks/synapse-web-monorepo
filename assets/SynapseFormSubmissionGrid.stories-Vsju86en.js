import{h_ as t,jo as O,n as T,j as u,jS as _,b as i,H as d}from"./iframe-TYPaZ6LN.js";import{S as e}from"./types-CP9zjM1W.js";import{S}from"./SynapseFormSubmissionGrid-DQIFOyLm.js";import"./index-r8ZA1smB.js";import"./WideButton-BsGIAXJZ.js";import"./ConfirmationDialog-DPmq4FUs.js";import"./DialogBase-2bW80153.js";import"./Close-5hmioipF.js";import"./HelpPopover-7_yWsHqt.js";import"./MarkdownPopover-DXfCvJzS.js";import"./LightTooltip-DMsvcwJu.js";import"./MarkdownSynapse-DUiCZcKp.js";import"./SkeletonButton-BeXgw9Nt.js";import"./SkeletonInlineBlock-BBtOGIqx.js";import"./SkeletonTable-CKGrlPmE.js";import"./SkeletonParagraph-CEVUjrsB.js";import"./WarningDialog-BfaJsXWf.js";e.TODO,e.ERROR,e.COMPLETED;e.TODO,e.ERROR,e.COMPLETED,e.COMPLETED;e.COMPLETED,e.COMPLETED,e.COMPLETED;e.PROGRESS;const E={nextPageToken:"123",page:[{formDataId:"25",etag:"10977a7f-e3a4-11e9-94e2-02c936c5ff9c",groupId:"9",name:"AlinaNewAPIProdTest.json",createdBy:"3391841",createdOn:"2019-09-30T17:01:51.622Z",modifiedOn:"2019-09-30T17:02:20.399Z",dataFileHandleId:"43485087",submissionStatus:{state:t.WAITING_FOR_SUBMISSION}}]},R={page:[{formDataId:"33",etag:"11240522-e403-11e9-94e2-02c936c5ff9c",groupId:"9",name:"d.json",createdBy:"3391841",createdOn:"2019-10-01T04:22:13.755Z",modifiedOn:"2019-10-01T04:22:13.755Z",dataFileHandleId:"43505207",submissionStatus:{submittedOn:"2019-10-01T04:22:23.511Z",state:t.SUBMITTED_WAITING_FOR_REVIEW}},{formDataId:"32",etag:"df863d6c-e402-11e9-94e2-02c936c5ff9c",groupId:"9",name:"zxcz.json",createdBy:"3391841",createdOn:"2019-10-01T04:18:27.523Z",modifiedOn:"2019-10-01T04:18:27.523Z",dataFileHandleId:"43504979",submissionStatus:{submittedOn:"2019-10-01T04:21:00.269Z",state:t.SUBMITTED_WAITING_FOR_REVIEW}},{formDataId:"31",etag:"a057855f-e401-11e9-94e2-02c936c5ff9c",groupId:"9",name:"Full data submit only.json",createdBy:"3391841",createdOn:"2019-10-01T04:11:43.660Z",modifiedOn:"2019-10-01T04:11:56.364Z",dataFileHandleId:"43504590",submissionStatus:{submittedOn:"2019-10-01T04:12:04.769Z",state:t.SUBMITTED_WAITING_FOR_REVIEW}},{formDataId:"29",etag:"32e85704-e400-11e9-94e2-02c936c5ff9c",groupId:"9",name:"Jeremy Lambert.json",createdBy:"3391841",createdOn:"2019-10-01T03:54:10.880Z",modifiedOn:"2019-10-01T03:54:10.880Z",dataFileHandleId:"43503572",submissionStatus:{submittedOn:"2019-10-01T04:01:51.672Z",state:t.SUBMITTED_WAITING_FOR_REVIEW}}]},w={title:"Portals/SynapseFormSubmissionsGrid",parameters:{stack:"mock"},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0},render:n=>{const{isAuthenticated:l,...a}=n;return u.jsx(_,{children:r=>u.jsx(S,{token:r.accessToken,...a})})}};function h(){return[T.post(`${i}/repo/v1/form/data/list`,async({request:n})=>{var r;const l=await n.json(),a=200;return(r=l.filterByState)!=null&&r.includes(t.WAITING_FOR_SUBMISSION)?d.json(E,{status:a}):d.json(R,{status:a})})]}const s={parameters:{msw:{handlers:[O(i),T.post(`${i}/repo/v1/form/data/list`,()=>d.json({page:[]},{status:200}))]}},args:{pathpart:"/Apply/FormSubmission",formGroupId:"9",itemNoun:"Compound",formClass:"drug-upload-tool"}},o={parameters:{msw:{handlers:[...O(i),...h()]}},args:{...s.args}};var c,m,f;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var p,g,I;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [...getHandlers(MOCK_REPO_ORIGIN), ...listFormDataHandlers()]
    }
  },
  args: {
    ...NoSubmissions.args
  }
}`,...(I=(g=o.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};const U=["NoSubmissions","HasSubmissions"];export{o as HasSubmissions,s as NoSubmissions,U as __namedExportsOrder,w as default};
