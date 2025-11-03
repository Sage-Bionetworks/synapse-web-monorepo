import{g as I,k as S,n as t,a2 as O,an as g,b as e,kr as i,ks as C,H as s,kt as l,p as m,ku as b,kv as T,k6 as A}from"./iframe-DM9RvezN.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-ChxHs6JX.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-D-loDbm4.js";import"./useAccessRequirements-QA-mh8CY.js";import"./index-DqaILKWS.js";import"./_baseOrderBy-BSC5UCJE.js";import"./_baseIteratee-CfALVA7h.js";import"./_baseMap-BRcISebz.js";import"./_baseEach-WoBkeBru.js";import"./useQueries-D5jfDvvs.js";import"./useInfiniteQuery-oJo5Itzj.js";import"./groupBy-CcJ55tZI.js";import"./_createAggregator-C0nJsudu.js";import"./DialogBase-BAhxc9kZ.js";import"./Close-CuPbI5yA.js";import"./HelpPopover-C6nQ_3VR.js";import"./MarkdownPopover-DBancuF8.js";import"./LightTooltip-ywjxPoX5.js";import"./MarkdownSynapse-CE6jraB4.js";import"./SkeletonButton-GB1PBqFT.js";import"./SkeletonInlineBlock-74TZwrl_.js";import"./SkeletonTable-DWBPPyUA.js";import"./SkeletonParagraph-BhCOGAD2.js";import"./EntityLink-5O8zbe7c.js";import"./useEntity-CQ_6J706.js";import"./pickBy-CzgdmDXX.js";import"./isString-B7z9WPmM.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-wTjxeNml.js";import"./useGetEntityHeaders-CC1lRo7T.js";import"./EntityIcon-mN1fQk1g.js";import"./ErrorChip-_ImmnB3W.js";import"./Chip-BTSRizg_.js";import"./UserOrTeamBadge-Dt5Cx64f.js";import"./UserBadge-kFRXYAH-.js";import"./MenuItem-Dpv8sefJ.js";import"./Card-0KjgSdyq.js";import"./TeamBadge-gctku4Yb.js";import"./UnmanagedACTAccessRequirementItem-Blzh4zBq.js";import"./RequirementItem-DyiAQGWc.js";import"./LockTwoTone-BXcqAuiC.js";import"./UserSearchBoxV2-DHSCkGf7.js";import"./useDebouncedEffect-CVV5Jjx5.js";import"./use-deep-compare-effect.esm-NDyiIymG.js";import"./uniq-BHDCqrrO.js";import"./without-CHQWntd5.js";import"./Select-aab027f3.esm-CQOn5Wp8.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-pMrMI5g8.js";import"./SelfSignAccessRequirementItem-CP-aqzik.js";import"./DataAccessRequestAccessorsFilesForm-TVPL4YOd.js";import"./enums-vrG7QcTp.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-4JJAL2ae.js";import"./RadioGroup-DDetk882.js";import"./Radio-CBdJ5l-R.js";import"./SwitchBase-BXwGyhZC.js";import"./FormGroup-__m7BWoz.js";import"./FormControlLabel-L12ye2gQ.js";import"./UploadDocumentField-CQ8B44yH.js";import"./FileUpload-CJJ7O8N6.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BxRpIja2.js";import"./GridLegacy-B6QrttZ5.js";import"./ResearchProjectForm-CHmYspc1.js";import"./TextFieldWithWordLimit-Bmq4xP2V.js";import"./AuthenticatedRequirement-B5sqFIrM.js";import"./CertificationRequirement-BKxf_IEu.js";import"./TwoFactorAuthEnabledRequirement-DdQvi3-O.js";import"./ValidationRequirement-CPeHYn1S.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-BI00TTDX.js";import"./RejectDataAccessRequestModal-BjaA1EHd.js";import"./CannedRejectionDialog-CsjFnjUj.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-Dl-jK7QM.js";import"./Checkbox-DKPhV2ji.js";import"./Grid-BjH0Dgb5.js";import"./upperFirst-BB8P_nCb.js";import"./_stringToArray-1IGuXaht.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
