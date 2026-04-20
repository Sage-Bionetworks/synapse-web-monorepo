import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-sZrYZ6Wp.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BS3XRGhc.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CasfGYhu.js";import"./useAccessRequirements-FRzdfuUo.js";import"./index-DHfNFGWR.js";import"./_baseOrderBy-Cj6R3fxo.js";import"./_baseIteratee-BL55nfgn.js";import"./_baseMap-BOgugKtI.js";import"./_baseEach-BReJ2H88.js";import"./useInfiniteQuery-C5HUZHaI.js";import"./groupBy-BwB3CFiq.js";import"./_createAggregator-Dv6e7ETw.js";import"./DialogBase-DJn9LdSy.js";import"./Close-DmLJxOz2.js";import"./HelpPopover-CFZvRBgC.js";import"./MarkdownPopover-BPe5k0vL.js";import"./LightTooltip-PwS5hn6t.js";import"./MarkdownSynapse-B356jbGy.js";import"./SkeletonButton--UCUv7uI.js";import"./SkeletonInlineBlock-RlErow6J.js";import"./SkeletonTable-ChIFdfhg.js";import"./SkeletonParagraph-QSdi-JVA.js";import"./EntityLink-CVap3Ezd.js";import"./useEntity-BdTDitRz.js";import"./pickBy-Cd1Av1Ne.js";import"./isString-DDXRacac.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-OITnaEqS.js";import"./useGetEntityHeaders-B2x9m-r5.js";import"./EntityIcon-G2upERN3.js";import"./ErrorChip-CWQ2RMdR.js";import"./Chip-BvOGwdWK.js";import"./UserOrTeamBadge-DwA4RTdg.js";import"./UserBadge-Dg-mhIDf.js";import"./useUserBundle-Sq4CKI0B.js";import"./MenuItem-2yGPkNWm.js";import"./Card-wFiE_sMv.js";import"./TeamBadge-BNDWNsA5.js";import"./UnmanagedACTAccessRequirementItem-CZytfKMY.js";import"./RequirementItem-CKPEMBVW.js";import"./CheckTwoTone-BTosh5EP.js";import"./ManagedACTAccessRequirementItemView-Dxz714dA.js";import"./SelfSignAccessRequirementItem-C_l28zZf.js";import"./DataAccessRequestAccessorsFilesForm-Bf-mnqH0.js";import"./enums-rCwj05L6.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-CAgylSLG.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-D445wRCK.js";import"./UserSearchBox-DCLQ4kXf.js";import"./useDebouncedEffect-BvtZHxiB.js";import"./Autocomplete-oEmViLzX.js";import"./usePreviousProps-zdMDBRmY.js";import"./RadioGroup-DjuYVx1n.js";import"./Radio-BQoXyLIs.js";import"./SwitchBase-W3Oi4NaW.js";import"./FormGroup-Cu8TvdXt.js";import"./FormControlLabel-DawJBkuM.js";import"./UploadDocumentField-rboUda-h.js";import"./FileUpload-DmJDbjZx.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DNr2UoaI.js";import"./GridLegacy-DWpuLsdg.js";import"./ResearchProjectForm-FLbFf7r9.js";import"./TextFieldWithWordLimit-DysILXZK.js";import"./AuthenticatedRequirement-CSvkPon8.js";import"./CertificationRequirement-DMd0L4NE.js";import"./TwoFactorAuthEnabledRequirement-b7YkiRF-.js";import"./ValidationRequirement--mXMFEos.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CFYj_3h_.js";import"./RejectDataAccessRequestModal-Cbz4QabM.js";import"./CannedRejectionDialog-DWhraz8X.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-Bxj212oG.js";import"./Checkbox-LRYr4g4U.js";import"./Grid-BbQwRq5Y.js";import"./upperFirst-DcTUhtkU.js";import"./_stringToArray-CI9pdOSq.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
