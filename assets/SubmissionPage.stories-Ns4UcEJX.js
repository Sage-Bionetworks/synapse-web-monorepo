import{n as e}from"./chunk-jRWAZmH_.js";import{Ah as t,Ct as n,E_ as r,Gt as i,Kt as a,Nh as o,Ot as s,Qg as c,Qh as l,Rh as u,Wt as d,Yh as f,_ as p,_t as m,cn as h,g,h as _,i as v,l as y,on as b,qh as x,r as S,u as C,v as w,yt as T}from"./iframe-DIpPaeje.js";import{n as E,t as D}from"./mockRejectionReasonsTableQueryResultBundle-CtpaP5EC.js";import{n as O,t as k}from"./SubmissionPage-D-yHnkfD.js";var A,j,M,N;e((()=>{n(),m(),g(),p(),C(),v(),D(),h(),x(),l(),r(),d(),O(),A={title:`Governance/SubmissionPage`,component:k,parameters:{stack:`mock`,withRouter:!0},argTypes:{isAuthenticated:{control:{type:`boolean`}}},args:{isAuthenticated:!0}},j={name:`SubmissionPage`,loaders:[()=>w({sql:`SELECT * FROM ${c}`},E)],parameters:{msw:{handlers:[...y(f),...S(f),a.get(`${f}${u(`:id`)}`,({params:e})=>{let t=T.find(t=>e.id===t.id);return i.json(t,{status:200})}),a.get(`${f}${t(`:id`)}`,()=>i.json(s,{status:200})),a.get(`${f}${o(`:id`)}`,()=>i.json({wikiPageId:123,ownerObjectId:s.id,ownerObjectType:`ACCESS_REQUIREMENT`},{status:200})),a.get(`${f}/repo/v1/accessRequirement/:id/acl`,({params:e})=>i.json({id:e.id,creationDate:`2022-05-20T14:32:31.665Z`,etag:`f4fbd4f2-751d-40dd-9421-1d2693231217`,resourceAccess:[{principalId:b,accessType:[`REVIEW_SUBMISSIONS`]}]},{status:200})),..._(f),a.put(`${f}${u(`:id`)}`,async({request:e})=>i.json(await e.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},M={name:`Demo Error State`,parameters:{msw:{handlers:[a.get(`${f}${u(`:id`)}`,()=>i.json({reason:`The user must be validated in order to review data access submissions.`,concreteType:`org.sagebionetworks.repo.model.ErrorResponse`},{status:403}))]}},args:{isReviewer:!0,submissionId:9999}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'SubmissionPage',
  loaders: [() => registerTableQueryResult({
    sql: \`SELECT * FROM \${REJECT_SUBMISSION_CANNED_RESPONSES_TABLE}\`
  }, mockRejectionReasonsTableQueryResultBundle)],
  parameters: {
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN),
      // Return submission based on ID
      http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, ({
        params
      }) => {
        const submission = mockSubmissions.find(submission => params.id === submission.id);
        return HttpResponse.json(submission, {
          status: 200
        });
      }),
      // Return a mocked access requirement
      http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_BY_ID(':id')}\`, () => {
        return HttpResponse.json(mockManagedACTAccessRequirement, {
          status: 200
        });
      }), http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}\`, () => {
        return HttpResponse.json({
          wikiPageId: 123,
          ownerObjectId: mockManagedACTAccessRequirement.id,
          ownerObjectType: 'ACCESS_REQUIREMENT'
        }, {
          status: 200
        });
      }), http.get<{
        id: string;
      }>(\`\${MOCK_REPO_ORIGIN}/repo/v1/accessRequirement/:id/acl\`, ({
        params
      }) => {
        return HttpResponse.json({
          id: params.id,
          creationDate: '2022-05-20T14:32:31.665Z',
          etag: 'f4fbd4f2-751d-40dd-9421-1d2693231217',
          resourceAccess: [{
            principalId: MOCK_USER_ID_2,
            accessType: ['REVIEW_SUBMISSIONS']
          }]
        }, {
          status: 200
        });
      }), ...getHandlersForTableQuery(MOCK_REPO_ORIGIN), http.put(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, async ({
        request
      }) => {
        return HttpResponse.json(await request.json(), {
          status: 201
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 1
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Demo Error State',
  parameters: {
    msw: {
      handlers: [http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, () => {
        const errorResponse: ErrorResponse = {
          reason: 'The user must be validated in order to review data access submissions.',
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse'
        };
        return HttpResponse.json(errorResponse, {
          status: 403
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 9999
  }
}`,...M.parameters?.docs?.source}}},N=[`Demo`,`DemoError`]}))();export{j as Demo,M as DemoError,N as __namedExportsOrder,A as default};