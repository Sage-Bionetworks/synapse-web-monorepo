import{g as u,k as d,n as t,a3 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-DR0uSfJB.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-TRAr8BUT.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Dg1aYfax.js";import"./useAccessRequirements-DioFPcC_.js";import"./index-BHYxApRu.js";import"./_baseOrderBy-DpB0RZ7Z.js";import"./_baseIteratee-BliHnktd.js";import"./_baseMap-BohI5ZmA.js";import"./_baseEach-DK-2XrG3.js";import"./useInfiniteQuery-Bf2Ztb4F.js";import"./groupBy-CEISOJaI.js";import"./_createAggregator-FYglJ6Ew.js";import"./DialogBase-BCLn1mc7.js";import"./Close-DW5206ij.js";import"./HelpPopover-BiI80afJ.js";import"./MarkdownPopover-CdU2RNyH.js";import"./LightTooltip-CqEwD-qc.js";import"./MarkdownSynapse-BewMr670.js";import"./SkeletonButton-hycMW2ML.js";import"./SkeletonInlineBlock-Cc3tKGBX.js";import"./SkeletonTable-DQpC9D8t.js";import"./SkeletonParagraph-FBICusf3.js";import"./EntityLink-DMGuyLea.js";import"./useEntity-BooQYDEM.js";import"./pickBy-BtS8uSOi.js";import"./isString-B5pzKkPi.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B0tud9UF.js";import"./useGetEntityHeaders-C3ZQDLXZ.js";import"./EntityIcon-PoNf9mAp.js";import"./ErrorChip-CdoM5z0c.js";import"./Chip-C7t_e7oc.js";import"./UserOrTeamBadge-Dq--wLhR.js";import"./UserBadge-H2XEmPKG.js";import"./useUserBundle-GG-xTFJo.js";import"./MenuItem-Fs-K7yfa.js";import"./Card-BtsV7fy1.js";import"./TeamBadge-BOMGnxJt.js";import"./UnmanagedACTAccessRequirementItem-DiqtiBBj.js";import"./RequirementItem-Yc_KzYG9.js";import"./LockTwoTone-DMU7U81U.js";import"./UserSearchBoxV2-Do7G_nHi.js";import"./useDebouncedEffect-B98yozRZ.js";import"./use-deep-compare-effect.esm-CI45YVk3.js";import"./uniq-CnlYDF1j.js";import"./without-w2adp344.js";import"./Select-aab027f3.esm-DEhoXYTm.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BkRwvRqH.js";import"./SelfSignAccessRequirementItem-CZWSZiMe.js";import"./DataAccessRequestAccessorsFilesForm-SEmJpl__.js";import"./enums-BmoTKo2b.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DeckoNPf.js";import"./RadioGroup-DuJbs0jq.js";import"./Radio-AnHLvEi1.js";import"./SwitchBase-CNQkEcG9.js";import"./FormGroup-gZBewhBg.js";import"./FormControlLabel-jBye_ljs.js";import"./UploadDocumentField-C6IhuLYE.js";import"./FileUpload-BQltU8KY.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CKWFvtCj.js";import"./GridLegacy-BrrtEhMO.js";import"./ResearchProjectForm-ByS6-md4.js";import"./TextFieldWithWordLimit-CawfG7wW.js";import"./AuthenticatedRequirement-5zbVNlPa.js";import"./CertificationRequirement-DAxJJLnV.js";import"./TwoFactorAuthEnabledRequirement-GMS2QBUM.js";import"./ValidationRequirement-DuIM7PVM.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-E2NRve4_.js";import"./RejectDataAccessRequestModal-Qs8Bk2ws.js";import"./CannedRejectionDialog-HH_gjJeL.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-DZyRzdVz.js";import"./Checkbox-D1u9ZvPz.js";import"./Grid-BsMBS9ZV.js";import"./upperFirst-BFJjlxCE.js";import"./_stringToArray-YOWTFc7I.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
