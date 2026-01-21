import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,ks as i,kt as E,H as s,ku as _,p as m,kv as I,kw as S,kb as O}from"./iframe-BSxjDfu3.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-C4TClA0f.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BdgKVBDm.js";import"./useAccessRequirements-CMI7HBD0.js";import"./index-yQ4gO9kt.js";import"./_baseOrderBy-BqQz3J1A.js";import"./_baseIteratee-B8HVuStq.js";import"./_baseMap-cqYdZT4m.js";import"./_baseEach-CdWoyuXb.js";import"./useQueries-D2o2etJf.js";import"./useInfiniteQuery-C94oUW7N.js";import"./groupBy-DfQoNV1o.js";import"./_createAggregator-Dnay0rCC.js";import"./DialogBase-C7KiMXAc.js";import"./Close-C8jghUIv.js";import"./HelpPopover-Ck3jSwjq.js";import"./MarkdownPopover-CtYZclYs.js";import"./LightTooltip-C6ZdzN3s.js";import"./MarkdownSynapse-BPy50KJ3.js";import"./SkeletonButton-Bu5XGQ_G.js";import"./SkeletonInlineBlock-B21sfNKh.js";import"./SkeletonTable-Bd6B-VEF.js";import"./SkeletonParagraph-ssYRCcJC.js";import"./EntityLink-CijL3lfy.js";import"./useEntity-KS5kNauW.js";import"./pickBy-KPoNrIIw.js";import"./isString-D9cl2q_q.js";import"./useSuspenseQuery-B5B_wZvU.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CkG6Qytw.js";import"./useGetEntityHeaders-Cl7fVQKr.js";import"./EntityIcon-DhmtoMrA.js";import"./ErrorChip-wwQcBcwI.js";import"./Chip-DILx9paE.js";import"./UserOrTeamBadge-BP4SHFbU.js";import"./UserBadge-GA8Aaaz5.js";import"./useUserBundle-CJruWbUT.js";import"./MenuItem-DlHsRU9I.js";import"./Card-Ch_3DhEC.js";import"./TeamBadge-B-VLPGW-.js";import"./UnmanagedACTAccessRequirementItem-Cb1X75U4.js";import"./RequirementItem-nm7Sk8Z2.js";import"./LockTwoTone-OphRZB3v.js";import"./UserSearchBoxV2-B-bMBan7.js";import"./useDebouncedEffect-DspxW6NL.js";import"./use-deep-compare-effect.esm-DnLaWVar.js";import"./uniq-DnnhAaXm.js";import"./without-D6_IH4Oy.js";import"./Select-aab027f3.esm-iFB6L2qP.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-Bc2_huvR.js";import"./SelfSignAccessRequirementItem-B5mRYaCX.js";import"./DataAccessRequestAccessorsFilesForm-dL-ATEvE.js";import"./enums-TtQwdwfy.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-5vUGf9-E.js";import"./RadioGroup-BUKLgezK.js";import"./Radio-Dh69UoRp.js";import"./SwitchBase-CWG7NOcH.js";import"./FormGroup-d2txErYR.js";import"./FormControlLabel-B8jQ_ctF.js";import"./UploadDocumentField-D5qB7b6Y.js";import"./FileUpload-CXQDlT4A.js";import"./ManagedACTAccessRequirementFormWikiWrapper-B5Crwg3O.js";import"./GridLegacy-CvmZMt7i.js";import"./ResearchProjectForm-D-IUalV7.js";import"./TextFieldWithWordLimit-DLQ2sXrR.js";import"./AuthenticatedRequirement-Dwmt-ay9.js";import"./CertificationRequirement-CvzFNv5U.js";import"./TwoFactorAuthEnabledRequirement-DVLMgT--.js";import"./ValidationRequirement-C5N5dPzP.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DXGKj8lg.js";import"./RejectDataAccessRequestModal-DwS2Vwtm.js";import"./CannedRejectionDialog-BbHXgOgl.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BqzMQSuY.js";import"./Checkbox-C2LcxS2l.js";import"./Grid-BDEjP6rw.js";import"./upperFirst-DoO1I2Ma.js";import"./_stringToArray-3zGK4MtT.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
