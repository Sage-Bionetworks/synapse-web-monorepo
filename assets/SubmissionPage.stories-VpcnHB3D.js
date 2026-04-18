import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-vLBQZPS1.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CL0P21e3.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-C-jCxnPD.js";import"./useAccessRequirements-C7_nf46j.js";import"./index-huQsABd9.js";import"./_baseOrderBy-BC97-PTG.js";import"./_baseIteratee-BmZJlmI5.js";import"./_baseMap-BExDUO8C.js";import"./_baseEach-D90opGFA.js";import"./useInfiniteQuery-CjBQlBHx.js";import"./groupBy-DU2gDHbs.js";import"./_createAggregator-Bvib6mQz.js";import"./DialogBase-MXOqe2PM.js";import"./Close-w9C8mbRP.js";import"./HelpPopover-BDS7EbF2.js";import"./MarkdownPopover-DJzEVvrc.js";import"./LightTooltip-FFjGpbV1.js";import"./MarkdownSynapse-LkluOMjb.js";import"./SkeletonButton-Bpq0DUhs.js";import"./SkeletonInlineBlock-Ck9MEOcu.js";import"./SkeletonTable-vLDxttH1.js";import"./SkeletonParagraph-BdLk36IL.js";import"./EntityLink-CaWTTFmm.js";import"./useEntity-B8YDBI_I.js";import"./pickBy-Rr7aYo8C.js";import"./isString-uOCvHjpj.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Czhkwfxc.js";import"./useGetEntityHeaders-G8vz0XIv.js";import"./EntityIcon-0-qXS0Ig.js";import"./ErrorChip-DgJ7OQAC.js";import"./Chip-BwFdox-s.js";import"./UserOrTeamBadge-BrN8Qpje.js";import"./UserBadge-PCszth9B.js";import"./useUserBundle-BzYdunjk.js";import"./MenuItem-B9IS4RBy.js";import"./Card-vpuDZNT5.js";import"./TeamBadge-B0XMle2i.js";import"./UnmanagedACTAccessRequirementItem-SLVC-IhP.js";import"./RequirementItem-DgUkO2M_.js";import"./CheckTwoTone-B3nADbgT.js";import"./ManagedACTAccessRequirementItemView-CSKj4W2a.js";import"./SelfSignAccessRequirementItem-f7jqOPrS.js";import"./DataAccessRequestAccessorsFilesForm-DtAJAZfA.js";import"./enums-B7u62GDg.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-DXH_1cJh.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-DlXaVjom.js";import"./UserSearchBox-D5sremVT.js";import"./useDebouncedEffect-BW4_TbpK.js";import"./Autocomplete-BxsEBMw_.js";import"./usePreviousProps-ChDDB4-s.js";import"./RadioGroup-C9fhpGnL.js";import"./Radio-BdaDAdcS.js";import"./SwitchBase-BpROeQ6w.js";import"./FormGroup-iWuYtkuX.js";import"./FormControlLabel-ChegGM40.js";import"./UploadDocumentField-BeTQGjpJ.js";import"./FileUpload-CrXwsdky.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CIkSygMx.js";import"./GridLegacy-EvU_M67X.js";import"./ResearchProjectForm-BeBY9SzD.js";import"./TextFieldWithWordLimit-CsUMfF9N.js";import"./AuthenticatedRequirement-CpVIPwB5.js";import"./CertificationRequirement-CO-tD7mf.js";import"./TwoFactorAuthEnabledRequirement-CIgNqE4b.js";import"./ValidationRequirement-C0o-fbGC.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Vff56sjZ.js";import"./RejectDataAccessRequestModal-CVM89IS5.js";import"./CannedRejectionDialog-DnDL38eY.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-DhT3Kl3D.js";import"./Checkbox-C06X4GkF.js";import"./Grid-DVwtr0_z.js";import"./upperFirst-De3Fnync.js";import"./_stringToArray-CIFnqCsW.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
