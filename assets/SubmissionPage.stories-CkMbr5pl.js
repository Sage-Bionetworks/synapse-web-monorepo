import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kr as i,ks as C,H as s,kt as l,p as m,ku as b,kv as T,ka as A}from"./iframe-C6DVh3a8.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-BWPT1x4e.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-DMFc1ddF.js";import"./useAccessRequirements-DhC-BgPU.js";import"./index-CWyeuUHI.js";import"./_baseOrderBy-BPJHiFB9.js";import"./_baseIteratee-CWWhk6NN.js";import"./_baseMap-DhNHWzMR.js";import"./_baseEach-LxprNQX-.js";import"./useQueries-B0aVwD29.js";import"./useInfiniteQuery-ClFk1pW2.js";import"./groupBy-D5dCbDAd.js";import"./_createAggregator-BAZrz04R.js";import"./DialogBase-DG3FOts0.js";import"./Close-Cvfvekss.js";import"./HelpPopover-D15layXw.js";import"./MarkdownPopover-DYELty5d.js";import"./LightTooltip-CehMS9nA.js";import"./MarkdownSynapse-DbU2DxXy.js";import"./SkeletonButton-DJ25ODSP.js";import"./SkeletonInlineBlock-DaN9DO1b.js";import"./SkeletonTable-BaZC2los.js";import"./SkeletonParagraph-BiRrs5sP.js";import"./EntityLink-C-pb45f-.js";import"./useEntity-C-V6zgpE.js";import"./pickBy-tb-GfPY8.js";import"./isString-Cmdz_UQl.js";import"./useSuspenseQuery-Chz7E6o7.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B90ambwW.js";import"./useGetEntityHeaders-B5Tl33-4.js";import"./EntityIcon-fNjsS_B0.js";import"./ErrorChip-Bo5LWdtG.js";import"./Chip-DnxNYuul.js";import"./UserOrTeamBadge-Qwm5AgjU.js";import"./UserBadge-CxhgYPLm.js";import"./useUserBundle-GB9vlSqF.js";import"./MenuItem-BQStYWQ5.js";import"./Card-BPBXAoVw.js";import"./TeamBadge-ZKhMo1dI.js";import"./UnmanagedACTAccessRequirementItem-BHUoT3SL.js";import"./RequirementItem-ofAm9eUO.js";import"./LockTwoTone-eeLCc5NG.js";import"./UserSearchBoxV2-BFaOo3Fw.js";import"./useDebouncedEffect-5Q2GMnjF.js";import"./use-deep-compare-effect.esm-SwhE2hrk.js";import"./uniq-D-JYaA-4.js";import"./without-BVYiPBRH.js";import"./Select-aab027f3.esm-Bc_KSYKr.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-60Pacgft.js";import"./SelfSignAccessRequirementItem-BF_5g9Wo.js";import"./DataAccessRequestAccessorsFilesForm-ChxWav-y.js";import"./enums-Bh7adedg.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-CdB6sHmG.js";import"./RadioGroup-CNFGXg9S.js";import"./Radio-CR1Rnskn.js";import"./SwitchBase-CuaC-at1.js";import"./FormGroup-CbIk2vfI.js";import"./FormControlLabel-CiJk5KuY.js";import"./UploadDocumentField-C0pIsWrA.js";import"./FileUpload-RiPVJpfE.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CN7yxNIK.js";import"./GridLegacy-BLDxfJJy.js";import"./ResearchProjectForm-BhnjQ8qb.js";import"./TextFieldWithWordLimit-DnvvEf0r.js";import"./AuthenticatedRequirement-DjnMpXZT.js";import"./CertificationRequirement-Cs-uVB0i.js";import"./TwoFactorAuthEnabledRequirement-BmYxiJWF.js";import"./ValidationRequirement-BI0ZVMIj.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-DE1gSfz1.js";import"./RejectDataAccessRequestModal-h9lY-x7P.js";import"./CannedRejectionDialog-C2wpMxC2.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-Bn1YHVno.js";import"./Checkbox-DJfaxyg9.js";import"./Grid-Ba5ajPM-.js";import"./upperFirst-VX9PKCZu.js";import"./_stringToArray-BSLi9szm.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
