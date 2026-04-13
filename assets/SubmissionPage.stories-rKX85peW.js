import{z as d,b as e,o as u,s as t,kp as i,kq as c,H as s,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-BFtw_QUH.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BfvXx2yB.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CtECwp9Z.js";import"./useAccessRequirements-BTsdKkft.js";import"./index-CFaVGWZ0.js";import"./_baseOrderBy-DcKYylt1.js";import"./_baseIteratee-CJVbWW0K.js";import"./_baseMap-BFNisPHr.js";import"./_baseEach-B9RBeIUP.js";import"./useInfiniteQuery-D-5eLx7Z.js";import"./groupBy-B7ZXbV-D.js";import"./_createAggregator-DR_ZhGsZ.js";import"./DialogBase-Cw5G9tCf.js";import"./Close-QS7unxGx.js";import"./HelpPopover-6Oy9kimx.js";import"./MarkdownPopover-DJba9PaX.js";import"./LightTooltip-BdZaegEb.js";import"./MarkdownSynapse-CJdYnncr.js";import"./SkeletonButton-CsTw-ZPX.js";import"./SkeletonInlineBlock-BmmJQ24u.js";import"./SkeletonTable-CwH7xhuw.js";import"./SkeletonParagraph-DsZs81_F.js";import"./EntityLink-DfNfPnDv.js";import"./useEntity-C3m0mLEK.js";import"./pickBy-CxxY41Bx.js";import"./isString-D2qY6B-G.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BNNdEoVQ.js";import"./useGetEntityHeaders-DyAh47vo.js";import"./EntityIcon-CWCDPWc-.js";import"./ErrorChip-CLqyixuO.js";import"./Chip-CtpBh3N1.js";import"./UserOrTeamBadge-DhMwyPLc.js";import"./useUserGroupHeader-BQ7DrkF-.js";import"./TeamBadge-B7N-YTMh.js";import"./UserBadge-Bh5lHfno.js";import"./useUserBundle-CUqXhyvg.js";import"./MenuItem-BSH3FhSr.js";import"./Card-CxpAtWPZ.js";import"./UnmanagedACTAccessRequirementItem-BYlVXVvI.js";import"./RequirementItem-_FvhoJ9j.js";import"./LockTwoTone-BzPuHDfi.js";import"./ManagedACTAccessRequirementItemView-C_tyrA6o.js";import"./SelfSignAccessRequirementItem-wN03Pw3A.js";import"./DataAccessRequestAccessorsFilesForm-CXV6_l0M.js";import"./enums-BV5pg9zS.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-DzTH1J8A.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-B6HlQDHQ.js";import"./UserSearchBox-Cfjsj9wJ.js";import"./useDebouncedEffect-B7g7aQPp.js";import"./Autocomplete-DkUQEECU.js";import"./usePreviousProps-DmrmMyQ5.js";import"./RadioGroup-TVe5dn4H.js";import"./Radio-BFqOiVbA.js";import"./SwitchBase-C1pJsVMO.js";import"./FormGroup-CClz24Rt.js";import"./FormControlLabel-DZ2iiYCt.js";import"./UploadDocumentField-BIDSGsEp.js";import"./FileUpload-BXOt6824.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CWaP5D1x.js";import"./GridLegacy-CcFELHgN.js";import"./ResearchProjectForm-B87D087I.js";import"./TextFieldWithWordLimit-BHJPwCzl.js";import"./AuthenticatedRequirement-COlZBt40.js";import"./CertificationRequirement-CmCu8oOL.js";import"./TwoFactorAuthEnabledRequirement-BrH_4Gfm.js";import"./ValidationRequirement-BwtXGdpV.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CeEC9H5H.js";import"./RejectDataAccessRequestModal-VVojvKmp.js";import"./CannedRejectionDialog-pvcfN0AV.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-DMF1vChz.js";import"./Checkbox-BC1SCJw9.js";import"./Grid-BXgscMMC.js";import"./upperFirst-DvDn1CXI.js";import"./_stringToArray-ClEJEngk.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
