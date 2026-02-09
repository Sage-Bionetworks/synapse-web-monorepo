import{g as u,k as d,n as t,a3 as c,e0 as R,b as e,ku as i,kv as E,H as s,kw as _,p as m,kx as I,ky as S,kd as O}from"./iframe-MmUnwf_I.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DaPoUY4y.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CQhIyCqc.js";import"./useAccessRequirements-COUUD8qB.js";import"./index-DFpfHoB1.js";import"./_baseOrderBy-CLYcswMr.js";import"./_baseIteratee-DuWwUvju.js";import"./_baseMap-Bk2mvBia.js";import"./_baseEach-CKJISio3.js";import"./useQueries-BtYNrF4R.js";import"./useInfiniteQuery-B-kwFNwz.js";import"./groupBy-BmAVbJ1H.js";import"./_createAggregator-KQ0-5P_H.js";import"./DialogBase-jau6DM0L.js";import"./Close-B3vYte_0.js";import"./HelpPopover-DtES8MA2.js";import"./MarkdownPopover-DoWodOdq.js";import"./LightTooltip-4Nk8Q6mg.js";import"./MarkdownSynapse-CVJ0Q6XW.js";import"./SkeletonButton-I9hMZOT-.js";import"./SkeletonInlineBlock-Di0FCUFm.js";import"./SkeletonTable-BLb5k01Q.js";import"./SkeletonParagraph-_n4WmOaG.js";import"./EntityLink-CIWlwnn0.js";import"./useEntity-Dp_Npi43.js";import"./pickBy-CCWt6Y2F.js";import"./isString-CEdUjgis.js";import"./useSuspenseQuery-BiDsxdrf.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CYL14dsn.js";import"./useGetEntityHeaders-BYHlx3ny.js";import"./EntityIcon-Bm73zfpi.js";import"./ErrorChip-DIFJGlUz.js";import"./Chip-p99lz26K.js";import"./UserOrTeamBadge-CAyrKgak.js";import"./UserBadge-DP5amhmd.js";import"./useUserBundle-Dndd3Zuv.js";import"./MenuItem-D3dfLHqd.js";import"./Card-DpsJeDne.js";import"./TeamBadge-DC-gFpCd.js";import"./UnmanagedACTAccessRequirementItem-LlXvSIsM.js";import"./RequirementItem-BqqWWtAH.js";import"./LockTwoTone-XnLUKqol.js";import"./UserSearchBoxV2-CzqE0EkR.js";import"./useDebouncedEffect-IK0lQq3K.js";import"./use-deep-compare-effect.esm-BqBQcVZ-.js";import"./uniq-BTaYoBVF.js";import"./without-lsWXnEhz.js";import"./Select-aab027f3.esm-BDn15PHk.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BGTy5b_n.js";import"./SelfSignAccessRequirementItem-BQRanvMo.js";import"./DataAccessRequestAccessorsFilesForm-DaTeEA6c.js";import"./enums-Dp_3--3s.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-C7bUh4ID.js";import"./RadioGroup-4rXJ3o2l.js";import"./Radio-BkTDhJEK.js";import"./SwitchBase-DN75FVfu.js";import"./FormGroup-Dbch2PMw.js";import"./FormControlLabel-kiBD7IDn.js";import"./UploadDocumentField-DJ47O5jD.js";import"./FileUpload-D4sCWzST.js";import"./ManagedACTAccessRequirementFormWikiWrapper-B7YNIdDh.js";import"./GridLegacy-CNkeljxy.js";import"./ResearchProjectForm-Aq3n04Ho.js";import"./TextFieldWithWordLimit-CwWiCLUe.js";import"./AuthenticatedRequirement-D4ccAGyk.js";import"./CertificationRequirement-CeC6Sfdm.js";import"./TwoFactorAuthEnabledRequirement-CcGVgIRI.js";import"./ValidationRequirement-DTZunSjE.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-C3kI7L_s.js";import"./RejectDataAccessRequestModal-BKaNMuod.js";import"./CannedRejectionDialog-CX4lL-oR.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-GHfYW2YY.js";import"./Checkbox-BQeLkSuG.js";import"./Grid-CwnxfaSd.js";import"./upperFirst-CoVS57VL.js";import"./_stringToArray-D-5vQliC.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
