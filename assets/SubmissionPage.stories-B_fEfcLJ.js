import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kp as i,kq as C,H as s,kr as l,p as m,ks as b,kt as T,k4 as A}from"./iframe-APCqMGQN.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-D2O7gdVl.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-w0M2rwqV.js";import"./useAccessRequirements-BMxGed4p.js";import"./index-Bfv0LEY1.js";import"./_baseOrderBy-BIdx1pYC.js";import"./_baseIteratee-C1iyXZJZ.js";import"./_baseMap-Df7tfatB.js";import"./_baseEach-CqMTNFX8.js";import"./useQueries-w0HgxzOW.js";import"./useInfiniteQuery-gXjf5_Em.js";import"./groupBy-BA8Gl713.js";import"./_createAggregator-BW2mK8Bf.js";import"./DialogBase-CPOjmtcd.js";import"./Close-Dfqur9mW.js";import"./HelpPopover-CSvALpOm.js";import"./MarkdownPopover-B00IKW0p.js";import"./LightTooltip-PuK_Y7Ky.js";import"./MarkdownSynapse-3Z4rZ9Dt.js";import"./SkeletonButton-BmM8-g6B.js";import"./SkeletonInlineBlock-CeF_-ICV.js";import"./SkeletonTable-DvijJWyz.js";import"./SkeletonParagraph-D-_OgKUm.js";import"./EntityLink-moiNZKvr.js";import"./useEntity-CCSA5IoB.js";import"./pickBy-BXOcfTdK.js";import"./isString-BiX_qD9y.js";import"./useSuspenseQuery-BHob01YS.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-3B7W4X2r.js";import"./useGetEntityHeaders-imcUb879.js";import"./EntityIcon-CD5iMfnG.js";import"./ErrorChip-ysWtKBn0.js";import"./Chip-TkJBG0Qb.js";import"./UserOrTeamBadge-SDskbEKm.js";import"./UserBadge-CYspYllf.js";import"./useUserBundle-Cy20sB8T.js";import"./MenuItem-BDJHy-II.js";import"./Card-CF59eyAb.js";import"./TeamBadge-BsrWixdG.js";import"./UnmanagedACTAccessRequirementItem-aUI_cxlp.js";import"./RequirementItem-DmwZ25lx.js";import"./LockTwoTone-l9gojcdx.js";import"./UserSearchBoxV2-CbhAw4Yz.js";import"./useDebouncedEffect-Dle6wcr-.js";import"./use-deep-compare-effect.esm-D1mvsljV.js";import"./uniq-DteFCC0d.js";import"./without-BkfqYoGn.js";import"./Select-aab027f3.esm-ME89OYth.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-ETEWmJWb.js";import"./SelfSignAccessRequirementItem-C2kGdbxw.js";import"./DataAccessRequestAccessorsFilesForm-Dlch77sa.js";import"./enums-B1pkj5cb.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-DazQpYdj.js";import"./RadioGroup-CAg8y022.js";import"./Radio-BhDW72Ud.js";import"./SwitchBase-CVLtTeuV.js";import"./FormGroup-B9Wga6I7.js";import"./FormControlLabel-DrlXu2zA.js";import"./UploadDocumentField-dBnj03nR.js";import"./FileUpload-dslgDfaW.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DCzOGsOj.js";import"./GridLegacy-7Q4ADOup.js";import"./ResearchProjectForm-C9HmTkKn.js";import"./TextFieldWithWordLimit-DgzCToe9.js";import"./AuthenticatedRequirement-BUFeBqti.js";import"./CertificationRequirement-IKvbIlWy.js";import"./TwoFactorAuthEnabledRequirement-Dvp-VsDc.js";import"./ValidationRequirement-DVH1PNdS.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-BysEjM2g.js";import"./RejectDataAccessRequestModal-6CzuItPq.js";import"./CannedRejectionDialog-CnPNyr-e.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-DX-eJ8BJ.js";import"./Checkbox-BFb0aAcu.js";import"./Grid-DsreRBQp.js";import"./upperFirst-BKsE2dfz.js";import"./_stringToArray-B6L7Mvq5.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
