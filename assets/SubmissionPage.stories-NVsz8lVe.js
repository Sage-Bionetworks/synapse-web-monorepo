import{g as I,k as S,n as t,a1 as O,am as g,b as e,kl as i,km as C,H as s,kn as l,p as m,ko as b,kp as T,k0 as A}from"./iframe-DkJtXMGY.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-ChVwDEUG.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-Chq4wNsU.js";import"./useAccessRequirements-WV52cU1E.js";import"./index-BhkdXidL.js";import"./_baseOrderBy-B-3aV5TD.js";import"./_baseIteratee-fqRe5hEX.js";import"./_baseMap-lB5D5faS.js";import"./_baseEach-BWCq4nkB.js";import"./useQueries-Z-3gwq5U.js";import"./useInfiniteQuery-iYy68X6j.js";import"./groupBy-CDC241_8.js";import"./_createAggregator-yAzaqnfe.js";import"./DialogBase-buJoyvfa.js";import"./Close-BlNc4-DS.js";import"./HelpPopover-Bw54_hwN.js";import"./MarkdownPopover-HbQMpPTM.js";import"./LightTooltip-DemkIWEH.js";import"./MarkdownSynapse-Cj88j8IZ.js";import"./SkeletonButton-Wvy1B_g_.js";import"./SkeletonInlineBlock-BZs9NYqd.js";import"./SkeletonTable-Boy2sN_O.js";import"./SkeletonParagraph-D2M_qyIo.js";import"./EntityLink-BqpJWKI0.js";import"./useEntity-CO16wdW2.js";import"./pickBy-TCGe6MDQ.js";import"./isString-BGlEt5YE.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B1ApGHDu.js";import"./useGetEntityHeaders-BV7RK0QT.js";import"./EntityIcon-Ll_hyWOT.js";import"./ErrorChip-CrnWChky.js";import"./Chip-C5Eg6zQf.js";import"./UserOrTeamBadge-yADcIefg.js";import"./UserBadge-D10KGNES.js";import"./MenuItem-__VZzdvD.js";import"./Card-BrdkgB5x.js";import"./TeamBadge-Cz3XVBkB.js";import"./UnmanagedACTAccessRequirementItem-D96nOoDD.js";import"./RequirementItem-BcnU9vZO.js";import"./LockTwoTone-qAEF7vz4.js";import"./UserSearchBoxV2-q9HR-Gu6.js";import"./useDebouncedEffect-CbC68BJS.js";import"./use-deep-compare-effect.esm-aTxZvlU9.js";import"./uniq-BY50vU0D.js";import"./without-BNFOWFRc.js";import"./Select-aab027f3.esm-BlNTofID.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-BCkmC8nL.js";import"./SelfSignAccessRequirementItem-CNK61cHn.js";import"./DataAccessRequestAccessorsFilesForm-BNZ__XPG.js";import"./enums-DEEgdRlW.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-BStWTxwZ.js";import"./RadioGroup-CGXPC58P.js";import"./Radio-DnYOEHwV.js";import"./SwitchBase-LVCk0Af2.js";import"./FormGroup-DCl1RDUc.js";import"./FormControlLabel-BtRUWfK0.js";import"./UploadDocumentField-EHY1DS9K.js";import"./FileUpload-D3Jh9cWd.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BCBUP1m3.js";import"./GridLegacy-kxAEsx-9.js";import"./ResearchProjectForm-BAy58JNI.js";import"./TextFieldWithWordLimit-D0FIPXnt.js";import"./AuthenticatedRequirement-YIDpiXAR.js";import"./CertificationRequirement-CoVie8DY.js";import"./TwoFactorAuthEnabledRequirement-g8-qdRl7.js";import"./ValidationRequirement-D63edw6H.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-CP-6M3-C.js";import"./RejectDataAccessRequestModal-BJKyq48t.js";import"./CannedRejectionDialog-B7qQev3D.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-DYXCYbxt.js";import"./Checkbox-1S1SsZEO.js";import"./Grid-CVeqhvD2.js";import"./upperFirst-DicdBOFC.js";import"./_stringToArray-Cn5Hcc4J.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
