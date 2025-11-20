import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-LzC64RFw.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-DFN7kYqK.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-D2B2FHzn.js";import"./useAccessRequirements-DDhz0ISO.js";import"./index-9jkv6pAo.js";import"./_baseOrderBy-CqqbnClz.js";import"./_baseIteratee-BW2oG4i8.js";import"./_baseMap-BQ8I50xV.js";import"./_baseEach-BhZ0WINl.js";import"./useQueries-DBFhpEhc.js";import"./useInfiniteQuery-DAwo9HMT.js";import"./groupBy-Bf1Ce0fI.js";import"./_createAggregator-W5rFgqBh.js";import"./DialogBase-BYFV454X.js";import"./Close-EwtwOLBz.js";import"./HelpPopover-JXqbI5Ev.js";import"./MarkdownPopover-Dcw3ZCXp.js";import"./LightTooltip-CwaRO3d3.js";import"./MarkdownSynapse-D64LBLwy.js";import"./SkeletonButton-CdCi0Vv2.js";import"./SkeletonInlineBlock-BId9Rt5h.js";import"./SkeletonTable-B5BlJQjs.js";import"./SkeletonParagraph-ClnTvL1Q.js";import"./EntityLink-Ca6URK1t.js";import"./useEntity-0RFwoaUh.js";import"./pickBy-CAuWK-Te.js";import"./isString-BRFCEyLy.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CuLoL6_r.js";import"./useGetEntityHeaders-BpPQBMGE.js";import"./EntityIcon-abMe_FG-.js";import"./ErrorChip-Ekj1pC1L.js";import"./Chip-Ct1mISe7.js";import"./UserOrTeamBadge-zWtNR6B6.js";import"./UserBadge-DAx78NA6.js";import"./MenuItem-D_lpwZtj.js";import"./Card-N0RtOQAA.js";import"./TeamBadge-CHlfG-eA.js";import"./UnmanagedACTAccessRequirementItem-BQLPV7oY.js";import"./RequirementItem-BBvzMG2_.js";import"./LockTwoTone-Dbh6nUBe.js";import"./UserSearchBoxV2-CA1b-8JK.js";import"./useDebouncedEffect-BCiJ5I7r.js";import"./use-deep-compare-effect.esm-pDleGhR2.js";import"./uniq-BefGSpfh.js";import"./without-6fmx_9-y.js";import"./Select-aab027f3.esm-xng_5ekx.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-UsBzUG9M.js";import"./SelfSignAccessRequirementItem-2NUAATrF.js";import"./DataAccessRequestAccessorsFilesForm-DkQp9tM2.js";import"./enums-_jpmuQzj.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-DuRT3YNp.js";import"./RadioGroup-B-duPkBo.js";import"./Radio-B_JN6rDp.js";import"./SwitchBase-BcH_m2kQ.js";import"./FormGroup-FPPZObRK.js";import"./FormControlLabel-DdwLBMPg.js";import"./UploadDocumentField-XlNOVQ8n.js";import"./FileUpload-DCd1aeOw.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CNmqaMII.js";import"./GridLegacy-CEv4grGy.js";import"./ResearchProjectForm-C7pl24Nd.js";import"./TextFieldWithWordLimit-DzGcCpMf.js";import"./AuthenticatedRequirement-BkB66qVR.js";import"./CertificationRequirement-CyxnU11N.js";import"./TwoFactorAuthEnabledRequirement-DXxh4JFG.js";import"./ValidationRequirement-DpKdvLoY.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-C2nLdrZJ.js";import"./RejectDataAccessRequestModal-Di2KDiSn.js";import"./CannedRejectionDialog-BS6yVYrq.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-ZErKbafN.js";import"./Checkbox-DFkw0--6.js";import"./Grid-DCfzqCa2.js";import"./upperFirst-CLXg_-S4.js";import"./_stringToArray-CDB64VoB.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,c,R;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const sr=["Demo","DemoError"];export{o as Demo,n as DemoError,sr as __namedExportsOrder,tr as default};
