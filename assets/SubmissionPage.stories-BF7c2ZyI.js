import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kt as i,ku as E,H as s,kv as _,p as m,kw as I,kx as S,kc as O}from"./iframe-DuFc9wy7.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Br2ZOiAe.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DoPpXGlS.js";import"./useAccessRequirements-CvmgBl8a.js";import"./index-CH5M0AIg.js";import"./_baseOrderBy-DE_-pFzz.js";import"./_baseIteratee-qsGxLCcA.js";import"./_baseMap-CQziI25s.js";import"./_baseEach-BR_mWg9y.js";import"./useQueries-DQWP9YtM.js";import"./useInfiniteQuery-DzgY0_q9.js";import"./groupBy-DX2-17_O.js";import"./_createAggregator-DpXSnwT8.js";import"./DialogBase-BR60Qdy4.js";import"./Close-DDp2NBBe.js";import"./HelpPopover-DYKBAVc-.js";import"./MarkdownPopover-DymcBMfp.js";import"./LightTooltip-BztaycEr.js";import"./MarkdownSynapse-BVL-tgRC.js";import"./SkeletonButton-p5NHVcC3.js";import"./SkeletonInlineBlock-DWi7tVQO.js";import"./SkeletonTable-9HY8re28.js";import"./SkeletonParagraph-DXhZKBI2.js";import"./EntityLink-DyUzOJ9x.js";import"./useEntity-B7cW9knU.js";import"./pickBy-BR3FB8tc.js";import"./isString-Hxb7yJlJ.js";import"./useSuspenseQuery-DxSHSM8_.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-4CFtjNR5.js";import"./useGetEntityHeaders-Bb0WFsEd.js";import"./EntityIcon-BcEulVYE.js";import"./ErrorChip-BI-Ibx5e.js";import"./Chip-Bhz-2AzF.js";import"./UserOrTeamBadge-C3zOagyf.js";import"./UserBadge-B3eZrs9B.js";import"./useUserBundle-Dse17CN3.js";import"./MenuItem-BaPxBIGw.js";import"./Card-DG5CjRLq.js";import"./TeamBadge-C6-IDH2J.js";import"./UnmanagedACTAccessRequirementItem-upY6r58i.js";import"./RequirementItem-Bchp7jvO.js";import"./LockTwoTone-B4xRsKPf.js";import"./UserSearchBoxV2-DAPeifG9.js";import"./useDebouncedEffect-_d4wlOVi.js";import"./use-deep-compare-effect.esm-Bdc5x1y7.js";import"./uniq-DF_zmgwE.js";import"./without-DRrBpKd8.js";import"./Select-aab027f3.esm-BN-pE_5t.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-ClgTHi6A.js";import"./SelfSignAccessRequirementItem-BF8SDNjj.js";import"./DataAccessRequestAccessorsFilesForm-s9mWWQF0.js";import"./enums-BURaCo-W.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-mKJYW6bU.js";import"./RadioGroup-Cl0yXWAB.js";import"./Radio-DV1Kxqyu.js";import"./SwitchBase-XjUV0H1u.js";import"./FormGroup-D8X_uLLt.js";import"./FormControlLabel-Dadrkpu7.js";import"./UploadDocumentField-CVRNhH7S.js";import"./FileUpload-C1M2Gb-L.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BGUuExio.js";import"./GridLegacy-BmTV8VyM.js";import"./ResearchProjectForm-CPMf6f7L.js";import"./TextFieldWithWordLimit-BF0gcshl.js";import"./AuthenticatedRequirement--Fj5AOOT.js";import"./CertificationRequirement-sRen2WEn.js";import"./TwoFactorAuthEnabledRequirement-MBjbl5jh.js";import"./ValidationRequirement-BH2nizkq.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-fybd3hJK.js";import"./RejectDataAccessRequestModal-7dJEDNN2.js";import"./CannedRejectionDialog-BNdsfUZw.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CCgQxBD8.js";import"./Checkbox-Dx3FyEFW.js";import"./Grid-Cye-JFjr.js";import"./upperFirst-DFgpsIrw.js";import"./_stringToArray-C69-ND5j.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Xe=["Demo","DemoError"];export{o as Demo,n as DemoError,Xe as __namedExportsOrder,ze as default};
