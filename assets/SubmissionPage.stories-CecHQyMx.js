import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-CyTUL3rw.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DOIWgCJ2.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-8Veqj3_w.js";import"./useAccessRequirements-Ch7WIXPD.js";import"./index-BOhc23wR.js";import"./_baseOrderBy-DgA0gRox.js";import"./_baseIteratee-MK8aYcv5.js";import"./_baseMap-B7oG-iip.js";import"./_baseEach-CY-oKdBS.js";import"./useInfiniteQuery-8XDsvgry.js";import"./groupBy-BIwKGyld.js";import"./_createAggregator-DRlj7uNe.js";import"./DialogBase-BmPd6gFD.js";import"./Close-Cs5OhkJ0.js";import"./HelpPopover-Di3M7oAV.js";import"./MarkdownPopover-C7H_W_vs.js";import"./LightTooltip-Br9ozYpY.js";import"./MarkdownSynapse-C3mcPF1h.js";import"./SkeletonButton-DChDzo9i.js";import"./SkeletonInlineBlock-B96TZts7.js";import"./SkeletonTable-BzEL_yMf.js";import"./SkeletonParagraph-D3EKUoCV.js";import"./EntityLink-DAR7F-Pt.js";import"./useEntity-B6hYLHUM.js";import"./pickBy-CfXQfuB9.js";import"./isString-CZ6zp9s2.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-XTC4bn5X.js";import"./useGetEntityHeaders-CXsR7oBP.js";import"./EntityIcon-DJwiE8a7.js";import"./ErrorChip-BtBxDx1a.js";import"./Chip-RUiUFPKg.js";import"./UserOrTeamBadge-DjzQzQEu.js";import"./UserBadge-De5Xgm0G.js";import"./useUserBundle-B9ypisaf.js";import"./MenuItem-48CaJz-o.js";import"./Card-8ssPkC44.js";import"./TeamBadge-DBOUyVft.js";import"./UnmanagedACTAccessRequirementItem-CsxdtA2J.js";import"./RequirementItem-DusTolJ5.js";import"./CheckTwoTone-gpKg_Tgl.js";import"./ManagedACTAccessRequirementItemView-Doe56QNh.js";import"./SelfSignAccessRequirementItem-DJvP-C5M.js";import"./DataAccessRequestAccessorsFilesForm-Dtte257p.js";import"./enums-D0dEuLdD.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-DVHsjHjL.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-DQJnkZgb.js";import"./UserSearchBox-jhMMmCY0.js";import"./useDebouncedEffect-CJ3Trl_T.js";import"./Autocomplete-CXkWE5V9.js";import"./usePreviousProps-Bk4ZH_gp.js";import"./RadioGroup-BFl8OAX7.js";import"./Radio-COPtt3m4.js";import"./SwitchBase-BAQlXzL4.js";import"./FormGroup-BgDNvdHh.js";import"./FormControlLabel-BoYvZo-l.js";import"./UploadDocumentField-D93HtPGy.js";import"./FileUpload-wqmjGuWf.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BKvYOlzw.js";import"./GridLegacy-CLFoxGKK.js";import"./ResearchProjectForm-uiWZpP98.js";import"./TextFieldWithWordLimit-BjMJ9hZC.js";import"./AuthenticatedRequirement-yQgSqcGG.js";import"./CertificationRequirement-BeAd3TZS.js";import"./TwoFactorAuthEnabledRequirement-COWW_0Cu.js";import"./ValidationRequirement--92CPqxu.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Cp6MFGAK.js";import"./RejectDataAccessRequestModal-BlL-xQIC.js";import"./CannedRejectionDialog-D06ZKaeZ.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-BSxA4EpL.js";import"./Checkbox-mGc4RGP0.js";import"./Grid-B8Ch4kur.js";import"./upperFirst-DSevyAWJ.js";import"./_stringToArray-BLW8Eemg.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
