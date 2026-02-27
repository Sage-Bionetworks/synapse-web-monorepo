import{g as d,k as u,n as t,a3 as c,dN as R,b as e,kn as i,ko as E,H as s,kp as _,p as m,kq as I,kr as S,k6 as O}from"./iframe-CxpGQRBF.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DuYjrcUF.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DK0Hh_k9.js";import"./useAccessRequirements-C2c4lUWp.js";import"./index-Bxpms_sx.js";import"./_baseOrderBy-D27SCrme.js";import"./_baseIteratee-CEqYEKXQ.js";import"./_baseMap-Oh885vco.js";import"./_baseEach-B4851qud.js";import"./useInfiniteQuery-5mr2kSpt.js";import"./groupBy-BwpNTGHa.js";import"./_createAggregator-DZGl0PCT.js";import"./DialogBase-VRRvXcss.js";import"./Close-BVGSUcxq.js";import"./HelpPopover-Bah9lcl8.js";import"./MarkdownPopover-BXPyAi3h.js";import"./LightTooltip-DF3uJOWM.js";import"./MarkdownSynapse-D7ZvzCtj.js";import"./SkeletonButton-8uBDlMQq.js";import"./SkeletonInlineBlock-DzPT_dbg.js";import"./SkeletonTable-B9WKv7bd.js";import"./SkeletonParagraph-BVjbv9Tg.js";import"./EntityLink-DrQEvibd.js";import"./useEntity-CXfAtQVa.js";import"./pickBy-mSFqw4zy.js";import"./isString-BVklKN--.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C2Akntb-.js";import"./useGetEntityHeaders-BcpyZV5x.js";import"./EntityIcon-Di5Ilpcb.js";import"./ErrorChip-DE4HeonH.js";import"./Chip-CAv6xn2G.js";import"./UserOrTeamBadge-akR24yVj.js";import"./UserBadge-CQ7vqXnO.js";import"./useUserBundle-CnIXmd2O.js";import"./MenuItem-B0A_VAcM.js";import"./Card-DNCBPWYU.js";import"./TeamBadge-F08nc5L0.js";import"./UnmanagedACTAccessRequirementItem-BVQ9NRvm.js";import"./RequirementItem-BBE6p_M5.js";import"./LockTwoTone-Ccu9rx1q.js";import"./UserSearchBoxV2-LrwLBFLP.js";import"./useDebouncedEffect-ChAo9rES.js";import"./use-deep-compare-effect.esm-DVQApDDI.js";import"./uniq-C1mF3GF0.js";import"./without-BC1_WuZi.js";import"./Select-aab027f3.esm-B9J-eAEQ.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-D0B6HOY-.js";import"./SelfSignAccessRequirementItem-Zw_jD4Z4.js";import"./DataAccessRequestAccessorsFilesForm-CHzVeQTN.js";import"./enums-Ha8p2Y-D.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-C_K1ANp1.js";import"./RadioGroup-BNv8zjJX.js";import"./Radio-LaAe_-JO.js";import"./SwitchBase-Czm70tKI.js";import"./FormGroup-WGcP9PN8.js";import"./FormControlLabel-DOKrTtT6.js";import"./UploadDocumentField-Cl1rUPvc.js";import"./FileUpload-DB2AwN74.js";import"./ManagedACTAccessRequirementFormWikiWrapper-B4NaW1gV.js";import"./GridLegacy-UwEXQb8f.js";import"./ResearchProjectForm-C-_q-6my.js";import"./TextFieldWithWordLimit-Chr0zwP1.js";import"./AuthenticatedRequirement-C14gI9LX.js";import"./CertificationRequirement-BbUkIgwx.js";import"./TwoFactorAuthEnabledRequirement-B8XcD1EJ.js";import"./ValidationRequirement-0uBV0anT.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-D9SDHdRo.js";import"./RejectDataAccessRequestModal-CwKynw-1.js";import"./CannedRejectionDialog-BcxykxpK.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-48YNczn8.js";import"./Checkbox-BrGglNIe.js";import"./Grid-DzCEe4zi.js";import"./upperFirst-D37inkiw.js";import"./_stringToArray-CK4NZKR9.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
