import{g as u,k as d,n as t,a3 as c,e0 as R,b as e,kv as i,kw as E,H as s,kx as _,p as m,ky as I,kz as S,ke as O}from"./iframe-DCS9ymbE.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DGNqw2pe.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-C5AVDd4x.js";import"./useAccessRequirements-CFNwm_cr.js";import"./index-BGH17Atw.js";import"./_baseOrderBy-W-KymVih.js";import"./_baseIteratee-3beHZvMb.js";import"./_baseMap-DFIEFFTP.js";import"./_baseEach-Bjn0m_k4.js";import"./useQueries-DqiFrR4N.js";import"./useInfiniteQuery-JlDeuLpM.js";import"./groupBy-zGO4I3L-.js";import"./_createAggregator-AcR_Q3kn.js";import"./DialogBase-DjdKIz7b.js";import"./Close-CkQlcHF3.js";import"./HelpPopover-B2Qog0x5.js";import"./MarkdownPopover-D_3YeZyN.js";import"./LightTooltip-CLHQn5en.js";import"./MarkdownSynapse-m-Kv7fzM.js";import"./SkeletonButton-D3cSL18R.js";import"./SkeletonInlineBlock-BqZQuSX9.js";import"./SkeletonTable-Mr15HLUy.js";import"./SkeletonParagraph-CpW8pclE.js";import"./EntityLink-BSIE3hwb.js";import"./useEntity-BwOnA2wS.js";import"./pickBy-BpwiYU9z.js";import"./isString-DTsCICEq.js";import"./useSuspenseQuery-CJw-BZwU.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CKp12yOY.js";import"./useGetEntityHeaders-kCux1Mpo.js";import"./EntityIcon-B5afL435.js";import"./ErrorChip-Drefk8d6.js";import"./Chip-DizRxpNc.js";import"./UserOrTeamBadge-Cia2NSl2.js";import"./UserBadge-BFUo9T0u.js";import"./useUserBundle-Cgt8UTAe.js";import"./MenuItem-CXS0feUF.js";import"./Card-C0p0NRKA.js";import"./TeamBadge-CTroROau.js";import"./UnmanagedACTAccessRequirementItem-CTNCj7L6.js";import"./RequirementItem-DBft4b0c.js";import"./LockTwoTone-6ZbTbb-Y.js";import"./UserSearchBoxV2-tiU_-Nzz.js";import"./useDebouncedEffect-B6eVLILS.js";import"./use-deep-compare-effect.esm-Cc5dY3LP.js";import"./uniq-m_ra2s96.js";import"./without-vdyg91Pr.js";import"./Select-aab027f3.esm-Do0pg9SH.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-De-EDa5o.js";import"./SelfSignAccessRequirementItem-Dwh1qBX9.js";import"./DataAccessRequestAccessorsFilesForm-B11IM3B-.js";import"./enums-C8IydkpG.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DMBW-xEn.js";import"./RadioGroup-mWTlcFw4.js";import"./Radio-K-DWP4Jz.js";import"./SwitchBase-C1rXlQwU.js";import"./FormGroup-vucPGqaf.js";import"./FormControlLabel-CCWzOTTa.js";import"./UploadDocumentField-DY1m3Oo1.js";import"./FileUpload-CDvPqZ2k.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Fj-4fcYg.js";import"./GridLegacy-q2MBjir7.js";import"./ResearchProjectForm-Ca65yIqF.js";import"./TextFieldWithWordLimit-CRDbbA9O.js";import"./AuthenticatedRequirement-BPkv7JbZ.js";import"./CertificationRequirement-DzWz63z8.js";import"./TwoFactorAuthEnabledRequirement-qVTZ2U9D.js";import"./ValidationRequirement-CkdNbcIj.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-B9kfaKc-.js";import"./RejectDataAccessRequestModal-BIbyhG2y.js";import"./CannedRejectionDialog-BiqmVzuD.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-By5IYndx.js";import"./Checkbox-LIg6B-fT.js";import"./Grid-Dt5OkNLn.js";import"./upperFirst-BJ01zQpz.js";import"./_stringToArray-DxpCvDf4.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
