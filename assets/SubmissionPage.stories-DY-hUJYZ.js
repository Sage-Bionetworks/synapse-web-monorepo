import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kp as i,kq as C,H as s,kr as l,p as m,ks as b,kt as T,k4 as A}from"./iframe-CQ5-qSaZ.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-D7mcBt0P.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-BYrXUGyw.js";import"./useAccessRequirements-Dy8pbEn3.js";import"./index-CMGxuthB.js";import"./_baseOrderBy-C1pU_GaP.js";import"./_baseIteratee-Dj3IYEgL.js";import"./_baseMap-BEQgNlee.js";import"./_baseEach-BprtyPd6.js";import"./useQueries-D_Kjb9rp.js";import"./useInfiniteQuery-CRASm_E1.js";import"./groupBy-nx2i21xg.js";import"./_createAggregator-7VGAlyU-.js";import"./DialogBase-CfmFQsU6.js";import"./Close-C9wv_I6B.js";import"./HelpPopover-B2AzDKTB.js";import"./MarkdownPopover-CO3_N7sV.js";import"./LightTooltip-68JRYdNY.js";import"./MarkdownSynapse-BZ3RNnEb.js";import"./SkeletonButton-c9WGL7V6.js";import"./SkeletonInlineBlock-DeFYqaGd.js";import"./SkeletonTable-BtsmZ8DU.js";import"./SkeletonParagraph-BA_ojVwN.js";import"./EntityLink-ptUt0OGg.js";import"./useEntity-BsUfOOVp.js";import"./pickBy-16oidJkG.js";import"./isString-C9y1aqR9.js";import"./useSuspenseQuery-Be5C3Dgn.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BgFzjrxA.js";import"./useGetEntityHeaders-C_srIHdn.js";import"./EntityIcon-CHE9mlR2.js";import"./ErrorChip-DVY7LwYp.js";import"./Chip-CIMnCwMP.js";import"./UserOrTeamBadge-0nKpQxBa.js";import"./UserBadge-B_sM3xEu.js";import"./useUserBundle-DvCkv3lX.js";import"./MenuItem-C2vxNPoL.js";import"./Card-Ds8RS4sw.js";import"./TeamBadge-ucKGQwM4.js";import"./UnmanagedACTAccessRequirementItem-DxHJdlRS.js";import"./RequirementItem-DYYEYsOK.js";import"./LockTwoTone-DzC0sNcP.js";import"./UserSearchBoxV2-CGmgB0HG.js";import"./useDebouncedEffect-Df-PAMJS.js";import"./use-deep-compare-effect.esm-Mlqb8z9B.js";import"./uniq-Urbe3M_O.js";import"./without-C1d2PJCn.js";import"./Select-aab027f3.esm-CHnT__mC.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-DA8zlwWy.js";import"./SelfSignAccessRequirementItem-DgBFq71V.js";import"./DataAccessRequestAccessorsFilesForm-4kx5iYhx.js";import"./enums-CG_L6Do3.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-CRcxj-te.js";import"./RadioGroup-ZhDU67KA.js";import"./Radio-CKKaLWY5.js";import"./SwitchBase-DktDedBf.js";import"./FormGroup-YCQTeXJ2.js";import"./FormControlLabel-NHrBcrxm.js";import"./UploadDocumentField-7U9Gc05B.js";import"./FileUpload-CwLUC3Wz.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DkjyAgVE.js";import"./GridLegacy-CAThD2gd.js";import"./ResearchProjectForm-Bps4r-w-.js";import"./TextFieldWithWordLimit-B3nnllYk.js";import"./AuthenticatedRequirement-D0ebeCFx.js";import"./CertificationRequirement-DrX0UsVR.js";import"./TwoFactorAuthEnabledRequirement-Bg0O4THF.js";import"./ValidationRequirement-BiOW2tRq.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-C4yhjyO-.js";import"./RejectDataAccessRequestModal-BiAdsWRj.js";import"./CannedRejectionDialog-C4_8c4AU.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-BEtNAcjp.js";import"./Checkbox-d-GkNVqV.js";import"./Grid-Cae-tzkS.js";import"./upperFirst-0m96xDBs.js";import"./_stringToArray-DXLsqiFu.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
