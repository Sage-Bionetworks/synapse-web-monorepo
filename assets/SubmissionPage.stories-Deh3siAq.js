import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-BywOI08r.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-DPgXkKW5.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-CTjj9lsP.js";import"./useAccessRequirements-zyMXiiRq.js";import"./index-QM9LZyQP.js";import"./_baseOrderBy-CaAXL3_5.js";import"./_baseIteratee-CG7m2_nN.js";import"./_baseMap-B6BQt2tR.js";import"./_baseEach-DCgtmAmK.js";import"./useQueries-BxDWj3rf.js";import"./useInfiniteQuery-Dss3vF7E.js";import"./groupBy-BtwKUqwh.js";import"./_createAggregator-DiD02I22.js";import"./DialogBase-CbJF6I2m.js";import"./Close-BG6jx9bS.js";import"./HelpPopover-X0uCoa3H.js";import"./MarkdownPopover-BG7aRo-S.js";import"./LightTooltip-DDHrckEI.js";import"./MarkdownSynapse-cRxt--Kk.js";import"./SkeletonButton-DzQUVwf8.js";import"./SkeletonInlineBlock-rzWwNvZc.js";import"./SkeletonTable-BGMevUuy.js";import"./SkeletonParagraph-CUhIHN6z.js";import"./EntityLink-C0zGGdYh.js";import"./useEntity-DQW8NLUe.js";import"./pickBy-BwWClnLo.js";import"./isString-CskpBJHJ.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DUEyhzBc.js";import"./useGetEntityHeaders-CV-GV_Bt.js";import"./EntityIcon-C0OfsIbA.js";import"./ErrorChip-BRnYcPX1.js";import"./Chip-COCF_Cxb.js";import"./UserOrTeamBadge-Bro5Fk2u.js";import"./UserBadge-jcIe0Qnh.js";import"./MenuItem-CEHSf-MP.js";import"./Card-Bmrw94GQ.js";import"./TeamBadge-D2Yal8eO.js";import"./UnmanagedACTAccessRequirementItem-CdXk1xf9.js";import"./RequirementItem-DmpdYrwn.js";import"./LockTwoTone-BTzd_WMm.js";import"./UserSearchBoxV2-pzNiuZXT.js";import"./useDebouncedEffect-DQbCNaKy.js";import"./use-deep-compare-effect.esm-DK5vUDP0.js";import"./uniq-s8JIJxjh.js";import"./without-Cj_Q8CQk.js";import"./Select-aab027f3.esm-Csyqi_PL.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-BKPui0ix.js";import"./SelfSignAccessRequirementItem-D8s1tDsV.js";import"./DataAccessRequestAccessorsFilesForm-zVhV34N6.js";import"./enums-DyIzaQA_.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-DC6pmltX.js";import"./RadioGroup-C6TBM8Qd.js";import"./Radio-CjgtPQOe.js";import"./SwitchBase-Cso67LU1.js";import"./FormGroup-B2u8ghP9.js";import"./FormControlLabel-Dk794jSl.js";import"./UploadDocumentField-CPoDuRR9.js";import"./FileUpload-hQLwYRsR.js";import"./ManagedACTAccessRequirementFormWikiWrapper-C9P8MUGP.js";import"./GridLegacy-jihbntMO.js";import"./ResearchProjectForm-DcgwC6ln.js";import"./TextFieldWithWordLimit-C_lpv4Eg.js";import"./AuthenticatedRequirement-C92Z5qzm.js";import"./CertificationRequirement-o9c37eDC.js";import"./TwoFactorAuthEnabledRequirement-DccL-LKb.js";import"./ValidationRequirement-yoyn9R14.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-DRXz_giB.js";import"./RejectDataAccessRequestModal-DnWEogWb.js";import"./CannedRejectionDialog-VDvNjElz.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-CHRrIZxL.js";import"./Checkbox-C1Xiwym6.js";import"./Grid-DzEpKiGD.js";import"./upperFirst-NaY2zMIX.js";import"./_stringToArray-3lCe6BgK.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
