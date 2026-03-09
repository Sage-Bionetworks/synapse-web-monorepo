import{g as u,k as d,n as t,a3 as c,dP as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-CMt_VWB6.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DQwEq-Hi.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DYibVnXh.js";import"./useAccessRequirements-DaQAx_wL.js";import"./index-CXnGKoIL.js";import"./_baseOrderBy-CkOwEgRy.js";import"./_baseIteratee-B5bSJZ1u.js";import"./_baseMap-CsGQuzjF.js";import"./_baseEach-BoAwORqe.js";import"./useInfiniteQuery-BAQXKU0U.js";import"./groupBy-ljzfDzsB.js";import"./_createAggregator-Cds5u4KH.js";import"./DialogBase-BioY0WeR.js";import"./Close-JIZxqLvI.js";import"./HelpPopover-xOn9G6UQ.js";import"./MarkdownPopover-CsiHNvec.js";import"./LightTooltip-7kZK-MU9.js";import"./MarkdownSynapse-_5g5FMG-.js";import"./SkeletonButton-8Q59D0HR.js";import"./SkeletonInlineBlock-CT1ZajhA.js";import"./SkeletonTable-DytwZ5o7.js";import"./SkeletonParagraph-LH_zBhkQ.js";import"./EntityLink-CVK3UIIT.js";import"./useEntity-DjmvQj1X.js";import"./pickBy-Djb2FVbf.js";import"./isString-ip3O_EYI.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BRn05waU.js";import"./useGetEntityHeaders-C4BI_pXU.js";import"./EntityIcon-C6g3JCkg.js";import"./ErrorChip-BXC1fpnH.js";import"./Chip-CyQCL8kX.js";import"./UserOrTeamBadge-DiAuipIA.js";import"./UserBadge-DsDwTznR.js";import"./useUserBundle-1FwjZewl.js";import"./MenuItem-B3mmchc7.js";import"./Card-D0g3auxF.js";import"./TeamBadge-Bz6GSWOc.js";import"./UnmanagedACTAccessRequirementItem-CuKCP2qm.js";import"./RequirementItem-CbQRxbBx.js";import"./LockTwoTone-D623guFL.js";import"./UserSearchBoxV2-CkHr3Tly.js";import"./useDebouncedEffect-3363Qer5.js";import"./use-deep-compare-effect.esm-YjhISabb.js";import"./uniq-BkGj474s.js";import"./without-CbfXBFeY.js";import"./Select-aab027f3.esm-DoZmslQN.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-D2JAovtq.js";import"./SelfSignAccessRequirementItem-BiffEmm5.js";import"./DataAccessRequestAccessorsFilesForm-B59iavwi.js";import"./enums-CjCYE25A.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-Bi7geyN0.js";import"./RadioGroup-CJ9N852e.js";import"./Radio-CA40ednN.js";import"./SwitchBase-BCjd-8Pb.js";import"./FormGroup-DaIvP2b_.js";import"./FormControlLabel-DGusZH-A.js";import"./UploadDocumentField-CYMna4eH.js";import"./FileUpload-CXXkj6Mj.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CPz3FgMh.js";import"./GridLegacy-BIyRmK1s.js";import"./ResearchProjectForm-BXPlxOLw.js";import"./TextFieldWithWordLimit-D47O1cvm.js";import"./AuthenticatedRequirement-fnOlRAY9.js";import"./CertificationRequirement-BrUbT1A4.js";import"./TwoFactorAuthEnabledRequirement-Dw30sm4L.js";import"./ValidationRequirement-BPrFQbly.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BGR7YI8u.js";import"./RejectDataAccessRequestModal-BLsOIZX-.js";import"./CannedRejectionDialog-CcKasESw.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-DAAIkUCV.js";import"./Checkbox-BbbClNW0.js";import"./Grid-B6aLYPDX.js";import"./upperFirst-CHceWICW.js";import"./_stringToArray-DpQhj-KT.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
