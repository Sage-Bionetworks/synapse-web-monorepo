import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kr as i,ks as C,H as s,kt as l,p as m,ku as b,kv as T,ka as A}from"./iframe-Bv3225dD.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-7R2h9eRI.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-DNFOWkhh.js";import"./useAccessRequirements-DzaPaYvw.js";import"./index-CZarqvXf.js";import"./_baseOrderBy-DUT4Jzfx.js";import"./_baseIteratee-BbIJeIRd.js";import"./_baseMap-huRy0dl9.js";import"./_baseEach-BMhe4q5x.js";import"./useQueries-B6UcJV_V.js";import"./useInfiniteQuery-DqOQ-5wt.js";import"./groupBy-DGLU1Cre.js";import"./_createAggregator-p4_cw1yh.js";import"./DialogBase-YjOHat3W.js";import"./Close-Zwo2uolh.js";import"./HelpPopover-4giAWybE.js";import"./MarkdownPopover-BGsl_EJS.js";import"./LightTooltip-fCebiKMM.js";import"./MarkdownSynapse-Cfnzx3pH.js";import"./SkeletonButton-DJp9easj.js";import"./SkeletonInlineBlock-Bq5p5oKd.js";import"./SkeletonTable-DN4iiShU.js";import"./SkeletonParagraph-CLTPxESa.js";import"./EntityLink-BQahDyE_.js";import"./useEntity-CM9ADOJ9.js";import"./pickBy-BvhQ5hmN.js";import"./isString-G0a_V30m.js";import"./useSuspenseQuery-CdjgNkyv.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BuH6QspR.js";import"./useGetEntityHeaders-C4vOMyfl.js";import"./EntityIcon-CDHLMUUl.js";import"./ErrorChip-CVtYwwdQ.js";import"./Chip-B2GRsUoa.js";import"./UserOrTeamBadge-Bd_k_c4n.js";import"./UserBadge-CRNgYN9O.js";import"./useUserBundle-BHT0iKXO.js";import"./MenuItem-BwJ2Gdnn.js";import"./Card-o608J91t.js";import"./TeamBadge-CS7ktAZ2.js";import"./UnmanagedACTAccessRequirementItem-CCirULJ-.js";import"./RequirementItem-BMTyb57e.js";import"./LockTwoTone-o9RYrJqe.js";import"./UserSearchBoxV2-dsjChIfY.js";import"./useDebouncedEffect-C7MZzIZp.js";import"./use-deep-compare-effect.esm-CIvVRqff.js";import"./uniq-C3G06xsZ.js";import"./without-BMm6qfGU.js";import"./Select-aab027f3.esm-DVi4OcJS.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-BxXmkLBs.js";import"./SelfSignAccessRequirementItem-DLyP6i4E.js";import"./DataAccessRequestAccessorsFilesForm-eFqcJdiF.js";import"./enums-Cb0ccR3X.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-DKQLokLq.js";import"./RadioGroup-2SMG8QBU.js";import"./Radio-B0x2u1zK.js";import"./SwitchBase-BxXcDErD.js";import"./FormGroup-C4AqOSVc.js";import"./FormControlLabel-CwYdHBQ1.js";import"./UploadDocumentField-hL-f_3it.js";import"./FileUpload-Ma3_awtv.js";import"./ManagedACTAccessRequirementFormWikiWrapper-D8rL2eRQ.js";import"./GridLegacy-DRvMoZ0d.js";import"./ResearchProjectForm-CVk2gp9V.js";import"./TextFieldWithWordLimit-CczVGlE0.js";import"./AuthenticatedRequirement-BBQRVo1L.js";import"./CertificationRequirement-BmMuxJ1z.js";import"./TwoFactorAuthEnabledRequirement-BPzAMrGl.js";import"./ValidationRequirement-BucdibhT.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-fWk1_lDF.js";import"./RejectDataAccessRequestModal-BuGI2QvB.js";import"./CannedRejectionDialog-Dgk1tZDM.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-8fhdwQpp.js";import"./Checkbox-C8aMdRVE.js";import"./Grid-B_MI4q89.js";import"./upperFirst-C_Npn1V1.js";import"./_stringToArray-DzIvRiNH.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
