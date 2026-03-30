import{g as u,k as d,n as t,a1 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-la5pZNJP.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-B4FPYCJA.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-JNUD4ZEL.js";import"./useAccessRequirements-Dw9nmZtr.js";import"./index-nbMMV5sL.js";import"./_baseOrderBy-OwT6rmZK.js";import"./_baseIteratee-loK_i9sZ.js";import"./_baseMap-BQN9YKHj.js";import"./_baseEach-BRlYnKbM.js";import"./useInfiniteQuery-Dw0hPYtP.js";import"./groupBy-BttIBd-A.js";import"./_createAggregator-jO949tCC.js";import"./DialogBase-CC3Fom-D.js";import"./Close-CPzKBjYo.js";import"./HelpPopover-BinEOj-x.js";import"./MarkdownPopover-DWH2OeX9.js";import"./LightTooltip-CcK1WQdJ.js";import"./MarkdownSynapse-DdvlGI58.js";import"./SkeletonButton-Cnars53-.js";import"./SkeletonInlineBlock-IWHLRfGq.js";import"./SkeletonTable-jKVXe2RG.js";import"./SkeletonParagraph-D00HqPxF.js";import"./EntityLink-6HYieHY0.js";import"./useEntity-BJpfmtiF.js";import"./pickBy-CcboS4Gj.js";import"./isString-CtRZEzAY.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CTgXnld5.js";import"./useGetEntityHeaders-DxNdNlSg.js";import"./EntityIcon-DLob5fvY.js";import"./ErrorChip-D4d26e41.js";import"./Chip-og5LeUeY.js";import"./UserOrTeamBadge-0Wt0TG7I.js";import"./UserBadge-rJYMep-q.js";import"./useUserBundle-DcSi2JrE.js";import"./MenuItem-fdQnDEWw.js";import"./Card-Bzw4JsT_.js";import"./TeamBadge-BVkLjUbN.js";import"./UnmanagedACTAccessRequirementItem-CqdAG5ik.js";import"./RequirementItem-ppuetyBM.js";import"./LockTwoTone-D22LJ340.js";import"./UserSearchBoxV2-DLmZxJ2-.js";import"./useDebouncedEffect-DXHNj3Tb.js";import"./use-deep-compare-effect.esm-BeXf3d15.js";import"./uniq-QS0U86Je.js";import"./without-DZ-NbIqM.js";import"./Select-aab027f3.esm-CephwMKX.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BwRLAqj7.js";import"./SelfSignAccessRequirementItem-_CJY35Ah.js";import"./DataAccessRequestAccessorsFilesForm-B5wLl_ys.js";import"./enums-Ddqc41N5.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BaQKq9ZH.js";import"./RadioGroup-UlYg9k6D.js";import"./Radio-DVnIpC9I.js";import"./SwitchBase-DY2uxlHH.js";import"./FormGroup-fEInt5zo.js";import"./FormControlLabel-CVRDyRA_.js";import"./UploadDocumentField-CiIQGnqA.js";import"./FileUpload-U5chCJ1_.js";import"./ManagedACTAccessRequirementFormWikiWrapper-n-c837wY.js";import"./GridLegacy-HaJ9PfwT.js";import"./ResearchProjectForm-BEoDpQl6.js";import"./TextFieldWithWordLimit-CshykIdn.js";import"./AuthenticatedRequirement-DzCcg4Fe.js";import"./CertificationRequirement-D1S3YVg2.js";import"./TwoFactorAuthEnabledRequirement-DTIAlPTh.js";import"./ValidationRequirement-BFvPRH1L.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CZx3mcYd.js";import"./RejectDataAccessRequestModal-BZQRsCyk.js";import"./CannedRejectionDialog-DL693Ia7.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BYOqzzUy.js";import"./Checkbox-DN48LJpB.js";import"./Grid-DjVp0Bgc.js";import"./upperFirst-DxE-tu1G.js";import"./_stringToArray-DiXa0QIl.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
