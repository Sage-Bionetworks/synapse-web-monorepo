import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kt as i,ku as E,H as s,kv as _,p as m,kw as I,kx as S,kc as O}from"./iframe-CS-qe6F5.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Gu40fdYk.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DVKR4FYR.js";import"./useAccessRequirements-dXP3fsXx.js";import"./index-DshQ37pH.js";import"./_baseOrderBy-CVJcvRpU.js";import"./_baseIteratee-Bajx_U4R.js";import"./_baseMap-CCpY8ocF.js";import"./_baseEach-B_Uh_NTp.js";import"./useQueries-DFD7lTHh.js";import"./useInfiniteQuery-CgiD7N7J.js";import"./groupBy-DorK-ATy.js";import"./_createAggregator-BKRAGl-H.js";import"./DialogBase-DndsSZnx.js";import"./Close-ChktzVWU.js";import"./HelpPopover-BgVCOrU-.js";import"./MarkdownPopover-DjcyZTOi.js";import"./LightTooltip-Cbj-L_pp.js";import"./MarkdownSynapse-CpxRP6ef.js";import"./SkeletonButton-B9T2RRww.js";import"./SkeletonInlineBlock-BdSvJBN8.js";import"./SkeletonTable-BzgRcoI4.js";import"./SkeletonParagraph-B9Sr-CD_.js";import"./EntityLink-Dr7UWh95.js";import"./useEntity-CEovt95A.js";import"./pickBy-D3anvpoD.js";import"./isString-DPWYiFta.js";import"./useSuspenseQuery-CKSmV4Hq.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DE-sM5d8.js";import"./useGetEntityHeaders-BXxgwFoH.js";import"./EntityIcon-DsLfREd8.js";import"./ErrorChip-Dx-8h8HL.js";import"./Chip-CoY3YmCv.js";import"./UserOrTeamBadge-3bEfhsgI.js";import"./UserBadge-CPqjkhqx.js";import"./useUserBundle-BGH5snWH.js";import"./MenuItem-BPeQWsLy.js";import"./Card-Dq8qCxDo.js";import"./TeamBadge-D7QbpNTd.js";import"./UnmanagedACTAccessRequirementItem-KvhpQwmj.js";import"./RequirementItem-iJW2Yiik.js";import"./LockTwoTone-CBedJpBG.js";import"./UserSearchBoxV2-BOVbwRJK.js";import"./useDebouncedEffect-vmqQtGA7.js";import"./use-deep-compare-effect.esm-CleOU24F.js";import"./uniq-BiXysGL5.js";import"./without-DhZEKDqd.js";import"./Select-aab027f3.esm-Bqo-zSmT.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CS2BVUtx.js";import"./SelfSignAccessRequirementItem-HIu7mV2B.js";import"./DataAccessRequestAccessorsFilesForm-Bvz89gnZ.js";import"./enums-BUpU8v7D.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DbCA-qiN.js";import"./RadioGroup-3WZ3IRxK.js";import"./Radio-CjaQd6Gi.js";import"./SwitchBase-C9mMDdEY.js";import"./FormGroup-BBnXWAtZ.js";import"./FormControlLabel-Cva61uz-.js";import"./UploadDocumentField-BJxRMHtf.js";import"./FileUpload-DVakNsxL.js";import"./ManagedACTAccessRequirementFormWikiWrapper-C3P73KMT.js";import"./GridLegacy-BrSL0tzv.js";import"./ResearchProjectForm-DJu_nn9o.js";import"./TextFieldWithWordLimit-BU6kUe8T.js";import"./AuthenticatedRequirement-CtQUt66W.js";import"./CertificationRequirement-DSoOH4PD.js";import"./TwoFactorAuthEnabledRequirement-ERdi0wCE.js";import"./ValidationRequirement-jgRX1zbD.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DPviU-oI.js";import"./RejectDataAccessRequestModal-CIDprtzY.js";import"./CannedRejectionDialog-CEtPUNCf.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-C8o9i-8I.js";import"./Checkbox-B1DJC-Zw.js";import"./Grid-zhl3ip_T.js";import"./upperFirst-CcYiAaya.js";import"./_stringToArray-D6JwN9f-.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
