import{z as u,b as e,o as d,s as t,kq as i,kr as c,H as s,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-C6yCTbiI.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BpJvUvK8.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DjRSl0Us.js";import"./useAccessRequirements-CCqxr0YG.js";import"./index-B3SxQMwi.js";import"./_baseOrderBy-GdORY4lT.js";import"./_baseIteratee-PNjmm_hH.js";import"./_baseMap-Bc4yxRDs.js";import"./_baseEach-qqIK4uJJ.js";import"./useInfiniteQuery-87POMCNY.js";import"./groupBy-qNYnuUss.js";import"./_createAggregator-CdrkCsnc.js";import"./DialogBase-Blh69WLu.js";import"./Close-ZVMj15KJ.js";import"./HelpPopover-CL5CAAmH.js";import"./MarkdownPopover-CU_-CB6C.js";import"./LightTooltip-COIY3s5G.js";import"./MarkdownSynapse-BPE6Gggh.js";import"./SkeletonButton-BSw7ANLA.js";import"./SkeletonInlineBlock-kzXVwRpV.js";import"./SkeletonTable-BTe-OCwr.js";import"./SkeletonParagraph-CZqj6TP0.js";import"./EntityLink-8bCD8DqD.js";import"./useEntity-D7yOxlls.js";import"./pickBy-C9S9PEhh.js";import"./isString-DiBu6olv.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-bQN7DN24.js";import"./useGetEntityHeaders-j9DuqtXW.js";import"./EntityIcon-8twCmtwn.js";import"./ErrorChip-BZTWg8dZ.js";import"./Chip-DN5j6xVl.js";import"./UserOrTeamBadge-h5u6cOGp.js";import"./useUserGroupHeader-5j2MpiwC.js";import"./TeamBadge-DjzEAR1Q.js";import"./UserBadge-CJBcuBDD.js";import"./useUserBundle-BUCs7RFl.js";import"./MenuItem-CKNKfHkT.js";import"./Card-CwMidbhG.js";import"./UnmanagedACTAccessRequirementItem-CjdiQJxl.js";import"./RequirementItem-E8DjuyWF.js";import"./CheckTwoTone-BVX2_Aoy.js";import"./ManagedACTAccessRequirementItemView-CJhv4cdy.js";import"./SelfSignAccessRequirementItem-CZ_DQV9g.js";import"./DataAccessRequestAccessorsFilesForm-Bg4C9_0Y.js";import"./enums-BJnuL9zs.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-c37ck-8z.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-D3OBjA2O.js";import"./UserSearchBox-C6uo6-Wd.js";import"./useDebouncedEffect-8bCRJRcE.js";import"./Autocomplete-BsHfqsAU.js";import"./usePreviousProps-BlssNkvg.js";import"./RadioGroup-D5iDnSEE.js";import"./Radio-B1Nj13eJ.js";import"./SwitchBase-C0tFzd3x.js";import"./FormGroup-kIgz71P_.js";import"./FormControlLabel-blAWuUdq.js";import"./UploadDocumentField-CTAjCatz.js";import"./FileUpload-AKKpimkv.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DLvMWv6w.js";import"./GridLegacy-Dnt2SI7J.js";import"./ResearchProjectForm-Ckq-Qin2.js";import"./TextFieldWithWordLimit-XXzfMLMx.js";import"./AuthenticatedRequirement-CJWwxCN6.js";import"./CertificationRequirement-6KZM-oPW.js";import"./TwoFactorAuthEnabledRequirement-BhDOtOEo.js";import"./ValidationRequirement-ChwkoaqZ.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BzaaAw3C.js";import"./RejectDataAccessRequestModal-Bn_bFM4t.js";import"./CannedRejectionDialog-B4JT-W9z.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-BfhgLdtZ.js";import"./Checkbox-BvslvcYh.js";import"./Grid-BC0gKlm6.js";import"./upperFirst-CUHxV2tZ.js";import"./_stringToArray-SuWKZAoM.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ve=["Demo","DemoError"];export{o as Demo,n as DemoError,Ve as __namedExportsOrder,Je as default};
