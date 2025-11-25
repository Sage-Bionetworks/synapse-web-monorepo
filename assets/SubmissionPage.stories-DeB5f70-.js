import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,ku as i,kv as C,H as s,kw as l,p as m,kx as b,ky as T,k9 as A}from"./iframe-BwBHmtLn.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-BHUqx2DZ.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-C0CjrOpZ.js";import"./useAccessRequirements-sZxI1kmT.js";import"./index-Cofbk_Be.js";import"./_baseOrderBy-CzNvCpJu.js";import"./_baseIteratee-DYrIx3nY.js";import"./_baseMap-7X1852e3.js";import"./_baseEach-BeAKbU8I.js";import"./useQueries-D_h17kYr.js";import"./useInfiniteQuery-CJ62jRAa.js";import"./groupBy-Cz7MFjdZ.js";import"./_createAggregator-D1MfdguL.js";import"./DialogBase-CGGylDq4.js";import"./Close-BfixGz6h.js";import"./HelpPopover-CaVwFHNp.js";import"./MarkdownPopover-BoTNWuCk.js";import"./LightTooltip-B1vNEQPg.js";import"./MarkdownSynapse-C2XjXP5O.js";import"./SkeletonButton-BTCaeByw.js";import"./SkeletonInlineBlock-ZHAchM_I.js";import"./SkeletonTable-CwWx9Hg9.js";import"./SkeletonParagraph-CvcuNn1V.js";import"./EntityLink-BdJySybs.js";import"./useEntity-VdSX6HFa.js";import"./pickBy-SGpUKNIm.js";import"./isString-Ru5-ZTb-.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C9ptpfuq.js";import"./useGetEntityHeaders-DQ3etYTX.js";import"./EntityIcon-DhxLhv-Y.js";import"./ErrorChip-k4DwOhKb.js";import"./Chip-DeqIQwfV.js";import"./UserOrTeamBadge-DZFiBwXk.js";import"./UserBadge-BD5Fxkmm.js";import"./MenuItem-CkdRDM7m.js";import"./Card-CWfuhv8s.js";import"./TeamBadge-BVqTdxjR.js";import"./UnmanagedACTAccessRequirementItem-BwNv501J.js";import"./RequirementItem-IIFqdnMR.js";import"./LockTwoTone-CcQFWYdc.js";import"./UserSearchBoxV2-DaWL0FRE.js";import"./useDebouncedEffect-DpMVCPWi.js";import"./use-deep-compare-effect.esm-B5pmyylT.js";import"./uniq-VDdpS32t.js";import"./without-DVxAInET.js";import"./Select-aab027f3.esm-DjpxoWsa.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-DsQe3Xis.js";import"./SelfSignAccessRequirementItem-B3iUPqXG.js";import"./DataAccessRequestAccessorsFilesForm-BNd1CcG-.js";import"./enums-DXQ7RhWZ.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-CP8OdJfk.js";import"./RadioGroup-D7fI1WM6.js";import"./Radio-C_tCGuqd.js";import"./SwitchBase-DfrfkHUB.js";import"./FormGroup-Cc2TMiO2.js";import"./FormControlLabel-Bd9SHTvK.js";import"./UploadDocumentField-Da-wqJct.js";import"./FileUpload-ClP235nZ.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BPeuQlX4.js";import"./GridLegacy-DBp44r90.js";import"./ResearchProjectForm-huWh3K--.js";import"./TextFieldWithWordLimit-BS1vrOTk.js";import"./AuthenticatedRequirement-DVvdSF_j.js";import"./CertificationRequirement--6ynu-U4.js";import"./TwoFactorAuthEnabledRequirement-CF34WKPx.js";import"./ValidationRequirement-BoxjEALL.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-CjGnbD8q.js";import"./RejectDataAccessRequestModal-Drf7OC1t.js";import"./CannedRejectionDialog-Q5Mw3cuH.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-LuKTcSOQ.js";import"./Checkbox-CrrPL_ha.js";import"./Grid-DVF-F4ru.js";import"./upperFirst-DdcNGQqu.js";import"./_stringToArray-U0f9qiZE.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
