import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-BulltPlS.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Bnu5BIJn.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Bapil44X.js";import"./useAccessRequirements-CaLt4H2F.js";import"./index-cwz30I0r.js";import"./_baseOrderBy-BF5JbbBu.js";import"./_baseIteratee-ypnnxg3G.js";import"./_baseMap-D-3mppFr.js";import"./_baseEach-rWqQ2DGz.js";import"./useQueries-CWxE_GlV.js";import"./useInfiniteQuery-pUjrcR8S.js";import"./groupBy-D_42ZZ3o.js";import"./_createAggregator-DpNBgXV2.js";import"./DialogBase-Cr1fkWqi.js";import"./Close-w80hutFi.js";import"./HelpPopover-CunOOZhM.js";import"./MarkdownPopover-CmTONRcK.js";import"./LightTooltip-CEqUG5nY.js";import"./MarkdownSynapse-BTFSrs3B.js";import"./SkeletonButton-DU72c3M6.js";import"./SkeletonInlineBlock-BXxRvNES.js";import"./SkeletonTable-BgsdlaOw.js";import"./SkeletonParagraph-DH5smUkj.js";import"./EntityLink-BefyLgsH.js";import"./useEntity-BiGeOlwx.js";import"./pickBy-5lAUttHe.js";import"./isString-CghkokNG.js";import"./useSuspenseQuery-BZkq8k4a.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DtiXNmfa.js";import"./useGetEntityHeaders-DIZD46j1.js";import"./EntityIcon-l5C315up.js";import"./ErrorChip-BET0LyWL.js";import"./Chip-CTw5NN0f.js";import"./UserOrTeamBadge-C9N5zDOT.js";import"./UserBadge-D_SsYAs-.js";import"./useUserBundle-CcfPRMN_.js";import"./MenuItem-Bei-3O4r.js";import"./Card-D0SjsU8p.js";import"./TeamBadge-D03ZMP3U.js";import"./UnmanagedACTAccessRequirementItem-ByiN-E9f.js";import"./RequirementItem-DIpj9N8Z.js";import"./LockTwoTone-COOW9vlh.js";import"./UserSearchBoxV2-CS_BjkRI.js";import"./useDebouncedEffect-mNoEBO6R.js";import"./use-deep-compare-effect.esm-CRzzaWpz.js";import"./uniq-JbDHZws-.js";import"./without-BN0sdvCW.js";import"./Select-aab027f3.esm-pPDAZiRC.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BrcYWWpT.js";import"./SelfSignAccessRequirementItem-CmCVI2Kw.js";import"./DataAccessRequestAccessorsFilesForm-Chv7j7zZ.js";import"./enums-c4kqRV0L.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DbGzL5QD.js";import"./RadioGroup-DXlgXmIT.js";import"./Radio-jhDBv7Kl.js";import"./SwitchBase-h1Twos_B.js";import"./FormGroup-Fa2srLl2.js";import"./FormControlLabel-Bk9p_aTk.js";import"./UploadDocumentField-BWQR8mki.js";import"./FileUpload-CjMhe5FN.js";import"./ManagedACTAccessRequirementFormWikiWrapper-D4CKdFlV.js";import"./GridLegacy-CNu-HYfr.js";import"./ResearchProjectForm-csJ_tHWC.js";import"./TextFieldWithWordLimit-BpxDZtVj.js";import"./AuthenticatedRequirement-DQidNo1M.js";import"./CertificationRequirement-Btr6x7u5.js";import"./TwoFactorAuthEnabledRequirement-1Mh4XYDy.js";import"./ValidationRequirement-CCNVntRC.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BJOoU2tU.js";import"./RejectDataAccessRequestModal-DWQ6lT4k.js";import"./CannedRejectionDialog-DEL60nnw.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-DF03K_WP.js";import"./Checkbox-BglXU7WT.js";import"./Grid-DJFemF4m.js";import"./upperFirst-rFyesoIf.js";import"./_stringToArray-356kxppb.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Xe=["Demo","DemoError"];export{o as Demo,n as DemoError,Xe as __namedExportsOrder,ze as default};
