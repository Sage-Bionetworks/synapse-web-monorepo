import{z as d,b as e,o as u,s as t,kp as i,kq as c,H as s,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-xuGDYskk.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CmgkIaCE.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-D1ue8yOE.js";import"./useAccessRequirements-Cxp6U1vK.js";import"./index-D8fOn0Se.js";import"./_baseOrderBy-DUIukmXU.js";import"./_baseIteratee-DoirJgef.js";import"./_baseMap-DnYKem1g.js";import"./_baseEach-DVo5fh0p.js";import"./useInfiniteQuery-DjTbIVFH.js";import"./groupBy-Bw-a7wd-.js";import"./_createAggregator-BZF2rNOh.js";import"./DialogBase-D_8BDBtZ.js";import"./Close-DW9kzD-X.js";import"./HelpPopover-w8ni5A6U.js";import"./MarkdownPopover-DTgCpJv6.js";import"./LightTooltip-lMMHMay2.js";import"./MarkdownSynapse-Dqj1e4cl.js";import"./SkeletonButton-Ba2syrHs.js";import"./SkeletonInlineBlock-CuJjaS51.js";import"./SkeletonTable-Bn51DOnQ.js";import"./SkeletonParagraph-BP-szXpV.js";import"./EntityLink-kNoi-aFj.js";import"./useEntity-ByEgwqck.js";import"./pickBy-BQpz9394.js";import"./isString-BHpzOOw-.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C0Ki_Pmb.js";import"./useGetEntityHeaders-B9UBA74v.js";import"./EntityIcon-BDJR58ld.js";import"./ErrorChip-Dw_j4UR0.js";import"./Chip-Ckkk-5JS.js";import"./UserOrTeamBadge-Bg36yccR.js";import"./useUserGroupHeader-CzZ91UGJ.js";import"./TeamBadge-D8VFlvej.js";import"./UserBadge-BorFtQsG.js";import"./useUserBundle-DtSERE0H.js";import"./MenuItem-D1rBKZNi.js";import"./Card-B4NJfnf-.js";import"./UnmanagedACTAccessRequirementItem-ZoCi7JZ-.js";import"./RequirementItem-r8ShZaZQ.js";import"./LockTwoTone-CCtcVsGl.js";import"./ManagedACTAccessRequirementItemView-D1ILmcOV.js";import"./SelfSignAccessRequirementItem-cjMQmxyk.js";import"./DataAccessRequestAccessorsFilesForm-CPioN46m.js";import"./enums-BzsWVbZJ.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-CDqS7iN1.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-pbnQCpkD.js";import"./UserSearchBox-DIunYbET.js";import"./useDebouncedEffect-DnAR-4CK.js";import"./Autocomplete-DuOgffOl.js";import"./usePreviousProps-CRWTbO4u.js";import"./RadioGroup-hTe9OBOh.js";import"./Radio-Cli6fZqq.js";import"./SwitchBase-BP58HNZ_.js";import"./FormGroup-CRthPRcs.js";import"./FormControlLabel-7w8AtTFx.js";import"./UploadDocumentField-B9Uq7onT.js";import"./FileUpload-DG3RI5y4.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CXckO9W3.js";import"./GridLegacy-DwzVG0QL.js";import"./ResearchProjectForm-ZsYYhQPj.js";import"./TextFieldWithWordLimit-CYUTMqiD.js";import"./AuthenticatedRequirement-QVoRuOPh.js";import"./CertificationRequirement-BiJ-LBrH.js";import"./TwoFactorAuthEnabledRequirement-DwCwFCBS.js";import"./ValidationRequirement-CtP3_acl.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DvLwvb5x.js";import"./RejectDataAccessRequestModal-ePwHRliZ.js";import"./CannedRejectionDialog-CDCaoGx0.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-CeVmcrd5.js";import"./Checkbox-C5w0MlgT.js";import"./Grid-OGEpIkgy.js";import"./upperFirst-B8FqrXy-.js";import"./_stringToArray-DmSMGfbi.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
