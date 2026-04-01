import{g as u,k as d,n as t,a1 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-CtRRQlop.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CAcbff76.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BHxZwXrI.js";import"./useAccessRequirements-Cvhlmdj9.js";import"./index-6GE_fzjW.js";import"./_baseOrderBy-Bk1bsJnk.js";import"./_baseIteratee-BXQ1WM-F.js";import"./_baseMap-DwbT6tLf.js";import"./_baseEach-Hh6WIfXN.js";import"./useInfiniteQuery-SCJRjalP.js";import"./groupBy-BKtKDdjv.js";import"./_createAggregator-Da9W3Y4W.js";import"./DialogBase-C8HPRqha.js";import"./Close-CTvsNcCQ.js";import"./HelpPopover-DWiuaJ6Y.js";import"./MarkdownPopover-Cjdvah9D.js";import"./LightTooltip-CnDTJ09B.js";import"./MarkdownSynapse-BokKjTo9.js";import"./SkeletonButton-pOxqmMp7.js";import"./SkeletonInlineBlock-DEN7Z-Ku.js";import"./SkeletonTable-DdWEF2Hw.js";import"./SkeletonParagraph-B1xPIO3Y.js";import"./EntityLink-Dqtgnd_E.js";import"./useEntity-C0Rb3tjf.js";import"./pickBy-B3ZzJcC6.js";import"./isString-D6wtVnUR.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CXwnc_71.js";import"./useGetEntityHeaders-BBjIXhBH.js";import"./EntityIcon-CtcPTnL_.js";import"./ErrorChip-s8Vhv6m4.js";import"./Chip-CNSuJPte.js";import"./UserOrTeamBadge-CBBJMgGn.js";import"./UserBadge-euSgz4-X.js";import"./useUserBundle-B0DX8PZs.js";import"./MenuItem-BQGtU2sS.js";import"./Card-zOjMR6J6.js";import"./TeamBadge-_s2u8MYC.js";import"./UnmanagedACTAccessRequirementItem-x-fu8ehw.js";import"./RequirementItem-C_ISMvnK.js";import"./LockTwoTone-ZQaIgrR-.js";import"./UserSearchBoxV2-DSdTx4XR.js";import"./useDebouncedEffect-cQjc9s_a.js";import"./use-deep-compare-effect.esm-C0uoZ_oH.js";import"./uniq-Cv8YpuUH.js";import"./without-BusR9VnX.js";import"./Select-aab027f3.esm-XUK4oJCg.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DXW7A84F.js";import"./SelfSignAccessRequirementItem-BHEWlFYx.js";import"./DataAccessRequestAccessorsFilesForm-DzMQGWQx.js";import"./enums-Su8IIt7l.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-D2-Eyd6q.js";import"./RadioGroup-amjPn9DN.js";import"./Radio-BzPivEnv.js";import"./SwitchBase-DDTU8e8q.js";import"./FormGroup-C2ceEwFD.js";import"./FormControlLabel-BNm1JdZT.js";import"./UploadDocumentField-DXhzEqeG.js";import"./FileUpload-D1jnOlAn.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BXHOGsT1.js";import"./GridLegacy-DwlOiZaW.js";import"./ResearchProjectForm-BuFtdP53.js";import"./TextFieldWithWordLimit-BeaS_Sox.js";import"./AuthenticatedRequirement-DaXe-ApQ.js";import"./CertificationRequirement-MQ9G5_zN.js";import"./TwoFactorAuthEnabledRequirement-402wG247.js";import"./ValidationRequirement-DGtXN5Sf.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CzjR9f9a.js";import"./RejectDataAccessRequestModal-CbExiXgR.js";import"./CannedRejectionDialog-B2bWxv9Y.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-D_lIVX08.js";import"./Checkbox-cEqZeYxj.js";import"./Grid-DXPNqt8F.js";import"./upperFirst-CzMjeEWt.js";import"./_stringToArray-BA3zZlgl.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
