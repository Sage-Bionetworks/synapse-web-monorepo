import{n as e}from"./chunk-zsgVPwQN.js";import{n as t,r as n,t as r}from"./core-DzrPRFGD.js";import{Zt as i,bt as a}from"./SynapseConstants-Dy6bsvi8.js";import{Ct as o,Tn as s,jt as c,vt as l,xn as u,yn as d}from"./SynapseClient-CWPGHuo8.js";import{r as f,t as p}from"./mock_user_profile-DU5gSScO.js";import{a as m,i as h,o as g,s as _}from"./tableQueryHandlers-BfEQJ18S.js";import{i as v,u as y}from"./mockAccessRequirements-CqzQnD-V.js";import{i as b,n as x,o as S,r as C}from"./wikiHandlers-BKNxw8jk.js";import{n as w,r as T}from"./userProfileHandlers-Ba2YqueA.js";import{n as E,t as D}from"./mockRejectionReasonsTableQueryResultBundle-D8179a7h.js";import{n as O,t as k}from"./SubmissionPage-C0-OqY_O.js";var A,j,M,N;e((()=>{v(),b(),m(),g(),T(),C(),D(),f(),d(),s(),i(),r(),O(),A={title:`Governance/SubmissionPage`,component:k,parameters:{stack:`mock`,withRouter:!0},argTypes:{isAuthenticated:{control:{type:`boolean`}}},args:{isAuthenticated:!0}},j={name:`SubmissionPage`,loaders:[()=>_({sql:`SELECT * FROM ${a}`},E)],parameters:{msw:{handlers:[...w(u),...x(u),n.get(`${u}${c(`:id`)}`,({params:e})=>{let n=S.find(t=>e.id===t.id);return t.json(n,{status:200})}),n.get(`${u}${l(`:id`)}`,()=>t.json(y,{status:200})),n.get(`${u}${o(`:id`)}`,()=>t.json({wikiPageId:123,ownerObjectId:y.id,ownerObjectType:`ACCESS_REQUIREMENT`},{status:200})),n.get(`${u}/repo/v1/accessRequirement/:id/acl`,({params:e})=>t.json({id:e.id,creationDate:`2022-05-20T14:32:31.665Z`,etag:`f4fbd4f2-751d-40dd-9421-1d2693231217`,resourceAccess:[{principalId:p,accessType:[`REVIEW_SUBMISSIONS`]}]},{status:200})),...h(u),n.put(`${u}${c(`:id`)}`,async({request:e})=>t.json(await e.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},M={name:`Demo Error State`,parameters:{msw:{handlers:[n.get(`${u}${c(`:id`)}`,()=>t.json({reason:`The user must be validated in order to review data access submissions.`,concreteType:`org.sagebionetworks.repo.model.ErrorResponse`},{status:403}))]}},args:{isReviewer:!0,submissionId:9999}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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