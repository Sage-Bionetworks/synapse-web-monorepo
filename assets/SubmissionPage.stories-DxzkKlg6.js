import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kr as i,ks as C,H as s,kt as l,p as m,ku as b,kv as T,ka as A}from"./iframe-k9YwU_Xc.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-BkUhvXNl.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-CV-89X12.js";import"./useAccessRequirements-Bpx4VYGs.js";import"./index-DfC-1pI_.js";import"./_baseOrderBy-BDPdyESe.js";import"./_baseIteratee-DxLFM1hL.js";import"./_baseMap-B172oB3N.js";import"./_baseEach-CNGY3RY2.js";import"./useQueries-J55c1hQt.js";import"./useInfiniteQuery-CV6-OEbg.js";import"./groupBy-CiQaJIPI.js";import"./_createAggregator-ByllODrJ.js";import"./DialogBase-Gl_HIGD-.js";import"./Close-DFr4W5W5.js";import"./HelpPopover-dwgbsbh_.js";import"./MarkdownPopover-DALnZxkA.js";import"./LightTooltip-mwT1Csao.js";import"./MarkdownSynapse-Dx4lD55G.js";import"./SkeletonButton-BEjusTzn.js";import"./SkeletonInlineBlock-Cb_-AWMb.js";import"./SkeletonTable-aVeOh9ct.js";import"./SkeletonParagraph-Btg7J19e.js";import"./EntityLink-BvRiccKu.js";import"./useEntity-DLxNvIyy.js";import"./pickBy-CBoyaqdZ.js";import"./isString-D-byzQtq.js";import"./useSuspenseQuery-CiFSWrMs.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CRLaABuD.js";import"./useGetEntityHeaders-_nUXFdFr.js";import"./EntityIcon-B4pl2vPH.js";import"./ErrorChip-DXLIzqZP.js";import"./Chip-CKkKYJUZ.js";import"./UserOrTeamBadge-DgoM14CD.js";import"./UserBadge-DuQvc6Dg.js";import"./useUserBundle-Ciq97Tj-.js";import"./MenuItem-xt1g1Ufs.js";import"./Card-BUvqTfdV.js";import"./TeamBadge-CU6EGuah.js";import"./UnmanagedACTAccessRequirementItem-BRyLFHYW.js";import"./RequirementItem-aYoSd9zm.js";import"./LockTwoTone-DdQH3i_H.js";import"./UserSearchBoxV2-CH0dAh8E.js";import"./useDebouncedEffect-Di5Y9xSG.js";import"./use-deep-compare-effect.esm-D2PrD07D.js";import"./uniq-Dd01wqMQ.js";import"./without-6khpydSx.js";import"./Select-aab027f3.esm-DbrC5QvQ.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-bd6ClwOT.js";import"./SelfSignAccessRequirementItem-DnvGV90y.js";import"./DataAccessRequestAccessorsFilesForm-DFWzRs_p.js";import"./enums-ztILG7tN.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-hW7ny4IX.js";import"./RadioGroup-Cn0XWui1.js";import"./Radio-zHF2dm5y.js";import"./SwitchBase-B6MbIRzb.js";import"./FormGroup-BSxqv7UI.js";import"./FormControlLabel-DpD-rxj4.js";import"./UploadDocumentField-ChwpDj9j.js";import"./FileUpload-RpJMnh7x.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Bv_2H-jN.js";import"./GridLegacy-BXFtKdlm.js";import"./ResearchProjectForm-w0TSiJj-.js";import"./TextFieldWithWordLimit-BiLUDZcK.js";import"./AuthenticatedRequirement-DGkBrwQ7.js";import"./CertificationRequirement-SPEYlUwG.js";import"./TwoFactorAuthEnabledRequirement-Ef1hFqnQ.js";import"./ValidationRequirement-C_R8TGTY.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-DxK38-GT.js";import"./RejectDataAccessRequestModal-DOZ4E_DH.js";import"./CannedRejectionDialog-BJY6-sOn.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-CAwv6LBe.js";import"./Checkbox-DpmckRKo.js";import"./Grid-G8CgmtPB.js";import"./upperFirst-CSRhe5Ft.js";import"./_stringToArray-Brm5cQ7C.js";const or={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const nr=["Demo","DemoError"];export{o as Demo,n as DemoError,nr as __namedExportsOrder,or as default};
