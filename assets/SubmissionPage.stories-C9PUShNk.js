import{z as d,b as e,o as u,s as t,kp as i,kq as c,H as s,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-CbfOQY0w.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DSWWx5ih.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-utHa9fhC.js";import"./useAccessRequirements-BjCvcjrD.js";import"./index-BehqIFbh.js";import"./_baseOrderBy-Bq84jisV.js";import"./_baseIteratee-BUemcoB_.js";import"./_baseMap-t8X6kGPE.js";import"./_baseEach-CXb1C926.js";import"./useInfiniteQuery-DwAokM_o.js";import"./groupBy-B7BKwcKL.js";import"./_createAggregator-kAJdVZDU.js";import"./DialogBase-Caocv0xu.js";import"./Close-Cq5UpdYv.js";import"./HelpPopover-D7Lqd1_Q.js";import"./MarkdownPopover-BdMXAVvu.js";import"./LightTooltip-C9p3LJOV.js";import"./MarkdownSynapse-C1Hg73kZ.js";import"./SkeletonButton-DqLe50tO.js";import"./SkeletonInlineBlock-be42gePS.js";import"./SkeletonTable-CE4I0355.js";import"./SkeletonParagraph-CCe-_wHo.js";import"./EntityLink-_Ch3NZV0.js";import"./useEntity-DRZ7RxxJ.js";import"./pickBy-C05ip2Ym.js";import"./isString-BOwKb9L8.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-akzg6b0h.js";import"./useGetEntityHeaders-CZSt48Ny.js";import"./EntityIcon-BdiXZaAK.js";import"./ErrorChip-CHm9b6rc.js";import"./Chip-CeFdaJc8.js";import"./UserOrTeamBadge-Buq1lQsw.js";import"./useUserGroupHeader-CuG0-k8L.js";import"./TeamBadge-DxgMFROE.js";import"./UserBadge-w-7xW1gI.js";import"./useUserBundle-CVhFQva8.js";import"./MenuItem-DYj3mh1g.js";import"./Card-_ZXijILc.js";import"./UnmanagedACTAccessRequirementItem-CodksLNi.js";import"./RequirementItem-C9zy801Y.js";import"./LockTwoTone-BXv1hT7t.js";import"./ManagedACTAccessRequirementItemView-C9oYK7JU.js";import"./SelfSignAccessRequirementItem-BjAOzhl_.js";import"./DataAccessRequestAccessorsFilesForm-ChgYUMRp.js";import"./enums-CthHH61y.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-MmRNm_iH.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-dZu5qwPJ.js";import"./UserSearchBox-DIhvnESP.js";import"./useDebouncedEffect-BNCd82Cz.js";import"./Autocomplete-CpnoKtna.js";import"./usePreviousProps-DKlj7xCm.js";import"./RadioGroup-BAKCW8wr.js";import"./Radio-Brm1V9jp.js";import"./SwitchBase-Bx_c6nyi.js";import"./FormGroup-BSBg9lFh.js";import"./FormControlLabel-DIqi8v8L.js";import"./UploadDocumentField-BizbAniX.js";import"./FileUpload-sj6uC2Tv.js";import"./ManagedACTAccessRequirementFormWikiWrapper-n9mUChoL.js";import"./GridLegacy-BlIfOHGk.js";import"./ResearchProjectForm-Bx9Ghs_D.js";import"./TextFieldWithWordLimit-CjgO7GPv.js";import"./AuthenticatedRequirement-VBkzedDE.js";import"./CertificationRequirement-DHoWLQHt.js";import"./TwoFactorAuthEnabledRequirement-CAsmOdEF.js";import"./ValidationRequirement-Dt0C0kUP.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-C6Sk9CF7.js";import"./RejectDataAccessRequestModal-DLTj1bl5.js";import"./CannedRejectionDialog-DQoVe8HK.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-XDNgseZX.js";import"./Checkbox-DBu6z0UA.js";import"./Grid-CWQWU9Dj.js";import"./upperFirst-uFQz_iGO.js";import"./_stringToArray-Bz039Gju.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
