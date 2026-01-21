import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,ks as i,kt as E,H as s,ku as _,p as m,kv as I,kw as S,kb as O}from"./iframe-DrCEazsW.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Bvz9W_up.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Bj06xVtj.js";import"./useAccessRequirements-vxNOeDz5.js";import"./index-Bxv-iQH3.js";import"./_baseOrderBy-DFkEE16g.js";import"./_baseIteratee-s9gtzg3G.js";import"./_baseMap-DjbTSRZA.js";import"./_baseEach-BI8KWHZ6.js";import"./useQueries-DvWk4uuh.js";import"./useInfiniteQuery-Bi9tYdtQ.js";import"./groupBy-BTm8lvWY.js";import"./_createAggregator-OBCQ_jNA.js";import"./DialogBase-BH_HDzHK.js";import"./Close-CxIjT6Fh.js";import"./HelpPopover-DbOYMGtK.js";import"./MarkdownPopover-C7OUxN4B.js";import"./LightTooltip-CVm0W9H0.js";import"./MarkdownSynapse-cqZxM6bP.js";import"./SkeletonButton-C4mWmh8D.js";import"./SkeletonInlineBlock-DNr-Di6Y.js";import"./SkeletonTable-BtmY8UyV.js";import"./SkeletonParagraph-DxARbxEV.js";import"./EntityLink-B_-Ose9S.js";import"./useEntity-BtnzEjDW.js";import"./pickBy-DY3T_7Uu.js";import"./isString-CXb79rfM.js";import"./useSuspenseQuery-DQ6p8VKt.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-GemdhLWE.js";import"./useGetEntityHeaders-K5yyZGuQ.js";import"./EntityIcon-l2U_0ffN.js";import"./ErrorChip-CVpKcldq.js";import"./Chip-DN_sqkiV.js";import"./UserOrTeamBadge-DG_kAHOs.js";import"./UserBadge-y9zJuYcg.js";import"./useUserBundle-CYm_bsjI.js";import"./MenuItem-C2nlmzrP.js";import"./Card-CTrSj87E.js";import"./TeamBadge-ZUmCfIwr.js";import"./UnmanagedACTAccessRequirementItem-CslZ02Hx.js";import"./RequirementItem-CNtidA3m.js";import"./LockTwoTone-BTvT-x2G.js";import"./UserSearchBoxV2-Q3p-Fp-O.js";import"./useDebouncedEffect-BJDiPjps.js";import"./use-deep-compare-effect.esm-CItx8MYD.js";import"./uniq-CEHj_8vv.js";import"./without-DuQ8RBs4.js";import"./Select-aab027f3.esm-q7BuRwHX.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BBYzakOt.js";import"./SelfSignAccessRequirementItem-B9P52VYG.js";import"./DataAccessRequestAccessorsFilesForm-BLEuh4bh.js";import"./enums-Co1Vi5Pd.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CfVTUeNO.js";import"./RadioGroup-B2ZLbJoO.js";import"./Radio-Bq1xJrrP.js";import"./SwitchBase-DmV_-0J4.js";import"./FormGroup-D3HYc7HH.js";import"./FormControlLabel-0BDDjvMM.js";import"./UploadDocumentField-D_tMUOqi.js";import"./FileUpload-DcyMAky3.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CaliaYlJ.js";import"./GridLegacy-DFNl9OvG.js";import"./ResearchProjectForm-DpRJgbiG.js";import"./TextFieldWithWordLimit-C3OGM1An.js";import"./AuthenticatedRequirement-DhQ4Z4Nx.js";import"./CertificationRequirement-C5neYJXH.js";import"./TwoFactorAuthEnabledRequirement-D4-n4gMn.js";import"./ValidationRequirement-DVflwpLC.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-NnynHPS3.js";import"./RejectDataAccessRequestModal-Dil1f8lI.js";import"./CannedRejectionDialog-CGoQdJDq.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Dhl79wf0.js";import"./Checkbox-C7I_4mUy.js";import"./Grid-DyO_a-po.js";import"./upperFirst-BFbhhrSF.js";import"./_stringToArray-CSy8OKzI.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
