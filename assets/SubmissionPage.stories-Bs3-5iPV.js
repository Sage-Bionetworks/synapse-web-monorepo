import{z as d,b as e,o as u,s,kp as i,kq as c,H as t,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-DEq4Fwc_.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-C71K-hZw.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BysaAJWy.js";import"./useAccessRequirements-C4yV_srx.js";import"./index-f3FEnX0R.js";import"./_baseOrderBy-CuMO6fDB.js";import"./_baseIteratee-DiRcqJ-V.js";import"./_baseMap-D3t1dmer.js";import"./_baseEach-DduMpDYT.js";import"./useInfiniteQuery-BoS_wNWd.js";import"./groupBy-BmQaIa48.js";import"./_createAggregator-o8SKZRKL.js";import"./DialogBase-C4vq_sVg.js";import"./Close-YBK2a75v.js";import"./HelpPopover-kHe5ruIB.js";import"./MarkdownPopover-CvAv5IbO.js";import"./LightTooltip-YqL3Vmul.js";import"./MarkdownSynapse-C1TpcYQU.js";import"./SkeletonButton-Cgw-w1QX.js";import"./SkeletonInlineBlock-Ct1mjrTN.js";import"./SkeletonTable-CssHy_cG.js";import"./SkeletonParagraph-C2zzRv3g.js";import"./EntityLink-DO4e_Nod.js";import"./useEntity-BBOKy18n.js";import"./pickBy-D-hvBzih.js";import"./isString-D-f34EG8.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-dgC-l_Ks.js";import"./useGetEntityHeaders-CLPT9Ma6.js";import"./EntityIcon-LpKOoh8P.js";import"./ErrorChip-DrYZGsKR.js";import"./Chip-CsLFe4y4.js";import"./UserOrTeamBadge-BZeoORq6.js";import"./UserBadge-CQKGOV2g.js";import"./useUserBundle-DhUzGqE3.js";import"./MenuItem-Q5cSc0me.js";import"./Card-Bft1ilTS.js";import"./TeamBadge-CSeFW5CF.js";import"./UnmanagedACTAccessRequirementItem-uT11Tq5E.js";import"./RequirementItem-DNl7gzAb.js";import"./LockTwoTone-C-A_pNr_.js";import"./ManagedACTAccessRequirementItemView-BwzT1DOX.js";import"./SelfSignAccessRequirementItem-C94xXWEZ.js";import"./DataAccessRequestAccessorsFilesForm-DRqWI9n3.js";import"./enums-CIaRDV0j.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-BT8pRJaE.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-Cd8jd05E.js";import"./UserSearchBox-Duj3mjAc.js";import"./useDebouncedEffect-CjcHpG6N.js";import"./Autocomplete-BDzyqPVK.js";import"./usePreviousProps-D-IBZJIf.js";import"./RadioGroup-4emnaK5g.js";import"./Radio-DD2ZwWUp.js";import"./SwitchBase-BWvcTXOM.js";import"./FormGroup-IGBYmsqH.js";import"./FormControlLabel-DQYCrA3y.js";import"./UploadDocumentField-CpsDuun_.js";import"./FileUpload-CmsdXbVr.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DwRMv38h.js";import"./GridLegacy-CHx0QFlD.js";import"./ResearchProjectForm-Hz2RCoo6.js";import"./TextFieldWithWordLimit-4m6MQ9ni.js";import"./AuthenticatedRequirement-dghHMX0_.js";import"./CertificationRequirement-5rMck99f.js";import"./TwoFactorAuthEnabledRequirement-gulSMMrb.js";import"./ValidationRequirement-C53hXBKT.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DmaRp1iM.js";import"./RejectDataAccessRequestModal-DdACuwCG.js";import"./CannedRejectionDialog-CI1HDtJF.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-r9JWHI-k.js";import"./Checkbox-CIkhFSee.js";import"./Grid-nazzqp4E.js";import"./upperFirst-Oj7g_MKl.js";import"./_stringToArray-D8U1rt3I.js";const Le={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const xe=["Demo","DemoError"];export{o as Demo,n as DemoError,xe as __namedExportsOrder,Le as default};
