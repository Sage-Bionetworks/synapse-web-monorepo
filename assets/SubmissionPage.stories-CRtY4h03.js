import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-CFYObmv2.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DeNoFggw.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BfuHrTvh.js";import"./useAccessRequirements-WsNzyT70.js";import"./index-DTq8PnfG.js";import"./_baseOrderBy-lQa05oOf.js";import"./_baseIteratee-BYzSMaDv.js";import"./_baseMap-YiQ3K5X2.js";import"./_baseEach-CNVYPDDa.js";import"./useInfiniteQuery-DrJ287ay.js";import"./groupBy-C0xIZ_mx.js";import"./_createAggregator-BsrnQ7nt.js";import"./DialogBase-RIdyfWbA.js";import"./Close-Bc2bfKRm.js";import"./HelpPopover-X5bLlJph.js";import"./MarkdownPopover-BK0N2ea-.js";import"./LightTooltip-CtPj8f6G.js";import"./MarkdownSynapse-EyWbEoPB.js";import"./SkeletonButton-BAoT4yfs.js";import"./SkeletonInlineBlock-B8gtORn3.js";import"./SkeletonTable-D1Oc41tF.js";import"./SkeletonParagraph-2BG-wyQ2.js";import"./EntityLink-zxE33EzG.js";import"./useEntity-Dm7QhD3_.js";import"./pickBy-C9MrKhu7.js";import"./isString-CpJrndPS.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CeCyyWeM.js";import"./useGetEntityHeaders-eRjC93R7.js";import"./EntityIcon-iiqg0nQF.js";import"./ErrorChip-CRkOkrIe.js";import"./Chip-DVyYNIMf.js";import"./UserOrTeamBadge-B7vwJt4S.js";import"./UserBadge-CqWrPdDF.js";import"./useUserBundle-CFoU7ptg.js";import"./MenuItem-1x19aVl7.js";import"./Card-CVTuX8UO.js";import"./TeamBadge-BZRH4Ikn.js";import"./UnmanagedACTAccessRequirementItem-D7tZXw_o.js";import"./RequirementItem-mK0ORFuv.js";import"./CheckTwoTone-BtvV7-jL.js";import"./ManagedACTAccessRequirementItemView-D2q4wLdS.js";import"./SelfSignAccessRequirementItem-TH7bJzRN.js";import"./DataAccessRequestAccessorsFilesForm-xdG23Dp1.js";import"./enums-b-weuK70.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-Bn3jAV91.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-BHGn9DW6.js";import"./UserSearchBox-CI2NvH21.js";import"./useDebouncedEffect-DfSpjuz8.js";import"./Autocomplete-B0dqw6JS.js";import"./usePreviousProps-BAn1aaJG.js";import"./RadioGroup-DWFObhjv.js";import"./Radio-ZTuIi7So.js";import"./SwitchBase-CeR8qk8o.js";import"./FormGroup-BzpXD0bL.js";import"./FormControlLabel-X6sNt4uF.js";import"./UploadDocumentField-B2lnQqsx.js";import"./FileUpload-Ah-jUack.js";import"./ManagedACTAccessRequirementFormWikiWrapper-981TvYF2.js";import"./GridLegacy-Cnf4-4oQ.js";import"./ResearchProjectForm-YCr9n4IK.js";import"./TextFieldWithWordLimit-CtpuURUU.js";import"./AuthenticatedRequirement-B49nLcDk.js";import"./CertificationRequirement-BkKzKcAs.js";import"./TwoFactorAuthEnabledRequirement-IaHlPPa0.js";import"./ValidationRequirement-D7Ng6ey8.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CI-ViHr9.js";import"./RejectDataAccessRequestModal-C3QII8cu.js";import"./CannedRejectionDialog-CE6mJsYZ.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-CL-fo0eW.js";import"./Checkbox-DqoMzdfH.js";import"./Grid-pC3FVRxR.js";import"./upperFirst-Be2UTRC5.js";import"./_stringToArray-DWemR0vi.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
