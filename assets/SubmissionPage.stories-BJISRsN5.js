import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,ks as i,kt as E,H as s,ku as _,p as m,kv as I,kw as S,kb as O}from"./iframe-DtZANp-B.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CBCH1GBH.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DFaNaZVV.js";import"./useAccessRequirements-DKJISnrb.js";import"./index-B5Np9YOe.js";import"./_baseOrderBy-COsRBMWK.js";import"./_baseIteratee-i_0eWQoQ.js";import"./_baseMap-ClbmS9Vb.js";import"./_baseEach-CqjDDkAS.js";import"./useQueries-DPg4cEVG.js";import"./useInfiniteQuery-b0TCzgLZ.js";import"./groupBy-mise_rOU.js";import"./_createAggregator-DfjFoJ8N.js";import"./DialogBase-BL9x4u9e.js";import"./Close-C8f0_ECb.js";import"./HelpPopover-C5b6a8OJ.js";import"./MarkdownPopover-DvHvm-1Y.js";import"./LightTooltip-BaTykJJr.js";import"./MarkdownSynapse-CdW0w9aw.js";import"./SkeletonButton-BbY-5M8h.js";import"./SkeletonInlineBlock-ByZd8Fsz.js";import"./SkeletonTable-kAcnUL28.js";import"./SkeletonParagraph-CHnJlCLJ.js";import"./EntityLink-C9Hdqix9.js";import"./useEntity-DS-EI8IO.js";import"./pickBy-CkrYe2Mh.js";import"./isString-DBcqTwIs.js";import"./useSuspenseQuery-BRkWn9u5.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BDPyUYC4.js";import"./useGetEntityHeaders-C6DKWDiN.js";import"./EntityIcon-Cq0Ezr1P.js";import"./ErrorChip-CbHQnH_i.js";import"./Chip-gjecgf-1.js";import"./UserOrTeamBadge-BIGvN5HG.js";import"./UserBadge-CkxbVezJ.js";import"./useUserBundle-DQIqkLqA.js";import"./MenuItem-D40N-lEz.js";import"./Card-Dphefr3a.js";import"./TeamBadge-BQao1YEd.js";import"./UnmanagedACTAccessRequirementItem-BABFAKzT.js";import"./RequirementItem-CM6KQAJQ.js";import"./LockTwoTone-TpxhWAjO.js";import"./UserSearchBoxV2-clokRx2E.js";import"./useDebouncedEffect-CITJkFGr.js";import"./use-deep-compare-effect.esm-PoAMkIBW.js";import"./uniq-CA_-bD3V.js";import"./without-H6LCfWeO.js";import"./Select-aab027f3.esm-OdrQLI6h.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CeZMhUVd.js";import"./SelfSignAccessRequirementItem-DJCH5TKe.js";import"./DataAccessRequestAccessorsFilesForm-F2ifqb2h.js";import"./enums-DeCfboMw.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DMXd-juM.js";import"./RadioGroup-BQCvtnwF.js";import"./Radio-yNAyx1aq.js";import"./SwitchBase-Dyc_-KPc.js";import"./FormGroup-CMityFCN.js";import"./FormControlLabel-DB2ZnRYr.js";import"./UploadDocumentField-C_qn0w66.js";import"./FileUpload-B4ZH7qdE.js";import"./ManagedACTAccessRequirementFormWikiWrapper-tOuAffxf.js";import"./GridLegacy-x-VFIW1c.js";import"./ResearchProjectForm-UE99pRUq.js";import"./TextFieldWithWordLimit-Bg5vd3R3.js";import"./AuthenticatedRequirement-DDG-j_4j.js";import"./CertificationRequirement-zNifJOR1.js";import"./TwoFactorAuthEnabledRequirement-Bl7sbAk0.js";import"./ValidationRequirement-DmgOXZem.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-zAfSfAxA.js";import"./RejectDataAccessRequestModal-DzCJtF-G.js";import"./CannedRejectionDialog-DG3mpPeb.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CU9rE-_E.js";import"./Checkbox-CC1LHSjN.js";import"./Grid-BNHMYA5H.js";import"./upperFirst-DOEdiI_R.js";import"./_stringToArray-gTbB58M5.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
