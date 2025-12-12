import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kr as i,ks as C,H as s,kt as l,p as m,ku as b,kv as T,ka as A}from"./iframe-BrkRRQUD.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-BSaz1qQk.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-Bt6S8SWj.js";import"./useAccessRequirements-S1u6kgMx.js";import"./index-78Wjm31F.js";import"./_baseOrderBy-CfQMT3l2.js";import"./_baseIteratee-DsR7q60b.js";import"./_baseMap-DNuKpY8_.js";import"./_baseEach-CjJA-Bxp.js";import"./useQueries-CZ2UZAmG.js";import"./useInfiniteQuery-Cwe-jDYH.js";import"./groupBy-DQcpRod8.js";import"./_createAggregator-SScnDbXy.js";import"./DialogBase-DTN68OED.js";import"./Close-BxUb_IKw.js";import"./HelpPopover-BuRKkfXv.js";import"./MarkdownPopover-BICsFwT1.js";import"./LightTooltip-Bc7QhLtP.js";import"./MarkdownSynapse-BiQEJz-t.js";import"./SkeletonButton-CFrxD1jj.js";import"./SkeletonInlineBlock-DcZvYGLi.js";import"./SkeletonTable-Drmu1Y3r.js";import"./SkeletonParagraph-TWiIzOXd.js";import"./EntityLink-CvhjWOBT.js";import"./useEntity-CAv0toYE.js";import"./pickBy-DKmYyX-k.js";import"./isString-9KL61HD0.js";import"./useSuspenseQuery-CGvWjD8G.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BoIS8-Fg.js";import"./useGetEntityHeaders-COPOXGeu.js";import"./EntityIcon-CfUzZGSW.js";import"./ErrorChip-ClFvBuvv.js";import"./Chip-BtXAVNoa.js";import"./UserOrTeamBadge-C1VjpGi1.js";import"./UserBadge-DK_HXqMk.js";import"./useUserBundle-DImWu9jA.js";import"./MenuItem-BDBbE2H1.js";import"./Card-BB85GGha.js";import"./TeamBadge-CTAvEacD.js";import"./UnmanagedACTAccessRequirementItem-DpcYhZdX.js";import"./RequirementItem-BpmEfvY3.js";import"./LockTwoTone-CIgfxQen.js";import"./UserSearchBoxV2-DPb5XwnH.js";import"./useDebouncedEffect-bnbmKPq9.js";import"./use-deep-compare-effect.esm-DGZRY9L-.js";import"./uniq-DfAZrWYH.js";import"./without-4Pynd6JM.js";import"./Select-aab027f3.esm-DhUMs_k8.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-C6BJlQbv.js";import"./SelfSignAccessRequirementItem-pqrOAhiA.js";import"./DataAccessRequestAccessorsFilesForm-CdT8K-vP.js";import"./enums-rrs2IQyW.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-DkpaK49z.js";import"./RadioGroup-Dtc4TL5T.js";import"./Radio-CK82vZLa.js";import"./SwitchBase-DYU8qapt.js";import"./FormGroup-DTtcAW6E.js";import"./FormControlLabel-5WovY1jg.js";import"./UploadDocumentField-DF6BLGb7.js";import"./FileUpload-BC6HW2XW.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BQUOdRJ3.js";import"./GridLegacy-DJvqRpnY.js";import"./ResearchProjectForm-u4LtgisT.js";import"./TextFieldWithWordLimit-CbiN5xx8.js";import"./AuthenticatedRequirement-ByTYwU_D.js";import"./CertificationRequirement-DoBRfp6X.js";import"./TwoFactorAuthEnabledRequirement-CxSw4-eK.js";import"./ValidationRequirement-NkqBxqeE.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-xri8hwQr.js";import"./RejectDataAccessRequestModal-sboun3r5.js";import"./CannedRejectionDialog-BIBaqm5Q.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-CJLIjSN2.js";import"./Checkbox-C5PLq8_S.js";import"./Grid-DcGoEfgr.js";import"./upperFirst--rMIiDqE.js";import"./_stringToArray-tdkEUHRV.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
