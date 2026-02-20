import{g as d,k as u,n as t,a3 as c,d_ as R,b as e,kv as i,kw as E,H as s,kx as _,p as m,ky as I,kz as S,ke as O}from"./iframe-D1nGOIH-.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DflJ41fL.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-B_uxz037.js";import"./useAccessRequirements-CTJs9P0Q.js";import"./index-03zVvH3U.js";import"./_baseOrderBy-CVK5KDR5.js";import"./_baseIteratee-DMGufiEs.js";import"./_baseMap-CCrqr-lv.js";import"./_baseEach-CIEMg2cY.js";import"./useQueries-B9MwPHmO.js";import"./useInfiniteQuery-BoAhb982.js";import"./groupBy-BLPL7J_8.js";import"./_createAggregator-B16a_Q8A.js";import"./DialogBase-BnZdlh2N.js";import"./Close-CDjnP_xh.js";import"./HelpPopover-CtFsUa-K.js";import"./MarkdownPopover-B2h4XJDI.js";import"./LightTooltip-CyHZNf0u.js";import"./MarkdownSynapse-DdwRiDDQ.js";import"./SkeletonButton-B1c1lzEn.js";import"./SkeletonInlineBlock-BiIlwrm4.js";import"./SkeletonTable-DawIinBB.js";import"./SkeletonParagraph-DPQazNTU.js";import"./EntityLink-D_cpTWLM.js";import"./useEntity-BOi8Tjp5.js";import"./pickBy-CtojyeyU.js";import"./isString-Bz27LlTZ.js";import"./useSuspenseQuery-a9uGkD3u.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CJm8sVKX.js";import"./useGetEntityHeaders-Dk2aeL6L.js";import"./EntityIcon-CZzzLQxi.js";import"./ErrorChip-C5tJaf51.js";import"./Chip-BUJWntqC.js";import"./UserOrTeamBadge-CDl8u5Jw.js";import"./UserBadge-CgnKUoBG.js";import"./useUserBundle-ET8KNRSc.js";import"./MenuItem-3MOxvSFm.js";import"./Card-tjdQEG3Z.js";import"./TeamBadge-Nw0P6hpd.js";import"./useRealmPrincipals-ChyArmIR.js";import"./UnmanagedACTAccessRequirementItem-Dp0-52Kd.js";import"./RequirementItem-VDNNBujm.js";import"./LockTwoTone-BAiU6Ce3.js";import"./UserSearchBoxV2-AobXS9ab.js";import"./useDebouncedEffect-695dxOFD.js";import"./use-deep-compare-effect.esm-BO3WjKot.js";import"./uniq-DwR8JzlG.js";import"./without-7j7nnfim.js";import"./Select-aab027f3.esm-DXpZVGYG.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-B3r-sQ6n.js";import"./SelfSignAccessRequirementItem-XQdu4iTu.js";import"./DataAccessRequestAccessorsFilesForm-CSUvoXUv.js";import"./enums-D6oxjx3s.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-Cy0_V_7w.js";import"./RadioGroup-BrVSff66.js";import"./Radio-4OfLi8_q.js";import"./SwitchBase-BVmb4r5A.js";import"./FormGroup-CXpTy9Ti.js";import"./FormControlLabel-sZ_1ZWTa.js";import"./UploadDocumentField-47gzHeyj.js";import"./FileUpload-CsS9RSds.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DVCUUi-z.js";import"./GridLegacy-Bo5rFkn6.js";import"./ResearchProjectForm-CG-bHaCj.js";import"./TextFieldWithWordLimit-CZOzp0t_.js";import"./AuthenticatedRequirement-C6vzlafD.js";import"./CertificationRequirement-DCXOYxxQ.js";import"./TwoFactorAuthEnabledRequirement-CfiGTJ4f.js";import"./ValidationRequirement-cqgsHBvS.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-ChybMpvH.js";import"./RejectDataAccessRequestModal-CRUwZNBK.js";import"./CannedRejectionDialog-D9CatRC_.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-KaL_8gr2.js";import"./Checkbox-C6IS4i6O.js";import"./Grid-Da6jOyt7.js";import"./upperFirst-B7bn4ArC.js";import"./_stringToArray-9X5P53kY.js";const Xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const er=["Demo","DemoError"];export{o as Demo,n as DemoError,er as __namedExportsOrder,Xe as default};
