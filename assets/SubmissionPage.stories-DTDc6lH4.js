import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-bna6ux0d.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BktCbDgt.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-e67jjClk.js";import"./useAccessRequirements-BXov6ZnK.js";import"./index-BPlgQcL-.js";import"./_baseOrderBy-DXDPhcgN.js";import"./_baseIteratee-BTmoqNJP.js";import"./_baseMap-BhRjv0-x.js";import"./_baseEach-Clh7uFEL.js";import"./useInfiniteQuery-BY6Y6iWU.js";import"./groupBy-Cf8p-2Hl.js";import"./_createAggregator-CPAZDQfA.js";import"./DialogBase-DHwP3U6I.js";import"./Close-BHQzAyPk.js";import"./HelpPopover-BFjmdZ6s.js";import"./MarkdownPopover-kqSOJAjB.js";import"./LightTooltip-DeQMhnGN.js";import"./MarkdownSynapse-DhbP1fl7.js";import"./SkeletonButton-CvFlnbQG.js";import"./SkeletonInlineBlock-BZMaSP8M.js";import"./SkeletonTable-l3mzz3bl.js";import"./SkeletonParagraph-BWjRwEhH.js";import"./EntityLink-BEOGqR0c.js";import"./useEntity-BhGKEimr.js";import"./pickBy-DFerox6m.js";import"./isString-B7Kehlqn.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BDnwF9uX.js";import"./useGetEntityHeaders-f7MwHb1v.js";import"./EntityIcon-Cyo-G9bb.js";import"./ErrorChip-CO319-ro.js";import"./Chip-ezXqmltp.js";import"./UserOrTeamBadge-Cg3juENa.js";import"./UserBadge-CXfpHech.js";import"./useUserBundle-BCDvFxlz.js";import"./MenuItem-BE6gGCeL.js";import"./Card-DCXe5QKg.js";import"./TeamBadge-1sdo47x1.js";import"./UnmanagedACTAccessRequirementItem-B7Ok3KZ0.js";import"./RequirementItem-B6lK9Lew.js";import"./CheckTwoTone-BvpB3QU-.js";import"./ManagedACTAccessRequirementItemView-kgdSYi0J.js";import"./SelfSignAccessRequirementItem-CnH_FDpN.js";import"./DataAccessRequestAccessorsFilesForm-BBbHS33c.js";import"./enums-BTtdgzor.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-DNcMbgPJ.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-B2zyLxGh.js";import"./UserSearchBox-Btj_2T0f.js";import"./useDebouncedEffect-qNl3bRSd.js";import"./Autocomplete-ykx5fh-k.js";import"./usePreviousProps-K1h_Q3p0.js";import"./RadioGroup-0ODu0eoD.js";import"./Radio-3on40aJi.js";import"./SwitchBase-D6zfVctk.js";import"./FormGroup-T1VjgIuY.js";import"./FormControlLabel-CxLJMSC7.js";import"./UploadDocumentField-BGCzNsZa.js";import"./FileUpload-CbEpuFxp.js";import"./ManagedACTAccessRequirementFormWikiWrapper-D5a4-Sn9.js";import"./GridLegacy-DB59pgUY.js";import"./ResearchProjectForm-D9Xa_g07.js";import"./TextFieldWithWordLimit-DkMufffq.js";import"./AuthenticatedRequirement-DyZLWUe9.js";import"./CertificationRequirement-MjwycAey.js";import"./TwoFactorAuthEnabledRequirement-D23qNTwE.js";import"./ValidationRequirement-BYPPPGNk.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-X-ywOHWa.js";import"./RejectDataAccessRequestModal-gGzrgl4l.js";import"./CannedRejectionDialog-DyRcCWUh.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-Dnw58mjo.js";import"./Checkbox-BBLtg65l.js";import"./Grid-CBuvr_YL.js";import"./upperFirst-DZ1EHlnh.js";import"./_stringToArray-BlJjRsZz.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
