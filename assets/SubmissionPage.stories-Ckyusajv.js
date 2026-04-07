import{z as d,b as e,o as u,s,kp as i,kq as c,H as t,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-CkF2RhKN.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DLTRSttf.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DZc0s3vP.js";import"./useAccessRequirements-BLD7zE6A.js";import"./index-Ci6ZMoUD.js";import"./_baseOrderBy-DPTo7phS.js";import"./_baseIteratee-BEB7CkmA.js";import"./_baseMap-DTKDCLFE.js";import"./_baseEach-CNkAXNOm.js";import"./useInfiniteQuery-B7jSsWM4.js";import"./groupBy-8fi1MwwI.js";import"./_createAggregator-BfBp1QZf.js";import"./DialogBase-BynSzgi7.js";import"./Close-C30i0cHB.js";import"./HelpPopover-8yvHKAte.js";import"./MarkdownPopover-ChhMW5W_.js";import"./LightTooltip-C4-8pTH-.js";import"./MarkdownSynapse-CUvWST4S.js";import"./SkeletonButton-szKajW48.js";import"./SkeletonInlineBlock-BHo_rHpz.js";import"./SkeletonTable-_Ae5KVb-.js";import"./SkeletonParagraph-D5pjFcDJ.js";import"./EntityLink-C69yftJQ.js";import"./useEntity-zBm3Or6t.js";import"./pickBy-BbztYAG1.js";import"./isString-B5YIl0UX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-fPh8GeMM.js";import"./useGetEntityHeaders-Cg5AohM_.js";import"./EntityIcon-DskuIoEL.js";import"./ErrorChip-yrC8bCfM.js";import"./Chip-BzTGJFEB.js";import"./UserOrTeamBadge-Captg1T4.js";import"./UserBadge-Yb-L8AxF.js";import"./useUserBundle-DQZHVi7_.js";import"./MenuItem-Bn_zQ0BD.js";import"./Card-BR9tyc2m.js";import"./TeamBadge-CP0KEZeR.js";import"./UnmanagedACTAccessRequirementItem-BFNOMshb.js";import"./RequirementItem-CPhUa70y.js";import"./LockTwoTone-CmLoPlVQ.js";import"./ManagedACTAccessRequirementItemView-CD3X-Mo-.js";import"./SelfSignAccessRequirementItem-DKfpIUrb.js";import"./DataAccessRequestAccessorsFilesForm-WSfJFYgs.js";import"./enums-4tIhtR9A.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-BQf6mj1k.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-Dbbbyn99.js";import"./UserSearchBox-Bo06dWcK.js";import"./useDebouncedEffect-BbJaYsWC.js";import"./Autocomplete-BYnMiYQ2.js";import"./usePreviousProps-DoqDJIYb.js";import"./RadioGroup-CoaKiYED.js";import"./Radio-zariHem2.js";import"./SwitchBase-Cfp9yLa-.js";import"./FormGroup-BR5FRJsD.js";import"./FormControlLabel-CvAqaT5C.js";import"./UploadDocumentField-DCRl0obj.js";import"./FileUpload-Cj1LncUC.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BfCAr9i0.js";import"./GridLegacy-DC6clkfb.js";import"./ResearchProjectForm-w7GRTAt9.js";import"./TextFieldWithWordLimit-DvQSX3o5.js";import"./AuthenticatedRequirement-D6b-IxBM.js";import"./CertificationRequirement-RVM-b8RJ.js";import"./TwoFactorAuthEnabledRequirement-Slk4zaWa.js";import"./ValidationRequirement-FEg4iKHr.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-13CwZ8nN.js";import"./RejectDataAccessRequestModal-D3jRbf7j.js";import"./CannedRejectionDialog-CWpH4hvL.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-Dx2givAp.js";import"./Checkbox-BYhyDoP4.js";import"./Grid-bBoM1obv.js";import"./upperFirst-DvMIqR2L.js";import"./_stringToArray-DswosarG.js";const Le={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const xe=["Demo","DemoError"];export{o as Demo,n as DemoError,xe as __namedExportsOrder,Le as default};
