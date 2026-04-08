import{z as d,b as e,o as u,s as t,kp as i,kq as c,H as s,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-D5wXuBlT.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-C1ZAhpCA.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DtgRpjmQ.js";import"./useAccessRequirements-DWRH5L8-.js";import"./index-2JT8eoUE.js";import"./_baseOrderBy-7pI0o-Mb.js";import"./_baseIteratee-B9EFKTSA.js";import"./_baseMap-BIuedYiU.js";import"./_baseEach-DHRpkkAi.js";import"./useInfiniteQuery-CIna-n7q.js";import"./groupBy-34QwQkF-.js";import"./_createAggregator-DrmoKbfG.js";import"./DialogBase-B7NPj_K8.js";import"./Close-B44_taEp.js";import"./HelpPopover-B270wGmb.js";import"./MarkdownPopover-D357WAt_.js";import"./LightTooltip-Bqvn3Vpy.js";import"./MarkdownSynapse-DIWDvDqy.js";import"./SkeletonButton-1p1-0lGV.js";import"./SkeletonInlineBlock-Djh2iYmW.js";import"./SkeletonTable-DQgfKfH3.js";import"./SkeletonParagraph-CICWHgmn.js";import"./EntityLink-xSdfRWzo.js";import"./useEntity-BdvQIkUL.js";import"./pickBy-D7qYwTGf.js";import"./isString-D-Nxf4BT.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CdJPZ98R.js";import"./useGetEntityHeaders-DMbZJ0Jq.js";import"./EntityIcon-DN74Jjw-.js";import"./ErrorChip-BiuZkGDp.js";import"./Chip-CY4F66V8.js";import"./UserOrTeamBadge-CrDlepT6.js";import"./useUserGroupHeader-YQoyU-aV.js";import"./TeamBadge-DSUeGj_J.js";import"./UserBadge-DCI1SK4W.js";import"./useUserBundle-DXvZDWUx.js";import"./MenuItem-Cg9aYM9o.js";import"./Card-Ds8mqMQ7.js";import"./UnmanagedACTAccessRequirementItem-mjyEEz_J.js";import"./RequirementItem-BhaaDTqJ.js";import"./LockTwoTone-ctMY8NSq.js";import"./ManagedACTAccessRequirementItemView-Dh2rKDR9.js";import"./SelfSignAccessRequirementItem-CEhhFlav.js";import"./DataAccessRequestAccessorsFilesForm-BusFjAn6.js";import"./enums-BU0wSR1S.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-PhoYpX-3.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-CRowiCBj.js";import"./UserSearchBox-D7pwxDyQ.js";import"./useDebouncedEffect-CClt-H-N.js";import"./Autocomplete-DyJ_IcZa.js";import"./usePreviousProps-BROXTcjk.js";import"./RadioGroup-BQVSxRN2.js";import"./Radio-DQnBLPnH.js";import"./SwitchBase-CF4iIkRZ.js";import"./FormGroup-Cz-izA0X.js";import"./FormControlLabel-DdIGgxtb.js";import"./UploadDocumentField-pihrRlrN.js";import"./FileUpload-Dwnq_bag.js";import"./ManagedACTAccessRequirementFormWikiWrapper-fLMFguuN.js";import"./GridLegacy-BUhNhc-e.js";import"./ResearchProjectForm-DZvAQF57.js";import"./TextFieldWithWordLimit-9cgdck5K.js";import"./AuthenticatedRequirement-COC0_1U3.js";import"./CertificationRequirement-CJgrQvc-.js";import"./TwoFactorAuthEnabledRequirement-BWHGHuv6.js";import"./ValidationRequirement-BHUTGGrh.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-D2ErrH6b.js";import"./RejectDataAccessRequestModal-xUzHxlcY.js";import"./CannedRejectionDialog-BUkUjtzS.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-DkVuItCQ.js";import"./Checkbox-etgoUHJj.js";import"./Grid-DWXQACcQ.js";import"./upperFirst-5yJNq48B.js";import"./_stringToArray-6PGnF21L.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
