import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kt as i,ku as E,H as s,kv as _,p as m,kw as I,kx as S,kc as O}from"./iframe-Fj4lak5c.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CTXYaCWE.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-C9f0CM3Y.js";import"./useAccessRequirements-BK4E0lyi.js";import"./index-_4NbbnB5.js";import"./_baseOrderBy-CBnpW1-x.js";import"./_baseIteratee-CMx6DeJF.js";import"./_baseMap-BixPoDUC.js";import"./_baseEach-DNtmXHsZ.js";import"./useQueries-ootAa_T1.js";import"./useInfiniteQuery-CbadcZWG.js";import"./groupBy-RnLXNBcX.js";import"./_createAggregator-D7S27SJf.js";import"./DialogBase-DO9GwF3-.js";import"./Close-D8Dcnzwn.js";import"./HelpPopover-Dir9cMCM.js";import"./MarkdownPopover-CTr2IYFG.js";import"./LightTooltip-BvGcOz9H.js";import"./MarkdownSynapse-o56dOjAb.js";import"./SkeletonButton-Caf_IZFe.js";import"./SkeletonInlineBlock-BlJ5s_Kh.js";import"./SkeletonTable-t4KSioMX.js";import"./SkeletonParagraph-CrmOE7Us.js";import"./EntityLink-BUeIikxm.js";import"./useEntity-CsvyAHgM.js";import"./pickBy-DWGrTkiK.js";import"./isString-CPqjMqSr.js";import"./useSuspenseQuery-DCz9tJ8h.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CMAJQSrF.js";import"./useGetEntityHeaders-CGPovO9d.js";import"./EntityIcon-xvpe0khs.js";import"./ErrorChip-DCduo5sP.js";import"./Chip-CGB0K5Hb.js";import"./UserOrTeamBadge-5n0LoUq7.js";import"./UserBadge-D8gfab1c.js";import"./useUserBundle-DYUW7eSP.js";import"./MenuItem-B8CcEiWE.js";import"./Card-BAE-Z3hw.js";import"./TeamBadge-Dl74_imx.js";import"./UnmanagedACTAccessRequirementItem-CJTVTY9_.js";import"./RequirementItem-DaYlM6db.js";import"./LockTwoTone-DK-kcXZ-.js";import"./UserSearchBoxV2-CTlpMgLY.js";import"./useDebouncedEffect-gmRpLRy6.js";import"./use-deep-compare-effect.esm-Cxsm155F.js";import"./uniq-CTl5AwKM.js";import"./without-DSjlK3iQ.js";import"./Select-aab027f3.esm-C45ZwGft.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BJrh-CKG.js";import"./SelfSignAccessRequirementItem-Dd2kzrtY.js";import"./DataAccessRequestAccessorsFilesForm-Bq9kW7un.js";import"./enums-et0ymZew.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BO7HfJ-V.js";import"./RadioGroup-CI3vyDHN.js";import"./Radio-D4cCgHVZ.js";import"./SwitchBase-oqrHKWjW.js";import"./FormGroup-Cbv8Y0_i.js";import"./FormControlLabel-B3G8i6At.js";import"./UploadDocumentField-YBGhK5dC.js";import"./FileUpload-BqgcMlQS.js";import"./ManagedACTAccessRequirementFormWikiWrapper-C4ia1Dwj.js";import"./GridLegacy-DvxmOunu.js";import"./ResearchProjectForm-DokSpxTG.js";import"./TextFieldWithWordLimit-BmKRAcrv.js";import"./AuthenticatedRequirement-D0-l2DBQ.js";import"./CertificationRequirement-O2fp15Qt.js";import"./TwoFactorAuthEnabledRequirement-BUf-Wg-1.js";import"./ValidationRequirement-UncLP8Ev.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DuAyMUYW.js";import"./RejectDataAccessRequestModal-Cg2fZwgb.js";import"./CannedRejectionDialog-Dr-zMhgL.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-DfmVN50m.js";import"./Checkbox-C1OqAc7h.js";import"./Grid-DgOwfEQi.js";import"./upperFirst-DyXvGgvd.js";import"./_stringToArray-ct6moShC.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
