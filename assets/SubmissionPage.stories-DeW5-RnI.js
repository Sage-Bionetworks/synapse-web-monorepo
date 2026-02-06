import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kt as i,ku as E,H as s,kv as _,p as m,kw as I,kx as S,kc as O}from"./iframe-C4lSw8dA.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CtQv4nQ9.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-8sidFzfM.js";import"./useAccessRequirements-i7i48aF5.js";import"./index-CqEyw7E1.js";import"./_baseOrderBy-pp83PfhM.js";import"./_baseIteratee-CUB4KFzE.js";import"./_baseMap-C_lzQBLM.js";import"./_baseEach-BmGA1jR6.js";import"./useQueries-BAA7F4tv.js";import"./useInfiniteQuery-hSCmVKD_.js";import"./groupBy-Cscox_QO.js";import"./_createAggregator-KdqLVw7K.js";import"./DialogBase-BGApbNeN.js";import"./Close-DOQSFODY.js";import"./HelpPopover-udz6cmYg.js";import"./MarkdownPopover-DRlkQ0Uc.js";import"./LightTooltip-PrPowMcP.js";import"./MarkdownSynapse-5q-2r_5x.js";import"./SkeletonButton-DQJTIZ4j.js";import"./SkeletonInlineBlock-Ca77zW6S.js";import"./SkeletonTable-DX2YYbbP.js";import"./SkeletonParagraph-DJj1jg11.js";import"./EntityLink-DeOYYDcW.js";import"./useEntity-BOvtRLHU.js";import"./pickBy-BBo1C8Gn.js";import"./isString-r_pENBR9.js";import"./useSuspenseQuery-BJTnPWwx.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BbK6omeJ.js";import"./useGetEntityHeaders-fr9_UAnK.js";import"./EntityIcon-CNzn9o56.js";import"./ErrorChip-fiBrD16s.js";import"./Chip-DcvWAm0_.js";import"./UserOrTeamBadge-CUry0G34.js";import"./UserBadge-VtFaPIRZ.js";import"./useUserBundle-Bf0KeHHn.js";import"./MenuItem-CAS1AQKd.js";import"./Card-LQfA9qvB.js";import"./TeamBadge-RlGheiuM.js";import"./UnmanagedACTAccessRequirementItem-CYALGmF7.js";import"./RequirementItem-imh1HbWi.js";import"./LockTwoTone-CObejl6R.js";import"./UserSearchBoxV2-CfSNl0yz.js";import"./useDebouncedEffect-Cwq3m9f6.js";import"./use-deep-compare-effect.esm-CJ1j3mV5.js";import"./uniq-DUlxy5si.js";import"./without-ss0ZYkjn.js";import"./Select-aab027f3.esm-BDAnKjR5.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-SsKs3CJY.js";import"./SelfSignAccessRequirementItem-D1rmuwxI.js";import"./DataAccessRequestAccessorsFilesForm-BY9UpaCQ.js";import"./enums-DFwrDOyk.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-GUGWa0Bp.js";import"./RadioGroup-YkIKu7Pz.js";import"./Radio-CmBTIB8X.js";import"./SwitchBase-BGp01RgN.js";import"./FormGroup-BrBMb250.js";import"./FormControlLabel-BubwgkEy.js";import"./UploadDocumentField-B-7ZfG3I.js";import"./FileUpload-DG2qZ-Hs.js";import"./ManagedACTAccessRequirementFormWikiWrapper-xM-gkOlH.js";import"./GridLegacy-UiVQPV1H.js";import"./ResearchProjectForm-CYRPyxjc.js";import"./TextFieldWithWordLimit-CXqFFIcK.js";import"./AuthenticatedRequirement-nUx0t2fW.js";import"./CertificationRequirement-MNJfoCDP.js";import"./TwoFactorAuthEnabledRequirement-iuuXX9Wy.js";import"./ValidationRequirement-jL9-mb4b.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DdikFCsl.js";import"./RejectDataAccessRequestModal-DUR3TwAy.js";import"./CannedRejectionDialog-CkOGgzlq.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-DNAmwDFA.js";import"./Checkbox-nj0rGzbP.js";import"./Grid-BGiVsMZH.js";import"./upperFirst-gou6TFmF.js";import"./_stringToArray-DNsFWx6-.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
