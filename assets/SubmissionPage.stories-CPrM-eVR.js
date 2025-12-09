import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kr as i,ks as C,H as s,kt as l,p as m,ku as b,kv as T,ka as A}from"./iframe-k0ljdA_F.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-Ca86GzoM.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-BcNOE0Hu.js";import"./useAccessRequirements-AZ2hcX3x.js";import"./index-C-u29sTD.js";import"./_baseOrderBy-Bz8zxGHn.js";import"./_baseIteratee-Ddi5dsAL.js";import"./_baseMap-CbuWwOmP.js";import"./_baseEach-C4Ciw_0t.js";import"./useQueries-C37mXx1b.js";import"./useInfiniteQuery-Cnf3ehf_.js";import"./groupBy-CId21Tx9.js";import"./_createAggregator-C0dsLA40.js";import"./DialogBase-c3ATuGjo.js";import"./Close-B2VeJ_9n.js";import"./HelpPopover-CNpAlynd.js";import"./MarkdownPopover-DByvkR9q.js";import"./LightTooltip-DSQf6_14.js";import"./MarkdownSynapse-Bd3GMcDJ.js";import"./SkeletonButton-DocMgp-F.js";import"./SkeletonInlineBlock-D4J3mBmr.js";import"./SkeletonTable-C0DTQRTT.js";import"./SkeletonParagraph-BXN5laEg.js";import"./EntityLink-DHlEVn4y.js";import"./useEntity-CytXVVg8.js";import"./pickBy-DYc9HKD3.js";import"./isString-BujeJhfD.js";import"./useSuspenseQuery-Cfzbe5_g.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DA2NKXEk.js";import"./useGetEntityHeaders-B_qwvn8J.js";import"./EntityIcon-OIHacdNb.js";import"./ErrorChip-CIpnH9-j.js";import"./Chip-DuFcu8oc.js";import"./UserOrTeamBadge-dfyjRY0f.js";import"./UserBadge-Bz8d8XxV.js";import"./useUserBundle-BcDALtg_.js";import"./MenuItem-CVgChaV5.js";import"./Card-DSLWP5ai.js";import"./TeamBadge-CQu1DBRK.js";import"./UnmanagedACTAccessRequirementItem-DWTfFpuw.js";import"./RequirementItem-BQoeGNZu.js";import"./LockTwoTone-DcJPfRny.js";import"./UserSearchBoxV2-C2gokWI2.js";import"./useDebouncedEffect-CvtmYpAa.js";import"./use-deep-compare-effect.esm-D5RgLp7I.js";import"./uniq-DHKBvVd7.js";import"./without-977OwczG.js";import"./Select-aab027f3.esm-BSZCEsm9.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-DPtCnz4A.js";import"./SelfSignAccessRequirementItem-DyeIHwc_.js";import"./DataAccessRequestAccessorsFilesForm-B5i1x3bB.js";import"./enums-B9821FiY.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-aW0PEpBQ.js";import"./RadioGroup-UKvSMT5X.js";import"./Radio-D2WCg6Rf.js";import"./SwitchBase-DWQpQoJJ.js";import"./FormGroup-BOm7VGe-.js";import"./FormControlLabel-5sMiV1K8.js";import"./UploadDocumentField-DF-mCvGE.js";import"./FileUpload-DQ7IYeNt.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BQnY_cXn.js";import"./GridLegacy-CQjHRPuO.js";import"./ResearchProjectForm-zsbIOURC.js";import"./TextFieldWithWordLimit-elCeW27a.js";import"./AuthenticatedRequirement-AIVB6Rsr.js";import"./CertificationRequirement-ltL69CUr.js";import"./TwoFactorAuthEnabledRequirement-DZIAe4KP.js";import"./ValidationRequirement-C0OKGRUN.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-DBc91JJY.js";import"./RejectDataAccessRequestModal-BSVch8ES.js";import"./CannedRejectionDialog-w_Q26kos.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-C7naKC_4.js";import"./Checkbox-DcsQ_J_q.js";import"./Grid-DNfAXZdo.js";import"./upperFirst-DpX4qkUg.js";import"./_stringToArray-BVpSt8if.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const or=["Demo","DemoError"];export{o as Demo,n as DemoError,or as __namedExportsOrder,sr as default};
