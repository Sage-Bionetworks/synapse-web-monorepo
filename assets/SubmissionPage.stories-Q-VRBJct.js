import{g as u,k as d,n as t,a1 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-DhpKet55.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-IvY4GjbS.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-B7JVfl_R.js";import"./useAccessRequirements-BS_i6ikn.js";import"./index-CpJ472Wk.js";import"./_baseOrderBy-CR9CeohK.js";import"./_baseIteratee-IrfZTN6K.js";import"./_baseMap-5raP30rN.js";import"./_baseEach-DYMGRgHQ.js";import"./useInfiniteQuery-BThf8L3S.js";import"./groupBy-Dbfv1xmh.js";import"./_createAggregator-Z0zzultG.js";import"./DialogBase-CQOhgDpz.js";import"./Close-gzmIzwoR.js";import"./HelpPopover-CPRkTcWQ.js";import"./MarkdownPopover-BFmylr6y.js";import"./LightTooltip-B31RTkkv.js";import"./MarkdownSynapse-BSCmNA0L.js";import"./SkeletonButton-DB6VnDRU.js";import"./SkeletonInlineBlock-BpymSWGX.js";import"./SkeletonTable-CDPXZ6i1.js";import"./SkeletonParagraph-CQn9tuId.js";import"./EntityLink-DIB1Fnnq.js";import"./useEntity-9q1Wh5Bu.js";import"./pickBy-2xqbr6W2.js";import"./isString-CTj-vNCx.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CSN4EF6S.js";import"./useGetEntityHeaders-CoiB1EC4.js";import"./EntityIcon-C2FerJ6P.js";import"./ErrorChip-CXZvbbHA.js";import"./Chip-9P7ZQoxZ.js";import"./UserOrTeamBadge-CW42h3e1.js";import"./UserBadge-BXdGqvgB.js";import"./useUserBundle-MoKPhqqG.js";import"./MenuItem-DFY-M91_.js";import"./Card-bvHfdi3z.js";import"./TeamBadge-9cwNBYnH.js";import"./UnmanagedACTAccessRequirementItem-CHTBRnAe.js";import"./RequirementItem-BZDsFZJT.js";import"./LockTwoTone-QKjeW96P.js";import"./UserSearchBoxV2-CKxkPF5E.js";import"./useDebouncedEffect-BgCDm99B.js";import"./use-deep-compare-effect.esm-Bqj6i4A8.js";import"./uniq-DynFiIDi.js";import"./without-CEf-35Jl.js";import"./Select-aab027f3.esm-B5lysqVT.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-oThllIK9.js";import"./SelfSignAccessRequirementItem-CHYmxAeE.js";import"./DataAccessRequestAccessorsFilesForm-BemLLVUM.js";import"./enums-BrzcmIpu.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CYAIDqNi.js";import"./RadioGroup-LHxlfuO8.js";import"./Radio-CHzJk7F4.js";import"./SwitchBase-CwwNy5Jt.js";import"./FormGroup-RMHcGD5n.js";import"./FormControlLabel-BmYM2_bg.js";import"./UploadDocumentField-a8yAH-Rq.js";import"./FileUpload-B4qKBRYM.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CoV3Ypfi.js";import"./GridLegacy-kaK_QRJr.js";import"./ResearchProjectForm-DbTYVJju.js";import"./TextFieldWithWordLimit-Dk26_Exc.js";import"./AuthenticatedRequirement-D0K5uGVj.js";import"./CertificationRequirement-DxApTkNH.js";import"./TwoFactorAuthEnabledRequirement-hT6-m4NK.js";import"./ValidationRequirement-bjjKLvbK.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-AJ_DQWum.js";import"./RejectDataAccessRequestModal-DhctZZnL.js";import"./CannedRejectionDialog-BNaCtBhD.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-C_059iZP.js";import"./Checkbox-Cyn-RvsF.js";import"./Grid-emFPcA4V.js";import"./upperFirst-CXCrUz2k.js";import"./_stringToArray-CClOioEo.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
