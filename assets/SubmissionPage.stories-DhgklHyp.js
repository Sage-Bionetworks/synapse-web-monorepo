import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kp as i,kq as C,H as s,kr as l,p as m,ks as b,kt as T,k4 as A}from"./iframe-WhfIvkO3.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-DWdYdzjC.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-BLtQhDHG.js";import"./useAccessRequirements-BB4IHjuf.js";import"./index-sVzarH1I.js";import"./_baseOrderBy--tHHHZY3.js";import"./_baseIteratee-CH6bpyis.js";import"./_baseMap-TUJrX8WR.js";import"./_baseEach-9J6UhAkG.js";import"./useQueries-uA84kYd4.js";import"./useInfiniteQuery-DR_7XXgj.js";import"./groupBy-h_REB5rd.js";import"./_createAggregator-DJtjSLtR.js";import"./DialogBase-Crh1Kg5E.js";import"./Close-CmSe9oF4.js";import"./HelpPopover-DFlbq1oD.js";import"./MarkdownPopover-CFtct9XU.js";import"./LightTooltip-BPRV-Vss.js";import"./MarkdownSynapse-DpQsv1qU.js";import"./SkeletonButton-qFC4BpI5.js";import"./SkeletonInlineBlock-BW6N_xDK.js";import"./SkeletonTable-Di0hBp4_.js";import"./SkeletonParagraph-D0-idZNQ.js";import"./EntityLink-DNkKMmDe.js";import"./useEntity-Did6JTgt.js";import"./pickBy-uX0s9NBY.js";import"./isString-BFBF8Ssk.js";import"./useSuspenseQuery-dzosinIB.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BFRgYMsj.js";import"./useGetEntityHeaders-wQXoKJHy.js";import"./EntityIcon-CCBTwDGE.js";import"./ErrorChip-ByLo2_WA.js";import"./Chip-BbqPcVoT.js";import"./UserOrTeamBadge-15Hk99Bi.js";import"./UserBadge-BWSKMWPf.js";import"./useUserBundle-CRHh6Xmh.js";import"./MenuItem-Dje8pbb_.js";import"./Card-OO0EePdq.js";import"./TeamBadge-41FAQYIo.js";import"./UnmanagedACTAccessRequirementItem-DI6MlfY3.js";import"./RequirementItem-CQutdhr-.js";import"./LockTwoTone-hEKknRkw.js";import"./UserSearchBoxV2-B-aWi7od.js";import"./useDebouncedEffect-DixUkIq6.js";import"./use-deep-compare-effect.esm-DfR59o2r.js";import"./uniq-CTpbJdFY.js";import"./without-Br9k2PUu.js";import"./Select-aab027f3.esm-pvhpfeR5.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-COCiwS-5.js";import"./SelfSignAccessRequirementItem-CW5xj15W.js";import"./DataAccessRequestAccessorsFilesForm-C1mki9Vg.js";import"./enums-ApWzxJh1.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-CgViP5p1.js";import"./RadioGroup-s37nS9d2.js";import"./Radio-BZ8NXYqC.js";import"./SwitchBase-DhBFqZMr.js";import"./FormGroup-3y-5qnT7.js";import"./FormControlLabel-CFLwIoC9.js";import"./UploadDocumentField-BJe_gr34.js";import"./FileUpload-CNmee4BP.js";import"./ManagedACTAccessRequirementFormWikiWrapper-D2dinaeP.js";import"./GridLegacy-D9LubUBW.js";import"./ResearchProjectForm-CGdUT6dX.js";import"./TextFieldWithWordLimit-4XGItvDj.js";import"./AuthenticatedRequirement-KaLHR6H_.js";import"./CertificationRequirement-Dj3eMh3l.js";import"./TwoFactorAuthEnabledRequirement-BZyQMmyl.js";import"./ValidationRequirement-CTJf7so6.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-CPKXxX_0.js";import"./RejectDataAccessRequestModal-Dd5gJavI.js";import"./CannedRejectionDialog-G-BH66Qk.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-DiLnWHAQ.js";import"./Checkbox-DygchsjE.js";import"./Grid-pdQLRbNP.js";import"./upperFirst-xHDOZxGb.js";import"./_stringToArray-0lDT-Pel.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const or=["Demo","DemoError"];export{o as Demo,n as DemoError,or as __namedExportsOrder,sr as default};
