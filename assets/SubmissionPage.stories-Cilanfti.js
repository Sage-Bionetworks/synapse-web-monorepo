import{g as u,k as d,n as t,a3 as c,dP as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-CmEjpYjv.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-g9N6aFLP.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CgVY-gTi.js";import"./useAccessRequirements-CKXYQBA8.js";import"./index-B-jXi1gZ.js";import"./_baseOrderBy-8phUcbsr.js";import"./_baseIteratee-CS8N1y30.js";import"./_baseMap-D09G1GiS.js";import"./_baseEach-vhChnq9U.js";import"./useInfiniteQuery-Dpi_kcjt.js";import"./groupBy-CZpxXjs5.js";import"./_createAggregator-rhot4_CT.js";import"./DialogBase-axU2QUsf.js";import"./Close-DrVlknUt.js";import"./HelpPopover-g9_OAG8r.js";import"./MarkdownPopover-C9iZcAOm.js";import"./LightTooltip-HedBxZph.js";import"./MarkdownSynapse--zkp7VAK.js";import"./SkeletonButton-DlNsrAb3.js";import"./SkeletonInlineBlock-CbyXGVtN.js";import"./SkeletonTable-Bui1t3TM.js";import"./SkeletonParagraph-CQ6ji8az.js";import"./EntityLink-CBU_wP-B.js";import"./useEntity-DiwKZDeA.js";import"./pickBy-C0wsAt-z.js";import"./isString-gqpjwSZg.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CDZ9GrJp.js";import"./useGetEntityHeaders-DflCMUS_.js";import"./EntityIcon-Ckwg1OH7.js";import"./ErrorChip-s3DgrnQw.js";import"./Chip-DSdtXjpn.js";import"./UserOrTeamBadge-DWFMprp_.js";import"./UserBadge-IXxI5MWL.js";import"./useUserBundle-BHQhULZq.js";import"./MenuItem-Se_d39CR.js";import"./Card-B7An1bxy.js";import"./TeamBadge-DjReZOmy.js";import"./UnmanagedACTAccessRequirementItem-bCVHFl-r.js";import"./RequirementItem-4EIqnp7T.js";import"./LockTwoTone-BidAjSDg.js";import"./UserSearchBoxV2-Dko3hWuE.js";import"./useDebouncedEffect-00Khpt0p.js";import"./use-deep-compare-effect.esm-C7DLUob9.js";import"./uniq-DyWyuFR0.js";import"./without--7B1cn3e.js";import"./Select-aab027f3.esm-CT2v7oQr.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-zF8bZj6Z.js";import"./SelfSignAccessRequirementItem-CxHtaUX5.js";import"./DataAccessRequestAccessorsFilesForm-DBDik30V.js";import"./enums-BUDyGjmu.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-C2woPmij.js";import"./RadioGroup-CFTJxuoo.js";import"./Radio-BYXopt_z.js";import"./SwitchBase-DeEYy5YV.js";import"./FormGroup-DN5QxJMD.js";import"./FormControlLabel-aij-wBjY.js";import"./UploadDocumentField-BplYWcQw.js";import"./FileUpload-B2gY4wLg.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BGbIUrq6.js";import"./GridLegacy-BC9kpOOy.js";import"./ResearchProjectForm-CkPER3PC.js";import"./TextFieldWithWordLimit-CLMrezYZ.js";import"./AuthenticatedRequirement-Bt4bKLVX.js";import"./CertificationRequirement-0HNPh89D.js";import"./TwoFactorAuthEnabledRequirement-BIG0LHYc.js";import"./ValidationRequirement-BpqtP2aA.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-suKjXu8e.js";import"./RejectDataAccessRequestModal-BMWjR7fY.js";import"./CannedRejectionDialog-B8TJZY9C.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CU57bm7H.js";import"./Checkbox-BUXb2CI0.js";import"./Grid-C1qJnQ7P.js";import"./upperFirst-BG1ATdnH.js";import"./_stringToArray-D72j06Md.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ze=["Demo","DemoError"];export{o as Demo,n as DemoError,Ze as __namedExportsOrder,Ve as default};
