import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kp as i,kq as C,H as s,kr as l,p as m,ks as b,kt as T,k4 as A}from"./iframe-oNn-8uxy.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-BRvq6hcF.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-eqZ23_17.js";import"./useAccessRequirements-CsaizCJ_.js";import"./index-BI05yMk-.js";import"./_baseOrderBy-CzjvuFz5.js";import"./_baseIteratee-BbGDd72L.js";import"./_baseMap-Cj7zEA7K.js";import"./_baseEach-zo0gRTCE.js";import"./useQueries-CKE-hIT5.js";import"./useInfiniteQuery-BMvK8V8y.js";import"./groupBy-DzYwwfye.js";import"./_createAggregator-DvK8YRgS.js";import"./DialogBase-B-cSqcPd.js";import"./Close-BSLNouGJ.js";import"./HelpPopover-CEM-d7vz.js";import"./MarkdownPopover-Cg7ChiRL.js";import"./LightTooltip-DLMoSUZw.js";import"./MarkdownSynapse-ChplHHtD.js";import"./SkeletonButton-D_D34Tmd.js";import"./SkeletonInlineBlock-B6YJwBFk.js";import"./SkeletonTable-iW-77ZUO.js";import"./SkeletonParagraph-DAXRxcWE.js";import"./EntityLink-BlZnHUSe.js";import"./useEntity-NQfLZli_.js";import"./pickBy-DgR1SMI4.js";import"./isString-DyjIcYAW.js";import"./useSuspenseQuery-yMS-8lGQ.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-EJdEQ_Jp.js";import"./useGetEntityHeaders-CDDjqkDC.js";import"./EntityIcon-j3-NOGIk.js";import"./ErrorChip-BbpjuoYW.js";import"./Chip-D6UDoJiu.js";import"./UserOrTeamBadge-BwlzkA4O.js";import"./UserBadge-bqUdhPgI.js";import"./useUserBundle-BvaO0LNa.js";import"./MenuItem-2EGLr3CI.js";import"./Card-Dp1pXqZt.js";import"./TeamBadge-DPKE54J4.js";import"./UnmanagedACTAccessRequirementItem-BBcoSUhL.js";import"./RequirementItem-BpSGF4uC.js";import"./LockTwoTone-Cq8jjD6J.js";import"./UserSearchBoxV2-V6QtyL8f.js";import"./useDebouncedEffect-DenHVWi1.js";import"./use-deep-compare-effect.esm-DLQm-Mgx.js";import"./uniq-D0RDBqXc.js";import"./without-DeOqkEKm.js";import"./Select-aab027f3.esm-Demt1hn3.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-DS_UUH6e.js";import"./SelfSignAccessRequirementItem-D8iAMdWm.js";import"./DataAccessRequestAccessorsFilesForm-PILlhSCW.js";import"./enums-Dhd0VrrJ.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-9i6byrid.js";import"./RadioGroup-BBNd0j-j.js";import"./Radio-ChlketSK.js";import"./SwitchBase-DbKIBTZe.js";import"./FormGroup-53XXyAVd.js";import"./FormControlLabel-B2mrO8Kq.js";import"./UploadDocumentField-C-gC8bTq.js";import"./FileUpload-BYR71Mvp.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CgFZM6qf.js";import"./GridLegacy-CYv6Ya4-.js";import"./ResearchProjectForm-35PbIpnl.js";import"./TextFieldWithWordLimit-CPVZUZtu.js";import"./AuthenticatedRequirement-DcRtIMAw.js";import"./CertificationRequirement-DyFojqIn.js";import"./TwoFactorAuthEnabledRequirement-CAgFrmBd.js";import"./ValidationRequirement-BQAf3HiW.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-B_M_lkGr.js";import"./RejectDataAccessRequestModal-DyhUeo_V.js";import"./CannedRejectionDialog-cntrGB-5.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-SzA8si7K.js";import"./Checkbox-Dcd_zqus.js";import"./Grid-B6PH2Zpw.js";import"./upperFirst-Cnqst-wB.js";import"./_stringToArray-DogVKuYH.js";const or={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,c,R;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const nr=["Demo","DemoError"];export{o as Demo,n as DemoError,nr as __namedExportsOrder,or as default};
