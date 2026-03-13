import{g as u,k as d,n as t,a3 as c,dP as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-DMCVtv3C.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DSuoA-xn.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-uWqxj9bd.js";import"./useAccessRequirements-DW2ctlq7.js";import"./index-dVTjtAYj.js";import"./_baseOrderBy-Bt6OsKEx.js";import"./_baseIteratee-C328X4kO.js";import"./_baseMap-CqR0YY-2.js";import"./_baseEach-L2UrfanQ.js";import"./useInfiniteQuery-BJNbTrM6.js";import"./groupBy-BBl0erWG.js";import"./_createAggregator-Cuh-0GBz.js";import"./DialogBase-DFfEYCmA.js";import"./Close-C_COaT7z.js";import"./HelpPopover-C0wJkpLA.js";import"./MarkdownPopover-C9Px5Cb6.js";import"./LightTooltip-BxHujysT.js";import"./MarkdownSynapse-Ceq1ADMf.js";import"./SkeletonButton-DUnRwbBy.js";import"./SkeletonInlineBlock-BvYhcS6U.js";import"./SkeletonTable-IfcvYixP.js";import"./SkeletonParagraph-DBOvbC1y.js";import"./EntityLink-x9jTWVRv.js";import"./useEntity-ixiKDUMF.js";import"./pickBy-DkbDPg0c.js";import"./isString-72zFrImG.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CwI3mobv.js";import"./useGetEntityHeaders-erWP6tCt.js";import"./EntityIcon-DDRj1oZi.js";import"./ErrorChip-Dq5Jks0o.js";import"./Chip-U5DUeNga.js";import"./UserOrTeamBadge-DbQF_63d.js";import"./UserBadge-Da6ct2Rq.js";import"./useUserBundle-zBSwUa6X.js";import"./MenuItem-C6FnBLsu.js";import"./Card-3uIRYSsK.js";import"./TeamBadge-uhOpMpqh.js";import"./UnmanagedACTAccessRequirementItem-BCJgcNh5.js";import"./RequirementItem-CXTRCTfE.js";import"./LockTwoTone-BLJa8jPl.js";import"./UserSearchBoxV2-CFoD4tL0.js";import"./useDebouncedEffect-D01tpaMV.js";import"./use-deep-compare-effect.esm-2eBdksMj.js";import"./uniq-CjSpefvW.js";import"./without-ND3uA18G.js";import"./Select-aab027f3.esm-CZ7vEBrD.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BOC-tZC5.js";import"./SelfSignAccessRequirementItem-BTuNzMoZ.js";import"./DataAccessRequestAccessorsFilesForm-a9Cq8oFw.js";import"./enums-BO_dGRAH.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DOKwgFxJ.js";import"./RadioGroup-vzTaSqYK.js";import"./Radio-DNTroSdi.js";import"./SwitchBase-CZ_AC8D4.js";import"./FormGroup-Ckf5a08v.js";import"./FormControlLabel-lt0TjqJi.js";import"./UploadDocumentField-hLz36w4Y.js";import"./FileUpload-DsQ216JW.js";import"./ManagedACTAccessRequirementFormWikiWrapper-S0OgwUhn.js";import"./GridLegacy-CYa3I1w0.js";import"./ResearchProjectForm-tdFy4YFG.js";import"./TextFieldWithWordLimit-Dh9oSKtZ.js";import"./AuthenticatedRequirement-B5zj37mi.js";import"./CertificationRequirement-pSEsH6_T.js";import"./TwoFactorAuthEnabledRequirement-BSyfXker.js";import"./ValidationRequirement-DLLJmvLh.js";import"./duration-DbmI10NM.js";import"./FileHandleLink--WrSKkac.js";import"./RejectDataAccessRequestModal-C3h26zJk.js";import"./CannedRejectionDialog-D_a9Qy0C.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CKyFVG8s.js";import"./Checkbox-DcdUAgDt.js";import"./Grid-B6Ri9mCx.js";import"./upperFirst-DR0-I7mP.js";import"./_stringToArray-doN_pRsz.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ze=["Demo","DemoError"];export{o as Demo,n as DemoError,Ze as __namedExportsOrder,Ve as default};
