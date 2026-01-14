import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-PKSisnYN.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-iXoVAfcO.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DhKYlwGI.js";import"./useAccessRequirements-e8wgHzax.js";import"./index-CHPH14xa.js";import"./_baseOrderBy-DCBrsFDV.js";import"./_baseIteratee-BO3lWvKN.js";import"./_baseMap-B9PYQd7E.js";import"./_baseEach-AR43v03m.js";import"./useQueries-DE5yqSSH.js";import"./useInfiniteQuery-CbKeCSex.js";import"./groupBy-Bazr0He1.js";import"./_createAggregator-CRN_KOsZ.js";import"./DialogBase-CB9fyCxz.js";import"./Close-B6DB3YsI.js";import"./HelpPopover-DzDKur2h.js";import"./MarkdownPopover-DS7FUQk-.js";import"./LightTooltip-8SVgZs3S.js";import"./MarkdownSynapse-xcQCt-re.js";import"./SkeletonButton-BGdnvIuV.js";import"./SkeletonInlineBlock-CSwI3yx9.js";import"./SkeletonTable-Dkrc7QOG.js";import"./SkeletonParagraph-C0R5SJWX.js";import"./EntityLink-MAyBMZb8.js";import"./useEntity-Cv_M5zHw.js";import"./pickBy-CEueLmq4.js";import"./isString-DLYReQSx.js";import"./useSuspenseQuery-CtKV56yt.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-nzc7WWYK.js";import"./useGetEntityHeaders-CHOwKBOC.js";import"./EntityIcon-d3F8ZSA_.js";import"./ErrorChip-CJNTYMtm.js";import"./Chip-BQb8GEui.js";import"./UserOrTeamBadge-CRlBE6wI.js";import"./UserBadge-B34w-3Og.js";import"./useUserBundle-C9JUfD1-.js";import"./MenuItem-DV5diNve.js";import"./Card-DCVbjVFH.js";import"./TeamBadge-DYOwrHpa.js";import"./UnmanagedACTAccessRequirementItem-DlD0_EbX.js";import"./RequirementItem-DRkrtIgF.js";import"./LockTwoTone-CQFuRfkJ.js";import"./UserSearchBoxV2-BBJfEzOY.js";import"./useDebouncedEffect-DEsDI4AV.js";import"./use-deep-compare-effect.esm-DoeHRFzR.js";import"./uniq-ni3FY8rS.js";import"./without-FIKTc_AK.js";import"./Select-aab027f3.esm-DR7BfS7R.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-D5M-_AM5.js";import"./SelfSignAccessRequirementItem-FgGNw_Ce.js";import"./DataAccessRequestAccessorsFilesForm-BavRYo_r.js";import"./enums-DBepWMdl.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-Dhth76rJ.js";import"./RadioGroup-DPMb7QAr.js";import"./Radio-CQXLRDf5.js";import"./SwitchBase-hDycEQAb.js";import"./FormGroup-C1MEjdUB.js";import"./FormControlLabel-oz1IItSj.js";import"./UploadDocumentField-BZL3AmT4.js";import"./FileUpload-CRN-hC0s.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BcqZzA1Q.js";import"./GridLegacy-boRgCTp4.js";import"./ResearchProjectForm-CGTBaM_f.js";import"./TextFieldWithWordLimit-D7AzryfL.js";import"./AuthenticatedRequirement-B6ozyanA.js";import"./CertificationRequirement-DCSeoKzH.js";import"./TwoFactorAuthEnabledRequirement-C5X8O_uV.js";import"./ValidationRequirement-BHg2_ONy.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Bi4w4jaC.js";import"./RejectDataAccessRequestModal-B4uA3PEX.js";import"./CannedRejectionDialog-C9iDfCzL.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-S4M52zPJ.js";import"./Checkbox-Df__YbMF.js";import"./Grid-Cd8xwGFy.js";import"./upperFirst-DPi6eO5y.js";import"./_stringToArray-DqWLkAWJ.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Xe=["Demo","DemoError"];export{o as Demo,n as DemoError,Xe as __namedExportsOrder,ze as default};
