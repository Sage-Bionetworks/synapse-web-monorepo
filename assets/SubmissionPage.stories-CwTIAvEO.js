import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-DCJ7skCF.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-De7uTxE2.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-lxA6lW19.js";import"./useAccessRequirements-40VLCRft.js";import"./index-BmNsh1D_.js";import"./_baseOrderBy-BeTOIVW0.js";import"./_baseIteratee-BxzXFjBF.js";import"./_baseMap-GyITq5cq.js";import"./_baseEach-C1NioYL1.js";import"./useQueries-HPJfUFcz.js";import"./useInfiniteQuery-Cnz7W2re.js";import"./groupBy-BLoA9FIa.js";import"./_createAggregator-CkjuUdbm.js";import"./DialogBase-DG8iPOdE.js";import"./Close-D40JfmeO.js";import"./HelpPopover-DR0W0zRn.js";import"./MarkdownPopover-C1w3Ce6S.js";import"./LightTooltip-C9fCe4UT.js";import"./MarkdownSynapse-BU0jW5rD.js";import"./SkeletonButton-Ckcy3ANt.js";import"./SkeletonInlineBlock-XM0IHiqH.js";import"./SkeletonTable-91lmyC3W.js";import"./SkeletonParagraph-CIIa240g.js";import"./EntityLink-BlJn1P5E.js";import"./useEntity-7Mmx4dfI.js";import"./pickBy-8XGIGDox.js";import"./isString-DO8e_9rj.js";import"./useSuspenseQuery-hpjNpxLU.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-rdkBsBdL.js";import"./useGetEntityHeaders-rjdI9PWe.js";import"./EntityIcon-CFtTZIuN.js";import"./ErrorChip-CZdumukV.js";import"./Chip-BB_My-sd.js";import"./UserOrTeamBadge-DaeII1IB.js";import"./UserBadge-B1k4a2En.js";import"./useUserBundle-B1IzmcZW.js";import"./MenuItem-yNgfeWcI.js";import"./Card-CrtXJCz7.js";import"./TeamBadge-DjtJvXto.js";import"./UnmanagedACTAccessRequirementItem-wPCRpHwT.js";import"./RequirementItem-CTA77a8T.js";import"./LockTwoTone-DchQZUX_.js";import"./UserSearchBoxV2-DE5MPaju.js";import"./useDebouncedEffect-BjKyg8N_.js";import"./use-deep-compare-effect.esm-DRQaZ9j-.js";import"./uniq-5mVGOylI.js";import"./without-DYzdF1Dc.js";import"./Select-aab027f3.esm-D7rTPQWe.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-puuge5hM.js";import"./SelfSignAccessRequirementItem-Bk3_kCXC.js";import"./DataAccessRequestAccessorsFilesForm-B1DEwnsR.js";import"./enums-_3bGLgvO.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-b0LzC8E-.js";import"./RadioGroup-EAvFIfF1.js";import"./Radio-CB1uIkZJ.js";import"./SwitchBase-CnTd8DTj.js";import"./FormGroup-DJ0nMlSq.js";import"./FormControlLabel-B12_DI4H.js";import"./UploadDocumentField-BFnLNv6e.js";import"./FileUpload-Dr05r7Bo.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Dv1c0jju.js";import"./GridLegacy-D2s81Tma.js";import"./ResearchProjectForm-2cTEqLOw.js";import"./TextFieldWithWordLimit-JdXS3mSY.js";import"./AuthenticatedRequirement-DYW57q6s.js";import"./CertificationRequirement-B_GS5qXC.js";import"./TwoFactorAuthEnabledRequirement-DDvbCV3P.js";import"./ValidationRequirement-DKvL8IqZ.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Z4u1Rz2C.js";import"./RejectDataAccessRequestModal-CAYpc0XQ.js";import"./CannedRejectionDialog-CGxTtOKr.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CNckvYkU.js";import"./Checkbox-dKk_kWGN.js";import"./Grid-BzWj-ZgH.js";import"./upperFirst-CGtMo1Wc.js";import"./_stringToArray-BLsdZ9p6.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
