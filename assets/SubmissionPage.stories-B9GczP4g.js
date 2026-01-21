import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,ks as i,kt as E,H as s,ku as _,p as m,kv as I,kw as S,kb as O}from"./iframe-BVXHJH4u.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-3BnNibjW.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DpRSev5E.js";import"./useAccessRequirements-DgbpPYYv.js";import"./index-B_trrxS1.js";import"./_baseOrderBy-CiwWhd0R.js";import"./_baseIteratee-BCoe42tj.js";import"./_baseMap-CkmWC-eY.js";import"./_baseEach-C6dvQ32R.js";import"./useQueries-pOn84d0l.js";import"./useInfiniteQuery-D0pzNhrd.js";import"./groupBy-BOlUodJc.js";import"./_createAggregator-CMd8AxpQ.js";import"./DialogBase-CcwXDs7D.js";import"./Close-CqljNwDC.js";import"./HelpPopover-BbvqYo6O.js";import"./MarkdownPopover-BAO6UTFT.js";import"./LightTooltip-Ds1uGQMo.js";import"./MarkdownSynapse-C6WRwt-e.js";import"./SkeletonButton-B31ULBiJ.js";import"./SkeletonInlineBlock-DtRriEan.js";import"./SkeletonTable-DQbZ0dw9.js";import"./SkeletonParagraph-CPzN7Agp.js";import"./EntityLink-PX9YBA5i.js";import"./useEntity-BlX_IHgW.js";import"./pickBy-WEbbmDOf.js";import"./isString-Qv20v6r4.js";import"./useSuspenseQuery-D29r270q.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-QRmHrws7.js";import"./useGetEntityHeaders-UIyfT-ks.js";import"./EntityIcon-COJlpkOs.js";import"./ErrorChip-Dra7_QmP.js";import"./Chip-C4lncqkU.js";import"./UserOrTeamBadge-D4N_23_Q.js";import"./UserBadge-D8YQIqU3.js";import"./useUserBundle-BoxU-Q5V.js";import"./MenuItem-CfEVbDMR.js";import"./Card-DR2RIN77.js";import"./TeamBadge-nY1pRdL-.js";import"./UnmanagedACTAccessRequirementItem-D6X1s8gs.js";import"./RequirementItem-BcUVNaSD.js";import"./LockTwoTone-Bt1VnTbp.js";import"./UserSearchBoxV2-B9NcPkKJ.js";import"./useDebouncedEffect-B7hq1B09.js";import"./use-deep-compare-effect.esm-CFDf9yci.js";import"./uniq-kkBrZweF.js";import"./without-DBr21Rc0.js";import"./Select-aab027f3.esm-DdJVb3Hx.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CrTaLTmm.js";import"./SelfSignAccessRequirementItem-BsEls0vC.js";import"./DataAccessRequestAccessorsFilesForm-BvDjL_2H.js";import"./enums-nr_P6uTW.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-gUWdHpe_.js";import"./RadioGroup-CPUpXl_N.js";import"./Radio-Ct41nxPc.js";import"./SwitchBase-CHIEJ2h4.js";import"./FormGroup-FWSP25Uz.js";import"./FormControlLabel-DZVjQdu9.js";import"./UploadDocumentField-Drkr8eL5.js";import"./FileUpload-BtsOEdCE.js";import"./ManagedACTAccessRequirementFormWikiWrapper-5ozcW31m.js";import"./GridLegacy-eRJraLhD.js";import"./ResearchProjectForm-C7IQcf2v.js";import"./TextFieldWithWordLimit-Bw9ME6Sa.js";import"./AuthenticatedRequirement-DfNQ3qeg.js";import"./CertificationRequirement-HYy6LgIA.js";import"./TwoFactorAuthEnabledRequirement-CSlCQLVp.js";import"./ValidationRequirement-Di8JSDr7.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BgkDN6It.js";import"./RejectDataAccessRequestModal-DbbFRkGV.js";import"./CannedRejectionDialog-CZaTIY9F.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Dd8pw4WU.js";import"./Checkbox-eD6UapcE.js";import"./Grid-By05aazM.js";import"./upperFirst-DZyhAcR7.js";import"./_stringToArray-CEFtuuyq.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
