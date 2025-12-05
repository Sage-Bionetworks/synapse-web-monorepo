import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kp as i,kq as C,H as s,kr as l,p as m,ks as b,kt as T,k4 as A}from"./iframe-Dh27wMqB.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-DICdtPwJ.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-BlYrKqDC.js";import"./useAccessRequirements-D_WoPHb-.js";import"./index-PG4lqu2T.js";import"./_baseOrderBy-ogl2PcNJ.js";import"./_baseIteratee-DEDPyERc.js";import"./_baseMap-MvKhi6ce.js";import"./_baseEach-B73iYufC.js";import"./useQueries-BPK8tx1d.js";import"./useInfiniteQuery-B-Fw0EIq.js";import"./groupBy-LY8nPiiH.js";import"./_createAggregator-D60ZJine.js";import"./DialogBase-CaFiVTkO.js";import"./Close-BffXL7L9.js";import"./HelpPopover-BHvKVQ3A.js";import"./MarkdownPopover-DnKNyBIA.js";import"./LightTooltip-y4XaVzOV.js";import"./MarkdownSynapse-BfugqKsd.js";import"./SkeletonButton-zWY26s6L.js";import"./SkeletonInlineBlock-CUxQyvLz.js";import"./SkeletonTable-QTbu1S9P.js";import"./SkeletonParagraph-BECb2Xut.js";import"./EntityLink-BFN4ejwr.js";import"./useEntity-CPKm_rx-.js";import"./pickBy-CQtlHPLC.js";import"./isString-BH-A2E2_.js";import"./useSuspenseQuery-B1cUOedV.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DCXfRG_X.js";import"./useGetEntityHeaders-Dx_fBdYM.js";import"./EntityIcon-BxjNiBbm.js";import"./ErrorChip-CnJjne-6.js";import"./Chip-CVqxkPH_.js";import"./UserOrTeamBadge-04pgWgoe.js";import"./UserBadge-IHjDII7e.js";import"./useUserBundle-CjBP39Vs.js";import"./MenuItem-G0Ev3uUJ.js";import"./Card-BXf6TNo9.js";import"./TeamBadge-DS4QVcyA.js";import"./UnmanagedACTAccessRequirementItem-DPAOp-4L.js";import"./RequirementItem-B3FnPxV1.js";import"./LockTwoTone-BS5Njf1_.js";import"./UserSearchBoxV2-BQz-3E30.js";import"./useDebouncedEffect-DnuVFZBQ.js";import"./use-deep-compare-effect.esm-Dddb7spg.js";import"./uniq-BE2B1P-o.js";import"./without-BrlBK_hP.js";import"./Select-aab027f3.esm-DZgATkoL.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-6h9vORG7.js";import"./SelfSignAccessRequirementItem-DSim4w7b.js";import"./DataAccessRequestAccessorsFilesForm-BOSxrI92.js";import"./enums-CjbX0f7i.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-DjPDPSB1.js";import"./RadioGroup-39-2yG1G.js";import"./Radio-7tGvqub-.js";import"./SwitchBase-DRWmMpc4.js";import"./FormGroup-7INvUqZz.js";import"./FormControlLabel-cOjz9kb1.js";import"./UploadDocumentField-BKEScQM4.js";import"./FileUpload-Dll_vM1h.js";import"./ManagedACTAccessRequirementFormWikiWrapper-lz0yYSI_.js";import"./GridLegacy-XxyUbYwq.js";import"./ResearchProjectForm-CCr4JqZz.js";import"./TextFieldWithWordLimit-CLm049NS.js";import"./AuthenticatedRequirement-Cs6tMRs2.js";import"./CertificationRequirement-Z31qEagY.js";import"./TwoFactorAuthEnabledRequirement-DfFhAse-.js";import"./ValidationRequirement-CXcymDOQ.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-d1_fu9ec.js";import"./RejectDataAccessRequestModal-DUaX1wa7.js";import"./CannedRejectionDialog-BVi0CEad.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-DxjWAx0P.js";import"./Checkbox-BQZMpPY0.js";import"./Grid-BBFYnyUS.js";import"./upperFirst-CZU_oywu.js";import"./_stringToArray-Cs0DQGjq.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,c,R;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const or=["Demo","DemoError"];export{o as Demo,n as DemoError,or as __namedExportsOrder,sr as default};
