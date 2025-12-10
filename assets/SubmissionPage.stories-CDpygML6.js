import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kr as i,ks as C,H as s,kt as l,p as m,ku as b,kv as T,ka as A}from"./iframe-CXX3j3k4.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-CN0BK_02.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-DfNJiX8o.js";import"./useAccessRequirements-ZLwAU_Is.js";import"./index-BMdlDJHf.js";import"./_baseOrderBy-CfkeoQJ5.js";import"./_baseIteratee-1UNfM9nP.js";import"./_baseMap-lc2X7ooU.js";import"./_baseEach-Cin_LC24.js";import"./useQueries-DR1JWuQB.js";import"./useInfiniteQuery-qlxPBsTZ.js";import"./groupBy-CvKMH1oC.js";import"./_createAggregator-D4HzBGq3.js";import"./DialogBase-DiPVYK5d.js";import"./Close-CqT8m-h4.js";import"./HelpPopover-DYzM-K-s.js";import"./MarkdownPopover-Bt9mzS5O.js";import"./LightTooltip-BljA5YjT.js";import"./MarkdownSynapse-CcsPZuDG.js";import"./SkeletonButton-CM_ISHRH.js";import"./SkeletonInlineBlock-B8S3Nzba.js";import"./SkeletonTable-Dy_jc2vl.js";import"./SkeletonParagraph-D9HvcMZH.js";import"./EntityLink-B4H8o-eC.js";import"./useEntity-Cu3nWcjI.js";import"./pickBy-DTma2HjN.js";import"./isString-BDOlTXrI.js";import"./useSuspenseQuery-BN00Uhyj.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BpJg0bA7.js";import"./useGetEntityHeaders-Ee10tgjo.js";import"./EntityIcon-BSUpa6oS.js";import"./ErrorChip-BnuBP3TH.js";import"./Chip-BQx2btmN.js";import"./UserOrTeamBadge-f9v9l6wh.js";import"./UserBadge-BK9OLj7v.js";import"./useUserBundle-DyX5qaSO.js";import"./MenuItem-Bsjjr9Hj.js";import"./Card-8IXpSYq4.js";import"./TeamBadge-C1Mow9Jp.js";import"./UnmanagedACTAccessRequirementItem-xfmujV6v.js";import"./RequirementItem-5-prE39_.js";import"./LockTwoTone-DosQQuBB.js";import"./UserSearchBoxV2-BvbJt7gy.js";import"./useDebouncedEffect-vxCbwBbS.js";import"./use-deep-compare-effect.esm-C67h1UqU.js";import"./uniq-BTvaEj3q.js";import"./without-DPQPdQUT.js";import"./Select-aab027f3.esm-CCwzdRLD.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-BIqgV0pX.js";import"./SelfSignAccessRequirementItem-C9S5CB_y.js";import"./DataAccessRequestAccessorsFilesForm-Jo-POv9v.js";import"./enums-C4m4KUQK.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-C-l3ex53.js";import"./RadioGroup-C9_NH97w.js";import"./Radio-suj20a1z.js";import"./SwitchBase-ClGQ9l6f.js";import"./FormGroup-Cxds_uWq.js";import"./FormControlLabel-D_ywbKjj.js";import"./UploadDocumentField-CcHvBsT9.js";import"./FileUpload-DL_2XxlB.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DJD-qkUa.js";import"./GridLegacy-6nE79X5W.js";import"./ResearchProjectForm-CH-KO69F.js";import"./TextFieldWithWordLimit-CbrCSaqO.js";import"./AuthenticatedRequirement-DHHFYXvk.js";import"./CertificationRequirement-C2UEzDCp.js";import"./TwoFactorAuthEnabledRequirement-DbmeuGXJ.js";import"./ValidationRequirement-B52ELBpd.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-Vo2VJ2kN.js";import"./RejectDataAccessRequestModal-BpEJpmNz.js";import"./CannedRejectionDialog-DoO-3cHc.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-BBYfC9oT.js";import"./Checkbox-CncWC2DQ.js";import"./Grid-DROBElw5.js";import"./upperFirst-Dgczs_Up.js";import"./_stringToArray-DpJVirka.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
