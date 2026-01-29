import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kt as i,ku as E,H as s,kv as _,p as m,kw as I,kx as S,kc as O}from"./iframe-DY1t7RUX.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BLGv7akW.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-D2IdD6YB.js";import"./useAccessRequirements-DAUF1oP4.js";import"./index-By-2rY5w.js";import"./_baseOrderBy-zLyQEl7c.js";import"./_baseIteratee-Csi7uG28.js";import"./_baseMap-DbFCN3L8.js";import"./_baseEach-gQnStzZC.js";import"./useQueries-BBbQzEvi.js";import"./useInfiniteQuery-Bh-67AIU.js";import"./groupBy-EJA5Otto.js";import"./_createAggregator-B8YjUItx.js";import"./DialogBase-DO28beWj.js";import"./Close-CDgVbOyZ.js";import"./HelpPopover-C9D9Mwao.js";import"./MarkdownPopover-St2sJIEx.js";import"./LightTooltip-DVzuHePn.js";import"./MarkdownSynapse-BvADFsyz.js";import"./SkeletonButton-DnY8-1vA.js";import"./SkeletonInlineBlock-DZRcElE1.js";import"./SkeletonTable-Q2u-z5xw.js";import"./SkeletonParagraph-DFydk1yR.js";import"./EntityLink-DjkXRxvD.js";import"./useEntity-1pUle0NL.js";import"./pickBy-BilzzK_3.js";import"./isString-ByPlCLlf.js";import"./useSuspenseQuery-xirJCFap.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DG_KhQzg.js";import"./useGetEntityHeaders-DoDslOvD.js";import"./EntityIcon-DbZmcwji.js";import"./ErrorChip-D6K_bbE7.js";import"./Chip-1hYgjVpt.js";import"./UserOrTeamBadge-myncO2-L.js";import"./UserBadge-5rHSNfxc.js";import"./useUserBundle-DPIgGoEf.js";import"./MenuItem-C2Xe6MJI.js";import"./Card-7QnyKRpy.js";import"./TeamBadge-D81SGtK0.js";import"./UnmanagedACTAccessRequirementItem-S8EqCP2z.js";import"./RequirementItem-DVHJMAgM.js";import"./LockTwoTone-B-mJJBoD.js";import"./UserSearchBoxV2-CVZxhNEs.js";import"./useDebouncedEffect-DSA6C6GW.js";import"./use-deep-compare-effect.esm-CYAZWjeG.js";import"./uniq-yN4BBPIa.js";import"./without-BsBLigQy.js";import"./Select-aab027f3.esm-CWQSsNPF.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-_XwXmsDY.js";import"./SelfSignAccessRequirementItem-CnF5s77Y.js";import"./DataAccessRequestAccessorsFilesForm-BvTzkC1Q.js";import"./enums-Cpeh_flH.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CJsEGfzn.js";import"./RadioGroup-D4ohITre.js";import"./Radio-ONvsvftv.js";import"./SwitchBase-ZsFHOwpa.js";import"./FormGroup-BwEm0hQp.js";import"./FormControlLabel-BxC4Yjte.js";import"./UploadDocumentField-BdP6svGL.js";import"./FileUpload-sZAxAB5N.js";import"./ManagedACTAccessRequirementFormWikiWrapper-ClZ2OkS_.js";import"./GridLegacy-n-4iyt3X.js";import"./ResearchProjectForm-B_D-0d3o.js";import"./TextFieldWithWordLimit-Y_jahZmN.js";import"./AuthenticatedRequirement-BD06ZV61.js";import"./CertificationRequirement-CTGuuGQl.js";import"./TwoFactorAuthEnabledRequirement-dyGltKKb.js";import"./ValidationRequirement-VFDOSPZ_.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-yhGY4suk.js";import"./RejectDataAccessRequestModal-D3tECJc-.js";import"./CannedRejectionDialog-5TWXmsG1.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Bj6eqrOC.js";import"./Checkbox-CJeA1kXl.js";import"./Grid-DZsdJ4GR.js";import"./upperFirst-DctVITpo.js";import"./_stringToArray-LTXmmTeS.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
