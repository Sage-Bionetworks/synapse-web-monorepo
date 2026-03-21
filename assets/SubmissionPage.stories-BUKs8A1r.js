import{g as u,k as d,n as t,a3 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-BfspjTcY.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-sOzJJ2gj.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-B_M-V3LL.js";import"./useAccessRequirements-Dguv-S1B.js";import"./index-C387dLAZ.js";import"./_baseOrderBy-CpKZf7AP.js";import"./_baseIteratee-BDr_3Jg_.js";import"./_baseMap-ZHm_eqdn.js";import"./_baseEach-CKxKqa6S.js";import"./useInfiniteQuery-FUajPpu4.js";import"./groupBy-CQO3PXi7.js";import"./_createAggregator-qJzUWh6L.js";import"./DialogBase-YXAFhqm6.js";import"./Close-CgzhAH0t.js";import"./HelpPopover-BxZZ394S.js";import"./MarkdownPopover-BHvvQ330.js";import"./LightTooltip-CyF_hJD9.js";import"./MarkdownSynapse-CyM223lc.js";import"./SkeletonButton-CkY0YDZ2.js";import"./SkeletonInlineBlock-PuABnjtw.js";import"./SkeletonTable-BM0lpKNC.js";import"./SkeletonParagraph-Snv-dM4k.js";import"./EntityLink-f00J2Z7v.js";import"./useEntity-FGC_VSuz.js";import"./pickBy-Djadq0qK.js";import"./isString-C5yhpn54.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DjvZUiVi.js";import"./useGetEntityHeaders-3UT9qbwM.js";import"./EntityIcon-3MOHM1l4.js";import"./ErrorChip-BiIX79kV.js";import"./Chip-BneT6US4.js";import"./UserOrTeamBadge-Dvyff-lW.js";import"./UserBadge-DtX7R756.js";import"./useUserBundle-BGI9EtOn.js";import"./MenuItem-CJRlDMpO.js";import"./Card-Jgx718_A.js";import"./TeamBadge-BHn2sow7.js";import"./UnmanagedACTAccessRequirementItem-ZKQPtVSh.js";import"./RequirementItem-Cb0u64dE.js";import"./LockTwoTone-02RwZcqC.js";import"./UserSearchBoxV2-D66T3EAX.js";import"./useDebouncedEffect-D7r8Fhfs.js";import"./use-deep-compare-effect.esm-BWbxHWJ2.js";import"./uniq-Yrv0fQYR.js";import"./without-XkeIV0oQ.js";import"./Select-aab027f3.esm-BJbkthJD.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-4TWnUQ3F.js";import"./SelfSignAccessRequirementItem-B5WU65-5.js";import"./DataAccessRequestAccessorsFilesForm-BHl-AX5Y.js";import"./enums-DNtspZau.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-Cb_aDZIq.js";import"./RadioGroup-C3A7_6_M.js";import"./Radio-DMdomMkT.js";import"./SwitchBase-TiYknOKh.js";import"./FormGroup-TmxyLql-.js";import"./FormControlLabel-Genaqmo5.js";import"./UploadDocumentField-CvSFr5eX.js";import"./FileUpload-BY4MVpy4.js";import"./ManagedACTAccessRequirementFormWikiWrapper-XmlIjzaB.js";import"./GridLegacy-DUnJeieX.js";import"./ResearchProjectForm-3pJOh9e_.js";import"./TextFieldWithWordLimit-CHDFinAz.js";import"./AuthenticatedRequirement-CGIkzA4n.js";import"./CertificationRequirement-WEVT3pOX.js";import"./TwoFactorAuthEnabledRequirement-DOx-893m.js";import"./ValidationRequirement-G-A1hXQp.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-B45LHnga.js";import"./RejectDataAccessRequestModal-DGoMIS7A.js";import"./CannedRejectionDialog-tUooMcH3.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-DD_w1pfY.js";import"./Checkbox-B0O3bzZ6.js";import"./Grid-IcPGk4Ih.js";import"./upperFirst-CUwFfCjV.js";import"./_stringToArray-DzWSUBzA.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
