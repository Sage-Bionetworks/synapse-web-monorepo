import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-BMVoK9rQ.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CtqL2sN5.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-9AeqXyY7.js";import"./useAccessRequirements-Bfgon4dR.js";import"./index-Asaz_d4d.js";import"./_baseOrderBy-CuL3JrF5.js";import"./_baseIteratee-BHLHtG1R.js";import"./_baseMap-gQ2Le4IE.js";import"./_baseEach-UaJT6spa.js";import"./useQueries-DH3Kh0rD.js";import"./useInfiniteQuery-3kgmiq4J.js";import"./groupBy-DSs0fhzs.js";import"./_createAggregator-Bi-DhU6O.js";import"./DialogBase-CLwOhWu_.js";import"./Close-B41_ESac.js";import"./HelpPopover-BkrnBFdK.js";import"./MarkdownPopover-Biqfmo0M.js";import"./LightTooltip-CgiGvVpE.js";import"./MarkdownSynapse-BM2SQbDn.js";import"./SkeletonButton-UgghPQrF.js";import"./SkeletonInlineBlock-BqTkLdlE.js";import"./SkeletonTable-7r8fiUSQ.js";import"./SkeletonParagraph-DdPi-rNG.js";import"./EntityLink-BS8hNSgj.js";import"./useEntity-DgSWrAHS.js";import"./pickBy-DoDuXfPY.js";import"./isString-BLZLoYHn.js";import"./useSuspenseQuery-DZOIBk5v.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-wOmlaOCM.js";import"./useGetEntityHeaders-DEpRd-F7.js";import"./EntityIcon-C6PZewXE.js";import"./ErrorChip-tcQQ_7iY.js";import"./Chip-Bv1Iw22F.js";import"./UserOrTeamBadge-C8sCT3Lz.js";import"./UserBadge-D3W1hFC1.js";import"./useUserBundle-sdTO429-.js";import"./MenuItem-ClKAXsdA.js";import"./Card-dTGT8nbt.js";import"./TeamBadge-B1pwHIAJ.js";import"./UnmanagedACTAccessRequirementItem-ByYwWl33.js";import"./RequirementItem-CZIp1sUw.js";import"./LockTwoTone-DT3QbZ-4.js";import"./UserSearchBoxV2-LKek15eL.js";import"./useDebouncedEffect-CAzfHKIf.js";import"./use-deep-compare-effect.esm-CYGqCUNb.js";import"./uniq-BWBlN81V.js";import"./without-BVu7lcAB.js";import"./Select-aab027f3.esm-DMIbP4vY.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BZcmBEbn.js";import"./SelfSignAccessRequirementItem-DkTGwHgg.js";import"./DataAccessRequestAccessorsFilesForm-DezVn8MV.js";import"./enums-BsoAvqaA.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-N4D9f4a1.js";import"./RadioGroup-DMDKE2Ex.js";import"./Radio-ByQIXA5w.js";import"./SwitchBase-C1MXrM5l.js";import"./FormGroup-C5UezeOa.js";import"./FormControlLabel-4XNbKvi4.js";import"./UploadDocumentField-BC22LW1_.js";import"./FileUpload-CdQuCtEh.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BW4PcLgA.js";import"./GridLegacy-CzII5bcN.js";import"./ResearchProjectForm-Bvg85LrA.js";import"./TextFieldWithWordLimit-DdGRcMuE.js";import"./AuthenticatedRequirement-9O1WY6rO.js";import"./CertificationRequirement-LupQEFqD.js";import"./TwoFactorAuthEnabledRequirement-NV1fVGDC.js";import"./ValidationRequirement-BkZDSnXy.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Dv4Rcs1v.js";import"./RejectDataAccessRequestModal-D9ZW-9qk.js";import"./CannedRejectionDialog-BJgbfTt3.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CkeTu_WW.js";import"./Checkbox-C4cOGbgW.js";import"./Grid-BYrXWW0x.js";import"./upperFirst-Du2Q0Raz.js";import"./_stringToArray-Bs2YyyvS.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
