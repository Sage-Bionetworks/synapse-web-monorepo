import{g as d,k as u,n as t,a3 as c,dN as R,b as e,kn as i,ko as E,H as s,kp as _,p as m,kq as I,kr as S,k6 as O}from"./iframe-qVlGQSuu.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-B150AWC6.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BkKzGH4D.js";import"./useAccessRequirements-SzvQJuLz.js";import"./index-Be9oNlvR.js";import"./_baseOrderBy-BG0Y1VUv.js";import"./_baseIteratee-BMx8UgrR.js";import"./_baseMap-Cti1-MBK.js";import"./_baseEach-Gi_mbc02.js";import"./useInfiniteQuery-BvxwsDiv.js";import"./groupBy-DSNywsRH.js";import"./_createAggregator-3T-BPCUx.js";import"./DialogBase-zjWOIfZo.js";import"./Close-DTZpuwIC.js";import"./HelpPopover-BHPw_eXc.js";import"./MarkdownPopover-CmvfCcSZ.js";import"./LightTooltip-D3Im4lvV.js";import"./MarkdownSynapse-DTMlkJjz.js";import"./SkeletonButton-BV9DAa_g.js";import"./SkeletonInlineBlock-DBJoLAHS.js";import"./SkeletonTable-bCltNDze.js";import"./SkeletonParagraph-DMHFsIQV.js";import"./EntityLink-DbEBnUMV.js";import"./useEntity-Ct505i-Y.js";import"./pickBy-CICyjPiu.js";import"./isString-BzRHITTW.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DUfbyb2m.js";import"./useGetEntityHeaders-BBqOvY-q.js";import"./EntityIcon-DitKHH8f.js";import"./ErrorChip-BTmn8inS.js";import"./Chip-BBDwaxyK.js";import"./UserOrTeamBadge-Dc-2HELy.js";import"./UserBadge-CuO49o2I.js";import"./useUserBundle-CxwxuS4g.js";import"./MenuItem-DFE2FoA8.js";import"./Card-CsDbzPNm.js";import"./TeamBadge-Cv21lOSZ.js";import"./UnmanagedACTAccessRequirementItem-Dox1n6fi.js";import"./RequirementItem-DGwei6cI.js";import"./LockTwoTone-b-Uht2NP.js";import"./UserSearchBoxV2-eku3LjAp.js";import"./useDebouncedEffect-ESHrkUcf.js";import"./use-deep-compare-effect.esm-CyEeuigF.js";import"./uniq-DkHOgfhe.js";import"./without-d1lIstzp.js";import"./Select-aab027f3.esm-AeQmxzbF.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CZR-0FOa.js";import"./SelfSignAccessRequirementItem-BMfx8xqZ.js";import"./DataAccessRequestAccessorsFilesForm-BioutATW.js";import"./enums-B8xqUN7w.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CXfePdb-.js";import"./RadioGroup-BId-jOsM.js";import"./Radio-CP_FqIkz.js";import"./SwitchBase-BeFAjXOG.js";import"./FormGroup-IGeDLAqs.js";import"./FormControlLabel-w4lUi-nf.js";import"./UploadDocumentField-Bu0GC3Pi.js";import"./FileUpload-BT7s7ZJs.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BDJuGQRf.js";import"./GridLegacy-CqcFOcfW.js";import"./ResearchProjectForm-DAYW9xHf.js";import"./TextFieldWithWordLimit-CiGove9R.js";import"./AuthenticatedRequirement-Bdod5lmk.js";import"./CertificationRequirement-Ca8yGn3B.js";import"./TwoFactorAuthEnabledRequirement-Dbo_6KSE.js";import"./ValidationRequirement-C1Rcw4SB.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DS0VEzUt.js";import"./RejectDataAccessRequestModal-BwlnL_G-.js";import"./CannedRejectionDialog-SSOeQ7Fa.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Ds9LhYtk.js";import"./Checkbox-KSRMygSt.js";import"./Grid-tYZNKxew.js";import"./upperFirst-C_bM0TM3.js";import"./_stringToArray-BcOrkvqL.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
