import{g as u,k as d,n as t,a3 as c,e0 as R,b as e,kv as i,kw as E,H as s,kx as _,p as m,ky as I,kz as S,ke as O}from"./iframe-BjUpq5xd.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Bu8hFxpV.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DxcCvUNN.js";import"./useAccessRequirements-Bx9h85Ai.js";import"./index-DbW4RfeC.js";import"./_baseOrderBy-DorvlhIH.js";import"./_baseIteratee-CH7JnBeO.js";import"./_baseMap-C1Geoiqh.js";import"./_baseEach-CpXFuCDm.js";import"./useQueries-Cqwk_xQ6.js";import"./useInfiniteQuery-BQLrsI8-.js";import"./groupBy-D3_TqSjP.js";import"./_createAggregator-C-Nc3hm1.js";import"./DialogBase-CzW-EroP.js";import"./Close-CJMPACEo.js";import"./HelpPopover-DKCN5vTJ.js";import"./MarkdownPopover-DUsub1Bj.js";import"./LightTooltip-DMh9w68D.js";import"./MarkdownSynapse-DVFomeAo.js";import"./SkeletonButton-CV3RH36o.js";import"./SkeletonInlineBlock-ANrbFXbS.js";import"./SkeletonTable-B-Y_KPUW.js";import"./SkeletonParagraph-C60Mi91l.js";import"./EntityLink-rnzCSOLo.js";import"./useEntity-Cwe7aQYA.js";import"./pickBy-DY83DiKG.js";import"./isString-C2yk-Fxu.js";import"./useSuspenseQuery-DbgujXvY.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DPEZEXzu.js";import"./useGetEntityHeaders-CPrZEWZW.js";import"./EntityIcon-whableCV.js";import"./ErrorChip-EBIvMclo.js";import"./Chip-iDCojdQO.js";import"./UserOrTeamBadge-CDa7brDZ.js";import"./UserBadge-DSJf_GP4.js";import"./useUserBundle-CjiLCz0M.js";import"./MenuItem-CC-RPPM2.js";import"./Card-CJg664IM.js";import"./TeamBadge-D_XBOhEc.js";import"./UnmanagedACTAccessRequirementItem-DTYT-VwX.js";import"./RequirementItem-BNx80XnP.js";import"./LockTwoTone-z5Mze0Ov.js";import"./UserSearchBoxV2-BW_84TSm.js";import"./useDebouncedEffect-mFtE3sXH.js";import"./use-deep-compare-effect.esm-DkS9_zp9.js";import"./uniq-C8TjA6Un.js";import"./without-Bl5_wLKD.js";import"./Select-aab027f3.esm-VpRjCNLw.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-MChpoBQL.js";import"./SelfSignAccessRequirementItem-CReeIHrw.js";import"./DataAccessRequestAccessorsFilesForm-CHD2ihsG.js";import"./enums-DKtG3wd3.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DR8Kubm8.js";import"./RadioGroup-Ba_Yz390.js";import"./Radio-DMO1J20h.js";import"./SwitchBase-Bo9gKiR2.js";import"./FormGroup-DZV8Y3IK.js";import"./FormControlLabel-DmdTSbMj.js";import"./UploadDocumentField-r4FfXhcJ.js";import"./FileUpload-DWE20sAq.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CV5DEJNH.js";import"./GridLegacy-Drjwg8aj.js";import"./ResearchProjectForm-BjeocFkI.js";import"./TextFieldWithWordLimit-D5KNK9VT.js";import"./AuthenticatedRequirement-Cw8rEG-L.js";import"./CertificationRequirement-CH7yGMWr.js";import"./TwoFactorAuthEnabledRequirement-DSpDXrim.js";import"./ValidationRequirement-Coz8xOSB.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BMGUakHs.js";import"./RejectDataAccessRequestModal-B_JipKm3.js";import"./CannedRejectionDialog-BPAXdS18.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-B5pmgtC9.js";import"./Checkbox-CS3hOzCE.js";import"./Grid-C-Jjv4Qv.js";import"./upperFirst-0Hz-OjW-.js";import"./_stringToArray-B-UQHGNm.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
