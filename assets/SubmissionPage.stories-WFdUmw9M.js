import{g as d,k as u,n as t,a3 as c,dZ as R,b as e,kw as i,kx as E,H as s,ky as _,p as m,kz as I,kA as S,kf as O}from"./iframe-BOp5xHgQ.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Czkjzh0m.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-B9Z8UJXm.js";import"./useAccessRequirements-RlIIcYhO.js";import"./index-C0aVICkT.js";import"./_baseOrderBy-DY7PJ9oP.js";import"./_baseIteratee-1e4QYe1a.js";import"./_baseMap-DqggDP61.js";import"./_baseEach-CWoDBsEd.js";import"./useQueries-B9sDnyGk.js";import"./useInfiniteQuery-eidVdOLk.js";import"./groupBy-cZ-WUxXh.js";import"./_createAggregator-V-SnPzq0.js";import"./DialogBase-7fHULBfY.js";import"./Close-D9s2c75o.js";import"./HelpPopover-LeyUV4iz.js";import"./MarkdownPopover-uWg2CiyD.js";import"./LightTooltip-Dp_nVCeZ.js";import"./MarkdownSynapse-BVAukZy4.js";import"./SkeletonButton-DNYlKQbh.js";import"./SkeletonInlineBlock-BjcHkhbP.js";import"./SkeletonTable-DueDues1.js";import"./SkeletonParagraph-Dpr2MQLi.js";import"./EntityLink-DvE8H96N.js";import"./useEntity-pkJYcg6M.js";import"./pickBy-MJFKQQHU.js";import"./isString-2x762vse.js";import"./useSuspenseQuery-BChhK6t7.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BdmrDFp3.js";import"./useGetEntityHeaders-BJbAQWC6.js";import"./EntityIcon-DkavVh7u.js";import"./ErrorChip-CjyYFYty.js";import"./Chip-QOkeOJ9H.js";import"./UserOrTeamBadge-c2dDG07K.js";import"./UserBadge-Bgli4UFZ.js";import"./useUserBundle-CLk1gimz.js";import"./MenuItem-BeX68FFD.js";import"./Card-d8z28fLd.js";import"./TeamBadge-DoH7Nx9c.js";import"./useRealmPrincipals-C0g41KMM.js";import"./UnmanagedACTAccessRequirementItem-BHfp0gNi.js";import"./RequirementItem-DCDG-pkc.js";import"./LockTwoTone-DqcEm8qq.js";import"./UserSearchBoxV2-simt4ncS.js";import"./useDebouncedEffect-C724r-8N.js";import"./use-deep-compare-effect.esm-ClAg0lVH.js";import"./uniq-KEHuC6nU.js";import"./without-DIQSxXog.js";import"./Select-aab027f3.esm-QPM0uF2N.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-B2UoypLW.js";import"./SelfSignAccessRequirementItem-B9ammN3p.js";import"./DataAccessRequestAccessorsFilesForm-CrZKHLQB.js";import"./enums-CjGEupRl.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-fcWPcFmY.js";import"./RadioGroup-FidT2bQg.js";import"./Radio-DQpvx-JK.js";import"./SwitchBase-CxS3jqOK.js";import"./FormGroup-DNl-7vBy.js";import"./FormControlLabel-CZQJQgPa.js";import"./UploadDocumentField-DAFAyo8g.js";import"./FileUpload-C22MPm__.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CY_lOXD8.js";import"./GridLegacy-CrMvtSBh.js";import"./ResearchProjectForm-DQPnXJil.js";import"./TextFieldWithWordLimit-DMlFGcxG.js";import"./AuthenticatedRequirement-DhNeGyna.js";import"./CertificationRequirement-SWTasd7M.js";import"./TwoFactorAuthEnabledRequirement-SwXyiE9E.js";import"./ValidationRequirement-4d2YgcFa.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-PEyDqwRA.js";import"./RejectDataAccessRequestModal-33iO6-Ch.js";import"./CannedRejectionDialog-D23K0rF0.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-B3t_qKq9.js";import"./Checkbox-B7QnzdP8.js";import"./Grid-yNF5fcVb.js";import"./upperFirst-Bu9Aizsk.js";import"./_stringToArray-CxGDf8V9.js";const Xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
