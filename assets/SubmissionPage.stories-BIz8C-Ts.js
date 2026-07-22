import{o as e}from"./preload-helper-CsHsquCd.js";import{n as t,p as n,t as r}from"./core-IjRt3rc-.js";import{Qt as i,xt as a}from"./SynapseConstants-DNyFNsSS.js";import{Cn as o,Nt as s,Tn as c,Tt as l,bt as u,kn as d}from"./synapse-client-D4aDg0QE.js";import{r as f,t as p}from"./mock_user_profile-BgSYjn5K.js";import{i as m,u as h}from"./mockAccessRequirements-C7qAzxKi.js";import{Et as g,_,a as v,b as y,d as b,f as x,o as S,v as C,wt as w,y as T}from"./iframe-mgK-BYfM.js";import{n as E,t as D}from"./mockRejectionReasonsTableQueryResultBundle-CEMeEMmF.js";import{n as O,t as k}from"./SubmissionPage-dvUWgU38.js";var A,j,M,N;e((()=>{m(),w(),C(),T(),x(),S(),D(),f(),o(),d(),i(),r(),O(),A={title:`Governance/SubmissionPage`,component:k,parameters:{stack:`mock`,withRouter:!0},argTypes:{isAuthenticated:{control:{type:`boolean`}}},args:{isAuthenticated:!0}},j={name:`SubmissionPage`,loaders:[()=>y({sql:`SELECT * FROM ${a}`},E)],parameters:{msw:{handlers:[...b(c),...v(c),t.get(`${c}${s(`:id`)}`,({params:e})=>{let t=g.find(t=>e.id===t.id);return n.json(t,{status:200})}),t.get(`${c}${u(`:id`)}`,()=>n.json(h,{status:200})),t.get(`${c}${l(`:id`)}`,()=>n.json({wikiPageId:123,ownerObjectId:h.id,ownerObjectType:`ACCESS_REQUIREMENT`},{status:200})),t.get(`${c}/repo/v1/accessRequirement/:id/acl`,({params:e})=>n.json({id:e.id,creationDate:`2022-05-20T14:32:31.665Z`,etag:`f4fbd4f2-751d-40dd-9421-1d2693231217`,resourceAccess:[{principalId:p,accessType:[`REVIEW_SUBMISSIONS`]}]},{status:200})),..._(c),t.put(`${c}${s(`:id`)}`,async({request:e})=>n.json(await e.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},M={name:`Demo Error State`,parameters:{msw:{handlers:[t.get(`${c}${s(`:id`)}`,()=>n.json({reason:`The user must be validated in order to review data access submissions.`,concreteType:`org.sagebionetworks.repo.model.ErrorResponse`},{status:403}))]}},args:{isReviewer:!0,submissionId:9999}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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