import{z as d,b as e,o as u,s as t,kp as i,kq as c,H as s,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-FsOg9uwU.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DYjd-MSj.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CyVWk5QX.js";import"./useAccessRequirements-E4wX1h6m.js";import"./index-BE4_cl56.js";import"./_baseOrderBy-CnEKSfr8.js";import"./_baseIteratee-CPfpbnLi.js";import"./_baseMap-CKj7t-u-.js";import"./_baseEach-BFISFCE3.js";import"./useInfiniteQuery-rDeNbqp3.js";import"./groupBy-yJbQ32hD.js";import"./_createAggregator-CXn2awTZ.js";import"./DialogBase-D5H1TxpQ.js";import"./Close-wJLSQlcF.js";import"./HelpPopover-CsCYRymI.js";import"./MarkdownPopover-B4rff8pl.js";import"./LightTooltip-BHJ8VyPd.js";import"./MarkdownSynapse-B-j5Jwdf.js";import"./SkeletonButton-o5wIbKa8.js";import"./SkeletonInlineBlock-C-VJXZCx.js";import"./SkeletonTable-D70G5IuO.js";import"./SkeletonParagraph-CbUekLjy.js";import"./EntityLink-DAyEs37b.js";import"./useEntity-BtyQdG2W.js";import"./pickBy-DfOY2WJ2.js";import"./isString-DXW-YMkO.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DVlwq94Z.js";import"./useGetEntityHeaders-B_P8R0wa.js";import"./EntityIcon-CxTGw3bd.js";import"./ErrorChip-CrPSJ9bD.js";import"./Chip-CwjHvWgT.js";import"./UserOrTeamBadge-D0NT5qeZ.js";import"./useUserGroupHeader-CLfJ9kmo.js";import"./TeamBadge-CFTbV6P9.js";import"./UserBadge-BgWUpTwS.js";import"./useUserBundle-DlEfeCz8.js";import"./MenuItem-Cj71RViP.js";import"./Card-Bl03myfA.js";import"./UnmanagedACTAccessRequirementItem-DJJLzzcG.js";import"./RequirementItem-CKfYdLXm.js";import"./LockTwoTone-B98vNx62.js";import"./ManagedACTAccessRequirementItemView-51EdQoBt.js";import"./SelfSignAccessRequirementItem-Bc_HApsA.js";import"./DataAccessRequestAccessorsFilesForm-DGIQ1_j-.js";import"./enums-DdayMK3i.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-BxdC6SRl.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-BWjdYo9Q.js";import"./UserSearchBox-PBqxDBJQ.js";import"./useDebouncedEffect-BzQrwVMU.js";import"./Autocomplete-BJva2ObM.js";import"./usePreviousProps-ryOaqf0v.js";import"./RadioGroup-CrPFWw5I.js";import"./Radio-N5aEXju5.js";import"./SwitchBase-B6R5JrIN.js";import"./FormGroup-Bzuvt0IB.js";import"./FormControlLabel-CVGFhKb1.js";import"./UploadDocumentField-CXSHP9m5.js";import"./FileUpload-D5WkEccJ.js";import"./ManagedACTAccessRequirementFormWikiWrapper-EIxaAgAJ.js";import"./GridLegacy-BzgKFUAC.js";import"./ResearchProjectForm-L7Xw1e1d.js";import"./TextFieldWithWordLimit-CVjDzNq3.js";import"./AuthenticatedRequirement-gwA3_hFV.js";import"./CertificationRequirement-PSzdOkHi.js";import"./TwoFactorAuthEnabledRequirement-DTu8O4GT.js";import"./ValidationRequirement-BhK1Z9wi.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CUXPumPC.js";import"./RejectDataAccessRequestModal-C9i_c8XA.js";import"./CannedRejectionDialog-BS9mGVwK.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-CGiwaw_9.js";import"./Checkbox-oTkKgI0N.js";import"./Grid-DTBMwOCR.js";import"./upperFirst-gquU-9F2.js";import"./_stringToArray-EQ8z8-zj.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
