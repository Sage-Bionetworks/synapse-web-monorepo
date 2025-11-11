import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-0_E6QA5q.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-D2EDlAQY.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-B8YaNC1S.js";import"./useAccessRequirements-IU4gcQSi.js";import"./index-BqiUF3nO.js";import"./_baseOrderBy-gJ-cBijM.js";import"./_baseIteratee-yZQzlcky.js";import"./_baseMap-DU26S_52.js";import"./_baseEach-tGT8U_2K.js";import"./useQueries-NhDfFyQr.js";import"./useInfiniteQuery-CHkzf4rJ.js";import"./groupBy-DoS0yKXS.js";import"./_createAggregator-BfwEdQbx.js";import"./DialogBase-DH7mUDhm.js";import"./Close-BPBl1RMs.js";import"./HelpPopover-DU2BwJqT.js";import"./MarkdownPopover-CxR3E5eY.js";import"./LightTooltip-Cbbiylwj.js";import"./MarkdownSynapse-KMP-leAR.js";import"./SkeletonButton-B7g5trXc.js";import"./SkeletonInlineBlock-C6wGBfZc.js";import"./SkeletonTable-DeeOmUeM.js";import"./SkeletonParagraph--7EvjUiD.js";import"./EntityLink-nDgqIoq4.js";import"./useEntity-DkxOUomB.js";import"./pickBy-COnlvOP-.js";import"./isString-CHkl6-Jt.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BuNPg_4p.js";import"./useGetEntityHeaders-6x9o9mjr.js";import"./EntityIcon-BGmi0mjt.js";import"./ErrorChip-efA-mMIv.js";import"./Chip-CGQIXmoB.js";import"./UserOrTeamBadge-DMPpIigh.js";import"./UserBadge-KfQC8GAX.js";import"./MenuItem-CAzHj_Ft.js";import"./Card-BUNvL0MS.js";import"./TeamBadge-CD1foUec.js";import"./UnmanagedACTAccessRequirementItem-Cd8kQFon.js";import"./RequirementItem-67o6Pu8i.js";import"./LockTwoTone-B9m1DQyj.js";import"./UserSearchBoxV2-CvkcmSIf.js";import"./useDebouncedEffect-Ao0Nja3b.js";import"./use-deep-compare-effect.esm-DEjD50c5.js";import"./uniq-BJz7K6kn.js";import"./without-CNgVXslo.js";import"./Select-aab027f3.esm-7hivo9pn.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-bZ4LPWMg.js";import"./SelfSignAccessRequirementItem-EbzcjS_N.js";import"./DataAccessRequestAccessorsFilesForm-HaHrjQFF.js";import"./enums-kcFinEpp.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-BzP402XH.js";import"./RadioGroup-TTWtkyWL.js";import"./Radio-CJZ4Aj9i.js";import"./SwitchBase-D-sUOWXD.js";import"./FormGroup-IpCm7inK.js";import"./FormControlLabel-CaOULE1P.js";import"./UploadDocumentField-CSewP58O.js";import"./FileUpload-D4xyPKM2.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DYbKfUKR.js";import"./GridLegacy-CHCvNL4B.js";import"./ResearchProjectForm-Haw5Brzj.js";import"./TextFieldWithWordLimit-Dmi2J15A.js";import"./AuthenticatedRequirement-BUx4Uie_.js";import"./CertificationRequirement-BN4a7CM1.js";import"./TwoFactorAuthEnabledRequirement-DSWb_0Ci.js";import"./ValidationRequirement-DF2kQ1Q_.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-XjoU4ilJ.js";import"./RejectDataAccessRequestModal-4v9sSsx0.js";import"./CannedRejectionDialog-C3LMFPKc.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-FBI9JYIN.js";import"./Checkbox-CKD6Zm0i.js";import"./Grid-XQrIDmWa.js";import"./upperFirst-CfIKGeWI.js";import"./_stringToArray-BTVWGo6D.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,c,R;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const sr=["Demo","DemoError"];export{o as Demo,n as DemoError,sr as __namedExportsOrder,tr as default};
