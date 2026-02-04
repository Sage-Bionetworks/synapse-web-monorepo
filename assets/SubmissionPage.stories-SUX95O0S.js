import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kt as i,ku as E,H as s,kv as _,p as m,kw as I,kx as S,kc as O}from"./iframe-CjPdK8o3.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CBcDU3Jo.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Dbaoq05H.js";import"./useAccessRequirements-DzysjAS8.js";import"./index-DUxszvjk.js";import"./_baseOrderBy-BWPI49fO.js";import"./_baseIteratee-BgCPnYOG.js";import"./_baseMap-CI1anwhT.js";import"./_baseEach-Dk-toVaC.js";import"./useQueries-Dr4qOk9C.js";import"./useInfiniteQuery-CmFbqkY3.js";import"./groupBy-Du23OJgM.js";import"./_createAggregator-BnSvu5Ts.js";import"./DialogBase-A1jvQwLe.js";import"./Close-CHM8bqMs.js";import"./HelpPopover-CCy_vrhC.js";import"./MarkdownPopover-C1vGDBes.js";import"./LightTooltip-DIhtsuRB.js";import"./MarkdownSynapse-CzOnyM4H.js";import"./SkeletonButton-DVgZ4_7g.js";import"./SkeletonInlineBlock-CpcOQN65.js";import"./SkeletonTable-Dem7Lpfl.js";import"./SkeletonParagraph-BeVZ-sFG.js";import"./EntityLink-9vetazXG.js";import"./useEntity-CWLVTGdY.js";import"./pickBy-Bfv3J4LC.js";import"./isString-BzCX1oQo.js";import"./useSuspenseQuery-B-tj7iZo.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-tZBriJuW.js";import"./useGetEntityHeaders-C9iRnJPu.js";import"./EntityIcon-Dresg0YV.js";import"./ErrorChip-DpyjKwR8.js";import"./Chip-CTyQGhqc.js";import"./UserOrTeamBadge-BNvmzAwZ.js";import"./UserBadge-B_i32c0J.js";import"./useUserBundle-Bny1QVf1.js";import"./MenuItem-CjSnBCYE.js";import"./Card-Ebu0uYiu.js";import"./TeamBadge-n2GSz0Pj.js";import"./UnmanagedACTAccessRequirementItem-V_ithEwj.js";import"./RequirementItem-Bot_-BCR.js";import"./LockTwoTone-BVrt_rlU.js";import"./UserSearchBoxV2-Bm9NNhUB.js";import"./useDebouncedEffect-CcOB3v3P.js";import"./use-deep-compare-effect.esm-BkU_Fele.js";import"./uniq-YistsObO.js";import"./without-CWNzqlMy.js";import"./Select-aab027f3.esm-BPCgyOwu.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DhPsbugQ.js";import"./SelfSignAccessRequirementItem-B1GU4Iax.js";import"./DataAccessRequestAccessorsFilesForm-Bfe0vtwn.js";import"./enums-fTPFrbNe.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CZMVI9va.js";import"./RadioGroup-BJX9zPLf.js";import"./Radio-6-Dm--G_.js";import"./SwitchBase-K4adb_Dr.js";import"./FormGroup-CZoa7M63.js";import"./FormControlLabel-BzzdnTQT.js";import"./UploadDocumentField-DfIfNHfK.js";import"./FileUpload-DerxzkmV.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DMLUGhWF.js";import"./GridLegacy-DV1SKjMi.js";import"./ResearchProjectForm-9WVoJyFd.js";import"./TextFieldWithWordLimit-CKDgasl5.js";import"./AuthenticatedRequirement-BrFZSPOt.js";import"./CertificationRequirement-CsVziRTb.js";import"./TwoFactorAuthEnabledRequirement-r_v-gPFl.js";import"./ValidationRequirement-NpAC3Eh1.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BOyDjn_d.js";import"./RejectDataAccessRequestModal-Cmfagt_c.js";import"./CannedRejectionDialog-CxZujO1J.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-7KWUNYWE.js";import"./Checkbox-CzkYRqat.js";import"./Grid-rhRRqfEb.js";import"./upperFirst-BNjyHbKP.js";import"./_stringToArray-DVzLHWIc.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
