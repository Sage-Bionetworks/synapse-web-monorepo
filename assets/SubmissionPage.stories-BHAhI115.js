import{g as u,k as d,n as t,a3 as c,dP as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-DJOT8ubk.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-eqfeMYWk.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-IV6GcnaS.js";import"./useAccessRequirements-CkBXklLr.js";import"./index-C3UiH5jH.js";import"./_baseOrderBy-LZ7a3IHt.js";import"./_baseIteratee-CSLaR471.js";import"./_baseMap-ffY1WrHn.js";import"./_baseEach-C7K8H9C3.js";import"./useInfiniteQuery-D5oLhJn7.js";import"./groupBy-BJjNSKMA.js";import"./_createAggregator-DcgKR7Gh.js";import"./DialogBase-C-V5Cw2E.js";import"./Close-DdNyWCxq.js";import"./HelpPopover-Ce02sqI5.js";import"./MarkdownPopover-DiesQhNw.js";import"./LightTooltip-C1GNiWuq.js";import"./MarkdownSynapse-BCTt75oT.js";import"./SkeletonButton-AJ5Zwmr0.js";import"./SkeletonInlineBlock-x0qIf0wc.js";import"./SkeletonTable-DlP5X3HC.js";import"./SkeletonParagraph-COpY1z9l.js";import"./EntityLink-DlOtW-P-.js";import"./useEntity-BYI2LyM0.js";import"./pickBy-Bw8c6iXR.js";import"./isString-V0uzYRo2.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B5pDt8NK.js";import"./useGetEntityHeaders-CFfKipEz.js";import"./EntityIcon-DhOZdSSO.js";import"./ErrorChip-UMU-Pugv.js";import"./Chip-OZ5AEEU1.js";import"./UserOrTeamBadge-Fg1g__9l.js";import"./UserBadge-BlJ5RAMM.js";import"./useUserBundle-B3bDvO5I.js";import"./MenuItem-D1_UwcJ_.js";import"./Card-CGE0J5vP.js";import"./TeamBadge-CY2y4Z_w.js";import"./UnmanagedACTAccessRequirementItem-Ds4urHb7.js";import"./RequirementItem-CAptjQwK.js";import"./LockTwoTone-BgOgHZvN.js";import"./UserSearchBoxV2-BVQeXXNu.js";import"./useDebouncedEffect-CPUN2jgM.js";import"./use-deep-compare-effect.esm-CUhLaRS3.js";import"./uniq-zh-G_n8z.js";import"./without-C6w_ww88.js";import"./Select-aab027f3.esm-CZLoHAX2.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CvsGKpXo.js";import"./SelfSignAccessRequirementItem-DQJwttUN.js";import"./DataAccessRequestAccessorsFilesForm-CINiTrFN.js";import"./enums-BrRBD9tt.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-Bu5QACJx.js";import"./RadioGroup-53pTIizH.js";import"./Radio--EuSn90K.js";import"./SwitchBase-Dh2EEgQv.js";import"./FormGroup-C-zR252h.js";import"./FormControlLabel--J53tQKK.js";import"./UploadDocumentField-4TMhPM9B.js";import"./FileUpload-CjRJyYGc.js";import"./ManagedACTAccessRequirementFormWikiWrapper-fYI7D2ph.js";import"./GridLegacy-B9UQub11.js";import"./ResearchProjectForm-BjX9Q2HS.js";import"./TextFieldWithWordLimit-DRbkpS0z.js";import"./AuthenticatedRequirement-sX7o5SC3.js";import"./CertificationRequirement-CL_-22t5.js";import"./TwoFactorAuthEnabledRequirement-DNrcN1Dh.js";import"./ValidationRequirement-Cl5ny7Xu.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CQ89WCtU.js";import"./RejectDataAccessRequestModal-Bdjf-IzQ.js";import"./CannedRejectionDialog-CXwEUght.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-D-4hDJN8.js";import"./Checkbox-DIxTHw96.js";import"./Grid-CIa2Y_N7.js";import"./upperFirst-CpaaBeiL.js";import"./_stringToArray-DZjMAZPh.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
