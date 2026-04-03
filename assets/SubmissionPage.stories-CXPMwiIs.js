import{z as d,b as e,o as u,s,kp as i,kq as c,H as t,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-BfB6FrYj.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DtU9px0Y.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BCCThjRl.js";import"./useAccessRequirements-BN_xhWWt.js";import"./index-DcdQR_Vf.js";import"./_baseOrderBy-BOfaX7OM.js";import"./_baseIteratee-BXfMppB5.js";import"./_baseMap-D5GGKe2u.js";import"./_baseEach-C_OwUKu_.js";import"./useInfiniteQuery-DyZ1e7rN.js";import"./groupBy-BXqx5G-t.js";import"./_createAggregator-CcQ2yD6T.js";import"./DialogBase-Oo5YqmVI.js";import"./Close-BRAhiQKl.js";import"./HelpPopover-BCQ8LHno.js";import"./MarkdownPopover-DQe0NYIR.js";import"./LightTooltip-BjAj_W1D.js";import"./MarkdownSynapse-BMEskP2u.js";import"./SkeletonButton-CyKkbiIk.js";import"./SkeletonInlineBlock-CtmRc0d4.js";import"./SkeletonTable-KlaWzsOV.js";import"./SkeletonParagraph-CD0x-Nfw.js";import"./EntityLink-xf9HG4b6.js";import"./useEntity-Di2XEsy8.js";import"./pickBy-CRDgoixE.js";import"./isString-Bld0cjlJ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BITphhFW.js";import"./useGetEntityHeaders-CUEIP8c6.js";import"./EntityIcon-Bv782v8q.js";import"./ErrorChip-CSWUpptK.js";import"./Chip-H1nC51OX.js";import"./UserOrTeamBadge-BTEDKi44.js";import"./UserBadge-Db9DswDw.js";import"./useUserBundle-3O_Oxfpc.js";import"./MenuItem-CG4XGW7R.js";import"./Card-CnH2dOyE.js";import"./TeamBadge-CJtT7GTs.js";import"./UnmanagedACTAccessRequirementItem-BDFvC9wM.js";import"./RequirementItem-SD3hUrqu.js";import"./LockTwoTone-bg0H1Ij-.js";import"./ManagedACTAccessRequirementItemView-BwSiJK1q.js";import"./SelfSignAccessRequirementItem-CVBIrCeE.js";import"./DataAccessRequestAccessorsFilesForm-AfpXu-5m.js";import"./enums-Eq6kf4y9.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-DrXEBJXx.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-BelpgIKC.js";import"./UserSearchBox-Cdgoz0VP.js";import"./useDebouncedEffect-Cfo8SjOi.js";import"./Autocomplete-Debb-qQe.js";import"./usePreviousProps-Dh5fkFTb.js";import"./RadioGroup-ClTwLnA4.js";import"./Radio-DyraNeXY.js";import"./SwitchBase-CpXG8q-V.js";import"./FormGroup-DyWw_IJN.js";import"./FormControlLabel-jJq3AgOA.js";import"./UploadDocumentField-D2b1I89M.js";import"./FileUpload-Y62qD_qj.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BMukqYW4.js";import"./GridLegacy-9q_NKHlN.js";import"./ResearchProjectForm-CVTpHVwz.js";import"./TextFieldWithWordLimit-CoxPKV7N.js";import"./AuthenticatedRequirement-CHEdhMD2.js";import"./CertificationRequirement-B9HTuiIA.js";import"./TwoFactorAuthEnabledRequirement-BptwnCG1.js";import"./ValidationRequirement-CF9iOhOV.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-WpOZImkB.js";import"./RejectDataAccessRequestModal-BcqREzvM.js";import"./CannedRejectionDialog-BQgb6lIZ.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-DRAawVI6.js";import"./Checkbox-CZIHvRti.js";import"./Grid-CKKdVltP.js";import"./upperFirst-D03b-PSY.js";import"./_stringToArray-njCGQe-O.js";const Le={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
