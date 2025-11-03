import{g as I,k as S,n as t,a2 as O,an as g,b as e,kr as i,ks as C,H as s,kt as l,p as m,ku as b,kv as T,k6 as A}from"./iframe-DgbfDeQR.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-D9LBZQRS.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-Bfyv6msW.js";import"./useAccessRequirements-1IyDJ5cP.js";import"./index-C0b8tnCj.js";import"./_baseOrderBy-RZrmjB55.js";import"./_baseIteratee-CiKc5xq1.js";import"./_baseMap-tCchEm93.js";import"./_baseEach-CZe3OfT0.js";import"./useQueries-6GpUHBte.js";import"./useInfiniteQuery-DkLtRlOU.js";import"./groupBy-Bzcf6mPJ.js";import"./_createAggregator-DMjmMIaO.js";import"./DialogBase-Bdu7Jetf.js";import"./Close-Uo8JW1Td.js";import"./HelpPopover-BOrP1Anu.js";import"./MarkdownPopover-BDg3J_sQ.js";import"./LightTooltip-B-8YX4RQ.js";import"./MarkdownSynapse-D4qxv4i6.js";import"./SkeletonButton-C3Hqevp6.js";import"./SkeletonInlineBlock-D8vr7qjb.js";import"./SkeletonTable-CkIMw70Y.js";import"./SkeletonParagraph-BtYiDY2A.js";import"./EntityLink-DYD5bbJ6.js";import"./useEntity-BDtI3FCk.js";import"./pickBy-DN8TTyGb.js";import"./isString-BRpTpojV.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B6xeIF8B.js";import"./useGetEntityHeaders-CV6_1T8e.js";import"./EntityIcon-qEoHrTvK.js";import"./ErrorChip-419CBIS_.js";import"./Chip-D6WFZ5Ud.js";import"./UserOrTeamBadge-Cpoj1OFk.js";import"./UserBadge-DT_nDzPV.js";import"./MenuItem-kceyAJzH.js";import"./Card-Bp2w-evW.js";import"./TeamBadge-DyhX9H1C.js";import"./UnmanagedACTAccessRequirementItem-Be-JrbgN.js";import"./RequirementItem-Dj1d8sPz.js";import"./LockTwoTone-Dj87rfpn.js";import"./UserSearchBoxV2-BWcTzsUN.js";import"./useDebouncedEffect-CRy786Xe.js";import"./use-deep-compare-effect.esm-F2bg4WO3.js";import"./uniq-DyLAuFmz.js";import"./without-JPuxayTA.js";import"./Select-aab027f3.esm-AqtnRGFa.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-Dd4gRSPY.js";import"./SelfSignAccessRequirementItem-Bykz0ftj.js";import"./DataAccessRequestAccessorsFilesForm-BFQaAhZt.js";import"./enums-B3QPmf_4.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-C79odLf9.js";import"./RadioGroup-COWqseGR.js";import"./Radio-Bwb-mwNk.js";import"./SwitchBase-C__WXogo.js";import"./FormGroup-CTLQURiO.js";import"./FormControlLabel-PWC_65OH.js";import"./UploadDocumentField-_gq_Ia16.js";import"./FileUpload-CN6zVHMf.js";import"./ManagedACTAccessRequirementFormWikiWrapper-H-WRi-vx.js";import"./GridLegacy-D8nCMwDY.js";import"./ResearchProjectForm-DI7Z0hnC.js";import"./TextFieldWithWordLimit-xpYiMsO5.js";import"./AuthenticatedRequirement-BjF8UtFq.js";import"./CertificationRequirement-BrSKGQm3.js";import"./TwoFactorAuthEnabledRequirement-CpdN_u1A.js";import"./ValidationRequirement-bp-3Z9Dn.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-BrDlcCxz.js";import"./RejectDataAccessRequestModal-DTVIRUrT.js";import"./CannedRejectionDialog-Cb2ifhbc.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-BKHZua3P.js";import"./Checkbox-4zE_Iu-t.js";import"./Grid-D-TUMcKD.js";import"./upperFirst-BcZLl4Ei.js";import"./_stringToArray-B-aXc_yl.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
