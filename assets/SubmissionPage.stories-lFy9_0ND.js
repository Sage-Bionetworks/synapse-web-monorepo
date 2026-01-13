import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-z21gSILm.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-o3yPvhSt.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DrpPdAAo.js";import"./useAccessRequirements-BkOw6L9o.js";import"./index-BRmRy84u.js";import"./_baseOrderBy-BuzTgFRM.js";import"./_baseIteratee-K4gGkGhX.js";import"./_baseMap-9TWFIhh_.js";import"./_baseEach-BjqsPzRj.js";import"./useQueries-BqopBRXG.js";import"./useInfiniteQuery-DViYzGwW.js";import"./groupBy-CzEckRw2.js";import"./_createAggregator-CHWu8HJj.js";import"./DialogBase-DQK4XqJC.js";import"./Close-qryw1NjU.js";import"./HelpPopover-Boy-nK2n.js";import"./MarkdownPopover-BmUk5Bqy.js";import"./LightTooltip-S0tAvjiv.js";import"./MarkdownSynapse-DllhcJ_D.js";import"./SkeletonButton-Q38ELWwJ.js";import"./SkeletonInlineBlock-DuFis4qM.js";import"./SkeletonTable-HmkSCDv0.js";import"./SkeletonParagraph-DwVqH0kg.js";import"./EntityLink-BQ0KIBmD.js";import"./useEntity-DnU3C6M5.js";import"./pickBy-C38-sRNI.js";import"./isString-BfwWT6Hp.js";import"./useSuspenseQuery-BDbBJqHo.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-hKGlFwyR.js";import"./useGetEntityHeaders-D3YVm3Gg.js";import"./EntityIcon-BI2gxiJM.js";import"./ErrorChip-Djh_fclV.js";import"./Chip-rCXgsppD.js";import"./UserOrTeamBadge-VdPS--Jh.js";import"./UserBadge-nSpluHjM.js";import"./useUserBundle-Bi_03OP-.js";import"./MenuItem-BqzvmG8S.js";import"./Card-BBNGqpZ7.js";import"./TeamBadge-BzHjl8o1.js";import"./UnmanagedACTAccessRequirementItem-DMFsB4Mn.js";import"./RequirementItem-HAOW-e2a.js";import"./LockTwoTone-DdlhvB7-.js";import"./UserSearchBoxV2-wpbFbrPT.js";import"./useDebouncedEffect-C2xmHJOv.js";import"./use-deep-compare-effect.esm-BLtmLhJ_.js";import"./uniq-wtN09MDV.js";import"./without-CFqHfsmS.js";import"./Select-aab027f3.esm-WxeQxST3.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-FCwnUsHq.js";import"./SelfSignAccessRequirementItem-ByCPq3Z0.js";import"./DataAccessRequestAccessorsFilesForm-YZg1mrau.js";import"./enums-Rgo4j3BR.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CLOO3Awk.js";import"./RadioGroup-DBvUwZT0.js";import"./Radio-iigXD3iG.js";import"./SwitchBase-hDliWsMw.js";import"./FormGroup-xyXxPmjh.js";import"./FormControlLabel-CHgCz5PK.js";import"./UploadDocumentField-C_Rn1PjG.js";import"./FileUpload-ChWeZegG.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CL5z3dko.js";import"./GridLegacy-4YF6Sl2U.js";import"./ResearchProjectForm-D-3-VwLh.js";import"./TextFieldWithWordLimit-C7VfAjzg.js";import"./AuthenticatedRequirement-i2UrmSlx.js";import"./CertificationRequirement-B4DdwbBm.js";import"./TwoFactorAuthEnabledRequirement-CkwvEI8e.js";import"./ValidationRequirement-ZI1xVqyd.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BoSQk9hG.js";import"./RejectDataAccessRequestModal-C-owYGdl.js";import"./CannedRejectionDialog-C7EXCAZe.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-C8lFb7mH.js";import"./Checkbox-BzxLKyOz.js";import"./Grid-ZG61elFB.js";import"./upperFirst-CwuAAFJV.js";import"./_stringToArray-BKJiITJZ.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
