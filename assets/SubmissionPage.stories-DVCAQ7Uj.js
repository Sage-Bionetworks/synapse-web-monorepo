import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kp as i,kq as C,H as s,kr as l,p as m,ks as b,kt as T,k4 as A}from"./iframe-DslgKmO_.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-Dt3cA6XM.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-CKwTSw-H.js";import"./useAccessRequirements-C4EpNefd.js";import"./index-CeAJJ3j5.js";import"./_baseOrderBy-2_6WwKWL.js";import"./_baseIteratee-cMERbMqv.js";import"./_baseMap-C0xLoNYD.js";import"./_baseEach-BlNd2DLO.js";import"./useQueries-Dxf5Gk_j.js";import"./useInfiniteQuery-DxxIkqas.js";import"./groupBy-I06BuUfO.js";import"./_createAggregator-DFbLgwOP.js";import"./DialogBase-Ityd6EiB.js";import"./Close-3QTznoYW.js";import"./HelpPopover-D-66GZ4O.js";import"./MarkdownPopover-Efr0b0ny.js";import"./LightTooltip-DtnUKaEX.js";import"./MarkdownSynapse-BtLlVZBF.js";import"./SkeletonButton-CrnZOVdp.js";import"./SkeletonInlineBlock-iMtCHDfe.js";import"./SkeletonTable-B6rYfEE0.js";import"./SkeletonParagraph-CWIA3BjK.js";import"./EntityLink-C4qx-Q5-.js";import"./useEntity-D-cn9RYq.js";import"./pickBy-_TdkkdmD.js";import"./isString-_ruHcEcs.js";import"./useSuspenseQuery-x1rZi4HF.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BhDRvNUr.js";import"./useGetEntityHeaders-DurlUPhZ.js";import"./EntityIcon-BBhxjhDL.js";import"./ErrorChip-BEUmLR9i.js";import"./Chip-BUIb0Z0i.js";import"./UserOrTeamBadge-Dl67vs4W.js";import"./UserBadge-BanEe0Rj.js";import"./useUserBundle-tammJvdO.js";import"./MenuItem-CTidO0-V.js";import"./Card-CiAcqMR5.js";import"./TeamBadge-1DifeGiP.js";import"./UnmanagedACTAccessRequirementItem-B_M3hpO4.js";import"./RequirementItem-dVAIi-RS.js";import"./LockTwoTone-hWN2Z4dH.js";import"./UserSearchBoxV2-2Od06OU0.js";import"./useDebouncedEffect-BQp64cO4.js";import"./use-deep-compare-effect.esm-BXsVt7_r.js";import"./uniq-CbOJCRU-.js";import"./without-B0NuDHbk.js";import"./Select-aab027f3.esm-mE7rcB8J.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-BWVw5SIc.js";import"./SelfSignAccessRequirementItem-DbmMizp3.js";import"./DataAccessRequestAccessorsFilesForm-DQufiUXU.js";import"./enums-Cd5hzcND.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-Cu1LchBz.js";import"./RadioGroup-hacywsh9.js";import"./Radio-4ssKnMg3.js";import"./SwitchBase-DhgbMpez.js";import"./FormGroup-BRc6nzOn.js";import"./FormControlLabel-BxxRdktG.js";import"./UploadDocumentField-m2GEV1Rm.js";import"./FileUpload-D5OAEV-g.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CdAVZ5QM.js";import"./GridLegacy-Bdi6XbfG.js";import"./ResearchProjectForm-DK0erIUW.js";import"./TextFieldWithWordLimit-CjCVBq4_.js";import"./AuthenticatedRequirement-DBeJ1aN7.js";import"./CertificationRequirement-k0b8r49e.js";import"./TwoFactorAuthEnabledRequirement-DO45fEJh.js";import"./ValidationRequirement-BBlY7ekn.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-CIJI1pYp.js";import"./RejectDataAccessRequestModal-c7JAL79M.js";import"./CannedRejectionDialog-DUqf_quk.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-CWzD-n3R.js";import"./Checkbox-C0eLrhG9.js";import"./Grid-DPWZ7bDy.js";import"./upperFirst-Cv2A7MVY.js";import"./_stringToArray-CngHJspF.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,c,R;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const or=["Demo","DemoError"];export{o as Demo,n as DemoError,or as __namedExportsOrder,sr as default};
