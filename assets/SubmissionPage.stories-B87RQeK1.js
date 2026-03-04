import{g as d,k as u,n as t,a3 as c,dN as R,b as e,kn as i,ko as E,H as s,kp as _,p as m,kq as I,kr as S,k6 as O}from"./iframe-DlAeJyvm.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-rpqBnSMM.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BVBlYO8z.js";import"./useAccessRequirements-BSc0_wnd.js";import"./index-CRBkYYcS.js";import"./_baseOrderBy-DSro5dmW.js";import"./_baseIteratee-BeJgVukd.js";import"./_baseMap-CH41Ntgo.js";import"./_baseEach-B3PWukHy.js";import"./useInfiniteQuery-DNMsj4KR.js";import"./groupBy-BgbRYDAy.js";import"./_createAggregator-CWcspDPY.js";import"./DialogBase-BrTsbhWa.js";import"./Close-DIOhH67l.js";import"./HelpPopover-C7aATcX6.js";import"./MarkdownPopover-CipjSExT.js";import"./LightTooltip-D-pIKqvq.js";import"./MarkdownSynapse-DknW4l8A.js";import"./SkeletonButton-BcA4f8OA.js";import"./SkeletonInlineBlock-NsF75vHh.js";import"./SkeletonTable-DPSdTVk3.js";import"./SkeletonParagraph-B7DNR62K.js";import"./EntityLink-CNwmekk3.js";import"./useEntity-C7X-K5Kk.js";import"./pickBy-CQSawNAW.js";import"./isString-DGjPWBPW.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-8qC_DhMP.js";import"./useGetEntityHeaders-DH5dLeKz.js";import"./EntityIcon-BcpDN5oU.js";import"./ErrorChip-DHde-DIc.js";import"./Chip-CopACKXK.js";import"./UserOrTeamBadge-CyhG1qDf.js";import"./UserBadge-CsA0oRzK.js";import"./useUserBundle-BDeD3kk8.js";import"./MenuItem-Bx5CSZWI.js";import"./Card-CJMqK3BG.js";import"./TeamBadge-B424jgK5.js";import"./UnmanagedACTAccessRequirementItem-CTk2CUIB.js";import"./RequirementItem-_jw3YCp5.js";import"./LockTwoTone-Cgh1sYPb.js";import"./UserSearchBoxV2-Z7JOPXSo.js";import"./useDebouncedEffect-DQYyEgn9.js";import"./use-deep-compare-effect.esm-B-RqfxgB.js";import"./uniq-B3YPAm3j.js";import"./without--fuQY8Kw.js";import"./Select-aab027f3.esm-Brd8yHVC.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-Bb6LZ6ju.js";import"./SelfSignAccessRequirementItem-hFkBwMcW.js";import"./DataAccessRequestAccessorsFilesForm-lovk0RtS.js";import"./enums-D3RbDQXJ.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DH-gnOIv.js";import"./RadioGroup-DgRE642y.js";import"./Radio-BocJ6uE_.js";import"./SwitchBase-dZ1Go2iy.js";import"./FormGroup-CdEuxaUS.js";import"./FormControlLabel-BXRXUZd8.js";import"./UploadDocumentField-DS1Lhntv.js";import"./FileUpload-Cn1izAdC.js";import"./ManagedACTAccessRequirementFormWikiWrapper-B2EXBk-W.js";import"./GridLegacy-CUABnJa6.js";import"./ResearchProjectForm-DxIpQzn2.js";import"./TextFieldWithWordLimit-ByQVSQeC.js";import"./AuthenticatedRequirement-CQCsTEGE.js";import"./CertificationRequirement-9mhT850a.js";import"./TwoFactorAuthEnabledRequirement-BWrEKu6o.js";import"./ValidationRequirement-C4AaVkVC.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BVzmDsvq.js";import"./RejectDataAccessRequestModal-DIIZ4pBh.js";import"./CannedRejectionDialog-CZSfv66S.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BREVjTJW.js";import"./Checkbox-BWImtRE8.js";import"./Grid-C5BqjR7G.js";import"./upperFirst-baYGnAZk.js";import"./_stringToArray-CfnqfX_-.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
