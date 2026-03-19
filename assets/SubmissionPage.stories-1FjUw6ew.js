import{g as u,k as d,n as t,a3 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-BBruIU4b.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-9c47SA_c.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-D0Al2-yK.js";import"./useAccessRequirements-DfdGfvIY.js";import"./index-C4S4nEIu.js";import"./_baseOrderBy-D6ixe2Vs.js";import"./_baseIteratee-C5YInLUd.js";import"./_baseMap-DOnUw6Jl.js";import"./_baseEach-BkW8B4fq.js";import"./useInfiniteQuery-CpnSnpxb.js";import"./groupBy-C5yZbSP2.js";import"./_createAggregator-CV-F-rBR.js";import"./DialogBase-Bhfpkjm2.js";import"./Close-CJayIifx.js";import"./HelpPopover-CCBG3dLd.js";import"./MarkdownPopover-DAFqt0iV.js";import"./LightTooltip-DDmzhRDz.js";import"./MarkdownSynapse-DP7rBl4U.js";import"./SkeletonButton-D4FgXHH-.js";import"./SkeletonInlineBlock-B2nZJXUY.js";import"./SkeletonTable-Bpj6qcuq.js";import"./SkeletonParagraph-D6h0sWgH.js";import"./EntityLink-REhvyqMF.js";import"./useEntity-DT9grtia.js";import"./pickBy-CwQNjTD1.js";import"./isString-CusR24iS.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DLc9SIWL.js";import"./useGetEntityHeaders-yOBkGKa7.js";import"./EntityIcon-DNFMrFKh.js";import"./ErrorChip-C-rwcYsI.js";import"./Chip-BT9IXi55.js";import"./UserOrTeamBadge-Blj9_Z5d.js";import"./UserBadge-LCaLYAxT.js";import"./useUserBundle-R9FqDICm.js";import"./MenuItem-qoVLjmZ_.js";import"./Card-DMjhx-ez.js";import"./TeamBadge-DLbin4cr.js";import"./UnmanagedACTAccessRequirementItem-DAoTR-T2.js";import"./RequirementItem-DGawdCxV.js";import"./LockTwoTone-p_BKjD8r.js";import"./UserSearchBoxV2-BaT7bmAD.js";import"./useDebouncedEffect-C5wKQEdI.js";import"./use-deep-compare-effect.esm-CH543HjI.js";import"./uniq-4NIjQU_P.js";import"./without-DBYeO89j.js";import"./Select-aab027f3.esm-BlhFUnX4.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BrvCzz8o.js";import"./SelfSignAccessRequirementItem-BqvZDqxT.js";import"./DataAccessRequestAccessorsFilesForm-DDXG0RqA.js";import"./enums-zn00iWW5.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CfZzzlNg.js";import"./RadioGroup-IZ9a3Q59.js";import"./Radio-y_Hma3ag.js";import"./SwitchBase-DTrMZwaL.js";import"./FormGroup-C3dmo_OZ.js";import"./FormControlLabel-DqVSLyDY.js";import"./UploadDocumentField-CzQB8tn2.js";import"./FileUpload-Dz8-OmrT.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CzKiAxCK.js";import"./GridLegacy-CA-HW-z8.js";import"./ResearchProjectForm-oC07fAD2.js";import"./TextFieldWithWordLimit-tSj3quD3.js";import"./AuthenticatedRequirement-BQhMRX6r.js";import"./CertificationRequirement-C94R2VIp.js";import"./TwoFactorAuthEnabledRequirement-CGiS4jH1.js";import"./ValidationRequirement-DR2406jO.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-D6iiLs2j.js";import"./RejectDataAccessRequestModal-b59R2S-m.js";import"./CannedRejectionDialog-D73_TRpD.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-DuDymoxB.js";import"./Checkbox-BNavYnnA.js";import"./Grid-Dy8qASXu.js";import"./upperFirst-DlROaczH.js";import"./_stringToArray-D8_zZa06.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
