import{g as d,k as u,n as t,a3 as c,dN as R,b as e,kn as i,ko as E,H as s,kp as _,p as m,kq as I,kr as S,k6 as O}from"./iframe-BkPHOFWj.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DZOU13A-.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-D1AFt68D.js";import"./useAccessRequirements-DqQWUE3-.js";import"./index-ZxbTHjgY.js";import"./_baseOrderBy-jU331Xzb.js";import"./_baseIteratee-DcTN9bCB.js";import"./_baseMap-BJs1A3zN.js";import"./_baseEach-v_Rhmx0E.js";import"./useInfiniteQuery-CnlPE4i8.js";import"./groupBy-xiLGOgwD.js";import"./_createAggregator-CZlwTSm2.js";import"./DialogBase-BfMmSQyK.js";import"./Close-DeRoSJW0.js";import"./HelpPopover-D25ENwTX.js";import"./MarkdownPopover-CcRV06SZ.js";import"./LightTooltip-Cy8km7pR.js";import"./MarkdownSynapse-HVoFGBlz.js";import"./SkeletonButton-Du8eM1ph.js";import"./SkeletonInlineBlock-DNcFzW0b.js";import"./SkeletonTable-byD91yhK.js";import"./SkeletonParagraph-Bk8dDX0J.js";import"./EntityLink-sQQ3bXXN.js";import"./useEntity-B0KS4UYv.js";import"./pickBy-CmcKUwMm.js";import"./isString-COEEFKQl.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CEgBR25T.js";import"./useGetEntityHeaders-B00W8uXq.js";import"./EntityIcon-C5zNp4qx.js";import"./ErrorChip-DQbtc_bx.js";import"./Chip-C5nNw1tU.js";import"./UserOrTeamBadge-CwJSnHH9.js";import"./UserBadge-DzJeSzo3.js";import"./useUserBundle-BSvNFjH2.js";import"./MenuItem-BtphKdVT.js";import"./Card-Banr9iBM.js";import"./TeamBadge-nxRzYlw2.js";import"./UnmanagedACTAccessRequirementItem-D9RJrMme.js";import"./RequirementItem--Sn5XG_1.js";import"./LockTwoTone-DbrgKkED.js";import"./UserSearchBoxV2-Cw0uWHxE.js";import"./useDebouncedEffect-BbAe7f2V.js";import"./use-deep-compare-effect.esm-PGsQh5wx.js";import"./uniq-YIXh5BiE.js";import"./without-f8XiLPM3.js";import"./Select-aab027f3.esm-BJpja8k1.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DSYnPG_R.js";import"./SelfSignAccessRequirementItem-B6vG5DKW.js";import"./DataAccessRequestAccessorsFilesForm-C3eIENjj.js";import"./enums-ItigRlIe.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CM4J_lQO.js";import"./RadioGroup-_8YVa_aB.js";import"./Radio-CV57SEmK.js";import"./SwitchBase-BEG0UBNi.js";import"./FormGroup-kAZ1gLdT.js";import"./FormControlLabel-NsEZC7sm.js";import"./UploadDocumentField-DgFuabc0.js";import"./FileUpload-DjXjamNg.js";import"./ManagedACTAccessRequirementFormWikiWrapper-ByXb2OYz.js";import"./GridLegacy-CNU_lLpN.js";import"./ResearchProjectForm-C94xUGLu.js";import"./TextFieldWithWordLimit-Db3KaOb6.js";import"./AuthenticatedRequirement-BfirGwBe.js";import"./CertificationRequirement-DcF0VRL8.js";import"./TwoFactorAuthEnabledRequirement-B961kS1E.js";import"./ValidationRequirement-DBKumCgA.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DuZQxWvh.js";import"./RejectDataAccessRequestModal-CWPE5vGn.js";import"./CannedRejectionDialog-C0W4yMsx.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Ba_H-keT.js";import"./Checkbox-3MctZvwC.js";import"./Grid-xxQroJ24.js";import"./upperFirst-DXYG7wRm.js";import"./_stringToArray-Qnu1McrL.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
