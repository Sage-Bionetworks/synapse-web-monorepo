import{n as e}from"./chunk-jRWAZmH_.js";import{Bh as t,Gh as n,Lh as r,N_ as i,Nt as a,Ot as o,St as s,Xt as c,Yt as l,Zt as u,_ as d,a as f,a_ as p,ag as m,b as h,d as g,dn as _,eg as v,f as y,ng as b,o as x,pn as S,v as C,wt as w,y as T}from"./iframe-CzEGzIgT.js";import{n as E,t as D}from"./mockRejectionReasonsTableQueryResultBundle-ChDg0Fsy.js";import{n as O,t as k}from"./SubmissionPage-DeSSKk7x.js";var A,j,M,N;e((()=>{o(),s(),C(),T(),y(),x(),D(),S(),v(),m(),i(),l(),O(),A={title:`Governance/SubmissionPage`,component:k,parameters:{stack:`mock`,withRouter:!0},argTypes:{isAuthenticated:{control:{type:`boolean`}}},args:{isAuthenticated:!0}},j={name:`SubmissionPage`,loaders:[()=>h({sql:`SELECT * FROM ${p}`},E)],parameters:{msw:{handlers:[...g(b),...f(b),u.get(`${b}${n(`:id`)}`,({params:e})=>{let t=w.find(t=>e.id===t.id);return c.json(t,{status:200})}),u.get(`${b}${r(`:id`)}`,()=>c.json(a,{status:200})),u.get(`${b}${t(`:id`)}`,()=>c.json({wikiPageId:123,ownerObjectId:a.id,ownerObjectType:`ACCESS_REQUIREMENT`},{status:200})),u.get(`${b}/repo/v1/accessRequirement/:id/acl`,({params:e})=>c.json({id:e.id,creationDate:`2022-05-20T14:32:31.665Z`,etag:`f4fbd4f2-751d-40dd-9421-1d2693231217`,resourceAccess:[{principalId:_,accessType:[`REVIEW_SUBMISSIONS`]}]},{status:200})),...d(b),u.put(`${b}${n(`:id`)}`,async({request:e})=>c.json(await e.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},M={name:`Demo Error State`,parameters:{msw:{handlers:[u.get(`${b}${n(`:id`)}`,()=>c.json({reason:`The user must be validated in order to review data access submissions.`,concreteType:`org.sagebionetworks.repo.model.ErrorResponse`},{status:403}))]}},args:{isReviewer:!0,submissionId:9999}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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