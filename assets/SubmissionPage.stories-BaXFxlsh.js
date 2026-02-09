import{g as u,k as d,n as t,a3 as c,e0 as R,b as e,ku as i,kv as E,H as s,kw as _,p as m,kx as I,ky as S,kd as O}from"./iframe-C1Apx41K.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-bEXZMQ0L.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Cx6j_0XV.js";import"./useAccessRequirements-CjVWhuJJ.js";import"./index-BNzSHHEP.js";import"./_baseOrderBy-BIgAoXIE.js";import"./_baseIteratee-8Sc6B18w.js";import"./_baseMap-B8Y4JFJ6.js";import"./_baseEach-Ckpa6zJd.js";import"./useQueries-BXoScF_u.js";import"./useInfiniteQuery-Bd6Dhm29.js";import"./groupBy-CTq7KDDa.js";import"./_createAggregator-DdWw9orO.js";import"./DialogBase-D25MustV.js";import"./Close-BYfoF0T4.js";import"./HelpPopover-B8LQHL_b.js";import"./MarkdownPopover-DHmJN8ko.js";import"./LightTooltip-Dd6uBPZU.js";import"./MarkdownSynapse-CjERrYjm.js";import"./SkeletonButton-D8PmJqDh.js";import"./SkeletonInlineBlock-CfPdCjit.js";import"./SkeletonTable-4nPmJRNn.js";import"./SkeletonParagraph-D2VtG1zT.js";import"./EntityLink-BDwrgyPq.js";import"./useEntity-794crS3g.js";import"./pickBy-jnwZacz8.js";import"./isString-CUqikMn2.js";import"./useSuspenseQuery-CWXsXeM-.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DAt6tMDa.js";import"./useGetEntityHeaders-BSjmtArL.js";import"./EntityIcon-Aebv3HJd.js";import"./ErrorChip-BWcd6JBg.js";import"./Chip-S_uffPL4.js";import"./UserOrTeamBadge-DJ7T_Y2Y.js";import"./UserBadge-DdMNTKS3.js";import"./useUserBundle-nFsfxXQU.js";import"./MenuItem-CghTk7HR.js";import"./Card-DOc9Ytr4.js";import"./TeamBadge-JcjM5zn7.js";import"./UnmanagedACTAccessRequirementItem-WPDb97gM.js";import"./RequirementItem-DXMdPMnU.js";import"./LockTwoTone-HlHxPyRX.js";import"./UserSearchBoxV2-CnOibRXb.js";import"./useDebouncedEffect-BuKPrPh0.js";import"./use-deep-compare-effect.esm-50Q-ut1H.js";import"./uniq-BwQMH0eL.js";import"./without-DI2mOxZP.js";import"./Select-aab027f3.esm-DxgB7wsa.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CXlxb3-Y.js";import"./SelfSignAccessRequirementItem-Cg4Qkpz1.js";import"./DataAccessRequestAccessorsFilesForm-BfXlUr0E.js";import"./enums-CDAvNZ4U.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CdZVbHys.js";import"./RadioGroup-D-jlGWhT.js";import"./Radio-BK7iVB_Y.js";import"./SwitchBase-D0GTh9ez.js";import"./FormGroup-DcSw9Iij.js";import"./FormControlLabel-CDOc7gaP.js";import"./UploadDocumentField-DlXtDm7L.js";import"./FileUpload-DtqOg26Z.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DLB8IwGI.js";import"./GridLegacy-Dgq7dt3K.js";import"./ResearchProjectForm-C09b65mT.js";import"./TextFieldWithWordLimit-BBtznQ0g.js";import"./AuthenticatedRequirement-Bo_4ls3e.js";import"./CertificationRequirement-DmTXuCg6.js";import"./TwoFactorAuthEnabledRequirement-DM4vwgSE.js";import"./ValidationRequirement-DWy8MKhz.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-ODKcjlxj.js";import"./RejectDataAccessRequestModal-DNXO1Ppi.js";import"./CannedRejectionDialog-CuB0FxjX.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BvosZqG2.js";import"./Checkbox-BbsUDmmn.js";import"./Grid-DoD1tu7S.js";import"./upperFirst-DiudUfsB.js";import"./_stringToArray-BNmshbVz.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Xe=["Demo","DemoError"];export{o as Demo,n as DemoError,Xe as __namedExportsOrder,ze as default};
