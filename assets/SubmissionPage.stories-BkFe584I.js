import{g as u,k as d,n as t,a1 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-CztmM481.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DFRU_WZP.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-AVxeUEpx.js";import"./useAccessRequirements-W_xsYiyf.js";import"./index-D4zvspUx.js";import"./_baseOrderBy-BwjN5JHA.js";import"./_baseIteratee-C79TkaLa.js";import"./_baseMap-BmOpwIc1.js";import"./_baseEach-CNX5zfrb.js";import"./useInfiniteQuery-CMUwdvwB.js";import"./groupBy-CLxSeE4h.js";import"./_createAggregator-CIqbz8qj.js";import"./DialogBase-DuknWYoH.js";import"./Close-DsRX1MCV.js";import"./HelpPopover-DvC80QRo.js";import"./MarkdownPopover-eu3zF-im.js";import"./LightTooltip-BA9BIuJJ.js";import"./MarkdownSynapse-B_NDi4bv.js";import"./SkeletonButton-BWr_w7rt.js";import"./SkeletonInlineBlock-BafzGMgM.js";import"./SkeletonTable-D62IODcw.js";import"./SkeletonParagraph-RQGRwxXl.js";import"./EntityLink-DDopOx25.js";import"./useEntity-A-3QMXxp.js";import"./pickBy-isJqX3u9.js";import"./isString-_o4-xKLg.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DcUEGPWD.js";import"./useGetEntityHeaders-CD9oNq_e.js";import"./EntityIcon-Bmq3AyRw.js";import"./ErrorChip-BbfDB_Vq.js";import"./Chip-CpQHwqZu.js";import"./UserOrTeamBadge-COUfNdD0.js";import"./UserBadge-Di9rrgvd.js";import"./useUserBundle-BsSVCPoC.js";import"./MenuItem-DhY-eVIi.js";import"./Card-DZPeI2yE.js";import"./TeamBadge-D9bObeI8.js";import"./UnmanagedACTAccessRequirementItem-DMlBDBVm.js";import"./RequirementItem-DvZPvGKP.js";import"./LockTwoTone-CCcY_55O.js";import"./UserSearchBoxV2-BpdCdi0P.js";import"./useDebouncedEffect-DeJrfB9Z.js";import"./use-deep-compare-effect.esm-BSBdlWy4.js";import"./uniq-DMlkKil5.js";import"./without-DiF9kdVW.js";import"./Select-aab027f3.esm-DGUcMZmW.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-Bzav948z.js";import"./SelfSignAccessRequirementItem-_ye7zj6D.js";import"./DataAccessRequestAccessorsFilesForm-BX6o7fee.js";import"./enums-CuQvb3eX.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-D5Kpai-D.js";import"./RadioGroup-BI0TC0Ax.js";import"./Radio-cnrSFFCi.js";import"./SwitchBase-BegMbA4f.js";import"./FormGroup-C31UciNh.js";import"./FormControlLabel-qKrq3Bnz.js";import"./UploadDocumentField-DUjGQJ7K.js";import"./FileUpload-CkQmw3kr.js";import"./ManagedACTAccessRequirementFormWikiWrapper-i--P7ztq.js";import"./GridLegacy-DM8eMh2_.js";import"./ResearchProjectForm-CDyYggtW.js";import"./TextFieldWithWordLimit-BfdEAiJQ.js";import"./AuthenticatedRequirement-Hcqkj97k.js";import"./CertificationRequirement-C0yY_PTR.js";import"./TwoFactorAuthEnabledRequirement-8ouRY8JM.js";import"./ValidationRequirement-SsRHCpZM.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BwDnFxUQ.js";import"./RejectDataAccessRequestModal-DYYYdIYP.js";import"./CannedRejectionDialog-CKvWxk1z.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CRTgjSct.js";import"./Checkbox-BBO2iwio.js";import"./Grid-BIQeSlL_.js";import"./upperFirst-Darhhe_d.js";import"./_stringToArray-DEI-aRxh.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
