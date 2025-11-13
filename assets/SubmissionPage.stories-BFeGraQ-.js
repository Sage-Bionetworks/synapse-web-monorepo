import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-CT7eET3u.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-CYVv6y51.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-itPc7fh0.js";import"./useAccessRequirements-Uep3J-L6.js";import"./index-CxiZHnbx.js";import"./_baseOrderBy-CH7fi9tw.js";import"./_baseIteratee-ffgb1Zes.js";import"./_baseMap-C0MUtlUP.js";import"./_baseEach-CcC5Gm9h.js";import"./useQueries-B6_rUTvG.js";import"./useInfiniteQuery-DEhw14be.js";import"./groupBy-BML3i0Qy.js";import"./_createAggregator-CjeY3k_c.js";import"./DialogBase-D8t4wmJE.js";import"./Close-Cz5MAPpl.js";import"./HelpPopover-CruENG9c.js";import"./MarkdownPopover-CpIL_lOT.js";import"./LightTooltip-BTs5YWNB.js";import"./MarkdownSynapse-ChtEi03w.js";import"./SkeletonButton-6cvgvJnT.js";import"./SkeletonInlineBlock-C4Hah5J1.js";import"./SkeletonTable-C5avUwyT.js";import"./SkeletonParagraph-CvhM2TYd.js";import"./EntityLink-DKMFomDl.js";import"./useEntity-DQuCdyPI.js";import"./pickBy-vjMi-KAe.js";import"./isString-DwEkDfRe.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DFrie1fk.js";import"./useGetEntityHeaders-CqFPD_G8.js";import"./EntityIcon-BJizLBJW.js";import"./ErrorChip-Hsd91Jq0.js";import"./Chip-B95kICDp.js";import"./UserOrTeamBadge-CU_kIytG.js";import"./UserBadge-CJ5OnICi.js";import"./MenuItem-BBM99tSl.js";import"./Card-C0dloBlr.js";import"./TeamBadge-mogiMK_B.js";import"./UnmanagedACTAccessRequirementItem-CDflYX1j.js";import"./RequirementItem-B4LzerLw.js";import"./LockTwoTone-Byx4haM8.js";import"./UserSearchBoxV2-3xJFBw9W.js";import"./useDebouncedEffect-B4cXpRE-.js";import"./use-deep-compare-effect.esm-aMG5GiA7.js";import"./uniq-CF5EZ_9u.js";import"./without-Da2Q3Kmq.js";import"./Select-aab027f3.esm-BT27ALUW.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-TlV_XZ1J.js";import"./SelfSignAccessRequirementItem-CeNf99Zl.js";import"./DataAccessRequestAccessorsFilesForm-DkidmWuP.js";import"./enums-DMquiZ9S.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-6DqoJBfC.js";import"./RadioGroup-DjjCV7w8.js";import"./Radio-CQud_s7r.js";import"./SwitchBase-BJRjJiBa.js";import"./FormGroup-B_y5cPUd.js";import"./FormControlLabel-DV4h3wNf.js";import"./UploadDocumentField-ClQ-z7XB.js";import"./FileUpload-C6oEqk4x.js";import"./ManagedACTAccessRequirementFormWikiWrapper-C5D9b_dv.js";import"./GridLegacy-CNsSTV_o.js";import"./ResearchProjectForm-DL9TwdkI.js";import"./TextFieldWithWordLimit-CekVN37y.js";import"./AuthenticatedRequirement-BOQ6-pgq.js";import"./CertificationRequirement-d8-iHy4Q.js";import"./TwoFactorAuthEnabledRequirement-BpLoRzkx.js";import"./ValidationRequirement-DbiWf24_.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-BavnrgPK.js";import"./RejectDataAccessRequestModal-CrWBaSrO.js";import"./CannedRejectionDialog-DLSOT8xz.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-DUrsRsl-.js";import"./Checkbox-DStSliuO.js";import"./Grid-Dxu_nuBK.js";import"./upperFirst-DGjwaNMC.js";import"./_stringToArray-CNPwgP2B.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
