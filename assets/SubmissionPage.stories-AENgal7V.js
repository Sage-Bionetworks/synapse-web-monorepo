import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,ks as i,kt as E,H as s,ku as _,p as m,kv as I,kw as S,kb as O}from"./iframe-Du5t3CHa.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-jHa0VH6r.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Cuhv38Az.js";import"./useAccessRequirements-4RQqBe7C.js";import"./index-CNn6qoPA.js";import"./_baseOrderBy-3Fjog4iC.js";import"./_baseIteratee-46oxJqcI.js";import"./_baseMap-Dt6qK5dy.js";import"./_baseEach-C0b7CaDS.js";import"./useQueries-CNFOi_mw.js";import"./useInfiniteQuery-OCUbEd9y.js";import"./groupBy-C-xswnXN.js";import"./_createAggregator-CGNHMkgd.js";import"./DialogBase-D3TgpDMO.js";import"./Close-CgG9ZltC.js";import"./HelpPopover-BWwj0Dbm.js";import"./MarkdownPopover-C4H2y9lI.js";import"./LightTooltip-BC8WsuZj.js";import"./MarkdownSynapse-DUHpTVRI.js";import"./SkeletonButton-JJ15ovuj.js";import"./SkeletonInlineBlock-E_CX27Fe.js";import"./SkeletonTable-KNaihl5A.js";import"./SkeletonParagraph-BlwsXkyr.js";import"./EntityLink-T0wxriNP.js";import"./useEntity-CDeYLYkU.js";import"./pickBy-DTHw_VPu.js";import"./isString-Rffp6-yY.js";import"./useSuspenseQuery-DK6Y2lqg.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DL2eN5zJ.js";import"./useGetEntityHeaders-BIeW1UVB.js";import"./EntityIcon-D3jOXoTo.js";import"./ErrorChip-DiPpM0eW.js";import"./Chip-C9V27U36.js";import"./UserOrTeamBadge-DiclrULV.js";import"./UserBadge-BVhpguWH.js";import"./useUserBundle-DutONjLY.js";import"./MenuItem-B06U7Mh-.js";import"./Card-BA2JlBwy.js";import"./TeamBadge-bpg2a6VL.js";import"./UnmanagedACTAccessRequirementItem-B08xJxWr.js";import"./RequirementItem-CW8k3Pg9.js";import"./LockTwoTone-DOWrmX3G.js";import"./UserSearchBoxV2-Ctwszba5.js";import"./useDebouncedEffect-DIZb-ey7.js";import"./use-deep-compare-effect.esm-AaOUJiRt.js";import"./uniq-DVZOq7ho.js";import"./without-DfRl6KGL.js";import"./Select-aab027f3.esm-BDe7h-y6.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-YoZ5TO3s.js";import"./SelfSignAccessRequirementItem-DlYnMyek.js";import"./DataAccessRequestAccessorsFilesForm-C5eXQG9V.js";import"./enums-Cn_koODh.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-XCvsCsFS.js";import"./RadioGroup-BxMz58Ap.js";import"./Radio-CuIvItJJ.js";import"./SwitchBase-C1PWzrki.js";import"./FormGroup-CjkwJ_Mu.js";import"./FormControlLabel-D53x5o1g.js";import"./UploadDocumentField-ULU3DWCk.js";import"./FileUpload-D2hVKXUc.js";import"./ManagedACTAccessRequirementFormWikiWrapper-zs8ECPIy.js";import"./GridLegacy-DdWkmIVX.js";import"./ResearchProjectForm-ldD6quMF.js";import"./TextFieldWithWordLimit-B_OrLQvS.js";import"./AuthenticatedRequirement-B-Vkv7B6.js";import"./CertificationRequirement-aj-Pmcn3.js";import"./TwoFactorAuthEnabledRequirement-DwZkjoqH.js";import"./ValidationRequirement-C9WQcY3Y.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-tmKqHwc0.js";import"./RejectDataAccessRequestModal-Xzn1WsBp.js";import"./CannedRejectionDialog-DrtqoTt8.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-DbxOMK7D.js";import"./Checkbox-DTNCLd3c.js";import"./Grid-CLZqbMyA.js";import"./upperFirst-CvYm35_-.js";import"./_stringToArray-BnAcqkBk.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
