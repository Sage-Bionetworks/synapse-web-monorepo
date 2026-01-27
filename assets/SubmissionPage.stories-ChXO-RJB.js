import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kt as i,ku as E,H as s,kv as _,p as m,kw as I,kx as S,kc as O}from"./iframe-IkK4rSOB.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BzyqzA-e.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-WRly2Mmh.js";import"./useAccessRequirements-B8mi3H00.js";import"./index-C-PIi4pT.js";import"./_baseOrderBy-BK9Xz-Wr.js";import"./_baseIteratee-644iAwmQ.js";import"./_baseMap-BECXTj-9.js";import"./_baseEach-Fi0_Zvy9.js";import"./useQueries-CdqItZda.js";import"./useInfiniteQuery-CRXPq4a_.js";import"./groupBy-CqMLbGDj.js";import"./_createAggregator-DBPBqp6H.js";import"./DialogBase-DjKiii1p.js";import"./Close-DJYHgqb-.js";import"./HelpPopover-N2Q7oHWa.js";import"./MarkdownPopover-DcD4fm5a.js";import"./LightTooltip-3kR8WXpt.js";import"./MarkdownSynapse-DW-6eoVs.js";import"./SkeletonButton-CzqxZow7.js";import"./SkeletonInlineBlock-CUWgPSJQ.js";import"./SkeletonTable-CHtYHCYt.js";import"./SkeletonParagraph-Ckq6DzI_.js";import"./EntityLink-B7ig1Pvx.js";import"./useEntity-DM9FwObl.js";import"./pickBy-wL58zYrZ.js";import"./isString-BnfrvFdp.js";import"./useSuspenseQuery-D8qvYmV_.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BgG3FrAY.js";import"./useGetEntityHeaders-CTu1251G.js";import"./EntityIcon-jnZi-fip.js";import"./ErrorChip-wEP0IfG6.js";import"./Chip-Bi8EBQgs.js";import"./UserOrTeamBadge-BFX7lUx2.js";import"./UserBadge-BZHK3KZB.js";import"./useUserBundle-B3YXjSMX.js";import"./MenuItem-BoKeqqou.js";import"./Card-bxb7eLCy.js";import"./TeamBadge-CiT6UBWv.js";import"./UnmanagedACTAccessRequirementItem-cEq_ZCwl.js";import"./RequirementItem-hueW3vpV.js";import"./LockTwoTone-CXiemiUk.js";import"./UserSearchBoxV2-mWRrtBFH.js";import"./useDebouncedEffect-D0PLIQV1.js";import"./use-deep-compare-effect.esm-HzytTlMi.js";import"./uniq-BC73tWfP.js";import"./without-BSmaCH6T.js";import"./Select-aab027f3.esm-BYJAn0ql.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CdLe1RO0.js";import"./SelfSignAccessRequirementItem-V5UjoxGx.js";import"./DataAccessRequestAccessorsFilesForm-DMTwHERJ.js";import"./enums-DXAPFxTh.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-Dli9mQ70.js";import"./RadioGroup-ZZ6iUZin.js";import"./Radio-DodohJvN.js";import"./SwitchBase-BjEUr9ck.js";import"./FormGroup-CVr3Q5_2.js";import"./FormControlLabel-CRMi7S1V.js";import"./UploadDocumentField-Btn3mJmG.js";import"./FileUpload-BY_mORhO.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BbaMAcM6.js";import"./GridLegacy-Dp0KKOYN.js";import"./ResearchProjectForm-5-E21gUQ.js";import"./TextFieldWithWordLimit-fJsqYeOD.js";import"./AuthenticatedRequirement-g_YwVOup.js";import"./CertificationRequirement-B2z_A3iz.js";import"./TwoFactorAuthEnabledRequirement-DRWyARPa.js";import"./ValidationRequirement-Cw2z3YNr.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-JjfMFGKV.js";import"./RejectDataAccessRequestModal-SDbMnzQD.js";import"./CannedRejectionDialog-es_OxzxS.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Qnuw1A6n.js";import"./Checkbox-PFFjq1hC.js";import"./Grid-BYRQuG6t.js";import"./upperFirst-gvFSFBMF.js";import"./_stringToArray-CmWyjKRG.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
