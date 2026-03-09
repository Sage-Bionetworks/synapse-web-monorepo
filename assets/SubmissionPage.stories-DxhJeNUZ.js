import{g as u,k as d,n as t,a3 as c,dP as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-BEF4MEGo.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-HzA751Nx.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-D4Iyj9LF.js";import"./useAccessRequirements-B0-4Za3Z.js";import"./index-CPBFcEpw.js";import"./_baseOrderBy-ClP2j4Ii.js";import"./_baseIteratee-HJwSZeSD.js";import"./_baseMap-BNCMHn69.js";import"./_baseEach-DFsFxJY1.js";import"./useInfiniteQuery-DIn0P7iw.js";import"./groupBy-CnP_JZO2.js";import"./_createAggregator-BJVBp8ta.js";import"./DialogBase-C-U41h-h.js";import"./Close-CpFdUeMZ.js";import"./HelpPopover-DCEUptUW.js";import"./MarkdownPopover-D6Nnm8NP.js";import"./LightTooltip-u_zYTDNY.js";import"./MarkdownSynapse-2vacgikM.js";import"./SkeletonButton-DtUWEjyN.js";import"./SkeletonInlineBlock-B_sSYUYb.js";import"./SkeletonTable-B7lcCt2v.js";import"./SkeletonParagraph-kmlFPk4O.js";import"./EntityLink-Bho8fsrv.js";import"./useEntity-DdNYsGui.js";import"./pickBy-DiCMKNkD.js";import"./isString-CNlkU8gZ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BKjAM-VU.js";import"./useGetEntityHeaders-TWuXyZ8-.js";import"./EntityIcon-DoO3NrCy.js";import"./ErrorChip-CGfYS3si.js";import"./Chip-Cww2ggjY.js";import"./UserOrTeamBadge-CJYk2xF_.js";import"./UserBadge-Du1rJukw.js";import"./useUserBundle-BSq5yoVT.js";import"./MenuItem-kdifhyeS.js";import"./Card-CqODmY2j.js";import"./TeamBadge-DPfeSb1U.js";import"./UnmanagedACTAccessRequirementItem-BFJeEBvf.js";import"./RequirementItem-CXwPXq2u.js";import"./LockTwoTone-BZgMbk30.js";import"./UserSearchBoxV2-B4xNPBMt.js";import"./useDebouncedEffect-BmYoesLn.js";import"./use-deep-compare-effect.esm-Jr4uTSBk.js";import"./uniq-BKv1Vzad.js";import"./without-D3NBcYVN.js";import"./Select-aab027f3.esm-CxrIXDaY.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-C3LEHpCW.js";import"./SelfSignAccessRequirementItem-CQe71SJ8.js";import"./DataAccessRequestAccessorsFilesForm-CzPG5QvC.js";import"./enums-ClR57Pzo.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-XQ2_UEdS.js";import"./RadioGroup-S3himzUS.js";import"./Radio-oCfsL6ZG.js";import"./SwitchBase-DfgA2tSv.js";import"./FormGroup-D6hiKVQm.js";import"./FormControlLabel-B2UUG1VG.js";import"./UploadDocumentField-tOMLswkn.js";import"./FileUpload-BDUx8SzP.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CjTDmiBn.js";import"./GridLegacy-DFS9jq0C.js";import"./ResearchProjectForm-DR005w-7.js";import"./TextFieldWithWordLimit-C4zcuD2G.js";import"./AuthenticatedRequirement-Bhb-PyD6.js";import"./CertificationRequirement-hYCAqmXD.js";import"./TwoFactorAuthEnabledRequirement-CiZJPJch.js";import"./ValidationRequirement-B88KDsoP.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BmGuJgOC.js";import"./RejectDataAccessRequestModal-Ztr4VDt9.js";import"./CannedRejectionDialog-DDp7OI9o.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CSdXW-H0.js";import"./Checkbox-BoENjelX.js";import"./Grid-BDAXk-a3.js";import"./upperFirst-Cp8ZXVC-.js";import"./_stringToArray-DthGnG6n.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
