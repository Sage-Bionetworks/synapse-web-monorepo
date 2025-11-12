import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-CvY4ZvuJ.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-D4_AIJBw.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-hi_sz8Ck.js";import"./useAccessRequirements-BJeP1OZd.js";import"./index-bMipKrjl.js";import"./_baseOrderBy-BjSGNvvL.js";import"./_baseIteratee-D7LezZkr.js";import"./_baseMap-CFTIclAl.js";import"./_baseEach-DuKTxBZy.js";import"./useQueries-DrGB5wIR.js";import"./useInfiniteQuery--_EbWIUu.js";import"./groupBy-DayZCAxL.js";import"./_createAggregator-BgMnhb5C.js";import"./DialogBase-Cao7Dzdg.js";import"./Close-DK3fY5s5.js";import"./HelpPopover-C4eL4pDr.js";import"./MarkdownPopover-BINR37hc.js";import"./LightTooltip-DI-aYQ3b.js";import"./MarkdownSynapse-DLSzoPS4.js";import"./SkeletonButton-tyjQjXOk.js";import"./SkeletonInlineBlock-CuvHcddn.js";import"./SkeletonTable-dMQ-mK3Q.js";import"./SkeletonParagraph-C7GW6bi4.js";import"./EntityLink-DUIQKzMs.js";import"./useEntity-BgJsBnAy.js";import"./pickBy-BHrCFvrn.js";import"./isString-CrAcLbvr.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C7_2Y02m.js";import"./useGetEntityHeaders-Cu6RDaoJ.js";import"./EntityIcon-B-NS7_Lv.js";import"./ErrorChip-DLVM9oWg.js";import"./Chip-BETMumCU.js";import"./UserOrTeamBadge-DhpVrA7M.js";import"./UserBadge-BD2zhjf4.js";import"./MenuItem-DKvXd6gt.js";import"./Card-BXO89Jdk.js";import"./TeamBadge-CqqvkP2B.js";import"./UnmanagedACTAccessRequirementItem-DOvawuBr.js";import"./RequirementItem-CLjBJN9w.js";import"./LockTwoTone-C5NuonME.js";import"./UserSearchBoxV2-Z1w80hHQ.js";import"./useDebouncedEffect-BPgzOVr1.js";import"./use-deep-compare-effect.esm-5lSoDmix.js";import"./uniq-DeLep7Ye.js";import"./without-B6wc_T42.js";import"./Select-aab027f3.esm-CGXjiCAG.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-WCg5eMsl.js";import"./SelfSignAccessRequirementItem-B-0a92Xn.js";import"./DataAccessRequestAccessorsFilesForm-DK7HkHKN.js";import"./enums-Cg9Hm76j.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-Dn8VXhEo.js";import"./RadioGroup-D6JjNnHF.js";import"./Radio-zNHJ5PsT.js";import"./SwitchBase-DgB78qVF.js";import"./FormGroup-Cn918oVW.js";import"./FormControlLabel-qE_sm44B.js";import"./UploadDocumentField-DliHAkYm.js";import"./FileUpload-C4mjthX-.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Dywju_AO.js";import"./GridLegacy-BaFX-0fp.js";import"./ResearchProjectForm-DLniAOUd.js";import"./TextFieldWithWordLimit-DmdrtD59.js";import"./AuthenticatedRequirement-DlkjWHeY.js";import"./CertificationRequirement-DrKb8rKJ.js";import"./TwoFactorAuthEnabledRequirement-CtURIaDD.js";import"./ValidationRequirement-BUiCZ0wQ.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-iYWBHFVr.js";import"./RejectDataAccessRequestModal-DS8NBmA7.js";import"./CannedRejectionDialog-C0mjTRqM.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-yKbj63se.js";import"./Checkbox-B2JwnUlV.js";import"./Grid-BqlScswC.js";import"./upperFirst-3nE8NlJM.js";import"./_stringToArray-BZ9l1ANp.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
