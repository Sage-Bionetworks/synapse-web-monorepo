import{g as u,k as d,n as t,a3 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-CIPlMaLT.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-B4z9qr2w.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-UJqTX7yG.js";import"./useAccessRequirements--DGVu5sD.js";import"./index-Bv4HrMwv.js";import"./_baseOrderBy-DYXHbJkm.js";import"./_baseIteratee-B2ldj8aD.js";import"./_baseMap-CdpLgayS.js";import"./_baseEach-CqCzLPLD.js";import"./useInfiniteQuery-CTnmUoN7.js";import"./groupBy-DIpA143F.js";import"./_createAggregator-CrcwlJ6P.js";import"./DialogBase-LmDxIN7q.js";import"./Close-BmqKwCBp.js";import"./HelpPopover-BQ8z_T0o.js";import"./MarkdownPopover-DNuS7K0n.js";import"./LightTooltip-DW0Ye48E.js";import"./MarkdownSynapse-DBktvvdU.js";import"./SkeletonButton-BYZF9tG6.js";import"./SkeletonInlineBlock-1S1r7zTT.js";import"./SkeletonTable-CWf8URW0.js";import"./SkeletonParagraph--qeTTP7n.js";import"./EntityLink-BhEIneYb.js";import"./useEntity-BsGg4v5z.js";import"./pickBy-BD90Ah8Q.js";import"./isString-DIwi0Tbr.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-bMyYjk_6.js";import"./useGetEntityHeaders-CJwtx42Z.js";import"./EntityIcon-C0K4G23-.js";import"./ErrorChip-PH8R95h7.js";import"./Chip-CesnYDs9.js";import"./UserOrTeamBadge-BtU8R2nS.js";import"./UserBadge-BE1Nldxc.js";import"./useUserBundle-o77XsN2e.js";import"./MenuItem-D7kngZjY.js";import"./Card-C5MMO-uO.js";import"./TeamBadge-CNkiDRvW.js";import"./UnmanagedACTAccessRequirementItem-Chihy0uG.js";import"./RequirementItem-DnnjK1C5.js";import"./LockTwoTone-ckAWw_i9.js";import"./UserSearchBoxV2-eX_TL4jF.js";import"./useDebouncedEffect-DGVqyScO.js";import"./use-deep-compare-effect.esm-CII-ykOk.js";import"./uniq-DZ5zy0KT.js";import"./without-CjdV3gl3.js";import"./Select-aab027f3.esm-Ckg3VF7r.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BNRQRb63.js";import"./SelfSignAccessRequirementItem-CoxKZERm.js";import"./DataAccessRequestAccessorsFilesForm-DV317lY_.js";import"./enums-CYRlK8wR.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BkN_MZRJ.js";import"./RadioGroup-ChTf-MD5.js";import"./Radio-Dl42cFR1.js";import"./SwitchBase-CIwH6QQ1.js";import"./FormGroup-y5xmpbm6.js";import"./FormControlLabel-_mvSb2kF.js";import"./UploadDocumentField-BToVTQPn.js";import"./FileUpload-D4plEVcb.js";import"./ManagedACTAccessRequirementFormWikiWrapper-GtKlfEHt.js";import"./GridLegacy-BqmeWvaJ.js";import"./ResearchProjectForm-D-oLc5q5.js";import"./TextFieldWithWordLimit-Dkz74wet.js";import"./AuthenticatedRequirement-CftIzave.js";import"./CertificationRequirement-CWk71Ag_.js";import"./TwoFactorAuthEnabledRequirement-CstdmCrK.js";import"./ValidationRequirement-C69Xnx3V.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DVi0i9OJ.js";import"./RejectDataAccessRequestModal-BT62VMXr.js";import"./CannedRejectionDialog-D4VRQQm2.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-fVjFifBD.js";import"./Checkbox-DQIchTi2.js";import"./Grid-DMW95j0d.js";import"./upperFirst-vGx6q4Oj.js";import"./_stringToArray-NKTgbcb6.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
