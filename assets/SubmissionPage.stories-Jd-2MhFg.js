import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-eAL3LCN3.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-CA6snCQX.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-Dyq8502L.js";import"./useAccessRequirements-B9olMQyi.js";import"./index-Dfyq_HAj.js";import"./_baseOrderBy-BTnFMAHT.js";import"./_baseIteratee-YB6gKiVY.js";import"./_baseMap-BQ8tF--O.js";import"./_baseEach-YQyv94F6.js";import"./useQueries-D_stMPeC.js";import"./useInfiniteQuery-BIjxq0oU.js";import"./groupBy-DcviVXwW.js";import"./_createAggregator-BeTUuFJK.js";import"./DialogBase-VybCyXNM.js";import"./Close-B1d24Q-1.js";import"./HelpPopover-oNhZ2sNv.js";import"./MarkdownPopover-C79aMDza.js";import"./LightTooltip-B-34NBpO.js";import"./MarkdownSynapse-CpKA-VNQ.js";import"./SkeletonButton-aT1VkMB9.js";import"./SkeletonInlineBlock-04pSbxC0.js";import"./SkeletonTable-BgcTNkHb.js";import"./SkeletonParagraph-DUeQUQ73.js";import"./EntityLink-PWP_uDcl.js";import"./useEntity-BOjdGhFs.js";import"./pickBy-kMsgLJaN.js";import"./isString-DzsNsaKp.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-y8BKwpar.js";import"./useGetEntityHeaders-DNDUXS6U.js";import"./EntityIcon-DCtOjq0j.js";import"./ErrorChip-htjDINp4.js";import"./Chip-BhAQmrv0.js";import"./UserOrTeamBadge-CYpQMMm4.js";import"./UserBadge-ZP5JTHXX.js";import"./MenuItem-BJhOgCUi.js";import"./Card-BZPVWLl9.js";import"./TeamBadge-DDt9Kb45.js";import"./UnmanagedACTAccessRequirementItem-D-FC1rII.js";import"./RequirementItem-DcnVRhRp.js";import"./LockTwoTone-B3FYKWKS.js";import"./UserSearchBoxV2-CNx6AF6f.js";import"./useDebouncedEffect-C9DoGcNq.js";import"./use-deep-compare-effect.esm-bDex8thB.js";import"./uniq-CaqcideB.js";import"./without-NT-PvWpP.js";import"./Select-aab027f3.esm-ClK3n3NS.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-BcW-w8aG.js";import"./SelfSignAccessRequirementItem-dUEW2Ny9.js";import"./DataAccessRequestAccessorsFilesForm-paa1GWm_.js";import"./enums-CviBKuSj.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-B3dJ8uZe.js";import"./RadioGroup-BuGo_EUf.js";import"./Radio-BZhrVxO-.js";import"./SwitchBase-C39Yd_tq.js";import"./FormGroup-CQzLuXlP.js";import"./FormControlLabel-CMRXKWRo.js";import"./UploadDocumentField-CMpbkRuM.js";import"./FileUpload-DS9EjleH.js";import"./ManagedACTAccessRequirementFormWikiWrapper-EBixYnTs.js";import"./GridLegacy-wr3MdAJt.js";import"./ResearchProjectForm-Bb5i4ase.js";import"./TextFieldWithWordLimit-DHawExJa.js";import"./AuthenticatedRequirement-DZ6Yf83R.js";import"./CertificationRequirement-DcPJ2RuW.js";import"./TwoFactorAuthEnabledRequirement-DIC7PJpg.js";import"./ValidationRequirement-B6rho5ZX.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-B4tjKpv1.js";import"./RejectDataAccessRequestModal-DvTkzBa2.js";import"./CannedRejectionDialog-BFsPYWdQ.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-BmYHNfkM.js";import"./Checkbox-B4sC4_8_.js";import"./Grid-DjAh0WD2.js";import"./upperFirst-B8Jj5qTt.js";import"./_stringToArray-Ds91EMum.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
