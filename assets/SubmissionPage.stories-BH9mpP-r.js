import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kr as i,ks as C,H as s,kt as l,p as m,ku as b,kv as T,ka as A}from"./iframe-BUOdsTSh.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-DOv939E4.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-Dvu1xUnG.js";import"./useAccessRequirements-B80D173R.js";import"./index-Dy3y5VXk.js";import"./_baseOrderBy-BrYmiZ1z.js";import"./_baseIteratee-ikfqENkb.js";import"./_baseMap-Ct-pV0We.js";import"./_baseEach-kMjIUVBO.js";import"./useQueries-Cj0FJGxA.js";import"./useInfiniteQuery-BQSNFCnR.js";import"./groupBy-B-kVIWdc.js";import"./_createAggregator-CAZ8qf_X.js";import"./DialogBase-DQg2Vi5e.js";import"./Close-U8nFtaRM.js";import"./HelpPopover-6NrJABUY.js";import"./MarkdownPopover-Di4SlQgS.js";import"./LightTooltip-Da_PEhJu.js";import"./MarkdownSynapse-DqCsA8Jf.js";import"./SkeletonButton-ByACKKgg.js";import"./SkeletonInlineBlock-BZZZqUCg.js";import"./SkeletonTable-CSizy4er.js";import"./SkeletonParagraph-DiZBwklZ.js";import"./EntityLink-Cn714u2N.js";import"./useEntity-U-3a_1Bs.js";import"./pickBy-D4pEibDA.js";import"./isString-Bij-w0kH.js";import"./useSuspenseQuery-BjDE67iy.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BO7k6330.js";import"./useGetEntityHeaders-qmsiWhIX.js";import"./EntityIcon-B_TgwKi_.js";import"./ErrorChip-B0ddWvXe.js";import"./Chip-D1GuGoQD.js";import"./UserOrTeamBadge-MX1_uXne.js";import"./UserBadge-DehLGxLX.js";import"./useUserBundle-CTHXD_uI.js";import"./MenuItem-8DBEXON1.js";import"./Card-CuzZsAO2.js";import"./TeamBadge-DsCiCBsT.js";import"./UnmanagedACTAccessRequirementItem-B6ml6ST5.js";import"./RequirementItem-CHf8DRwz.js";import"./LockTwoTone-JYoLR7Ia.js";import"./UserSearchBoxV2-CViGDhLZ.js";import"./useDebouncedEffect-IO6y0XyR.js";import"./use-deep-compare-effect.esm-CX0zEpmN.js";import"./uniq-BuRCLPCx.js";import"./without-POmdnga1.js";import"./Select-aab027f3.esm-B9jF230q.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-C2uXqiEc.js";import"./SelfSignAccessRequirementItem-tWlZj2r6.js";import"./DataAccessRequestAccessorsFilesForm-CwSpjSoN.js";import"./enums-C6Ef294A.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-DUiZ_Hqh.js";import"./RadioGroup-B5MG_GZR.js";import"./Radio-DI7hqRFd.js";import"./SwitchBase-B4zG1gGP.js";import"./FormGroup-CYLGsA33.js";import"./FormControlLabel-CpRmCTlY.js";import"./UploadDocumentField-Dwi_PsZn.js";import"./FileUpload-Cf8pXtCv.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Bv4osXM3.js";import"./GridLegacy-cfp-QTIK.js";import"./ResearchProjectForm-BwMDaxjX.js";import"./TextFieldWithWordLimit-B03Frc_L.js";import"./AuthenticatedRequirement-Bffm9H_p.js";import"./CertificationRequirement-EfMrYmUI.js";import"./TwoFactorAuthEnabledRequirement-C_YKzYeZ.js";import"./ValidationRequirement-CcHqSPQR.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-BPq46ttM.js";import"./RejectDataAccessRequestModal-CWKSX3ov.js";import"./CannedRejectionDialog-DE6ngHxC.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-CbO0lTFx.js";import"./Checkbox--dbCoq3l.js";import"./Grid-CtZSHvS3.js";import"./upperFirst-DYhk-Yrk.js";import"./_stringToArray-BSRm8cui.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const or=["Demo","DemoError"];export{o as Demo,n as DemoError,or as __namedExportsOrder,sr as default};
