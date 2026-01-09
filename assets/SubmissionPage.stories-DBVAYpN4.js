import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kr as i,ks as C,H as s,kt as l,p as m,ku as b,kv as T,ka as A}from"./iframe-CJCPT_yY.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-Cnnci2cF.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-BwN-7Z9D.js";import"./useAccessRequirements-BB1jEIAf.js";import"./index-8HwUI_iG.js";import"./_baseOrderBy-C-V2pvg8.js";import"./_baseIteratee-BnCE0C_W.js";import"./_baseMap-CSY_I1bl.js";import"./_baseEach-B08SIf5n.js";import"./useQueries-DH-E2OAK.js";import"./useInfiniteQuery-Cpo1uBE7.js";import"./groupBy-QuWA7jrD.js";import"./_createAggregator-cLZY8Cmq.js";import"./DialogBase-DD_PbrBf.js";import"./Close-BRTzwidq.js";import"./HelpPopover-C4PJJkqz.js";import"./MarkdownPopover-D-gx4RgI.js";import"./LightTooltip-BJLQph6o.js";import"./MarkdownSynapse-CTWmq3WF.js";import"./SkeletonButton-B0ZXgmWW.js";import"./SkeletonInlineBlock-DKm9jtot.js";import"./SkeletonTable-DEcRya5M.js";import"./SkeletonParagraph-CRVUa_L6.js";import"./EntityLink-Dwu4Plo3.js";import"./useEntity-cRx-7M0H.js";import"./pickBy-BqKuxUXO.js";import"./isString-BPiNTGH7.js";import"./useSuspenseQuery-CA-nz-xS.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CUeRAjYH.js";import"./useGetEntityHeaders-viC2TRhx.js";import"./EntityIcon-DWyr-mh-.js";import"./ErrorChip-00tA-ErF.js";import"./Chip-BjrahEkE.js";import"./UserOrTeamBadge-CqbjpjNp.js";import"./UserBadge-CPPowmDC.js";import"./useUserBundle-DV8uACsM.js";import"./MenuItem-FQcUK81X.js";import"./Card-CC0cQVjk.js";import"./TeamBadge-E5anLuYV.js";import"./UnmanagedACTAccessRequirementItem-BVZm7l9c.js";import"./RequirementItem-CyXBTEkc.js";import"./LockTwoTone-Cud-oYI_.js";import"./UserSearchBoxV2-C1gAbNl7.js";import"./useDebouncedEffect-BV0l7ju6.js";import"./use-deep-compare-effect.esm-D7KdGUWw.js";import"./uniq-Dpbrz5UI.js";import"./without-85dK_tqQ.js";import"./Select-aab027f3.esm-CqWGu6Ao.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CO6L2aVV.js";import"./SelfSignAccessRequirementItem-D8NAS91p.js";import"./DataAccessRequestAccessorsFilesForm-DyFc9IO4.js";import"./enums-BOGERhLR.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-6l6KCO3o.js";import"./RadioGroup-BNfS6JyW.js";import"./Radio-DzfQI0TU.js";import"./SwitchBase-Di4Jykwp.js";import"./FormGroup-Cz9_UP-H.js";import"./FormControlLabel-BNnxMy1P.js";import"./UploadDocumentField-DOiziIKK.js";import"./FileUpload-13Zf6Vq_.js";import"./ManagedACTAccessRequirementFormWikiWrapper-B18qBACt.js";import"./GridLegacy-DvZSuB_i.js";import"./ResearchProjectForm-CP4qSXtc.js";import"./TextFieldWithWordLimit-BSskKefi.js";import"./AuthenticatedRequirement-ybYmwc8R.js";import"./CertificationRequirement-CaiNaD4M.js";import"./TwoFactorAuthEnabledRequirement-D7extq9C.js";import"./ValidationRequirement-DYR5abIU.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-DK1z3jNw.js";import"./RejectDataAccessRequestModal-e7OixN16.js";import"./CannedRejectionDialog-2NUE7EqZ.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-BD2HXlgs.js";import"./Checkbox-FrSnOx71.js";import"./Grid-CKs3MHRE.js";import"./upperFirst-DASaLF31.js";import"./_stringToArray-Dp3ALTbi.js";const or={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
