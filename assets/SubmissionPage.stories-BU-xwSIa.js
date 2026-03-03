import{g as d,k as u,n as t,a3 as c,dN as R,b as e,kn as i,ko as E,H as s,kp as _,p as m,kq as I,kr as S,k6 as O}from"./iframe-Caumy8OG.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-ZR2t9Hsu.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Ckrahij6.js";import"./useAccessRequirements-cfNKhQnY.js";import"./index-CS5uaYEv.js";import"./_baseOrderBy-BvVyt_uN.js";import"./_baseIteratee-DzjmW7wv.js";import"./_baseMap-B8jvX8FY.js";import"./_baseEach-BhkAZ48F.js";import"./useInfiniteQuery-BettF6mH.js";import"./groupBy-DnM09qAE.js";import"./_createAggregator-CCuFcwHp.js";import"./DialogBase-BwhcKSSX.js";import"./Close-DQtVppmx.js";import"./HelpPopover-DLbRiMnr.js";import"./MarkdownPopover-Ed--YpdW.js";import"./LightTooltip-VmaxT5-P.js";import"./MarkdownSynapse-BvD7qHpg.js";import"./SkeletonButton-CJd-6_Rb.js";import"./SkeletonInlineBlock-Mrzyi1ZX.js";import"./SkeletonTable-Cy3CPYvw.js";import"./SkeletonParagraph-tEoCsyXm.js";import"./EntityLink-CUN0dREC.js";import"./useEntity-NcbfSa9c.js";import"./pickBy-GnA78qLv.js";import"./isString-3W3sh8x8.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DTuMLcTt.js";import"./useGetEntityHeaders-Blpjnni5.js";import"./EntityIcon-Bhy-ZX_f.js";import"./ErrorChip-CBCwiNpg.js";import"./Chip-BD4K8GZ0.js";import"./UserOrTeamBadge-uz5_kFYs.js";import"./UserBadge-D_bg6T3T.js";import"./useUserBundle-YBqMkgNg.js";import"./MenuItem-C3S0i9k3.js";import"./Card-CcHhVuhh.js";import"./TeamBadge-BRbRw6fE.js";import"./UnmanagedACTAccessRequirementItem-B5dy-gih.js";import"./RequirementItem-D0hSBD3p.js";import"./LockTwoTone-CMJnfqaM.js";import"./UserSearchBoxV2-CVqmuKlx.js";import"./useDebouncedEffect-Dxp3O6Ms.js";import"./use-deep-compare-effect.esm-w94gK5Iv.js";import"./uniq-8GX06W3w.js";import"./without-DzQSpwit.js";import"./Select-aab027f3.esm-lemzqpZg.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BPp_2X9m.js";import"./SelfSignAccessRequirementItem-D1pDy3ws.js";import"./DataAccessRequestAccessorsFilesForm-B_xjkQNw.js";import"./enums-CFANHKcv.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CBU1pezo.js";import"./RadioGroup-CxSN7KIq.js";import"./Radio-n7RIZkyD.js";import"./SwitchBase-C6I4ypvl.js";import"./FormGroup-Bmj3lUVr.js";import"./FormControlLabel-D5JHQXeU.js";import"./UploadDocumentField-XPe-Z6rn.js";import"./FileUpload-CzyfF0RV.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BmZQNTWv.js";import"./GridLegacy-Dlso49CB.js";import"./ResearchProjectForm-vQTc6Fxk.js";import"./TextFieldWithWordLimit-6DlAMYwV.js";import"./AuthenticatedRequirement-xkdG0Emz.js";import"./CertificationRequirement-mPvXh7-b.js";import"./TwoFactorAuthEnabledRequirement-BZFpW7nG.js";import"./ValidationRequirement-C7f_vQnO.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CmXiJhA7.js";import"./RejectDataAccessRequestModal-Ez090SQB.js";import"./CannedRejectionDialog-DVC3f7Ms.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-IHEJhKNR.js";import"./Checkbox-MkkB8eUh.js";import"./Grid-DbgtV8Vv.js";import"./upperFirst-C7KESMle.js";import"./_stringToArray-chidP4Wh.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
