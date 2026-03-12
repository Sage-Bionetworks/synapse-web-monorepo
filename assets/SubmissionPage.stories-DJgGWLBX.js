import{g as u,k as d,n as t,a3 as c,dP as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-Dj9QuIYm.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-ChBh1yMp.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DTKPuyHl.js";import"./useAccessRequirements-BZitSFn0.js";import"./index-BLkPSDKJ.js";import"./_baseOrderBy-YfcBlpNZ.js";import"./_baseIteratee-DhNtCOv6.js";import"./_baseMap-D-dsez5o.js";import"./_baseEach-DeWBIhgR.js";import"./useInfiniteQuery-BlRW4UqT.js";import"./groupBy-B2oDL6Us.js";import"./_createAggregator-BD4qq2vZ.js";import"./DialogBase-Dda3MpTM.js";import"./Close-BjHtaxrZ.js";import"./HelpPopover-BLYAVpYE.js";import"./MarkdownPopover-CcYcEdRz.js";import"./LightTooltip-e6_OdOFE.js";import"./MarkdownSynapse-Dau4XtwA.js";import"./SkeletonButton-iTrOeh7-.js";import"./SkeletonInlineBlock-D2uK1sRl.js";import"./SkeletonTable-rcTO73Uk.js";import"./SkeletonParagraph-8dZQFouk.js";import"./EntityLink-BgNMX2HM.js";import"./useEntity-DrsXJrOv.js";import"./pickBy-C7zQ5L4o.js";import"./isString-CL_Uwcm1.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C6D_Cjqk.js";import"./useGetEntityHeaders-BVfG_zwT.js";import"./EntityIcon-CzNv8YIT.js";import"./ErrorChip-Bxrb9m2k.js";import"./Chip-Dc-U4nz3.js";import"./UserOrTeamBadge-BdPFnvvK.js";import"./UserBadge-DfzXK9k4.js";import"./useUserBundle-Be3ZpYDW.js";import"./MenuItem-Bpg2cwa6.js";import"./Card-Cb_raR4S.js";import"./TeamBadge-DHNGO4Qd.js";import"./UnmanagedACTAccessRequirementItem-CP12dKbI.js";import"./RequirementItem-SAyXPuEv.js";import"./LockTwoTone-D0g1T4ty.js";import"./UserSearchBoxV2-C1rywZBK.js";import"./useDebouncedEffect-CgExOeZy.js";import"./use-deep-compare-effect.esm-BBRMHuiL.js";import"./uniq-JQnUvl5O.js";import"./without-CiMSo5Rm.js";import"./Select-aab027f3.esm-B68ReLdP.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-C5UuBVoT.js";import"./SelfSignAccessRequirementItem-CGtFTUMZ.js";import"./DataAccessRequestAccessorsFilesForm-DUF8bs_V.js";import"./enums-4hiO-BJ2.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-gB38uxWn.js";import"./RadioGroup-BfsvTYnz.js";import"./Radio-MiNAji5a.js";import"./SwitchBase-DytbKUAu.js";import"./FormGroup-CC1gpdv9.js";import"./FormControlLabel-CPoAf6VC.js";import"./UploadDocumentField-BQHt0b1_.js";import"./FileUpload-CWuBppd2.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CeiXePG1.js";import"./GridLegacy-BlgbOu1D.js";import"./ResearchProjectForm-KD_X3CkA.js";import"./TextFieldWithWordLimit-BdyLD0-R.js";import"./AuthenticatedRequirement-ihw6TbwK.js";import"./CertificationRequirement-B4hacqO4.js";import"./TwoFactorAuthEnabledRequirement-BwgaVF97.js";import"./ValidationRequirement-CdHz_DkC.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CALa4Uvb.js";import"./RejectDataAccessRequestModal-iQ9X2hyJ.js";import"./CannedRejectionDialog-BdOEzzUN.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Dwbyyygg.js";import"./Checkbox-DGSgr0_P.js";import"./Grid-PsRNIPe8.js";import"./upperFirst-DgSPYpL1.js";import"./_stringToArray-TRT7oDH7.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
