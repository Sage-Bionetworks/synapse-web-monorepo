import{g as d,k as u,n as t,a3 as c,d_ as R,b as e,kw as i,kx as E,H as s,ky as _,p as m,kz as I,kA as S,kf as O}from"./iframe-r7gAu2bc.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CZIpXrx8.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BgWC_Bz6.js";import"./useAccessRequirements-CcZpityR.js";import"./index-abBLt8Ff.js";import"./_baseOrderBy-DOd0_89h.js";import"./_baseIteratee-DVLYk22D.js";import"./_baseMap-C01ANpbm.js";import"./_baseEach-BnwaDblR.js";import"./useQueries-9m2Bezy_.js";import"./useInfiniteQuery-B8z8XTlO.js";import"./groupBy-BXInGreZ.js";import"./_createAggregator-C4xK8C2c.js";import"./DialogBase-BOUiF06G.js";import"./Close-xlIC43VD.js";import"./HelpPopover-DIDZEU3E.js";import"./MarkdownPopover-DLh5Bk_h.js";import"./LightTooltip-CMMeaAaF.js";import"./MarkdownSynapse-2Kx7OuZk.js";import"./SkeletonButton-BM35HBbr.js";import"./SkeletonInlineBlock-CnfDTonB.js";import"./SkeletonTable-ChI727yy.js";import"./SkeletonParagraph-ENW1FsOv.js";import"./EntityLink-BpDJIqjC.js";import"./useEntity-fJrHHkhL.js";import"./pickBy-BCgFv0xF.js";import"./isString-CByKS3-p.js";import"./useSuspenseQuery-DnY7oDDS.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle--mzUFdcF.js";import"./useGetEntityHeaders-CzGo9vlM.js";import"./EntityIcon-CiTbHeWw.js";import"./ErrorChip-BX9upZBY.js";import"./Chip-Da8UDvbq.js";import"./UserOrTeamBadge-CghfTVgS.js";import"./UserBadge-0YnAM4bN.js";import"./useUserBundle-CoSjfhMR.js";import"./MenuItem-B0LSwwXU.js";import"./Card-B8EN43Pe.js";import"./TeamBadge-Bhj0tYjx.js";import"./useRealmPrincipals-5JkyyYLZ.js";import"./UnmanagedACTAccessRequirementItem-BulkBPiO.js";import"./RequirementItem-CFgF3WAB.js";import"./LockTwoTone-D33F24dd.js";import"./UserSearchBoxV2-CRRsEVwp.js";import"./useDebouncedEffect-N71ZfqaT.js";import"./use-deep-compare-effect.esm-DeW_apDf.js";import"./uniq-CK8qiDB8.js";import"./without-vL_c9HQB.js";import"./Select-aab027f3.esm-DlgEGlXP.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-B4ICl4wM.js";import"./SelfSignAccessRequirementItem-ChUI6vrJ.js";import"./DataAccessRequestAccessorsFilesForm-Bdz3XW4L.js";import"./enums-PjrRvVI0.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BayA54HK.js";import"./RadioGroup-C4rpomu9.js";import"./Radio-yQldQVk_.js";import"./SwitchBase-BSufJQUk.js";import"./FormGroup-BgMgGzN1.js";import"./FormControlLabel--q0TnODD.js";import"./UploadDocumentField-BAAE8Dwa.js";import"./FileUpload-CYeIR9-v.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DzNHzs66.js";import"./GridLegacy-3UsA9qiH.js";import"./ResearchProjectForm-ByBcS0-I.js";import"./TextFieldWithWordLimit-BOTZ8NXK.js";import"./AuthenticatedRequirement-D5c0dp0Y.js";import"./CertificationRequirement-lilOneJu.js";import"./TwoFactorAuthEnabledRequirement-DX4l3oqe.js";import"./ValidationRequirement-Cyf2QPl_.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-RwPew6Pm.js";import"./RejectDataAccessRequestModal-CLF-FwpK.js";import"./CannedRejectionDialog-D46Oq2tH.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-vZtrKvGV.js";import"./Checkbox-DEDTHBsJ.js";import"./Grid-UI9nWBLn.js";import"./upperFirst-DM0WkrEi.js";import"./_stringToArray-jwA7-Do0.js";const Xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
