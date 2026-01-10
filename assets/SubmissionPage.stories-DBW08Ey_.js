import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-xmmb_I0l.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CrIOiwRq.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DhLF2QbV.js";import"./useAccessRequirements-B7hNwYVJ.js";import"./index-lYHXK35I.js";import"./_baseOrderBy-C623CZoW.js";import"./_baseIteratee-BdxYwHJk.js";import"./_baseMap-CGzOi-md.js";import"./_baseEach-B1RTpd10.js";import"./useQueries-B6_MsPWT.js";import"./useInfiniteQuery-Dlr9EZ3N.js";import"./groupBy-CK0aOVzf.js";import"./_createAggregator-DD1I8BMf.js";import"./DialogBase-BYsOjz7L.js";import"./Close-Cnr5zUVu.js";import"./HelpPopover-BMEIvn42.js";import"./MarkdownPopover-DGXe5vs0.js";import"./LightTooltip-D9ucYA3A.js";import"./MarkdownSynapse-DiGGFE3_.js";import"./SkeletonButton-9FRcX2_1.js";import"./SkeletonInlineBlock-CLZ8B174.js";import"./SkeletonTable-jOb-G6tL.js";import"./SkeletonParagraph-BjPCkGoh.js";import"./EntityLink-BXuzwE8L.js";import"./useEntity-PsEU5Z6M.js";import"./pickBy-DQIDNL5V.js";import"./isString-CWN2TzYl.js";import"./useSuspenseQuery-B2gu81Lt.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BfFlbH_n.js";import"./useGetEntityHeaders-mLrU5oZ0.js";import"./EntityIcon-B3QB4buR.js";import"./ErrorChip-D6aUT_uY.js";import"./Chip-5gf_Tn0T.js";import"./UserOrTeamBadge-B1e5dJDX.js";import"./UserBadge-BPn0fooo.js";import"./useUserBundle-CiacMnau.js";import"./MenuItem-PkdQuBZK.js";import"./Card-Bs3Zj2Gb.js";import"./TeamBadge-CLN4Npj3.js";import"./UnmanagedACTAccessRequirementItem-Kr-5vqpx.js";import"./RequirementItem-y_rPynMR.js";import"./LockTwoTone-Db5BDeiW.js";import"./UserSearchBoxV2-DuM6LC6s.js";import"./useDebouncedEffect-BRRoY4Pd.js";import"./use-deep-compare-effect.esm-Bk5z4cMR.js";import"./uniq-Dle9qHow.js";import"./without-DT1JddDE.js";import"./Select-aab027f3.esm-CyqaM6X1.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-1TjuJyNf.js";import"./SelfSignAccessRequirementItem-1L1VDuIw.js";import"./DataAccessRequestAccessorsFilesForm-Dyr2vjnm.js";import"./enums-CobEGAnq.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CFrbEhep.js";import"./RadioGroup-5qx3E7PX.js";import"./Radio-DNjpeDa6.js";import"./SwitchBase-rtiI9HZl.js";import"./FormGroup-Bs9P-L4U.js";import"./FormControlLabel-CUoHWybp.js";import"./UploadDocumentField-DBMZ3JTD.js";import"./FileUpload-BuzyCNB2.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BSeAb87n.js";import"./GridLegacy-DdP-xVL4.js";import"./ResearchProjectForm-Bc0QW3Ix.js";import"./TextFieldWithWordLimit-D_1hRm3L.js";import"./AuthenticatedRequirement-b1-CVQqb.js";import"./CertificationRequirement-Clfp-6s6.js";import"./TwoFactorAuthEnabledRequirement-DQGJ9qor.js";import"./ValidationRequirement-Cg5tljkO.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DSqLhzrv.js";import"./RejectDataAccessRequestModal-QX2M7X54.js";import"./CannedRejectionDialog-C5hIAAFT.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Ct05-ZlH.js";import"./Checkbox-DX9286fe.js";import"./Grid-CgI5l4fr.js";import"./upperFirst-D0lwNBFP.js";import"./_stringToArray-ovPVaP_7.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
