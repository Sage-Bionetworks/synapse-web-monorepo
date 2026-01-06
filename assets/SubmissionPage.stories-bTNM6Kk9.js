import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kr as i,ks as C,H as s,kt as l,p as m,ku as b,kv as T,ka as A}from"./iframe-WWZqBZnn.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-B_YogbdB.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-BQQ68D9X.js";import"./useAccessRequirements-D4By2QuJ.js";import"./index-BIyHuP4w.js";import"./_baseOrderBy-CbBb5esc.js";import"./_baseIteratee-D_0Rph_r.js";import"./_baseMap-DyQ1aIXV.js";import"./_baseEach-DvB8TnZW.js";import"./useQueries-CE3PXJwM.js";import"./useInfiniteQuery-B4gaib9_.js";import"./groupBy-piz9h_xI.js";import"./_createAggregator-CVEJ8I8B.js";import"./DialogBase-8qbfQF_w.js";import"./Close-CZXopQFS.js";import"./HelpPopover-C-TZQPZy.js";import"./MarkdownPopover-DGnHKgxw.js";import"./LightTooltip-VG5tjvb2.js";import"./MarkdownSynapse-CXeQLUv7.js";import"./SkeletonButton-Ce9jKFb5.js";import"./SkeletonInlineBlock-DLew4KjD.js";import"./SkeletonTable-DehOuMuf.js";import"./SkeletonParagraph-CCoh0O-o.js";import"./EntityLink-Bxm3lzBF.js";import"./useEntity-DpT1QpLL.js";import"./pickBy-C2AEEbx-.js";import"./isString-DSQpjcex.js";import"./useSuspenseQuery-CMdkSjee.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-6VBJ-KlW.js";import"./useGetEntityHeaders-WhngcSbg.js";import"./EntityIcon-Dj54AT2c.js";import"./ErrorChip-Ctm5PMB1.js";import"./Chip-C9TzerSA.js";import"./UserOrTeamBadge-G6uvvC2a.js";import"./UserBadge-fIZd8_6K.js";import"./useUserBundle-CeTwuNqf.js";import"./MenuItem-c2wV_LaG.js";import"./Card-BI5qFzZ-.js";import"./TeamBadge-Cmu2yu0l.js";import"./UnmanagedACTAccessRequirementItem-CE56GMQx.js";import"./RequirementItem-CUeYkYY0.js";import"./LockTwoTone-iwfEfu5A.js";import"./UserSearchBoxV2-DjdKitYg.js";import"./useDebouncedEffect-0mnlikOf.js";import"./use-deep-compare-effect.esm-C_4QtXFm.js";import"./uniq-BDsfPFP2.js";import"./without-cFH1pq6w.js";import"./Select-aab027f3.esm-BNPS5QXS.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-BRiY7zDh.js";import"./SelfSignAccessRequirementItem-L5xyudYt.js";import"./DataAccessRequestAccessorsFilesForm-CwkLYB9R.js";import"./enums-D770OPnx.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-C65S0Dz0.js";import"./RadioGroup-BfDu-6Yp.js";import"./Radio-BLU15orx.js";import"./SwitchBase-CK146F_7.js";import"./FormGroup-dy5nFBGW.js";import"./FormControlLabel-DW5NMbUe.js";import"./UploadDocumentField-Cor1mnfb.js";import"./FileUpload-Bp3PB11I.js";import"./ManagedACTAccessRequirementFormWikiWrapper-D8qGaqEc.js";import"./GridLegacy-GOQOQRM9.js";import"./ResearchProjectForm-Cs8PypzB.js";import"./TextFieldWithWordLimit-KHYr7DUH.js";import"./AuthenticatedRequirement-xDIPzlmA.js";import"./CertificationRequirement-hWwcj0T5.js";import"./TwoFactorAuthEnabledRequirement-BCNxgzv5.js";import"./ValidationRequirement-BA7tutgl.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-BHjWbkVf.js";import"./RejectDataAccessRequestModal-gSXvhcn2.js";import"./CannedRejectionDialog-B9Ej5tkq.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-C4iRBvHc.js";import"./Checkbox-mjCiJNNh.js";import"./Grid-D_-lTr5w.js";import"./upperFirst-bGFJ9d7n.js";import"./_stringToArray-BQx0w_85.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const or=["Demo","DemoError"];export{o as Demo,n as DemoError,or as __namedExportsOrder,sr as default};
