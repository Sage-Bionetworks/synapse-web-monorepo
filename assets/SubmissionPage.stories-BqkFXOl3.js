import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-DPJy_hbO.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-B1QuVi7y.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-CEqTnKMx.js";import"./useAccessRequirements-f5_elL3R.js";import"./index-r9LWYNhy.js";import"./_baseOrderBy-BaqbUkzG.js";import"./_baseIteratee-CUWPyb2_.js";import"./_baseMap-BgvB1gfM.js";import"./_baseEach-BN_H56Qx.js";import"./useQueries-DHwQF6MX.js";import"./useInfiniteQuery-Ck5_XHem.js";import"./groupBy-BPN4DEm8.js";import"./_createAggregator-BEhFxM2O.js";import"./DialogBase-CqMIgrN_.js";import"./Close-gQOAERxu.js";import"./HelpPopover-DNFxtXl2.js";import"./MarkdownPopover-DONhqIHX.js";import"./LightTooltip-De1krTsk.js";import"./MarkdownSynapse-Cs3_hKdV.js";import"./SkeletonButton-BJjSHTYC.js";import"./SkeletonInlineBlock-By7Wj90y.js";import"./SkeletonTable-BAFcpWV8.js";import"./SkeletonParagraph-Cdg0493c.js";import"./EntityLink-xiTzjY8Q.js";import"./useEntity-DmeNeo6M.js";import"./pickBy-DWE31R76.js";import"./isString-B3-bwh42.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bni54fJC.js";import"./useGetEntityHeaders-Bfswb1XR.js";import"./EntityIcon-BM1s0K7t.js";import"./ErrorChip-Bz1jrtZp.js";import"./Chip-CxgDiEBm.js";import"./UserOrTeamBadge-BhBLoQkw.js";import"./UserBadge-DJMefXDP.js";import"./MenuItem-a8yMuuEa.js";import"./Card-C9Wn4h6B.js";import"./TeamBadge-c1scUwBn.js";import"./UnmanagedACTAccessRequirementItem-DMSyceuz.js";import"./RequirementItem-DyBY59mR.js";import"./LockTwoTone-BQYDCGma.js";import"./UserSearchBoxV2-cFu68mCD.js";import"./useDebouncedEffect-7_kFo7Yd.js";import"./use-deep-compare-effect.esm-CSNvm7WG.js";import"./uniq-CzAuHrIR.js";import"./without-pj5IqhJ3.js";import"./Select-aab027f3.esm-CM-gvq3o.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-HvLd82BZ.js";import"./SelfSignAccessRequirementItem-BFaApGIP.js";import"./DataAccessRequestAccessorsFilesForm-Da-v3Aud.js";import"./enums-BM97flU3.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-ffBz6WDC.js";import"./RadioGroup-B9P263ns.js";import"./Radio-DKaYC8Ai.js";import"./SwitchBase-BFeDIiA_.js";import"./FormGroup-CyEsBs8f.js";import"./FormControlLabel-BVqkmc0u.js";import"./UploadDocumentField-EhSww-bf.js";import"./FileUpload-Zn6c89qo.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BTC4sq1w.js";import"./GridLegacy-C23pP9Zg.js";import"./ResearchProjectForm-DQhGkBUh.js";import"./TextFieldWithWordLimit-CV3uPpU-.js";import"./AuthenticatedRequirement-CNJ37onQ.js";import"./CertificationRequirement-YOGgZH5T.js";import"./TwoFactorAuthEnabledRequirement-DnXbUWyC.js";import"./ValidationRequirement-BcURcFiG.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-YlbDQB6L.js";import"./RejectDataAccessRequestModal-BZymtwzf.js";import"./CannedRejectionDialog-DytlzZPL.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-Cd5b58FO.js";import"./Checkbox-B7jSZbGO.js";import"./Grid-DHEcecnF.js";import"./upperFirst-DxIi5xtd.js";import"./_stringToArray-DNwFs9D_.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
