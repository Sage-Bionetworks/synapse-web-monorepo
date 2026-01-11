import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-BIEbu1W6.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BzgM88Rh.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CV4whMSz.js";import"./useAccessRequirements-DMlWDqFN.js";import"./index-G6SXchb0.js";import"./_baseOrderBy-v3AVsVKV.js";import"./_baseIteratee-EamAns9I.js";import"./_baseMap-CKXGksU7.js";import"./_baseEach-Ds8ZIurE.js";import"./useQueries-Cdmrbg4h.js";import"./useInfiniteQuery-B0KU597s.js";import"./groupBy-CkDObAnA.js";import"./_createAggregator-DphnR0Lc.js";import"./DialogBase-BOsW7V0r.js";import"./Close-PD-8PwDw.js";import"./HelpPopover-BMpjG3ih.js";import"./MarkdownPopover-D4XSX2HP.js";import"./LightTooltip-Cl8rvG15.js";import"./MarkdownSynapse-C6TGH7qQ.js";import"./SkeletonButton-CYSUqy8V.js";import"./SkeletonInlineBlock-BPt0uiBn.js";import"./SkeletonTable-xs4-qgjj.js";import"./SkeletonParagraph-C7NGLrAr.js";import"./EntityLink-DdFwvXur.js";import"./useEntity-CzT7v2yr.js";import"./pickBy-BSkyHBiD.js";import"./isString-u3kX30a_.js";import"./useSuspenseQuery-B21UYyAc.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D9ouYx9P.js";import"./useGetEntityHeaders-DTgBEshd.js";import"./EntityIcon-BWglqz21.js";import"./ErrorChip-DwxQCugQ.js";import"./Chip-BTFPdc0m.js";import"./UserOrTeamBadge-CzfEaPzE.js";import"./UserBadge-CkpZ8t6W.js";import"./useUserBundle-bL5uBmII.js";import"./MenuItem-DN4nfg1A.js";import"./Card-BRaEJLq9.js";import"./TeamBadge-L6v-eh7R.js";import"./UnmanagedACTAccessRequirementItem-DR3IZxtP.js";import"./RequirementItem-7ooCnbon.js";import"./LockTwoTone-CZBccG1v.js";import"./UserSearchBoxV2-De_D9ris.js";import"./useDebouncedEffect-Bu5GdWCA.js";import"./use-deep-compare-effect.esm-BdamFNJU.js";import"./uniq-BxbLoW-Z.js";import"./without-eMQmSwl1.js";import"./Select-aab027f3.esm-BZ3rq3CA.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-Blm_dSEB.js";import"./SelfSignAccessRequirementItem-BMVLe3Wm.js";import"./DataAccessRequestAccessorsFilesForm-B8Zuf1lu.js";import"./enums-BLXwpT5J.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-fQEtxXpS.js";import"./RadioGroup-Dbw0HOdB.js";import"./Radio-CO18wH2-.js";import"./SwitchBase-CInKnVeE.js";import"./FormGroup-8Ko1PbEu.js";import"./FormControlLabel-Bz8ihAzn.js";import"./UploadDocumentField-CggbacG1.js";import"./FileUpload-AzsBqWUK.js";import"./ManagedACTAccessRequirementFormWikiWrapper-fI_rSBLp.js";import"./GridLegacy-CeP0XwCG.js";import"./ResearchProjectForm-C_CQx3kF.js";import"./TextFieldWithWordLimit-B0p8-ESG.js";import"./AuthenticatedRequirement-WOSPQz8P.js";import"./CertificationRequirement-B_7fYJxf.js";import"./TwoFactorAuthEnabledRequirement-ye5QSow5.js";import"./ValidationRequirement-CnljNcX1.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-91G9xWd-.js";import"./RejectDataAccessRequestModal-SNvhZs9o.js";import"./CannedRejectionDialog-DichiTYj.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BG7mYTUg.js";import"./Checkbox-BRJfsK-C.js";import"./Grid-B9VV0g0f.js";import"./upperFirst--d1TsWLT.js";import"./_stringToArray-sKxtOENg.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
