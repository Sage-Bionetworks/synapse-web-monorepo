import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,ks as i,kt as E,H as s,ku as _,p as m,kv as I,kw as S,kb as O}from"./iframe-CJi55ERg.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-lXhydMeb.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BUhJJbZQ.js";import"./useAccessRequirements-B2k2htXt.js";import"./index-DJ8Jevlp.js";import"./_baseOrderBy-CHtZV-az.js";import"./_baseIteratee-DJ2aIvY0.js";import"./_baseMap-CPFYYg7D.js";import"./_baseEach-FHM5R5X1.js";import"./useQueries-B_1J4O-w.js";import"./useInfiniteQuery-COdaCjzZ.js";import"./groupBy-CJJLblYb.js";import"./_createAggregator-DwcHABP6.js";import"./DialogBase-CCRQ-36d.js";import"./Close-DflrR1-c.js";import"./HelpPopover-DfyusZY4.js";import"./MarkdownPopover-CLq6_7WL.js";import"./LightTooltip-CSyKoV_S.js";import"./MarkdownSynapse-CFDbt1Xl.js";import"./SkeletonButton-Dh0pWoWT.js";import"./SkeletonInlineBlock-d0W0oi9e.js";import"./SkeletonTable-DqghlvE9.js";import"./SkeletonParagraph-Bn6jXz5y.js";import"./EntityLink-BDJ-m1La.js";import"./useEntity-7QBCEi1J.js";import"./pickBy-CiUQvgN0.js";import"./isString-xFfqFUWo.js";import"./useSuspenseQuery-Prdg1nCF.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-5oNH0ZEl.js";import"./useGetEntityHeaders-DSVa7EYO.js";import"./EntityIcon-B0kEQNBZ.js";import"./ErrorChip-DmSLLhtV.js";import"./Chip-DELPMDmB.js";import"./UserOrTeamBadge-DK0Y5dqS.js";import"./UserBadge-Dffj96fH.js";import"./useUserBundle-B5WLYqAD.js";import"./MenuItem-CXmp431F.js";import"./Card-C_RZE_cg.js";import"./TeamBadge-Drq_7yhd.js";import"./UnmanagedACTAccessRequirementItem-D8b1qlIy.js";import"./RequirementItem-B9CZnmgG.js";import"./LockTwoTone-Dwoa-SV2.js";import"./UserSearchBoxV2-uh-pUCfN.js";import"./useDebouncedEffect-DDbCKJnK.js";import"./use-deep-compare-effect.esm-B3Jc5xfm.js";import"./uniq-BXrBlj2h.js";import"./without-CjAIne9P.js";import"./Select-aab027f3.esm-DC3Q4JiN.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BCkDS8AT.js";import"./SelfSignAccessRequirementItem-S_4qzHWC.js";import"./DataAccessRequestAccessorsFilesForm-mINvWl3H.js";import"./enums-WF59EgSL.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BxlCk2dz.js";import"./RadioGroup-CsRBdo0U.js";import"./Radio-DbmGf3XZ.js";import"./SwitchBase-1IBRQWl4.js";import"./FormGroup-D1GgbikW.js";import"./FormControlLabel-O5Pr_avL.js";import"./UploadDocumentField-B9lH1qUf.js";import"./FileUpload-CV3XtNoA.js";import"./ManagedACTAccessRequirementFormWikiWrapper-B5MVNeeY.js";import"./GridLegacy-B1FfOvq_.js";import"./ResearchProjectForm-Y4Jl2CBx.js";import"./TextFieldWithWordLimit-CkpnVYzc.js";import"./AuthenticatedRequirement-K-blJwJy.js";import"./CertificationRequirement-BxIAROxO.js";import"./TwoFactorAuthEnabledRequirement-Dy_P8zbb.js";import"./ValidationRequirement-BiGE5k7S.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Cup31DDI.js";import"./RejectDataAccessRequestModal-BdGLuaWx.js";import"./CannedRejectionDialog-DfwiQ76m.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CU4MVSU0.js";import"./Checkbox-DAAWAHE0.js";import"./Grid-B_Nmq3zX.js";import"./upperFirst-DFX3_cHl.js";import"./_stringToArray-DBMH6xX7.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
