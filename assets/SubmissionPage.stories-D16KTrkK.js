import{g as u,k as d,n as t,a3 as c,e0 as R,b as e,ku as i,kv as E,H as s,kw as _,p as m,kx as I,ky as S,kd as O}from"./iframe-CqOjta_N.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-C2uyA1pj.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CjO80lXC.js";import"./useAccessRequirements-Dj24ol6H.js";import"./index-BRBOZzYG.js";import"./_baseOrderBy-CrOC6Mn0.js";import"./_baseIteratee-Qgts5el_.js";import"./_baseMap-DE06An5T.js";import"./_baseEach-DE_p8oHn.js";import"./useQueries-DQ-K6YXz.js";import"./useInfiniteQuery-BaCRejyT.js";import"./groupBy--Nn1CkMv.js";import"./_createAggregator-DWcL3GiJ.js";import"./DialogBase-CYbBRd4W.js";import"./Close-B3SqSRyi.js";import"./HelpPopover-CldbtdCh.js";import"./MarkdownPopover-uBOu0K68.js";import"./LightTooltip-DC7cbKib.js";import"./MarkdownSynapse-D2zbplv6.js";import"./SkeletonButton-BR5YXC6L.js";import"./SkeletonInlineBlock-CN4aVK2u.js";import"./SkeletonTable-BGlGLKIw.js";import"./SkeletonParagraph-B4VFFfOl.js";import"./EntityLink-Dbd66-s9.js";import"./useEntity-BTY_Vrx_.js";import"./pickBy-DCigQKsA.js";import"./isString-CviB6SVY.js";import"./useSuspenseQuery-BD3WNLbV.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D6jYmZmr.js";import"./useGetEntityHeaders-CFQZnQLN.js";import"./EntityIcon-BXLjmr0A.js";import"./ErrorChip-CPn8AjKg.js";import"./Chip-9i0QEYWa.js";import"./UserOrTeamBadge-Ciy7jFc1.js";import"./UserBadge-D2tCEW5C.js";import"./useUserBundle-D8JYfTyv.js";import"./MenuItem-DGqgHDXw.js";import"./Card-qx92vT-y.js";import"./TeamBadge-LU9hsP02.js";import"./UnmanagedACTAccessRequirementItem--zPf6nV7.js";import"./RequirementItem-Bwnaw-f9.js";import"./LockTwoTone-BLCFnGCc.js";import"./UserSearchBoxV2-CuVQKUqF.js";import"./useDebouncedEffect-G9xT7YEM.js";import"./use-deep-compare-effect.esm-BUOODDvb.js";import"./uniq-Dl61YuRX.js";import"./without-GtTijs6J.js";import"./Select-aab027f3.esm-g8nPODH5.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CmcAv3lg.js";import"./SelfSignAccessRequirementItem-TqpfBjn9.js";import"./DataAccessRequestAccessorsFilesForm-ByJZNRyP.js";import"./enums-Cypp8Auw.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CtxLCUky.js";import"./RadioGroup-BlD7Ma5X.js";import"./Radio-O3q3WmOJ.js";import"./SwitchBase-IqgR6dPG.js";import"./FormGroup-ZWmzgqQz.js";import"./FormControlLabel-4STj1xWu.js";import"./UploadDocumentField-CrdXQfCQ.js";import"./FileUpload-agIwHsEP.js";import"./ManagedACTAccessRequirementFormWikiWrapper-D7jIqtIR.js";import"./GridLegacy-YcXQgmix.js";import"./ResearchProjectForm-D4v58qT_.js";import"./TextFieldWithWordLimit-Ci8c1Ov5.js";import"./AuthenticatedRequirement-BVJ1YdWU.js";import"./CertificationRequirement-DeSgnwXd.js";import"./TwoFactorAuthEnabledRequirement-CLikXPDV.js";import"./ValidationRequirement-C5yNJOP6.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Cf4U74uv.js";import"./RejectDataAccessRequestModal-BHs2TnJi.js";import"./CannedRejectionDialog-BSe6Is6H.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-NO_pJ3mE.js";import"./Checkbox-DyGR3-VE.js";import"./Grid-78ouEGxR.js";import"./upperFirst-iyjh4WVd.js";import"./_stringToArray-DMra8_38.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
