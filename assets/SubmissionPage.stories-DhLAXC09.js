import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-B4CHAk6x.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-DGullpvE.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-tcNeXtZf.js";import"./useAccessRequirements-FtOKRHB-.js";import"./index-E3ZsUzEa.js";import"./_baseOrderBy-Ca9vpDaV.js";import"./_baseIteratee-CzfSGJS0.js";import"./_baseMap-B7lnn0EX.js";import"./_baseEach-C3hsIjAp.js";import"./useQueries-hh02O7c_.js";import"./useInfiniteQuery-BfVD3mCM.js";import"./groupBy-CokvvLVN.js";import"./_createAggregator-FGnVRDEN.js";import"./DialogBase-iAyUtvLT.js";import"./Close-DqUoeWnG.js";import"./HelpPopover-Dkch2fNl.js";import"./MarkdownPopover-Cr665fP1.js";import"./LightTooltip-CSn5B8sG.js";import"./MarkdownSynapse-BVqNsxRc.js";import"./SkeletonButton-CPwz8mIe.js";import"./SkeletonInlineBlock-DNU7D5U5.js";import"./SkeletonTable-RSxhuQlc.js";import"./SkeletonParagraph-DDHYucUN.js";import"./EntityLink-DwAOHTKN.js";import"./useEntity-BM-_3fsv.js";import"./pickBy-DRW-IezE.js";import"./isString-sCn-kMnb.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DCxD78OC.js";import"./useGetEntityHeaders-CqGO5naw.js";import"./EntityIcon-BCytgQiO.js";import"./ErrorChip-B-KIzypq.js";import"./Chip-D5KlvdWr.js";import"./UserOrTeamBadge-CtQnH6Sg.js";import"./UserBadge-CxJlSlvP.js";import"./MenuItem-lGKzud5I.js";import"./Card-BXYY888f.js";import"./TeamBadge-ErVLQhVn.js";import"./UnmanagedACTAccessRequirementItem-BWgcspeU.js";import"./RequirementItem-BdgJ9CqV.js";import"./LockTwoTone-C14VuCGe.js";import"./UserSearchBoxV2-DB7zO4VS.js";import"./useDebouncedEffect-CQ-aWcs_.js";import"./use-deep-compare-effect.esm-w31lbSJq.js";import"./uniq-S-UeN2sg.js";import"./without-Ci_ne7SJ.js";import"./Select-aab027f3.esm-8Ibd2tbx.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-Bjuv7y5k.js";import"./SelfSignAccessRequirementItem-D5-spuwL.js";import"./DataAccessRequestAccessorsFilesForm-C_tZ88OG.js";import"./enums-so66Tzk5.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-r-m_L-Nj.js";import"./RadioGroup-DZ6Oq1pF.js";import"./Radio-CK8836QX.js";import"./SwitchBase-CjNNjlJn.js";import"./FormGroup-DDkYg0sC.js";import"./FormControlLabel-C_h5UEBe.js";import"./UploadDocumentField-DzK0gtSp.js";import"./FileUpload-C8vJAfqx.js";import"./ManagedACTAccessRequirementFormWikiWrapper-qSWlSNdA.js";import"./GridLegacy-B7opNBmp.js";import"./ResearchProjectForm-Du_sfs7C.js";import"./TextFieldWithWordLimit-CHUCjeI5.js";import"./AuthenticatedRequirement-Ce0ozRXz.js";import"./CertificationRequirement-BXY4ukUv.js";import"./TwoFactorAuthEnabledRequirement-BUD0UTOX.js";import"./ValidationRequirement-R6IK9tfS.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-D4iFALg9.js";import"./RejectDataAccessRequestModal-B9b-MEEl.js";import"./CannedRejectionDialog-B0Xk7IVx.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-DfKypV0q.js";import"./Checkbox-BXOJwuDE.js";import"./Grid-CfVXHtUY.js";import"./upperFirst-KymEKvfe.js";import"./_stringToArray-GjIwZ3rk.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
