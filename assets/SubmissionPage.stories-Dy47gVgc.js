import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-BCo6xRtR.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DzWiBYeq.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BuTc86yo.js";import"./useAccessRequirements-sEp-Kbc4.js";import"./index-BIDqU31Y.js";import"./_baseOrderBy-gBgr0Ly3.js";import"./_baseIteratee-TfZ3SFX4.js";import"./_baseMap-BjvZOnjw.js";import"./_baseEach-BZ-7nqlo.js";import"./useQueries-DIyvlilN.js";import"./useInfiniteQuery-DNwGIq_T.js";import"./groupBy-DvbguHva.js";import"./_createAggregator-BKrwbe37.js";import"./DialogBase-CdXHsKxC.js";import"./Close-DWxxPOfT.js";import"./HelpPopover-COi1c2gB.js";import"./MarkdownPopover-xrdPtb-B.js";import"./LightTooltip-CCtrwSvI.js";import"./MarkdownSynapse-CwD5nz4r.js";import"./SkeletonButton-Di7WZDoT.js";import"./SkeletonInlineBlock-Oo_uHdtx.js";import"./SkeletonTable-CE_fO4U2.js";import"./SkeletonParagraph-BBZfUnUj.js";import"./EntityLink-DJdPJLhP.js";import"./useEntity-DdatXp-C.js";import"./pickBy-7bpIkYUP.js";import"./isString-Bnn4G-E_.js";import"./useSuspenseQuery-DtqIfE1u.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BlCrwPzV.js";import"./useGetEntityHeaders-BjzsmZSX.js";import"./EntityIcon-BqLf9vw6.js";import"./ErrorChip-BLv3LqXg.js";import"./Chip-_-7K_QD-.js";import"./UserOrTeamBadge-C7M-A27m.js";import"./UserBadge-DQ61RU3p.js";import"./useUserBundle-CtTpGbMF.js";import"./MenuItem-Dt5CKkV1.js";import"./Card-DIT33oKt.js";import"./TeamBadge-CiyLGNRD.js";import"./UnmanagedACTAccessRequirementItem-CHeixGCG.js";import"./RequirementItem-DXxACkkA.js";import"./LockTwoTone-DuWJHKR0.js";import"./UserSearchBoxV2-DdVd9-7T.js";import"./useDebouncedEffect-CdFhkZKm.js";import"./use-deep-compare-effect.esm-BzNt_zAg.js";import"./uniq-BgtH7xA4.js";import"./without-Bw7BnVO3.js";import"./Select-aab027f3.esm-BVBh86Oq.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-B2Vttiyx.js";import"./SelfSignAccessRequirementItem-CU3Ukl3V.js";import"./DataAccessRequestAccessorsFilesForm-Dq0wcmRR.js";import"./enums-BIUUD9kO.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DQBtFh1r.js";import"./RadioGroup-DuetIKYr.js";import"./Radio-CLhSN2MS.js";import"./SwitchBase-ClCTg-Cz.js";import"./FormGroup-DVmOcGub.js";import"./FormControlLabel-BQqHqMeR.js";import"./UploadDocumentField-R0sennxy.js";import"./FileUpload-fUAN_LhB.js";import"./ManagedACTAccessRequirementFormWikiWrapper-6m4l63_R.js";import"./GridLegacy-1sURH_k4.js";import"./ResearchProjectForm-abXHZ8-T.js";import"./TextFieldWithWordLimit-Bq78039t.js";import"./AuthenticatedRequirement-F-8KaWuF.js";import"./CertificationRequirement-CwT4Gom8.js";import"./TwoFactorAuthEnabledRequirement-DUt4E0sL.js";import"./ValidationRequirement-C1sjU2WW.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-D4S60YFs.js";import"./RejectDataAccessRequestModal-CWEd_op5.js";import"./CannedRejectionDialog-DB3sJqwK.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-DI4QV0Bv.js";import"./Checkbox-CtnxVUZk.js";import"./Grid-DdgWYWNa.js";import"./upperFirst-CTG6K8nm.js";import"./_stringToArray-CqsXzfWa.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
