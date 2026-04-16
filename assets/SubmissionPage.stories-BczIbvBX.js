import{z as u,b as e,o as d,s as t,kq as i,kr as c,H as s,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-DiPm50UB.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-nVtO89fx.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-C5f-vXx0.js";import"./useAccessRequirements-CyQd-YXH.js";import"./index-B9ANVuh5.js";import"./_baseOrderBy-aM169nLh.js";import"./_baseIteratee-DWhIL05T.js";import"./_baseMap-xyu6HgKJ.js";import"./_baseEach-FF_VpvRu.js";import"./useInfiniteQuery-CatJNhxp.js";import"./groupBy-C1PpRg7J.js";import"./_createAggregator-DuGBtTXr.js";import"./DialogBase-DSnQo3lU.js";import"./Close-Jre6tOCB.js";import"./HelpPopover-C-0MB3By.js";import"./MarkdownPopover-D6A11oRt.js";import"./LightTooltip-BwkWxZAw.js";import"./MarkdownSynapse-CVBPcDA6.js";import"./SkeletonButton-Bvb1MiX7.js";import"./SkeletonInlineBlock-LodHGZ4G.js";import"./SkeletonTable-DrjQboaV.js";import"./SkeletonParagraph-CeZAzIZD.js";import"./EntityLink-BWMkjf11.js";import"./useEntity-B2TZVtlA.js";import"./pickBy-BPtPdY-S.js";import"./isString-CzPPo9io.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D9nmL3Wc.js";import"./useGetEntityHeaders-DnRl4DsU.js";import"./EntityIcon-DZpLGeT4.js";import"./ErrorChip-B5xvPYfb.js";import"./Chip-FHtW8UvL.js";import"./UserOrTeamBadge-D0qHeicX.js";import"./useUserGroupHeader-HRrxzYDs.js";import"./TeamBadge-CrPr9jIZ.js";import"./UserBadge-BjVrhUSw.js";import"./useUserBundle-Xy4g38YR.js";import"./MenuItem-V4SUklHJ.js";import"./Card-DJkxs2b6.js";import"./UnmanagedACTAccessRequirementItem-C7ESkt-a.js";import"./RequirementItem-HgGticoU.js";import"./CheckTwoTone-DEJ0TEoM.js";import"./ManagedACTAccessRequirementItemView-C1Sc2s4U.js";import"./SelfSignAccessRequirementItem-CqEraSjW.js";import"./DataAccessRequestAccessorsFilesForm-BAHTldey.js";import"./enums-DRct_Xp7.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-BQM38-Gy.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-D-ecNewR.js";import"./UserSearchBox-LsGLwxCO.js";import"./useDebouncedEffect-Duno4CzS.js";import"./Autocomplete-Cwaz2roQ.js";import"./usePreviousProps-Ca8WKoot.js";import"./RadioGroup-BJT98eWm.js";import"./Radio-CzlaKIzr.js";import"./SwitchBase-CIORlFGi.js";import"./FormGroup-q2j9yogA.js";import"./FormControlLabel-DJXVjsUK.js";import"./UploadDocumentField-j-pbL50E.js";import"./FileUpload-BSCxtVSM.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BgenQmr7.js";import"./GridLegacy-C22bhzAm.js";import"./ResearchProjectForm-CsOymvy0.js";import"./TextFieldWithWordLimit-CbWgTqMT.js";import"./AuthenticatedRequirement-DPCBswRT.js";import"./CertificationRequirement-p_kFPCHX.js";import"./TwoFactorAuthEnabledRequirement-DUl_3Gmm.js";import"./ValidationRequirement-BrNS1dLq.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-If6aeN_7.js";import"./RejectDataAccessRequestModal-DFb6FgED.js";import"./CannedRejectionDialog-CI91RMmf.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-EphxDidc.js";import"./Checkbox-BcJ_w-AA.js";import"./Grid-CFNAgCmm.js";import"./upperFirst-_hz4ldY5.js";import"./_stringToArray-C6x7xJN1.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
