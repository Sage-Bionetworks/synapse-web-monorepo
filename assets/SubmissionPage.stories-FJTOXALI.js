import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kr as i,ks as C,H as s,kt as l,p as m,ku as b,kv as T,ka as A}from"./iframe-B9AXyISm.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-3UC5F5wT.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-CMuX-aQF.js";import"./useAccessRequirements-D2FWW5Vs.js";import"./index-DcvNn4X2.js";import"./_baseOrderBy-CN7N_uLk.js";import"./_baseIteratee-DWFWiy4b.js";import"./_baseMap-BVLp5GDP.js";import"./_baseEach-D0al_2ma.js";import"./useQueries-BCOBTSji.js";import"./useInfiniteQuery-B0uiA_PZ.js";import"./groupBy-ldwWEl2K.js";import"./_createAggregator-Rt67Mqcq.js";import"./DialogBase-Bv_6iVkM.js";import"./Close-NnOmK_QN.js";import"./HelpPopover-BKGnMhYA.js";import"./MarkdownPopover-CQwXLXPz.js";import"./LightTooltip-C9EShGL9.js";import"./MarkdownSynapse-ACifc84y.js";import"./SkeletonButton-C-q75hZ2.js";import"./SkeletonInlineBlock-BZYL3GN_.js";import"./SkeletonTable-DJaYvBkh.js";import"./SkeletonParagraph-DZGMGLgg.js";import"./EntityLink-B1lHv95a.js";import"./useEntity-C6fZFErB.js";import"./pickBy-mO7zXXdr.js";import"./isString-Bqhh1FSA.js";import"./useSuspenseQuery-DfskErri.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CRRuEluV.js";import"./useGetEntityHeaders-CxHhgGLR.js";import"./EntityIcon-DxVDteAm.js";import"./ErrorChip-CitgZtPE.js";import"./Chip-CoCC-fi6.js";import"./UserOrTeamBadge-BEOCBRSr.js";import"./UserBadge-BtAxa-D8.js";import"./useUserBundle-D_B9FjL8.js";import"./MenuItem-Dn2OBO7e.js";import"./Card-DPm0MPSs.js";import"./TeamBadge-CKj5V70B.js";import"./UnmanagedACTAccessRequirementItem-BKq9oMaW.js";import"./RequirementItem-CwOJxySa.js";import"./LockTwoTone-tGs6d-EK.js";import"./UserSearchBoxV2-bi7vH4AS.js";import"./useDebouncedEffect-C07eGUGc.js";import"./use-deep-compare-effect.esm-B_X0lumA.js";import"./uniq-Crldg1C3.js";import"./without-B26W_R9d.js";import"./Select-aab027f3.esm-CJRhWJFs.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-S7NFpPSS.js";import"./SelfSignAccessRequirementItem-edKJmbPG.js";import"./DataAccessRequestAccessorsFilesForm-IGmuYpxf.js";import"./enums-Dx8h9RYY.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-DLn2NorR.js";import"./RadioGroup-DmzfoTkp.js";import"./Radio-9yamh_Y-.js";import"./SwitchBase-Cb2xhxKM.js";import"./FormGroup-DzzUPcMw.js";import"./FormControlLabel-C3JXkR06.js";import"./UploadDocumentField-Cz9qa4qE.js";import"./FileUpload-BfF9Blng.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DNUk0Lwf.js";import"./GridLegacy-BYnML27f.js";import"./ResearchProjectForm-DI5qNrYn.js";import"./TextFieldWithWordLimit-BHsFtxnF.js";import"./AuthenticatedRequirement-DKSmfgJZ.js";import"./CertificationRequirement-DIa7LUXI.js";import"./TwoFactorAuthEnabledRequirement-HD9lzj3g.js";import"./ValidationRequirement-3b5yUTaQ.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-CjDB5M9a.js";import"./RejectDataAccessRequestModal-Dayq3QRF.js";import"./CannedRejectionDialog-D9oxHRca.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-BV4A4Qpg.js";import"./Checkbox-DQYBf5ik.js";import"./Grid-EI8bT8L_.js";import"./upperFirst-XP0jsmUu.js";import"./_stringToArray-4eyoBWrJ.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
