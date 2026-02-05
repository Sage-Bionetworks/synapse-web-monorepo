import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kt as i,ku as E,H as s,kv as _,p as m,kw as I,kx as S,kc as O}from"./iframe-D5_h0PF9.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-jFHGmNQw.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-D49nmges.js";import"./useAccessRequirements-DaJirk2U.js";import"./index-DihqrFgA.js";import"./_baseOrderBy-uRU5TLQw.js";import"./_baseIteratee-B05hfmCH.js";import"./_baseMap-BWK9b449.js";import"./_baseEach-BCgxkOtg.js";import"./useQueries-C4PyX30W.js";import"./useInfiniteQuery-BmUArCE3.js";import"./groupBy-CwC0bxho.js";import"./_createAggregator-BAg6D6QA.js";import"./DialogBase-BSPbIEb2.js";import"./Close-PtWlikut.js";import"./HelpPopover-Cdyc7PIT.js";import"./MarkdownPopover-DYStciEH.js";import"./LightTooltip-B0jdMCwN.js";import"./MarkdownSynapse-rMn4dUa6.js";import"./SkeletonButton-CnXRIIps.js";import"./SkeletonInlineBlock-DCpTDBDa.js";import"./SkeletonTable-C0hupK0t.js";import"./SkeletonParagraph-C3Ev59KW.js";import"./EntityLink-CE_0nCsE.js";import"./useEntity-BDNnEgNG.js";import"./pickBy-BCl_XONO.js";import"./isString-6uu2HqKu.js";import"./useSuspenseQuery-BZOc09Ao.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-c9BNONY7.js";import"./useGetEntityHeaders-GeFnHfnR.js";import"./EntityIcon-Cx5S9Ih2.js";import"./ErrorChip-D_iPAClF.js";import"./Chip-CBZ7YR6P.js";import"./UserOrTeamBadge-Bjt6Iu6F.js";import"./UserBadge-yiMBLQpE.js";import"./useUserBundle-29JhTBEU.js";import"./MenuItem-CyRowmJi.js";import"./Card-LsjfYv2Y.js";import"./TeamBadge-DuR7sYdc.js";import"./UnmanagedACTAccessRequirementItem-CEcl0nSr.js";import"./RequirementItem-BLReC89i.js";import"./LockTwoTone-CdoI7FFY.js";import"./UserSearchBoxV2-DRbJNTln.js";import"./useDebouncedEffect-B5TiOKSm.js";import"./use-deep-compare-effect.esm-Dj37jx1J.js";import"./uniq-CTAZwoHC.js";import"./without-DxLZpda3.js";import"./Select-aab027f3.esm-WxpNwhrS.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-inZwNGdC.js";import"./SelfSignAccessRequirementItem-DKjFyCvW.js";import"./DataAccessRequestAccessorsFilesForm-Dsxt-djm.js";import"./enums-GqZH8eoU.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CT4tr5vT.js";import"./RadioGroup-CLCcSlA6.js";import"./Radio-mHWtLaEh.js";import"./SwitchBase-CdSXRcwt.js";import"./FormGroup-5mcHdi4u.js";import"./FormControlLabel-Bjfctvt0.js";import"./UploadDocumentField-DhIz9tt1.js";import"./FileUpload-Cgfn8Jvd.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BKdr3TzI.js";import"./GridLegacy-3EBbUXB6.js";import"./ResearchProjectForm-3Q224Hen.js";import"./TextFieldWithWordLimit-B_xdnzmC.js";import"./AuthenticatedRequirement-Cb_QoKmc.js";import"./CertificationRequirement-Blbj0lG1.js";import"./TwoFactorAuthEnabledRequirement-DkVmwQM7.js";import"./ValidationRequirement-BoDL8QzJ.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DT0Cn41S.js";import"./RejectDataAccessRequestModal-oLiF4ruN.js";import"./CannedRejectionDialog-DABDsdyZ.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BGdn1nyH.js";import"./Checkbox-BycybiCS.js";import"./Grid-D-UfU3T_.js";import"./upperFirst-DiwDROhZ.js";import"./_stringToArray-C0EI7guw.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
