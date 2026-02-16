import{g as u,k as d,n as t,a3 as c,e0 as R,b as e,kv as i,kw as E,H as s,kx as _,p as m,ky as I,kz as S,ke as O}from"./iframe-BQ-FyWsS.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-9zNX7sCD.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-C1S4W4Dl.js";import"./useAccessRequirements-CTng2P-U.js";import"./index-B8FvutqA.js";import"./_baseOrderBy-B7Wy6e_z.js";import"./_baseIteratee-D1Tm5upA.js";import"./_baseMap-BilfFXZ5.js";import"./_baseEach-DzmUJdB4.js";import"./useQueries-CogN6Y-I.js";import"./useInfiniteQuery-BmVO0mhr.js";import"./groupBy-C8YH4lS9.js";import"./_createAggregator-BekciudF.js";import"./DialogBase-Dt2niwwh.js";import"./Close-D_CGw3dB.js";import"./HelpPopover-B1pDuJfg.js";import"./MarkdownPopover-CUwT3SOT.js";import"./LightTooltip-DhzMlioI.js";import"./MarkdownSynapse-mIczoqmL.js";import"./SkeletonButton-BZyaXej1.js";import"./SkeletonInlineBlock-D_nLMWfH.js";import"./SkeletonTable-DUCbFLJl.js";import"./SkeletonParagraph-D-enYo3q.js";import"./EntityLink-BFEWJ26e.js";import"./useEntity-Cy5Mg2dp.js";import"./pickBy-BvN_jGL3.js";import"./isString-CYdSqs19.js";import"./useSuspenseQuery-DUVSvPvg.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CPRwldBA.js";import"./useGetEntityHeaders-BwRrh0VC.js";import"./EntityIcon-Dbz3i6K6.js";import"./ErrorChip-CnkGxJXt.js";import"./Chip-zSUCPrxT.js";import"./UserOrTeamBadge-B9keGLYN.js";import"./UserBadge-9nlLDOSg.js";import"./useUserBundle-gkGCGUlC.js";import"./MenuItem-CdJwdcJ1.js";import"./Card-Bdmezjf-.js";import"./TeamBadge-Csz93uW5.js";import"./UnmanagedACTAccessRequirementItem-L_0Zz84C.js";import"./RequirementItem-49HooqXQ.js";import"./LockTwoTone-BCiELePd.js";import"./UserSearchBoxV2-rirqvZEZ.js";import"./useDebouncedEffect-n889gsGg.js";import"./use-deep-compare-effect.esm-CEJVc6R6.js";import"./uniq-4tH-WeBy.js";import"./without-K2iuFss8.js";import"./Select-aab027f3.esm-DNnQDaAP.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DO993nc0.js";import"./SelfSignAccessRequirementItem-Dut62J0K.js";import"./DataAccessRequestAccessorsFilesForm-MaKoaja4.js";import"./enums-QVC8CdqK.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CyhnnyLR.js";import"./RadioGroup-a4p79gCI.js";import"./Radio-YcL-o3iN.js";import"./SwitchBase-B5Q_tRt4.js";import"./FormGroup-DpJpMpn8.js";import"./FormControlLabel-0XzmGWH_.js";import"./UploadDocumentField-Bssxx98h.js";import"./FileUpload-BcoNysdu.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BaJ8sqxa.js";import"./GridLegacy-pZGnzAo9.js";import"./ResearchProjectForm-8ePukOg1.js";import"./TextFieldWithWordLimit-D9ja88SU.js";import"./AuthenticatedRequirement-j4wL_amg.js";import"./CertificationRequirement-CDAjTGJq.js";import"./TwoFactorAuthEnabledRequirement-B0aZg1aN.js";import"./ValidationRequirement-hYQ6-79l.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-C1kdhuyD.js";import"./RejectDataAccessRequestModal-DvR07Fht.js";import"./CannedRejectionDialog-C5-v6j6d.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CdZxz-42.js";import"./Checkbox-BSd_DIyD.js";import"./Grid-CLjI5wvp.js";import"./upperFirst-DhB2HX0u.js";import"./_stringToArray-C5W0IRcy.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
