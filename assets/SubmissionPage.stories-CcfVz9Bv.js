import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-DvEsUTpQ.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BwAf7Ytq.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-B5xj8QUV.js";import"./useAccessRequirements-CMxA9Cat.js";import"./index-BttQD56F.js";import"./_baseOrderBy-C9TUMrXe.js";import"./_baseIteratee-D3bhaGJS.js";import"./_baseMap-CAOUDwt_.js";import"./_baseEach-C5Fi7LFB.js";import"./useInfiniteQuery-BdEWda9R.js";import"./groupBy-uitZDKlw.js";import"./_createAggregator-BYSMAyVR.js";import"./DialogBase-DjSguv9P.js";import"./Close-g9h1bwgZ.js";import"./HelpPopover-KzPfIUfL.js";import"./MarkdownPopover-zfAn5NTB.js";import"./LightTooltip-CPlesbUn.js";import"./MarkdownSynapse-G6S7jkSU.js";import"./SkeletonButton-Dd7TiKIa.js";import"./SkeletonInlineBlock-D94lxhr7.js";import"./SkeletonTable-Dt5bLLrY.js";import"./SkeletonParagraph-lw_IwEhg.js";import"./EntityLink-BrrA0mFV.js";import"./useEntity-D0ug6J_E.js";import"./pickBy-CaZCapPb.js";import"./isString-2mlaZJEb.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-X871VZH0.js";import"./useGetEntityHeaders-N74AiYsD.js";import"./EntityIcon-BI_XR1kg.js";import"./ErrorChip-v4kVcs9c.js";import"./Chip-DM8j9a4z.js";import"./UserOrTeamBadge-0BTY_3It.js";import"./UserBadge-CXcwNTSZ.js";import"./useUserBundle-wmllpVgG.js";import"./MenuItem-DvqM882a.js";import"./Card-BwCmC7e8.js";import"./TeamBadge-ByzWbxf6.js";import"./UnmanagedACTAccessRequirementItem-BYEXDXm7.js";import"./RequirementItem-CywwGgxe.js";import"./CheckTwoTone-Bi-Igfqz.js";import"./ManagedACTAccessRequirementItemView-CUYLyYAN.js";import"./SelfSignAccessRequirementItem-CznBKC55.js";import"./DataAccessRequestAccessorsFilesForm-DJJZkO3-.js";import"./enums-D_cQ5J2h.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-C5TQ7vY4.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-sN81X-69.js";import"./UserSearchBox-BFvB_JQM.js";import"./useDebouncedEffect-BDsgsjuQ.js";import"./Autocomplete-BY5e0fcm.js";import"./usePreviousProps-Blw-B0Rc.js";import"./RadioGroup-BzKki668.js";import"./Radio-DEn_Buu3.js";import"./SwitchBase-jh5RIPFl.js";import"./FormGroup-z77k8kTs.js";import"./FormControlLabel-BcuVfQyz.js";import"./UploadDocumentField-Dwbwd75o.js";import"./FileUpload-BRw3JLjf.js";import"./ManagedACTAccessRequirementFormWikiWrapper-B3RmfWAF.js";import"./GridLegacy-xFilL_TL.js";import"./ResearchProjectForm-D6OuSdZ0.js";import"./TextFieldWithWordLimit-CuyeBbCe.js";import"./AuthenticatedRequirement-0LrqtDi4.js";import"./CertificationRequirement-Bd0YMwjD.js";import"./TwoFactorAuthEnabledRequirement-CdBrWzHG.js";import"./ValidationRequirement-DxkHeHio.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DqZkfF7n.js";import"./RejectDataAccessRequestModal-HeJSC4b9.js";import"./CannedRejectionDialog-D2-UJ37j.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-DkIXQsLU.js";import"./Checkbox-Cq6VSCz7.js";import"./Grid-CjxcWtBh.js";import"./upperFirst-Bns2QFJV.js";import"./_stringToArray-BfD7RTLk.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Je=["Demo","DemoError"];export{o as Demo,n as DemoError,Je as __namedExportsOrder,xe as default};
