import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kt as i,ku as E,H as s,kv as _,p as m,kw as I,kx as S,kc as O}from"./iframe-CmoSAPSB.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-hZuxRvY0.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Pm_qNcmX.js";import"./useAccessRequirements-B0jypzSE.js";import"./index-C2zeCRkX.js";import"./_baseOrderBy-CzF72RSC.js";import"./_baseIteratee-DrVRnZ10.js";import"./_baseMap-Bv-goPXo.js";import"./_baseEach-BEIVkryU.js";import"./useQueries-BicLalCF.js";import"./useInfiniteQuery-apdbL5yC.js";import"./groupBy-BWUTMmHN.js";import"./_createAggregator-BRsT8zaT.js";import"./DialogBase-Bqr0n33q.js";import"./Close-yUN2-UGG.js";import"./HelpPopover-Cvjj8rL7.js";import"./MarkdownPopover-B6HZYL0b.js";import"./LightTooltip-8uaDTCAj.js";import"./MarkdownSynapse-vijXPkmg.js";import"./SkeletonButton-BiCcSD_e.js";import"./SkeletonInlineBlock-Cx8PzyyP.js";import"./SkeletonTable-BfBRnH8d.js";import"./SkeletonParagraph-JgANzJ5n.js";import"./EntityLink-BUGX8Vk6.js";import"./useEntity-BU_W9GNB.js";import"./pickBy-Ce-CCuqq.js";import"./isString-DEA74dYv.js";import"./useSuspenseQuery-BKY6Qa88.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B66UalsI.js";import"./useGetEntityHeaders-NMjoebvG.js";import"./EntityIcon-B9hast9_.js";import"./ErrorChip-pvUts_Pp.js";import"./Chip-B9lbWoVh.js";import"./UserOrTeamBadge-Bm0VfmUj.js";import"./UserBadge-zo9ivwKg.js";import"./useUserBundle-CwnnfMaT.js";import"./MenuItem-Dt0yDuqb.js";import"./Card-KnQ9tlyZ.js";import"./TeamBadge-CVCPAnxp.js";import"./UnmanagedACTAccessRequirementItem-DDFqqr2T.js";import"./RequirementItem-CXdx5OwN.js";import"./LockTwoTone-DUd6iU8C.js";import"./UserSearchBoxV2-PBclEo5v.js";import"./useDebouncedEffect-D5cIdkw7.js";import"./use-deep-compare-effect.esm-DN6zG_QJ.js";import"./uniq-CmBLLPZA.js";import"./without-Bamt9vgf.js";import"./Select-aab027f3.esm-CJ6noaGq.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-B5XTX3WL.js";import"./SelfSignAccessRequirementItem-BrpYySMT.js";import"./DataAccessRequestAccessorsFilesForm-B5pk3Jrq.js";import"./enums-BCyiCR2Q.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CFyqW5jb.js";import"./RadioGroup-harxg6PL.js";import"./Radio-BP6PUGhg.js";import"./SwitchBase-DXooODN3.js";import"./FormGroup-VQhHrQUC.js";import"./FormControlLabel-DiAADwWJ.js";import"./UploadDocumentField-DdRXEAt4.js";import"./FileUpload-CskC2OX_.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BzK10y20.js";import"./GridLegacy-9khPJdp1.js";import"./ResearchProjectForm-BL_leKBy.js";import"./TextFieldWithWordLimit-olkBf9sB.js";import"./AuthenticatedRequirement-CHwHS0zD.js";import"./CertificationRequirement-hr8QEu2x.js";import"./TwoFactorAuthEnabledRequirement-DoKlC58f.js";import"./ValidationRequirement-COuKWlhm.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Ba4PhMwQ.js";import"./RejectDataAccessRequestModal-DBxWdVUR.js";import"./CannedRejectionDialog-CPKxRbz3.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-DzbbPL6e.js";import"./Checkbox-CDdvC1LR.js";import"./Grid-Dz0d_gTv.js";import"./upperFirst-iQG3zXOH.js";import"./_stringToArray-DMac71cH.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
