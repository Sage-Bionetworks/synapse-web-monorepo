import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,ks as i,kt as E,H as s,ku as _,p as m,kv as I,kw as S,kb as O}from"./iframe-Byg5KEO3.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CVfdBBKZ.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DFl-lMf5.js";import"./useAccessRequirements-BFltvEm-.js";import"./index-ChYi0wId.js";import"./_baseOrderBy-CMNMWfl4.js";import"./_baseIteratee-BBeohnql.js";import"./_baseMap-Dh1UxD53.js";import"./_baseEach-DKjp9Dcv.js";import"./useQueries-C6NKqSzQ.js";import"./useInfiniteQuery-CZPJsNj1.js";import"./groupBy-DbQGxc7T.js";import"./_createAggregator-BEfVveyE.js";import"./DialogBase-CnDWnT2B.js";import"./Close-CpMA1DKn.js";import"./HelpPopover-CT10kuL6.js";import"./MarkdownPopover-DISWB6lN.js";import"./LightTooltip-MazkSLsv.js";import"./MarkdownSynapse-DUFzxpBi.js";import"./SkeletonButton-4jGLqIPK.js";import"./SkeletonInlineBlock-BMXq3IDQ.js";import"./SkeletonTable-DoPPIijf.js";import"./SkeletonParagraph-Bg9PA-th.js";import"./EntityLink-CHS3fZOz.js";import"./useEntity-B0F1BV1-.js";import"./pickBy-Cy-6Aoff.js";import"./isString-TROJc6Os.js";import"./useSuspenseQuery-BsTrDnpu.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D7nhzojx.js";import"./useGetEntityHeaders-D0a4CxFL.js";import"./EntityIcon-Ba_TKSkQ.js";import"./ErrorChip-4DD5j-Zq.js";import"./Chip-S8C0h81Q.js";import"./UserOrTeamBadge-B3Usl9zj.js";import"./UserBadge-BLjnlATj.js";import"./useUserBundle-CIHk5rZS.js";import"./MenuItem-CHAd-f9u.js";import"./Card-BiYdDpof.js";import"./TeamBadge-Gt4klzbq.js";import"./UnmanagedACTAccessRequirementItem-D_K20OtJ.js";import"./RequirementItem-CeRS1ccG.js";import"./LockTwoTone-BFtfKTHn.js";import"./UserSearchBoxV2-YQMP7Lcc.js";import"./useDebouncedEffect-CaZVZTCW.js";import"./use-deep-compare-effect.esm-BWSGc1tK.js";import"./uniq-gdhuEJJ5.js";import"./without-D1ykyPhw.js";import"./Select-aab027f3.esm-DDKpUJuh.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-B1GOHygR.js";import"./SelfSignAccessRequirementItem-7WFL7bVM.js";import"./DataAccessRequestAccessorsFilesForm-ckvtZpgh.js";import"./enums-CTprVHaS.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-C6eZc-Mu.js";import"./RadioGroup-DsLq5KwB.js";import"./Radio-XqLyY8oA.js";import"./SwitchBase-C8XdKuoM.js";import"./FormGroup-hRXkSNVI.js";import"./FormControlLabel-Dqq0s6IM.js";import"./UploadDocumentField-BmZRLqbH.js";import"./FileUpload-uQ-d3yBm.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DOUglk_D.js";import"./GridLegacy-B8qi-HmM.js";import"./ResearchProjectForm-CPj2ree0.js";import"./TextFieldWithWordLimit-OAJ71r9T.js";import"./AuthenticatedRequirement-BUNwvaX5.js";import"./CertificationRequirement-BNKPe-PW.js";import"./TwoFactorAuthEnabledRequirement-DzRk58yw.js";import"./ValidationRequirement-BS8OgvKl.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Bsg2WMJK.js";import"./RejectDataAccessRequestModal-DVU07as2.js";import"./CannedRejectionDialog-BdAYZlGH.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-JsFCfxK0.js";import"./Checkbox-T60t_rf9.js";import"./Grid-DxpU9yRv.js";import"./upperFirst-CnTzh5Xg.js";import"./_stringToArray-DkWWY5vk.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
