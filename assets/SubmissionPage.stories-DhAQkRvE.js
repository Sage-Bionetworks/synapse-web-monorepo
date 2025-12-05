import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kp as i,kq as C,H as s,kr as l,p as m,ks as b,kt as T,k4 as A}from"./iframe-BXzeMfE2.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-BIlRB_j_.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-BMqE4jJF.js";import"./useAccessRequirements-FzUXVI0n.js";import"./index-DH-t8Kiq.js";import"./_baseOrderBy-CT1i8K8e.js";import"./_baseIteratee-Tm6Favd6.js";import"./_baseMap-D8qq9A5I.js";import"./_baseEach-CZEl57ws.js";import"./useQueries-BnHuPm1A.js";import"./useInfiniteQuery-CkoFnETB.js";import"./groupBy-Cb-miTOA.js";import"./_createAggregator-DDffpnbN.js";import"./DialogBase-CgYwiZZW.js";import"./Close-CseduvHP.js";import"./HelpPopover-BY61c_J9.js";import"./MarkdownPopover-BrEHcBMc.js";import"./LightTooltip-CZ9_OK_2.js";import"./MarkdownSynapse-jVf_Tger.js";import"./SkeletonButton-BdVaI5NA.js";import"./SkeletonInlineBlock-Bcviv4QT.js";import"./SkeletonTable-CXSlR--N.js";import"./SkeletonParagraph-Bd7FVxmI.js";import"./EntityLink-I70ZAAVG.js";import"./useEntity-CCCkEaXY.js";import"./pickBy-DW6YOzJN.js";import"./isString-CX8A6Lbn.js";import"./useSuspenseQuery-BZJKG4pU.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Ci5C1gVu.js";import"./useGetEntityHeaders-LVlHJ6nJ.js";import"./EntityIcon-DfineNjI.js";import"./ErrorChip-KKxMyko1.js";import"./Chip-UqxHwarS.js";import"./UserOrTeamBadge-Ck6Re7PJ.js";import"./UserBadge-Do2tE5cK.js";import"./useUserBundle-DAmTyml3.js";import"./MenuItem-D5IIpJsJ.js";import"./Card-Dnf6cd_L.js";import"./TeamBadge-0ClZ8pqL.js";import"./UnmanagedACTAccessRequirementItem-BR87vVAb.js";import"./RequirementItem-DI0_Fj2l.js";import"./LockTwoTone-BrmORIWg.js";import"./UserSearchBoxV2-DyL7E7eM.js";import"./useDebouncedEffect-X1eXRoqB.js";import"./use-deep-compare-effect.esm-BQRfrosB.js";import"./uniq-BwR3keRF.js";import"./without-WMuIhKF6.js";import"./Select-aab027f3.esm-CGPWK42c.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-DoDFJYmj.js";import"./SelfSignAccessRequirementItem-BwrgILc7.js";import"./DataAccessRequestAccessorsFilesForm-B57G2nWX.js";import"./enums-DRyqncBq.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-s2ytoh-t.js";import"./RadioGroup-CVxLANRT.js";import"./Radio-hCKHGq1F.js";import"./SwitchBase-Ygh_CPfi.js";import"./FormGroup-caVskGoE.js";import"./FormControlLabel-DwTdM1uL.js";import"./UploadDocumentField-wi5WY0dD.js";import"./FileUpload-BcwqnxN4.js";import"./ManagedACTAccessRequirementFormWikiWrapper-B7u-PNFb.js";import"./GridLegacy-dBV5qQ7h.js";import"./ResearchProjectForm-CdSYjsPO.js";import"./TextFieldWithWordLimit-BFup-mQn.js";import"./AuthenticatedRequirement-BdiWDld8.js";import"./CertificationRequirement-DBFCzpEI.js";import"./TwoFactorAuthEnabledRequirement-CYzrCK__.js";import"./ValidationRequirement-BgKthkb7.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-BL-1z3PE.js";import"./RejectDataAccessRequestModal-C8yviRhX.js";import"./CannedRejectionDialog-BkZz6s66.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-ekforYsO.js";import"./Checkbox-C7nauaBm.js";import"./Grid-BTfzcyEs.js";import"./upperFirst-Q9CKFWQX.js";import"./_stringToArray-79DgZBEm.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,c,R;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const or=["Demo","DemoError"];export{o as Demo,n as DemoError,or as __namedExportsOrder,sr as default};
