import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kt as i,ku as E,H as s,kv as _,p as m,kw as I,kx as S,kc as O}from"./iframe-9zwml_ZL.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CKU9r5IP.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CdcNCL-6.js";import"./useAccessRequirements-DgT6K-E4.js";import"./index-qxRvCYco.js";import"./_baseOrderBy-k-W7iE60.js";import"./_baseIteratee-wuXEnZXa.js";import"./_baseMap-BDolchDL.js";import"./_baseEach-C2lZPHvD.js";import"./useQueries-asxxJCv1.js";import"./useInfiniteQuery-BQlxA6Iu.js";import"./groupBy-SUBlP1T1.js";import"./_createAggregator-dIoN45EJ.js";import"./DialogBase-Hity4xAw.js";import"./Close-Bx_JZLf8.js";import"./HelpPopover-Cf3W3rHJ.js";import"./MarkdownPopover-BsgLS8bs.js";import"./LightTooltip-BlBY8chN.js";import"./MarkdownSynapse-eByBmLQG.js";import"./SkeletonButton-C8wU0a4y.js";import"./SkeletonInlineBlock-D9CRPwvT.js";import"./SkeletonTable-CtHOf3Y6.js";import"./SkeletonParagraph-jYvf1dwm.js";import"./EntityLink-DUc-3jPO.js";import"./useEntity-DWqu37_A.js";import"./pickBy-BWz3d5Ni.js";import"./isString-ByvIj2fE.js";import"./useSuspenseQuery-DROjoE-r.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-SAdnotM0.js";import"./useGetEntityHeaders-C-xEs9wX.js";import"./EntityIcon-DpSzREsq.js";import"./ErrorChip-CAOFtT1Q.js";import"./Chip-D5tNn4lG.js";import"./UserOrTeamBadge-CMALff2j.js";import"./UserBadge-roJgG6JX.js";import"./useUserBundle-MekiU7Qn.js";import"./MenuItem-DDbuquWO.js";import"./Card-DAP4jV0y.js";import"./TeamBadge-LwA7PgsL.js";import"./UnmanagedACTAccessRequirementItem-D_lVjFgi.js";import"./RequirementItem-CHxKhPHV.js";import"./LockTwoTone-mCFZwny5.js";import"./UserSearchBoxV2-DJw8q8Uw.js";import"./useDebouncedEffect-Dw7l-Qrd.js";import"./use-deep-compare-effect.esm-BS58VsrM.js";import"./uniq-DD5l1ddz.js";import"./without-bsaFqCgl.js";import"./Select-aab027f3.esm-q1bxGMq2.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CbjDqPOk.js";import"./SelfSignAccessRequirementItem-B3Tb-BKh.js";import"./DataAccessRequestAccessorsFilesForm-BR4A7Ncd.js";import"./enums-BwHpvN7s.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CLkgx-hP.js";import"./RadioGroup-7oSNRWey.js";import"./Radio-6WjF00Am.js";import"./SwitchBase-DVj3vtTj.js";import"./FormGroup-DovdN09M.js";import"./FormControlLabel-BWxHVIis.js";import"./UploadDocumentField-Bivvx9Pz.js";import"./FileUpload-C-fRyp0L.js";import"./ManagedACTAccessRequirementFormWikiWrapper-ClDobxDK.js";import"./GridLegacy-DRAv0uft.js";import"./ResearchProjectForm-B50ZY1BQ.js";import"./TextFieldWithWordLimit-C2M_es6g.js";import"./AuthenticatedRequirement-JQjKqXl3.js";import"./CertificationRequirement-BtWw1ums.js";import"./TwoFactorAuthEnabledRequirement-k4MrDd-8.js";import"./ValidationRequirement-pSMmeaf0.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CFGYI2g_.js";import"./RejectDataAccessRequestModal-BtgEsiOa.js";import"./CannedRejectionDialog-B6RJ5e16.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-_IRTHH0j.js";import"./Checkbox-DJRKRmmX.js";import"./Grid-BP7miAi3.js";import"./upperFirst-Bo5JCqMv.js";import"./_stringToArray-D5x3YCqC.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
