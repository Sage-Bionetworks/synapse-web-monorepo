import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-aiCTTxzx.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-DS-ubDbj.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-BycHVqod.js";import"./useAccessRequirements-D31N4k6L.js";import"./index-Q4iuKSAo.js";import"./_baseOrderBy-BPPL0NSC.js";import"./_baseIteratee-ZTZzVXP5.js";import"./_baseMap-DJjH_LSa.js";import"./_baseEach-atuDNG5v.js";import"./useQueries-BVv0ZXiA.js";import"./useInfiniteQuery-Gkgwzaik.js";import"./groupBy-DLSK8y9B.js";import"./_createAggregator-uBzxyFbO.js";import"./DialogBase-Gzuj-6fR.js";import"./Close-CfukyXb1.js";import"./HelpPopover-DCPIXOU3.js";import"./MarkdownPopover-2FWIzgd3.js";import"./LightTooltip-DNGLoswC.js";import"./MarkdownSynapse-CmpESD_-.js";import"./SkeletonButton-95Mbk9h_.js";import"./SkeletonInlineBlock-D-HDpP9G.js";import"./SkeletonTable-C8arYsQV.js";import"./SkeletonParagraph-JveYRW9s.js";import"./EntityLink-C5_AxGGS.js";import"./useEntity-fAQrW7xp.js";import"./pickBy-Cmir8uaG.js";import"./isString-CoJ2Y4rt.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DBedoUKR.js";import"./useGetEntityHeaders-3TU1IgeU.js";import"./EntityIcon-GlH_nCbT.js";import"./ErrorChip-BjjpFUqD.js";import"./Chip-RH7BrEwh.js";import"./UserOrTeamBadge-D6NQID_n.js";import"./UserBadge-1dDO35aJ.js";import"./MenuItem-DS99slWK.js";import"./Card-CHv0SxIu.js";import"./TeamBadge-DADF6ZHh.js";import"./UnmanagedACTAccessRequirementItem-gCqXX7az.js";import"./RequirementItem-Dy2iEGjY.js";import"./LockTwoTone-Bgw5bPQE.js";import"./UserSearchBoxV2-CmGcsQng.js";import"./useDebouncedEffect-D6hLJnWy.js";import"./use-deep-compare-effect.esm-C0dmksk3.js";import"./uniq-C5q_3WvF.js";import"./without-DZ-h4ZXK.js";import"./Select-aab027f3.esm-BO61-o0h.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-Pr2Ix7jx.js";import"./SelfSignAccessRequirementItem-Cn8wOHcv.js";import"./DataAccessRequestAccessorsFilesForm-BjMahWEu.js";import"./enums-BDbo8TlJ.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-CpQLOMM8.js";import"./RadioGroup-B-xQA0fR.js";import"./Radio-D-0EP8nH.js";import"./SwitchBase-C5vlrh6G.js";import"./FormGroup-Cw_gVl0y.js";import"./FormControlLabel-i7KA90RK.js";import"./UploadDocumentField-CfNAJo6A.js";import"./FileUpload-B21z_efw.js";import"./ManagedACTAccessRequirementFormWikiWrapper-B031CMK4.js";import"./GridLegacy-6f-G97h8.js";import"./ResearchProjectForm-B34C-4bN.js";import"./TextFieldWithWordLimit-DkrEMdK2.js";import"./AuthenticatedRequirement-CE4Foy2R.js";import"./CertificationRequirement-DADdYQOh.js";import"./TwoFactorAuthEnabledRequirement-EkUhja9H.js";import"./ValidationRequirement-C46fkaY5.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-De2CKnN0.js";import"./RejectDataAccessRequestModal-BvpqTqm4.js";import"./CannedRejectionDialog-D3TCfm0b.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-DO-EfviT.js";import"./Checkbox-tYC2r_Wk.js";import"./Grid-Bp6ID_x8.js";import"./upperFirst-lzlEYWFl.js";import"./_stringToArray-CghhP2Jn.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
