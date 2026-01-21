import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,ks as i,kt as E,H as s,ku as _,p as m,kv as I,kw as S,kb as O}from"./iframe-iaFph9yc.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Cxuns6wh.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-RPGpQzZG.js";import"./useAccessRequirements-GgK6J5DE.js";import"./index-D1SN15cL.js";import"./_baseOrderBy-C6LPUMiM.js";import"./_baseIteratee-Bur-meKq.js";import"./_baseMap-DhThEwhz.js";import"./_baseEach-BaFTTzmm.js";import"./useQueries-CBX8q7F2.js";import"./useInfiniteQuery-B8r8qZIF.js";import"./groupBy-2WijDbfH.js";import"./_createAggregator-CcDziadb.js";import"./DialogBase-7SF-wmQP.js";import"./Close-Bjrfd6AQ.js";import"./HelpPopover-BaZV2lZ_.js";import"./MarkdownPopover-BNEfL_Q8.js";import"./LightTooltip-bP90seli.js";import"./MarkdownSynapse-B4ghWRuT.js";import"./SkeletonButton-B6vkGKKc.js";import"./SkeletonInlineBlock-t24_wtaY.js";import"./SkeletonTable-B2Y-Wv49.js";import"./SkeletonParagraph-BYLtoQSS.js";import"./EntityLink-DSbxe3MC.js";import"./useEntity-CfIJpbYu.js";import"./pickBy-DMfd_cxo.js";import"./isString-LNdP_NKH.js";import"./useSuspenseQuery-C563HQMf.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-7UUBDhoV.js";import"./useGetEntityHeaders-CEOTRFnf.js";import"./EntityIcon-3WAQIiT1.js";import"./ErrorChip-CiwIY4s1.js";import"./Chip-BBLqCKej.js";import"./UserOrTeamBadge-BprTyHoO.js";import"./UserBadge-DSA5D5_6.js";import"./useUserBundle-PLLHiZJr.js";import"./MenuItem-CecQK7Ew.js";import"./Card-BM6tXyVk.js";import"./TeamBadge-COeawU5T.js";import"./UnmanagedACTAccessRequirementItem-DhA2NbAF.js";import"./RequirementItem-BHt-fDg0.js";import"./LockTwoTone-ClKWpneA.js";import"./UserSearchBoxV2-DJe_f8Yj.js";import"./useDebouncedEffect-C8D4lOK0.js";import"./use-deep-compare-effect.esm-e71_7G6x.js";import"./uniq-BEl88TRR.js";import"./without-DeolgOsl.js";import"./Select-aab027f3.esm-CqxnU4Ee.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BAJ1eEI1.js";import"./SelfSignAccessRequirementItem-CWcC9X_l.js";import"./DataAccessRequestAccessorsFilesForm-qglqC40T.js";import"./enums-B3qi3AqN.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CV28ty3g.js";import"./RadioGroup-Cipsd4nA.js";import"./Radio-AheYlswj.js";import"./SwitchBase-B4RLmS9t.js";import"./FormGroup-aZWteynh.js";import"./FormControlLabel-DQ86lw9L.js";import"./UploadDocumentField-S62by3aw.js";import"./FileUpload-CPI24OPV.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DBRTfYFW.js";import"./GridLegacy-BGO6PrIA.js";import"./ResearchProjectForm-B2t9123U.js";import"./TextFieldWithWordLimit-DceQaJiQ.js";import"./AuthenticatedRequirement-DKcQrjjU.js";import"./CertificationRequirement-D2ZuWrYW.js";import"./TwoFactorAuthEnabledRequirement-Be_ImgK0.js";import"./ValidationRequirement-CR9TlXWq.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CzObNoTP.js";import"./RejectDataAccessRequestModal-CifNEDgz.js";import"./CannedRejectionDialog-CeqmNm1T.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Cv2UpenB.js";import"./Checkbox-C2zRGAX9.js";import"./Grid-DjkLRenk.js";import"./upperFirst-BFPzFhfo.js";import"./_stringToArray-Bfs8EPtp.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
