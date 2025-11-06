import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-B9o6ulgU.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-jPOYV23W.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-C0pozJpi.js";import"./useAccessRequirements-BB2-4oS9.js";import"./index-Cr_TSGSN.js";import"./_baseOrderBy-BiyKeECO.js";import"./_baseIteratee-CBt9dape.js";import"./_baseMap-C229BfOD.js";import"./_baseEach-BoVOpmuL.js";import"./useQueries-C3uV33GD.js";import"./useInfiniteQuery-kNzCWB85.js";import"./groupBy-CbbMHC66.js";import"./_createAggregator-QHYuWoxs.js";import"./DialogBase-DvQ37JZ_.js";import"./Close-Cr1Q2hlA.js";import"./HelpPopover-B3caARoU.js";import"./MarkdownPopover-C5YeO7AB.js";import"./LightTooltip-nJQSerho.js";import"./MarkdownSynapse-DSGkOyxP.js";import"./SkeletonButton-BXySJEex.js";import"./SkeletonInlineBlock-BVBMyQK3.js";import"./SkeletonTable-CEQwMQho.js";import"./SkeletonParagraph-BgTZ32N4.js";import"./EntityLink-DYKLrEtR.js";import"./useEntity-5a0SBMIF.js";import"./pickBy-CfdE4eqp.js";import"./isString-C-D2gbfq.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-4AaPqvkr.js";import"./useGetEntityHeaders-DPQZXzWu.js";import"./EntityIcon-CKkZ9bqn.js";import"./ErrorChip-CGI8uygo.js";import"./Chip-BZa4nVPR.js";import"./UserOrTeamBadge-DcssnfxC.js";import"./UserBadge-BRWqD6Ez.js";import"./MenuItem-DlWBPIOu.js";import"./Card-CklRZ_sR.js";import"./TeamBadge-B5Snpkj4.js";import"./UnmanagedACTAccessRequirementItem-GKN-50GF.js";import"./RequirementItem-CiGvtlxk.js";import"./LockTwoTone-DCdlQNRY.js";import"./UserSearchBoxV2-BcAuWO8J.js";import"./useDebouncedEffect-BSHuIR52.js";import"./use-deep-compare-effect.esm-Clbxr4tw.js";import"./uniq-yZI0ZKTx.js";import"./without-CjHbkjHI.js";import"./Select-aab027f3.esm-BVB03L5T.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-gbwK2caK.js";import"./SelfSignAccessRequirementItem-BOo-jfn3.js";import"./DataAccessRequestAccessorsFilesForm-CpdFoFiY.js";import"./enums-DhOvVagF.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-Co-k67WP.js";import"./RadioGroup-B-Diak5W.js";import"./Radio-BFghs_X6.js";import"./SwitchBase-DnGYhQqV.js";import"./FormGroup-DoMZA8Fi.js";import"./FormControlLabel-CMl1Nsw_.js";import"./UploadDocumentField-CzcLcsOj.js";import"./FileUpload-Bcy9nzYR.js";import"./ManagedACTAccessRequirementFormWikiWrapper-C1FkD-YL.js";import"./GridLegacy-BaULWEBy.js";import"./ResearchProjectForm-Bx2hJ-Gc.js";import"./TextFieldWithWordLimit-CQmbklxr.js";import"./AuthenticatedRequirement-WgKEZ823.js";import"./CertificationRequirement-Dh5l82tn.js";import"./TwoFactorAuthEnabledRequirement-_jYxJpir.js";import"./ValidationRequirement-W7CuPvxx.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-DI-_5P62.js";import"./RejectDataAccessRequestModal-DWGRx8XJ.js";import"./CannedRejectionDialog-DVOVNfpJ.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-0cY4R4NJ.js";import"./Checkbox-CrnRjipf.js";import"./Grid-C3CpraHr.js";import"./upperFirst-xL32PJ1z.js";import"./_stringToArray-LeItbd5J.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
