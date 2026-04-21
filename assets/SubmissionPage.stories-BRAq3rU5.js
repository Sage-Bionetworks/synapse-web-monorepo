import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-BfPCYB0E.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BWEczXcO.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CEC3B4pC.js";import"./useAccessRequirements-XmiC3EAc.js";import"./index-LtIvAFo0.js";import"./_baseOrderBy-BomYH4Yz.js";import"./_baseIteratee-Nxg2-rLG.js";import"./_baseMap-DMrCzabq.js";import"./_baseEach-BAX3P3MS.js";import"./useInfiniteQuery-DBxaVkr7.js";import"./groupBy-BzxdwT3S.js";import"./_createAggregator-CQoelJE5.js";import"./DialogBase-BW5bnvAH.js";import"./Close-Buelrktg.js";import"./HelpPopover-BsJ_8UVh.js";import"./MarkdownPopover-TvgvUYyl.js";import"./LightTooltip-CdZMPFTC.js";import"./MarkdownSynapse-DczAMsEj.js";import"./SkeletonButton-Cp9NnTu7.js";import"./SkeletonInlineBlock-D4QJhjaO.js";import"./SkeletonTable-O-QCdGWt.js";import"./SkeletonParagraph-KYHFxt8I.js";import"./EntityLink-C33scBKc.js";import"./useEntity-DHIcQkQl.js";import"./pickBy-JCuXjl7E.js";import"./isString-BUiSeu9X.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-EhsdYR-5.js";import"./useGetEntityHeaders-61LbvBH9.js";import"./EntityIcon-BCL96LFN.js";import"./ErrorChip-BoG8EHf2.js";import"./Chip-CozfZRmm.js";import"./UserOrTeamBadge-Mi6P2iba.js";import"./UserBadge-BeeY2orO.js";import"./useUserBundle-CKxh-kvY.js";import"./MenuItem-Clc-tiPV.js";import"./Card-BxqLwHVm.js";import"./TeamBadge-DW4bpwfm.js";import"./UnmanagedACTAccessRequirementItem-DqpW0D9C.js";import"./RequirementItem-CHdZXopl.js";import"./CheckTwoTone-DzMKdPrV.js";import"./ManagedACTAccessRequirementItemView-B4pyHefB.js";import"./SelfSignAccessRequirementItem-JXeI0jNb.js";import"./DataAccessRequestAccessorsFilesForm-DC14xCT7.js";import"./enums-BIhw-tSz.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-CQheWXsd.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-G9UeCJ55.js";import"./UserSearchBox-CYSK9dCp.js";import"./useDebouncedEffect-CSWLI9x1.js";import"./Autocomplete-D4zfTzAQ.js";import"./usePreviousProps-ClStBmCy.js";import"./RadioGroup-MlJOR3Si.js";import"./Radio-Bsj327EO.js";import"./SwitchBase-VO4fuz7d.js";import"./FormGroup-B5XwpuBX.js";import"./FormControlLabel-CGx1NWxI.js";import"./UploadDocumentField-FVQ37ySV.js";import"./FileUpload-BBLM9rET.js";import"./ManagedACTAccessRequirementFormWikiWrapper-I10cfjmy.js";import"./GridLegacy-C1cLP8b0.js";import"./ResearchProjectForm-Di4xKkiA.js";import"./TextFieldWithWordLimit-B6h769hT.js";import"./AuthenticatedRequirement-Dqduu1If.js";import"./CertificationRequirement-CuMzc0Qd.js";import"./TwoFactorAuthEnabledRequirement-B_FTT63k.js";import"./ValidationRequirement-CqaajS1A.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BFxRV64E.js";import"./RejectDataAccessRequestModal-D1Tq8IPx.js";import"./CannedRejectionDialog-DqcJc30U.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-8SnXnQ-s.js";import"./Checkbox-BMpqBgV6.js";import"./Grid-Cez_EO-F.js";import"./upperFirst-CPfSlhSH.js";import"./_stringToArray-yFrJ3E_K.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Je=["Demo","DemoError"];export{o as Demo,n as DemoError,Je as __namedExportsOrder,xe as default};
