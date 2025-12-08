import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kp as i,kq as C,H as s,kr as l,p as m,ks as b,kt as T,k4 as A}from"./iframe-DVXODLNu.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-B0paFdL7.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-PHWUg3oG.js";import"./useAccessRequirements-DhOrpIWz.js";import"./index-Bd7KE_sO.js";import"./_baseOrderBy-eA1ieNmu.js";import"./_baseIteratee-BHw4qJII.js";import"./_baseMap-CS6dt86a.js";import"./_baseEach-Bw65e-UW.js";import"./useQueries-ByecndiH.js";import"./useInfiniteQuery-BezuufV7.js";import"./groupBy-tSGfwrdi.js";import"./_createAggregator-PfdPvP4Q.js";import"./DialogBase-CV0H5xOa.js";import"./Close-CWDc50NR.js";import"./HelpPopover-095Yn2au.js";import"./MarkdownPopover-cDp6lRwo.js";import"./LightTooltip-UuB-IIfM.js";import"./MarkdownSynapse-CTK4Gw0-.js";import"./SkeletonButton-C9WhwSFv.js";import"./SkeletonInlineBlock-rd-Pq8Ur.js";import"./SkeletonTable-MyquJLbe.js";import"./SkeletonParagraph-DapPZsJe.js";import"./EntityLink-kLvrh-uV.js";import"./useEntity-DVoCZCK1.js";import"./pickBy-BK2OgJ-K.js";import"./isString-BA_dK8xI.js";import"./useSuspenseQuery-sm4bvu-Z.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-gxy6vIym.js";import"./useGetEntityHeaders-ChlNRI-D.js";import"./EntityIcon-keRJ5h89.js";import"./ErrorChip-CuVG0HMe.js";import"./Chip-Cr5hy2JG.js";import"./UserOrTeamBadge-Bhzk2JYD.js";import"./UserBadge-LmUrHAa6.js";import"./useUserBundle-BkjAxlSt.js";import"./MenuItem-BqHSezmF.js";import"./Card-Bb4flCVP.js";import"./TeamBadge-0jGm7KJb.js";import"./UnmanagedACTAccessRequirementItem-DCS6T14E.js";import"./RequirementItem-U4jagB9j.js";import"./LockTwoTone-DjnzYAq9.js";import"./UserSearchBoxV2-DecOa6so.js";import"./useDebouncedEffect-Da-D3D2U.js";import"./use-deep-compare-effect.esm-NBDLnfqg.js";import"./uniq-B5-F1PUr.js";import"./without-Dzex2Nar.js";import"./Select-aab027f3.esm-D-hLbm8i.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-BnJWm2Xl.js";import"./SelfSignAccessRequirementItem-D3EW-PPm.js";import"./DataAccessRequestAccessorsFilesForm-QIKuvN3U.js";import"./enums-D_pI--ew.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-DDsvKSaG.js";import"./RadioGroup-DE6lChWk.js";import"./Radio-B2qY6t1E.js";import"./SwitchBase-CkD1vswi.js";import"./FormGroup-HRUWJAS5.js";import"./FormControlLabel-DTqn-dl-.js";import"./UploadDocumentField-C4k4A3tV.js";import"./FileUpload-DyqV4eOi.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BBHq5Q17.js";import"./GridLegacy-DOmW3ulC.js";import"./ResearchProjectForm-Cj-1mGwO.js";import"./TextFieldWithWordLimit-we3L2hgY.js";import"./AuthenticatedRequirement-DKvHDOwU.js";import"./CertificationRequirement-CFOL5Bjq.js";import"./TwoFactorAuthEnabledRequirement-qHElY6Pa.js";import"./ValidationRequirement-ClvQjbud.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-Ic4Y7Apg.js";import"./RejectDataAccessRequestModal-BKdJmrI_.js";import"./CannedRejectionDialog-eCrelQ8e.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-DPilllRq.js";import"./Checkbox-D5Ka3-kx.js";import"./Grid-PNkqt1O4.js";import"./upperFirst-Cjya-kft.js";import"./_stringToArray-DYcXZlKT.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
