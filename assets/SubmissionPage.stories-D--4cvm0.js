import{z as d,b as e,o as u,s as t,kp as i,kq as c,H as s,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-I9EoyWQf.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-pc0E0HGb.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CXOIJ2Ap.js";import"./useAccessRequirements-CBjoxYBs.js";import"./index-BR8vhpyy.js";import"./_baseOrderBy-DnLUej7u.js";import"./_baseIteratee-DhR4h-9n.js";import"./_baseMap-C2ThkLcN.js";import"./_baseEach-BVz6q7ID.js";import"./useInfiniteQuery-ybg8uaKh.js";import"./groupBy-B4esnzru.js";import"./_createAggregator-DB6F1KSI.js";import"./DialogBase-mhO3z0mU.js";import"./Close-C4Fuzij-.js";import"./HelpPopover-CSkKFQDG.js";import"./MarkdownPopover-CZrsA1Ve.js";import"./LightTooltip-BjpzGQlc.js";import"./MarkdownSynapse-DmmReL7B.js";import"./SkeletonButton-BZ4IW0NV.js";import"./SkeletonInlineBlock-CnFxuHgE.js";import"./SkeletonTable-Daoy3Wk1.js";import"./SkeletonParagraph-C2Jym8Lt.js";import"./EntityLink-Duapq-5Y.js";import"./useEntity-B4TqUGVZ.js";import"./pickBy-BeiKyk-k.js";import"./isString-XDvs-I67.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CuHV45TU.js";import"./useGetEntityHeaders-BOIYDVV_.js";import"./EntityIcon-CUn8yAv1.js";import"./ErrorChip-4P8-9Tlk.js";import"./Chip-qFrw06qV.js";import"./UserOrTeamBadge-B970kYrj.js";import"./useUserGroupHeader-2ZjU8d_Z.js";import"./TeamBadge-C2CWKcU_.js";import"./UserBadge-DfnAepuT.js";import"./useUserBundle-B0BzK8VS.js";import"./MenuItem-DLjd3Exv.js";import"./Card-xjD4swog.js";import"./UnmanagedACTAccessRequirementItem-BjhNAIYl.js";import"./RequirementItem-7hb9tBZQ.js";import"./LockTwoTone-73WdxibF.js";import"./ManagedACTAccessRequirementItemView-C54GUmB_.js";import"./SelfSignAccessRequirementItem-CWa4reoL.js";import"./DataAccessRequestAccessorsFilesForm-mYYe-FWN.js";import"./enums-8cgiUEQs.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-CLjsbMfP.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-BB7SzQZo.js";import"./UserSearchBox-BgYDlc1N.js";import"./useDebouncedEffect-DRUnOLf-.js";import"./Autocomplete-DjJ8XXAP.js";import"./usePreviousProps-D8JQgpCi.js";import"./RadioGroup-Cuzzsepz.js";import"./Radio-BWflztxx.js";import"./SwitchBase-BW1Maf3V.js";import"./FormGroup-C41ocM17.js";import"./FormControlLabel-C49ko43X.js";import"./UploadDocumentField-DDk0ppyC.js";import"./FileUpload-CCkKS4Lu.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CoIN7TLX.js";import"./GridLegacy-l83Rb-Nw.js";import"./ResearchProjectForm-BxAsZ-Dd.js";import"./TextFieldWithWordLimit-D1wuDZZn.js";import"./AuthenticatedRequirement-CNeZrBO0.js";import"./CertificationRequirement-DL1Rx4np.js";import"./TwoFactorAuthEnabledRequirement-GPmdVVB-.js";import"./ValidationRequirement-9bj7vvHm.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DHHjGQXT.js";import"./RejectDataAccessRequestModal-CqY64ViP.js";import"./CannedRejectionDialog-mmSyDxDI.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-Cn8YG5nL.js";import"./Checkbox-BsQp1kE6.js";import"./Grid-DGbFvsXq.js";import"./upperFirst-BpO45B1H.js";import"./_stringToArray-CZYdZBi_.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ve=["Demo","DemoError"];export{o as Demo,n as DemoError,Ve as __namedExportsOrder,Je as default};
