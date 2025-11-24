import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,ku as i,kv as C,H as s,kw as l,p as m,kx as b,ky as T,k9 as A}from"./iframe-BZSO1sBY.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-DStjkJy_.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-DTWTNV6i.js";import"./useAccessRequirements-BYGsF-N7.js";import"./index-CXinfiYW.js";import"./_baseOrderBy-c9jKiZ0g.js";import"./_baseIteratee-iOdVGprh.js";import"./_baseMap-CTsc-4-Q.js";import"./_baseEach-BxIYVEKh.js";import"./useQueries-BddsUBZl.js";import"./useInfiniteQuery-CnyKyV-h.js";import"./groupBy-xzRWrxcP.js";import"./_createAggregator-Ds9Ho_Qe.js";import"./DialogBase-qU8qGhdb.js";import"./Close-B5HUTbow.js";import"./HelpPopover-D6vrmLVi.js";import"./MarkdownPopover-CI0_KxeK.js";import"./LightTooltip-8HRZpeXS.js";import"./MarkdownSynapse-xsdHjNvb.js";import"./SkeletonButton-CEYfXLSy.js";import"./SkeletonInlineBlock-BOHljZQL.js";import"./SkeletonTable-CscIywyr.js";import"./SkeletonParagraph-DUOYKhWf.js";import"./EntityLink-DofC3B7h.js";import"./useEntity-BIhNNgg6.js";import"./pickBy-CZHHWsXM.js";import"./isString-Cd6JsjoG.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-kuSnN0oc.js";import"./useGetEntityHeaders-DFk4GpkN.js";import"./EntityIcon-CgITdlvI.js";import"./ErrorChip-4oRRU4cp.js";import"./Chip-B1QmYW8E.js";import"./UserOrTeamBadge-BazAX7HS.js";import"./UserBadge-TVBuHs8r.js";import"./MenuItem-DMN5iUnx.js";import"./Card-DDYQ3M_p.js";import"./TeamBadge-YVTjBD-r.js";import"./UnmanagedACTAccessRequirementItem-CAw5taSb.js";import"./RequirementItem-S5LSPwyZ.js";import"./LockTwoTone-BB8O6VnJ.js";import"./UserSearchBoxV2-yCKi-6XK.js";import"./useDebouncedEffect-BUuu8h-D.js";import"./use-deep-compare-effect.esm-Bc6PgY11.js";import"./uniq-pBlyIzRr.js";import"./without-BOq2Z2-J.js";import"./Select-aab027f3.esm-Cl2_uTvT.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-DIsjcJQ7.js";import"./SelfSignAccessRequirementItem-DvvVuuu9.js";import"./DataAccessRequestAccessorsFilesForm-DOthi-0l.js";import"./enums-B4hE8wfM.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-Gtb4tJEn.js";import"./RadioGroup-CCHi48de.js";import"./Radio-M61Dof9u.js";import"./SwitchBase-AgXctXHK.js";import"./FormGroup-pka7be3U.js";import"./FormControlLabel-DZaq9Cb-.js";import"./UploadDocumentField-BdL-fmqq.js";import"./FileUpload-Bc2O_tKM.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DMYoJess.js";import"./GridLegacy-Boi4LxFF.js";import"./ResearchProjectForm-CZJhxqXk.js";import"./TextFieldWithWordLimit-CpKL1la6.js";import"./AuthenticatedRequirement-sb-1QoS5.js";import"./CertificationRequirement-sY_wkzU3.js";import"./TwoFactorAuthEnabledRequirement-CmI_2MYe.js";import"./ValidationRequirement-Db2qfoqq.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-CHsh4S1x.js";import"./RejectDataAccessRequestModal-mDwJwYv1.js";import"./CannedRejectionDialog-D_M40b0n.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-ZLfAJ6qd.js";import"./Checkbox-BXYGByWK.js";import"./Grid-3ve1GtRu.js";import"./upperFirst-CJTCXSOg.js";import"./_stringToArray-bj15c7je.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,c,R;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const sr=["Demo","DemoError"];export{o as Demo,n as DemoError,sr as __namedExportsOrder,tr as default};
