import{n as e}from"./chunk-jRWAZmH_.js";import{Gt as t,J_ as n,Jh as r,Kt as i,O_ as a,Wt as o,Zh as s,ic as c,jS as l,n as u,t as d,xo as f}from"./iframe-Cq97jVq9.js";import{i as p,r as m}from"./types-tSNMdwep.js";import{n as h,t as g}from"./SynapseFormSubmissionGrid-BhBx7wCQ.js";var _,v,y=e((()=>{p(),a(),m.TODO,m.ERROR,m.COMPLETED,m.TODO,m.ERROR,m.COMPLETED,m.COMPLETED,m.COMPLETED,m.COMPLETED,m.COMPLETED,m.PROGRESS,_={nextPageToken:`123`,page:[{formDataId:`25`,etag:`10977a7f-e3a4-11e9-94e2-02c936c5ff9c`,groupId:`9`,name:`AlinaNewAPIProdTest.json`,createdBy:`3391841`,createdOn:`2019-09-30T17:01:51.622Z`,modifiedOn:`2019-09-30T17:02:20.399Z`,dataFileHandleId:`43485087`,submissionStatus:{state:n.WAITING_FOR_SUBMISSION}}]},v={page:[{formDataId:`33`,etag:`11240522-e403-11e9-94e2-02c936c5ff9c`,groupId:`9`,name:`d.json`,createdBy:`3391841`,createdOn:`2019-10-01T04:22:13.755Z`,modifiedOn:`2019-10-01T04:22:13.755Z`,dataFileHandleId:`43505207`,submissionStatus:{submittedOn:`2019-10-01T04:22:23.511Z`,state:n.SUBMITTED_WAITING_FOR_REVIEW}},{formDataId:`32`,etag:`df863d6c-e402-11e9-94e2-02c936c5ff9c`,groupId:`9`,name:`zxcz.json`,createdBy:`3391841`,createdOn:`2019-10-01T04:18:27.523Z`,modifiedOn:`2019-10-01T04:18:27.523Z`,dataFileHandleId:`43504979`,submissionStatus:{submittedOn:`2019-10-01T04:21:00.269Z`,state:n.SUBMITTED_WAITING_FOR_REVIEW}},{formDataId:`31`,etag:`a057855f-e401-11e9-94e2-02c936c5ff9c`,groupId:`9`,name:`Full data submit only.json`,createdBy:`3391841`,createdOn:`2019-10-01T04:11:43.660Z`,modifiedOn:`2019-10-01T04:11:56.364Z`,dataFileHandleId:`43504590`,submissionStatus:{submittedOn:`2019-10-01T04:12:04.769Z`,state:n.SUBMITTED_WAITING_FOR_REVIEW}},{formDataId:`29`,etag:`32e85704-e400-11e9-94e2-02c936c5ff9c`,groupId:`9`,name:`Jeremy Lambert.json`,createdBy:`3391841`,createdOn:`2019-10-01T03:54:10.880Z`,modifiedOn:`2019-10-01T03:54:10.880Z`,dataFileHandleId:`43503572`,submissionStatus:{submittedOn:`2019-10-01T04:01:51.672Z`,state:n.SUBMITTED_WAITING_FOR_REVIEW}}]}}));function b(){return[i.post(`${r}/repo/v1/form/data/list`,async({request:e})=>(await e.json()).filterByState?.includes(n.WAITING_FOR_SUBMISSION)?t.json(_,{status:200}):t.json(v,{status:200}))]}var x,S,C,w,T;e((()=>{y(),u(),f(),s(),a(),o(),h(),x=l(),S={title:`Portals/SynapseFormSubmissionsGrid`,parameters:{stack:`mock`},argTypes:{isAuthenticated:{control:{type:`boolean`}}},args:{isAuthenticated:!0},render:e=>{let{isAuthenticated:t,...n}=e;return(0,x.jsx)(c,{children:e=>(0,x.jsx)(g,{token:e.accessToken,...n})})}},C={parameters:{msw:{handlers:[d(r),i.post(`${r}/repo/v1/form/data/list`,()=>t.json({page:[]},{status:200}))]}},args:{pathpart:`/Apply/FormSubmission`,formGroupId:`9`,itemNoun:`Compound`,formClass:`drug-upload-tool`}},w={parameters:{msw:{handlers:[...d(r),...b()]}},args:{...C.args}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [...getHandlers(MOCK_REPO_ORIGIN), ...listFormDataHandlers()]
    }
  },
  args: {
    ...NoSubmissions.args
  }
}`,...w.parameters?.docs?.source}}},T=[`NoSubmissions`,`HasSubmissions`]}))();export{w as HasSubmissions,C as NoSubmissions,T as __namedExportsOrder,S as default};