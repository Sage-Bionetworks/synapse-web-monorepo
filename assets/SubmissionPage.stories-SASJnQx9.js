import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-AZFkaj29.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-Bcp8gn94.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-MU4gcW6P.js";import"./useAccessRequirements-CabBMSpH.js";import"./index-D-3YUotp.js";import"./_baseOrderBy-DxrqB1VL.js";import"./_baseIteratee-DXtS-ESO.js";import"./_baseMap-CoTbMhkx.js";import"./_baseEach-7Jf3BhmM.js";import"./useQueries-DAVMkUle.js";import"./useInfiniteQuery-BBaTsQSm.js";import"./groupBy-CmWgSbt8.js";import"./_createAggregator-D4uI8RV1.js";import"./DialogBase-B8NpJzbS.js";import"./Close-xaNb154N.js";import"./HelpPopover-PDjBv-ns.js";import"./MarkdownPopover-DeqK0fwY.js";import"./LightTooltip-Bbukg8CX.js";import"./MarkdownSynapse-DdUZXrJi.js";import"./SkeletonButton-oQJZ7ToR.js";import"./SkeletonInlineBlock-DtSMBTT9.js";import"./SkeletonTable-DQttbHFf.js";import"./SkeletonParagraph-Bf05FZ4M.js";import"./EntityLink-DUPWnI0-.js";import"./useEntity-CRct_y1I.js";import"./pickBy-DBC5Ou7j.js";import"./isString-BRS8MwW8.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DjNL6bRI.js";import"./useGetEntityHeaders-Cpjzy8Uc.js";import"./EntityIcon-4x7THBXE.js";import"./ErrorChip-DQOYdOyt.js";import"./Chip-TJPVsrF2.js";import"./UserOrTeamBadge-CHOIc17M.js";import"./UserBadge-BvUmBnhC.js";import"./MenuItem-BsTRry6Y.js";import"./Card-MFQbB8v8.js";import"./TeamBadge-RzlSEqwX.js";import"./UnmanagedACTAccessRequirementItem-733ChoYb.js";import"./RequirementItem-B6JToUS_.js";import"./LockTwoTone-BhuH3OOZ.js";import"./UserSearchBoxV2-CVAWZDGn.js";import"./useDebouncedEffect-Crl2Qy_8.js";import"./use-deep-compare-effect.esm-CkjIpb9c.js";import"./uniq-DPD25Rk_.js";import"./without-BTlwPQAz.js";import"./Select-aab027f3.esm-CZs-_fOu.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-pXid1azL.js";import"./SelfSignAccessRequirementItem-DuWT25j_.js";import"./DataAccessRequestAccessorsFilesForm-BmIOngT_.js";import"./enums-s92RVAZY.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-B_1rtvj8.js";import"./RadioGroup-B0Rvo4Wj.js";import"./Radio-CCJNRm9V.js";import"./SwitchBase-BUhbphe5.js";import"./FormGroup-C7RsE6KK.js";import"./FormControlLabel-jUWSiJCh.js";import"./UploadDocumentField-DWEZgPSo.js";import"./FileUpload-BsnzR9O7.js";import"./ManagedACTAccessRequirementFormWikiWrapper-C7epoH73.js";import"./GridLegacy-a_OXwgK1.js";import"./ResearchProjectForm-Dtiw9eVh.js";import"./TextFieldWithWordLimit-DrnGrq13.js";import"./AuthenticatedRequirement-BJBXn3hc.js";import"./CertificationRequirement-DP0CRBBb.js";import"./TwoFactorAuthEnabledRequirement-DR-hqz6G.js";import"./ValidationRequirement-DoORVAEg.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-CwDZUhQW.js";import"./RejectDataAccessRequestModal-BBhzrmkP.js";import"./CannedRejectionDialog-BZrS8eIL.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-Ow6R4RYA.js";import"./Checkbox-B90CJICb.js";import"./Grid-xwi4Yp31.js";import"./upperFirst-Bfs2qCuI.js";import"./_stringToArray-DGqZfi6d.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
