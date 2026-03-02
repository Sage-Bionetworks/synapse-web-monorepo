import{g as d,k as u,n as t,a3 as c,dN as R,b as e,kn as i,ko as E,H as s,kp as _,p as m,kq as I,kr as S,k6 as O}from"./iframe-DrwjMxxV.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CbZnqZrs.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DPo7L4Kb.js";import"./useAccessRequirements-C4ZBPPn6.js";import"./index-DLIz_4HG.js";import"./_baseOrderBy-C3Xx875p.js";import"./_baseIteratee-Bg4XJGB0.js";import"./_baseMap-0JApKS8Z.js";import"./_baseEach-Dv1BcOvK.js";import"./useInfiniteQuery-CwESqI_x.js";import"./groupBy-DIEd1iW1.js";import"./_createAggregator-CZwDc77U.js";import"./DialogBase-nWKWc-JJ.js";import"./Close-CigZT9Cr.js";import"./HelpPopover-B9CXRuRH.js";import"./MarkdownPopover-DnCXWrW5.js";import"./LightTooltip-CaqdPU_H.js";import"./MarkdownSynapse-CBAvDJdh.js";import"./SkeletonButton-B0AmZCB5.js";import"./SkeletonInlineBlock-CN425wR7.js";import"./SkeletonTable-hPiR5C1z.js";import"./SkeletonParagraph-zDUPBNGu.js";import"./EntityLink-CuDSxTk9.js";import"./useEntity-CiC2Lmxg.js";import"./pickBy-ChSifmeA.js";import"./isString-CpD0Bh8x.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle--2s-X5In.js";import"./useGetEntityHeaders-C38YvUUP.js";import"./EntityIcon-BYRf3f_w.js";import"./ErrorChip-C-F6QdWR.js";import"./Chip-CXid-GSQ.js";import"./UserOrTeamBadge-DnFB8vjB.js";import"./UserBadge-BIMPaEKA.js";import"./useUserBundle-Bvpmk8jd.js";import"./MenuItem-DjrjGQIr.js";import"./Card-DOt9oZai.js";import"./TeamBadge-gtf561NT.js";import"./UnmanagedACTAccessRequirementItem-C1VE4fwd.js";import"./RequirementItem-B1UsRqin.js";import"./LockTwoTone-Iyuaa1nt.js";import"./UserSearchBoxV2-CjovKdme.js";import"./useDebouncedEffect-CuCMAX53.js";import"./use-deep-compare-effect.esm-EYp_W6bt.js";import"./uniq-CRAp08W0.js";import"./without-jF4TYD93.js";import"./Select-aab027f3.esm-R0wzjBr4.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-a0MU2K-g.js";import"./SelfSignAccessRequirementItem-BFu5MsgR.js";import"./DataAccessRequestAccessorsFilesForm-NGYvzH1y.js";import"./enums-S3JwEuYL.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-C55LqhTS.js";import"./RadioGroup-C7d0ejI4.js";import"./Radio-gzHzETCN.js";import"./SwitchBase-D8cW9WMJ.js";import"./FormGroup-DuZ9xrQw.js";import"./FormControlLabel-BMJLeEQT.js";import"./UploadDocumentField-XcjDb5M6.js";import"./FileUpload-MzhM66g1.js";import"./ManagedACTAccessRequirementFormWikiWrapper-D-VFfW1J.js";import"./GridLegacy-xPvVBY50.js";import"./ResearchProjectForm-DbIHCDiY.js";import"./TextFieldWithWordLimit-D8N89KiY.js";import"./AuthenticatedRequirement-4XsNuKtz.js";import"./CertificationRequirement-CL6hvbVv.js";import"./TwoFactorAuthEnabledRequirement-D9Xbm3OH.js";import"./ValidationRequirement-eCe2E3M0.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BuUPTh_C.js";import"./RejectDataAccessRequestModal-DwqBgeSJ.js";import"./CannedRejectionDialog-COLBzdOS.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-B4VjD6Ag.js";import"./Checkbox-S2lGeQb3.js";import"./Grid-DvvRnRVN.js";import"./upperFirst-Dcu_5Wse.js";import"./_stringToArray-B2gAVof_.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ze=["Demo","DemoError"];export{o as Demo,n as DemoError,Ze as __namedExportsOrder,Ve as default};
