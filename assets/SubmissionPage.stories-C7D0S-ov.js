import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kt as i,ku as E,H as s,kv as _,p as m,kw as I,kx as S,kc as O}from"./iframe-APvH4-EU.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DXc6HJsO.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-c_GaoI--.js";import"./useAccessRequirements-VgzOe8R1.js";import"./index-D47LyWhc.js";import"./_baseOrderBy-DjelCSDF.js";import"./_baseIteratee-BL2YfOvy.js";import"./_baseMap-CzrgHchl.js";import"./_baseEach-CY-VY-KP.js";import"./useQueries-oePch1EY.js";import"./useInfiniteQuery-D6M6aPtH.js";import"./groupBy-D1vi91Mz.js";import"./_createAggregator-4BGuSEpX.js";import"./DialogBase-DTI285K7.js";import"./Close-DHMYFigw.js";import"./HelpPopover-CGN_eeqD.js";import"./MarkdownPopover-BR7BvXms.js";import"./LightTooltip-DLRUuSTA.js";import"./MarkdownSynapse-DskHTRMD.js";import"./SkeletonButton-DQaucWcO.js";import"./SkeletonInlineBlock-REk_WUt3.js";import"./SkeletonTable-DlsS5ryj.js";import"./SkeletonParagraph-Oi6HEV15.js";import"./EntityLink-DqsOH8yU.js";import"./useEntity-8aU7O6mB.js";import"./pickBy-BniAp8F_.js";import"./isString-CUjFYPnQ.js";import"./useSuspenseQuery-BkKvG_I6.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-NfmsTkgf.js";import"./useGetEntityHeaders-FY1z5De6.js";import"./EntityIcon-Cn178f9c.js";import"./ErrorChip-CWf_UrVY.js";import"./Chip-CQxp7Hzb.js";import"./UserOrTeamBadge-QDli3JAL.js";import"./UserBadge-Crk5iR3C.js";import"./useUserBundle-DqlMHXaF.js";import"./MenuItem-C4atoZrr.js";import"./Card-Dl8RF_hG.js";import"./TeamBadge-CUQetA2b.js";import"./UnmanagedACTAccessRequirementItem-D3WUbWGH.js";import"./RequirementItem-CctvggxS.js";import"./LockTwoTone-74muq5eK.js";import"./UserSearchBoxV2-DrZLvlqx.js";import"./useDebouncedEffect-DUN74djT.js";import"./use-deep-compare-effect.esm-BJrFYGUS.js";import"./uniq-BDoUxZmE.js";import"./without-CYwawT9W.js";import"./Select-aab027f3.esm-B7pgFLrK.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-B7JpTOh4.js";import"./SelfSignAccessRequirementItem-CxJ_U_VH.js";import"./DataAccessRequestAccessorsFilesForm-V8PWttQX.js";import"./enums-C-jZVbF_.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CH7RBpf7.js";import"./RadioGroup-bRdDLjKy.js";import"./Radio-DIoKo2Rc.js";import"./SwitchBase-D78Lly7L.js";import"./FormGroup-DF7-0ZLq.js";import"./FormControlLabel-CkPBDtXz.js";import"./UploadDocumentField-CodVXUaX.js";import"./FileUpload-CUQoQVq5.js";import"./ManagedACTAccessRequirementFormWikiWrapper-4cB-D41r.js";import"./GridLegacy-DwMdnc5j.js";import"./ResearchProjectForm-WFLVeepn.js";import"./TextFieldWithWordLimit-Dpw3U1Ng.js";import"./AuthenticatedRequirement-DP6IC86R.js";import"./CertificationRequirement-Bxf8IR9q.js";import"./TwoFactorAuthEnabledRequirement-DOuo8WLU.js";import"./ValidationRequirement-V6xSTM6f.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-LMcRHng6.js";import"./RejectDataAccessRequestModal-CiQ0BkSq.js";import"./CannedRejectionDialog-Ci2zZ2xy.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-AkXFjHcI.js";import"./Checkbox-D2r4P1W3.js";import"./Grid-DBOKbSoi.js";import"./upperFirst-CcCMt5sU.js";import"./_stringToArray-CBBSSjUC.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
