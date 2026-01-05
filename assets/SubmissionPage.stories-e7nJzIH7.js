import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kr as i,ks as C,H as s,kt as l,p as m,ku as b,kv as T,ka as A}from"./iframe-DboE6cus.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-Cyu_I-IA.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-5oFTa8RI.js";import"./useAccessRequirements-B9l2Ke75.js";import"./index-BzXSeNW_.js";import"./_baseOrderBy-CJw4LElh.js";import"./_baseIteratee-DwrTBovl.js";import"./_baseMap-CxtrX0CY.js";import"./_baseEach-peTWZHvj.js";import"./useQueries-C-iJVLAg.js";import"./useInfiniteQuery-C-3LxYU-.js";import"./groupBy-BMGJ6D2U.js";import"./_createAggregator-CNKe7IR4.js";import"./DialogBase-Cryo8IG-.js";import"./Close-Dh32M8lz.js";import"./HelpPopover-D6Yfo8ak.js";import"./MarkdownPopover-DZsWRurj.js";import"./LightTooltip-tMJWkQpL.js";import"./MarkdownSynapse-CacsHCKs.js";import"./SkeletonButton-D8m5msQb.js";import"./SkeletonInlineBlock-Dnql_wpL.js";import"./SkeletonTable-B7bdJ0qY.js";import"./SkeletonParagraph-C746jxi4.js";import"./EntityLink-CsMzHjtg.js";import"./useEntity-CMX5rKD0.js";import"./pickBy-De-F_gE6.js";import"./isString-CMmq4jp5.js";import"./useSuspenseQuery-NbcqIP5u.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DJztbhCS.js";import"./useGetEntityHeaders-BXCriJWW.js";import"./EntityIcon-CCkb-7-B.js";import"./ErrorChip-BsznwZYW.js";import"./Chip-D7TLsmcp.js";import"./UserOrTeamBadge-2yvsZ6FT.js";import"./UserBadge-BlAZ_Wz3.js";import"./useUserBundle-CEShpWIh.js";import"./MenuItem-BC-hmB5d.js";import"./Card-xik5UMs-.js";import"./TeamBadge-CgdCGwb5.js";import"./UnmanagedACTAccessRequirementItem-ThIG7DwO.js";import"./RequirementItem-UWf9Gxa5.js";import"./LockTwoTone-Bx7kyzaU.js";import"./UserSearchBoxV2-Cbzv7qMt.js";import"./useDebouncedEffect-ndw6MftY.js";import"./use-deep-compare-effect.esm-C-rD7OfE.js";import"./uniq-BMr5GqOn.js";import"./without-CdFsIkuH.js";import"./Select-aab027f3.esm-gIDu9blh.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-DDSBnmie.js";import"./SelfSignAccessRequirementItem-C939pc5D.js";import"./DataAccessRequestAccessorsFilesForm-Bsd7DcSg.js";import"./enums-BNGHHkmT.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-Bj5QPES0.js";import"./RadioGroup-WZKkox_T.js";import"./Radio-BvMfB3cH.js";import"./SwitchBase-BQgRTlGW.js";import"./FormGroup-C1vewgLo.js";import"./FormControlLabel-RkfWwutG.js";import"./UploadDocumentField-DEEN3enI.js";import"./FileUpload-I28NOjih.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DaqhZk67.js";import"./GridLegacy-_V269eSF.js";import"./ResearchProjectForm-e41gpAet.js";import"./TextFieldWithWordLimit-CNAM_Lj8.js";import"./AuthenticatedRequirement-CO4wdkS1.js";import"./CertificationRequirement-8YQOG3it.js";import"./TwoFactorAuthEnabledRequirement-JXh5xXdk.js";import"./ValidationRequirement-B3D2LK0R.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-WP5ff5Ad.js";import"./RejectDataAccessRequestModal-B55ryJFP.js";import"./CannedRejectionDialog-B2wiL1dR.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-BkYcFRKi.js";import"./Checkbox-zAn0p-gG.js";import"./Grid-xRSGKOBv.js";import"./upperFirst-Ddq2c2kG.js";import"./_stringToArray-BnOcActp.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const or=["Demo","DemoError"];export{o as Demo,n as DemoError,or as __namedExportsOrder,sr as default};
