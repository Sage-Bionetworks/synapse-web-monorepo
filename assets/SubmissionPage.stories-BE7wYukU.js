import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-C0_MGelw.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-BoEr_PTg.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-B4zrdfwX.js";import"./useAccessRequirements-DUOt5YsA.js";import"./index-B6X4B_B8.js";import"./_baseOrderBy-QzxGE8cT.js";import"./_baseIteratee-DJkPjYy-.js";import"./_baseMap-BujdLhHW.js";import"./_baseEach-C-Rt3ZUt.js";import"./useQueries-D7fqOE-j.js";import"./useInfiniteQuery-G1IM-AGg.js";import"./groupBy--bTifnbv.js";import"./_createAggregator-D_0udUXj.js";import"./DialogBase-DRZu8qiJ.js";import"./Close-Br2x6lcO.js";import"./HelpPopover-CgR11bAO.js";import"./MarkdownPopover-Bfocou5T.js";import"./LightTooltip-I4_xvDt3.js";import"./MarkdownSynapse-BNFairzk.js";import"./SkeletonButton-DjhR7sxh.js";import"./SkeletonInlineBlock-yTERZu3L.js";import"./SkeletonTable-DS1wvkaV.js";import"./SkeletonParagraph-BpdEaVGd.js";import"./EntityLink-DeEQruDz.js";import"./useEntity-CYnvRdHh.js";import"./pickBy-B-SyVJH7.js";import"./isString-BSZ9d8-t.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-hXwl9wND.js";import"./useGetEntityHeaders-CpRcVPb7.js";import"./EntityIcon-Clv0vbys.js";import"./ErrorChip-Cjp1Ybe8.js";import"./Chip-DoXtLwjl.js";import"./UserOrTeamBadge-BrKK8C6f.js";import"./UserBadge-Bzjens13.js";import"./MenuItem-VpU5uB21.js";import"./Card-CXieohvt.js";import"./TeamBadge-vCle8XDk.js";import"./UnmanagedACTAccessRequirementItem-BZwgIvyB.js";import"./RequirementItem-BV9e5nc4.js";import"./LockTwoTone-BsRv4aM0.js";import"./UserSearchBoxV2-BKIUBB2r.js";import"./useDebouncedEffect-DKIHIScD.js";import"./use-deep-compare-effect.esm-D2R_anRu.js";import"./uniq-Bja6NdAf.js";import"./without-BQkaKeqd.js";import"./Select-aab027f3.esm-B1_qkWL_.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-Dbhhqa_N.js";import"./SelfSignAccessRequirementItem-ZEl9NCg9.js";import"./DataAccessRequestAccessorsFilesForm-oLZXm9dh.js";import"./enums-CwhHpyW2.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-DD4-yAHh.js";import"./RadioGroup-CVH0rMxP.js";import"./Radio-tyCeAlub.js";import"./SwitchBase-BZXMhFqc.js";import"./FormGroup-BO5AsbJb.js";import"./FormControlLabel-CGDmQ30x.js";import"./UploadDocumentField-DHUWquog.js";import"./FileUpload-Ybxddw0P.js";import"./ManagedACTAccessRequirementFormWikiWrapper-D3oBvdvK.js";import"./GridLegacy-LLN4p7vN.js";import"./ResearchProjectForm-CtgUH7Jz.js";import"./TextFieldWithWordLimit-28JQXRM2.js";import"./AuthenticatedRequirement-CX0RHt-H.js";import"./CertificationRequirement-MAO_xgmh.js";import"./TwoFactorAuthEnabledRequirement-DtIfj6bi.js";import"./ValidationRequirement-m8Bw2L_D.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-jZFABU1M.js";import"./RejectDataAccessRequestModal-DkNvyvYR.js";import"./CannedRejectionDialog-DcQK_egP.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-BcmQv4r_.js";import"./Checkbox-AKt-q5ZS.js";import"./Grid-Psj3QFGi.js";import"./upperFirst-bQGVvBli.js";import"./_stringToArray-CEZelaU0.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
