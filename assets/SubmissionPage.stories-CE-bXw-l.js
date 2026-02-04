import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kt as i,ku as E,H as s,kv as _,p as m,kw as I,kx as S,kc as O}from"./iframe-C64n1GD8.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DG6mw81G.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Cb7f0A_N.js";import"./useAccessRequirements-R8R2EY7s.js";import"./index-C-1MBf7J.js";import"./_baseOrderBy-DBvXkxJa.js";import"./_baseIteratee-DRcYnuUR.js";import"./_baseMap-BIWfE2OE.js";import"./_baseEach-5KfUbR-i.js";import"./useQueries-CI1-f4sD.js";import"./useInfiniteQuery-17Rp3FWY.js";import"./groupBy-Bh0mH1Eo.js";import"./_createAggregator-BqfzYLZy.js";import"./DialogBase-CvFrMWW4.js";import"./Close-jGAkMweY.js";import"./HelpPopover-DMcj4HzC.js";import"./MarkdownPopover-aVtIL7z6.js";import"./LightTooltip-DDkKmTHq.js";import"./MarkdownSynapse-CenQtkph.js";import"./SkeletonButton-BHX6f9gP.js";import"./SkeletonInlineBlock-CDYMy8y_.js";import"./SkeletonTable-QL6vSy9n.js";import"./SkeletonParagraph-Duc3bDvV.js";import"./EntityLink-Cit2KeXe.js";import"./useEntity-Dy6ZZyZt.js";import"./pickBy-DIyQM_4r.js";import"./isString-C0jfIwgY.js";import"./useSuspenseQuery-DKR51829.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-RjJQ7I9X.js";import"./useGetEntityHeaders-CxkARZm6.js";import"./EntityIcon-KRD-7Vk-.js";import"./ErrorChip-BHHn6sYA.js";import"./Chip-B6rIlUNr.js";import"./UserOrTeamBadge-BDkiNsf3.js";import"./UserBadge-gsVQwvQr.js";import"./useUserBundle-D00teTqN.js";import"./MenuItem-BnAVJRr4.js";import"./Card-BkBy63xK.js";import"./TeamBadge-BDXFLMIb.js";import"./UnmanagedACTAccessRequirementItem-ChL1dSGp.js";import"./RequirementItem-DQlaI_89.js";import"./LockTwoTone-NaF5nnEp.js";import"./UserSearchBoxV2-CEOaBZBE.js";import"./useDebouncedEffect-B1LnpUgj.js";import"./use-deep-compare-effect.esm-DM9VHs1k.js";import"./uniq-DGMRWxbl.js";import"./without-C01j4c9t.js";import"./Select-aab027f3.esm-BnGTkP-J.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-J__kodup.js";import"./SelfSignAccessRequirementItem-ChCsixRS.js";import"./DataAccessRequestAccessorsFilesForm-D727Okmv.js";import"./enums-BQxze2eu.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-AIKpKilC.js";import"./RadioGroup-MIdNZpCX.js";import"./Radio-x9l2We6W.js";import"./SwitchBase-D7SWinHy.js";import"./FormGroup-DLoUgC6Y.js";import"./FormControlLabel-DFd8tF3Z.js";import"./UploadDocumentField-BUcAc0Tv.js";import"./FileUpload-4gZerx6O.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BFUdvjVr.js";import"./GridLegacy-B8nrD_X8.js";import"./ResearchProjectForm-CzdCAVLu.js";import"./TextFieldWithWordLimit-D9ql3EHx.js";import"./AuthenticatedRequirement-DC2aycBi.js";import"./CertificationRequirement-CBQOSmtA.js";import"./TwoFactorAuthEnabledRequirement-Can4oefv.js";import"./ValidationRequirement-BDTeEaov.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DAhxTQga.js";import"./RejectDataAccessRequestModal-pYGy_mQB.js";import"./CannedRejectionDialog-D1aFoHdf.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-0v5aIB6P.js";import"./Checkbox-D83KQWHy.js";import"./Grid-DqBexckt.js";import"./upperFirst-BZh1Ymmh.js";import"./_stringToArray-CIxyk457.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
