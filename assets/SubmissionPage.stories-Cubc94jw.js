import{g as d,k as u,n as t,a3 as c,d_ as R,b as e,kw as i,kx as E,H as s,ky as _,p as m,kz as I,kA as S,kf as O}from"./iframe-D2314vV7.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CVgjy5X-.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-txy9t3gm.js";import"./useAccessRequirements-jlR9BA06.js";import"./index-uz0aFGkQ.js";import"./_baseOrderBy-C8mlA2uL.js";import"./_baseIteratee-vNs5qHqV.js";import"./_baseMap-CMdkRV5u.js";import"./_baseEach-lxWvv5jk.js";import"./useQueries-CEbKoZrk.js";import"./useInfiniteQuery-BkYzK-VQ.js";import"./groupBy-BcoSiVcA.js";import"./_createAggregator-BEvInwjn.js";import"./DialogBase-CeLIS526.js";import"./Close-DF-SSni9.js";import"./HelpPopover-DPlyz4f8.js";import"./MarkdownPopover-DLwjwgAy.js";import"./LightTooltip-C3RLT3BD.js";import"./MarkdownSynapse-DOP2sYUv.js";import"./SkeletonButton-B53Z_sb3.js";import"./SkeletonInlineBlock-CV4xFhI_.js";import"./SkeletonTable-BKP48mc0.js";import"./SkeletonParagraph-LgnNm5lB.js";import"./EntityLink-Cnokm_AN.js";import"./useEntity-Bbhi_KOY.js";import"./pickBy-ZOU6t9n3.js";import"./isString-0a-oBQWp.js";import"./useSuspenseQuery-Dqm9rcpM.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DPq4ejvG.js";import"./useGetEntityHeaders-CECGYUjd.js";import"./EntityIcon-DK1fGGQY.js";import"./ErrorChip-kW_i3cNr.js";import"./Chip-Dx5TUVtU.js";import"./UserOrTeamBadge-DHChlM9r.js";import"./UserBadge-DzB9tiKw.js";import"./useUserBundle-geWM6IMX.js";import"./MenuItem-Bh76qgcw.js";import"./Card-DZNxgrrg.js";import"./TeamBadge-DTd3-hrn.js";import"./useRealmPrincipals-DMb9Ln6W.js";import"./UnmanagedACTAccessRequirementItem-B81pFAeC.js";import"./RequirementItem-Ch627e8N.js";import"./LockTwoTone-mdaY99tg.js";import"./UserSearchBoxV2-DfK9DxzZ.js";import"./useDebouncedEffect-CoGxk0RJ.js";import"./use-deep-compare-effect.esm-NCd8gc-B.js";import"./uniq-ChD1At2f.js";import"./without-_6fQamQg.js";import"./Select-aab027f3.esm-BYcbwWrF.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BruTGwb5.js";import"./SelfSignAccessRequirementItem-DIVOAxVl.js";import"./DataAccessRequestAccessorsFilesForm-BY_Via8g.js";import"./enums-GrzaVVyp.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-B5h2iyEp.js";import"./RadioGroup-BB_6UMw8.js";import"./Radio-D3TV5l2y.js";import"./SwitchBase-CtNJMxQl.js";import"./FormGroup-z7mM7lym.js";import"./FormControlLabel-C5kknZuE.js";import"./UploadDocumentField-CzXZpStB.js";import"./FileUpload-Sla8e55C.js";import"./ManagedACTAccessRequirementFormWikiWrapper-35a9BkyG.js";import"./GridLegacy-8iHMslto.js";import"./ResearchProjectForm-DtojHq5Z.js";import"./TextFieldWithWordLimit-CqKqmM5I.js";import"./AuthenticatedRequirement-D_b-XLKW.js";import"./CertificationRequirement-GeYoFouH.js";import"./TwoFactorAuthEnabledRequirement-HH4iL3RF.js";import"./ValidationRequirement-C3zdFsqz.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BS-vySKS.js";import"./RejectDataAccessRequestModal-CfmAQCH8.js";import"./CannedRejectionDialog-Bt-ILWUq.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Rlnq_K10.js";import"./Checkbox-ClaraH4O.js";import"./Grid-B3ew8oLs.js";import"./upperFirst-BKb2Vkxx.js";import"./_stringToArray-BvxpeSzT.js";const Xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const er=["Demo","DemoError"];export{o as Demo,n as DemoError,er as __namedExportsOrder,Xe as default};
