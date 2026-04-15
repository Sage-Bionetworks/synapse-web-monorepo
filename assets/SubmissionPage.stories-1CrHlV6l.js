import{z as d,b as e,o as u,s as t,kp as i,kq as c,H as s,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-tHCTQw-h.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CAy8z_Ei.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DQQ6QNBx.js";import"./useAccessRequirements-DRPJCxVD.js";import"./index-BusyTjH4.js";import"./_baseOrderBy-5kb_ywfr.js";import"./_baseIteratee-DN7s7tH5.js";import"./_baseMap-DGvgkari.js";import"./_baseEach-DAAMDDtE.js";import"./useInfiniteQuery-Cgi0zhhX.js";import"./groupBy-CoXoqGrR.js";import"./_createAggregator-BzI8BoOP.js";import"./DialogBase-D_uLDI_-.js";import"./Close-Dj2GQFLf.js";import"./HelpPopover-BHHwi799.js";import"./MarkdownPopover-k7QQPJgm.js";import"./LightTooltip-Gqj5iP9g.js";import"./MarkdownSynapse-BjOJoB34.js";import"./SkeletonButton-COGIamRT.js";import"./SkeletonInlineBlock-BcgTDPGl.js";import"./SkeletonTable-DF9YBfOn.js";import"./SkeletonParagraph-ltGtfGmy.js";import"./EntityLink-Bb9lXUFm.js";import"./useEntity-BMnF96Oz.js";import"./pickBy-C4losbkt.js";import"./isString-CWIHPDG7.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DGuyTZ_-.js";import"./useGetEntityHeaders-r_MXeHcq.js";import"./EntityIcon-C_GElok6.js";import"./ErrorChip-B7pz3qTs.js";import"./Chip-BPZys9eM.js";import"./UserOrTeamBadge-BMQ8Y3hH.js";import"./useUserGroupHeader-DDShxnvZ.js";import"./TeamBadge-CeLHtqZZ.js";import"./UserBadge-Bmg1fZEL.js";import"./useUserBundle-CFNqkFnY.js";import"./MenuItem-EF7hTZ7c.js";import"./Card-DmjFo3eO.js";import"./UnmanagedACTAccessRequirementItem-Bb270Lnt.js";import"./RequirementItem-BQXOX7MU.js";import"./LockTwoTone-Dm-JFBMQ.js";import"./ManagedACTAccessRequirementItemView-CL4EyB_H.js";import"./SelfSignAccessRequirementItem-CRkuDLiO.js";import"./DataAccessRequestAccessorsFilesForm-B_fMde8L.js";import"./enums-Bcn04C6O.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-Bzt5FkZt.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-Bs7X62f4.js";import"./UserSearchBox-ByfTn2K1.js";import"./useDebouncedEffect-D48MhQNv.js";import"./Autocomplete-CvYO56jl.js";import"./usePreviousProps-DdRbQRXC.js";import"./RadioGroup-DW62PeyH.js";import"./Radio-CzmjFSUd.js";import"./SwitchBase-D0KX-hor.js";import"./FormGroup-XysToauf.js";import"./FormControlLabel-CsLV9TPO.js";import"./UploadDocumentField-f76q8R3N.js";import"./FileUpload-G85Jb8vU.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CECYytCm.js";import"./GridLegacy-SLr5D_5q.js";import"./ResearchProjectForm-9CPmXAAh.js";import"./TextFieldWithWordLimit-z_QzW7Yv.js";import"./AuthenticatedRequirement-ChBGXNdN.js";import"./CertificationRequirement-Dqu357F9.js";import"./TwoFactorAuthEnabledRequirement-C2PVa3Y1.js";import"./ValidationRequirement-D52C7jwE.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CElXyny1.js";import"./RejectDataAccessRequestModal-C7QxDFpq.js";import"./CannedRejectionDialog-BZlHgpY0.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-C90g-TxX.js";import"./Checkbox-DrqmkyJE.js";import"./Grid-CPdt3ktR.js";import"./upperFirst-leRmGWNO.js";import"./_stringToArray-TiWaDKiZ.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
