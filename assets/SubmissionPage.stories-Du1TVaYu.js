import{g as u,k as d,n as t,a3 as c,e0 as R,b as e,ku as i,kv as E,H as s,kw as _,p as m,kx as I,ky as S,kd as O}from"./iframe-Ya-g_qay.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Dryg-9IU.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-xMIPl1A9.js";import"./useAccessRequirements-CCGCKFDe.js";import"./index-xVTfjyPx.js";import"./_baseOrderBy-DtAlKGoE.js";import"./_baseIteratee-NNKH08m9.js";import"./_baseMap-D_QMnoLZ.js";import"./_baseEach-ub4T8Ncm.js";import"./useQueries-BAvG0eo3.js";import"./useInfiniteQuery-DO90_A9I.js";import"./groupBy-ubTlryLP.js";import"./_createAggregator-CiTI5SEZ.js";import"./DialogBase-Cq0exykH.js";import"./Close-CwYN6EVd.js";import"./HelpPopover-Cg_-TFXL.js";import"./MarkdownPopover-GltQLah1.js";import"./LightTooltip-CmE9Hp-T.js";import"./MarkdownSynapse-CFShCHbb.js";import"./SkeletonButton-WGw1QxaV.js";import"./SkeletonInlineBlock-BhpPIW12.js";import"./SkeletonTable-gSh9dXdS.js";import"./SkeletonParagraph-B7nhBI0o.js";import"./EntityLink-hR0EMTtY.js";import"./useEntity-JPDUhxLN.js";import"./pickBy-DJc1YXZT.js";import"./isString-BPoMGSCO.js";import"./useSuspenseQuery-ajSSmE51.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-0DqdtmhJ.js";import"./useGetEntityHeaders-CrzK46ZA.js";import"./EntityIcon-Bvvg3Xos.js";import"./ErrorChip-DhI2xzY8.js";import"./Chip-CWV3Xi6n.js";import"./UserOrTeamBadge-BpgjzD55.js";import"./UserBadge-BKdC7vtq.js";import"./useUserBundle-CPxLoWOx.js";import"./MenuItem-BuXikWov.js";import"./Card-ZIbsqxVQ.js";import"./TeamBadge-H-bZaQzx.js";import"./UnmanagedACTAccessRequirementItem-BIYtjCD2.js";import"./RequirementItem-baRUvIZE.js";import"./LockTwoTone-k7Pzc4Z5.js";import"./UserSearchBoxV2-DvibNAE2.js";import"./useDebouncedEffect-CN-niWjm.js";import"./use-deep-compare-effect.esm-MAGuoYEF.js";import"./uniq-06ZLqp-Y.js";import"./without-BAVy4GBx.js";import"./Select-aab027f3.esm-CAzAUSfc.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-EcZCYi4w.js";import"./SelfSignAccessRequirementItem-DUOdnnP5.js";import"./DataAccessRequestAccessorsFilesForm-BhK7tq72.js";import"./enums-DunsyY2A.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-B1ta--QB.js";import"./RadioGroup-CdVHnydt.js";import"./Radio-CugMrLNm.js";import"./SwitchBase-CIlRr3Ri.js";import"./FormGroup-CBGJL5ph.js";import"./FormControlLabel-D1Z2Cjqs.js";import"./UploadDocumentField-DZb9Ixcu.js";import"./FileUpload-Blnl7Se9.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Cv_yqHuK.js";import"./GridLegacy-BLbwwrl6.js";import"./ResearchProjectForm-CDgm0mJC.js";import"./TextFieldWithWordLimit-Az1VFp-a.js";import"./AuthenticatedRequirement-C-Z4WqOH.js";import"./CertificationRequirement-B6o57SIZ.js";import"./TwoFactorAuthEnabledRequirement-DafwaKfr.js";import"./ValidationRequirement-BPWXR7bR.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CFjjXrF_.js";import"./RejectDataAccessRequestModal-3cW4VHJT.js";import"./CannedRejectionDialog-DixfhDV6.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BBcvYt37.js";import"./Checkbox-iublSEO5.js";import"./Grid-BjdRoMiy.js";import"./upperFirst-CzGl3_uJ.js";import"./_stringToArray-B8TtoHy2.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
