import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-DuUClhsc.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-9JEg_xjL.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-CtOvnduS.js";import"./useAccessRequirements-CixKZePK.js";import"./index-DotbbxLs.js";import"./_baseOrderBy-D4lrjUmZ.js";import"./_baseIteratee-BmViwUWH.js";import"./_baseMap-kYERsGcq.js";import"./_baseEach-YhHACzfI.js";import"./useQueries-C-pf41ja.js";import"./useInfiniteQuery-DgaFpXmy.js";import"./groupBy-C0-sgFIh.js";import"./_createAggregator-BML2rPiz.js";import"./DialogBase-B58YmIqt.js";import"./Close-aSlNjt7A.js";import"./HelpPopover-B3FfhNks.js";import"./MarkdownPopover-B9Dcg-Cp.js";import"./LightTooltip-CtjaIoZW.js";import"./MarkdownSynapse-DaOcOh9V.js";import"./SkeletonButton-BSbzluwJ.js";import"./SkeletonInlineBlock-CoFc0Z1u.js";import"./SkeletonTable-BqjyM-uC.js";import"./SkeletonParagraph-DI40A60T.js";import"./EntityLink-CdtAVP-n.js";import"./useEntity-DKAM6L6-.js";import"./pickBy-CNJKHgGV.js";import"./isString-cuuc2ObN.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-uakqbPTl.js";import"./useGetEntityHeaders-DkKHY6Uk.js";import"./EntityIcon-D5S5pctT.js";import"./ErrorChip-D_mwStiu.js";import"./Chip-Do2OA_d6.js";import"./UserOrTeamBadge-CUmuBjV7.js";import"./UserBadge-baN644tt.js";import"./MenuItem-C7oiRjhq.js";import"./Card-Ddn9liVM.js";import"./TeamBadge-L0_2BKY2.js";import"./UnmanagedACTAccessRequirementItem-Bqy5XrqY.js";import"./RequirementItem-nvsh_D0J.js";import"./LockTwoTone-BL7moO6T.js";import"./UserSearchBoxV2-SaDfO-yB.js";import"./useDebouncedEffect-DWmIlCL0.js";import"./use-deep-compare-effect.esm-BM8f3GDg.js";import"./uniq-B1GWRU5W.js";import"./without-OxYRp9qC.js";import"./Select-aab027f3.esm-Cqj54wzR.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-DjasbiZR.js";import"./SelfSignAccessRequirementItem-Bp2dnbu2.js";import"./DataAccessRequestAccessorsFilesForm-BCIseZLT.js";import"./enums-DvTHqhZR.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-CkWaFVpN.js";import"./RadioGroup-BAsekg_r.js";import"./Radio-SZJdN6kH.js";import"./SwitchBase-BOfXjZge.js";import"./FormGroup-BPIE_qNU.js";import"./FormControlLabel-C7G2CdsS.js";import"./UploadDocumentField-CT4eXQny.js";import"./FileUpload-wOxlmTRg.js";import"./ManagedACTAccessRequirementFormWikiWrapper-EVFvfiLn.js";import"./GridLegacy-Dl6DQP-z.js";import"./ResearchProjectForm-DkN_A06M.js";import"./TextFieldWithWordLimit-DChWPgZb.js";import"./AuthenticatedRequirement-DzGIaTve.js";import"./CertificationRequirement-DSK2gVGY.js";import"./TwoFactorAuthEnabledRequirement-BEWmO5Bx.js";import"./ValidationRequirement-B_bUr2PZ.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-D_rVYEIT.js";import"./RejectDataAccessRequestModal-Hsv_9RpV.js";import"./CannedRejectionDialog-D8J6TkC4.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-B9wYVq7g.js";import"./Checkbox-CZIACxG4.js";import"./Grid-B7vi2X7i.js";import"./upperFirst-CnjI9cJZ.js";import"./_stringToArray-BkQXQVZ5.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,c,R;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const sr=["Demo","DemoError"];export{o as Demo,n as DemoError,sr as __namedExportsOrder,tr as default};
