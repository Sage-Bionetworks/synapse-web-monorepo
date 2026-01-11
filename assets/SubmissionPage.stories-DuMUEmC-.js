import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-DmQVC8QI.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Bt7lTDq_.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-W68Vwtmg.js";import"./useAccessRequirements-Du84pJUO.js";import"./index-Br7gKF9R.js";import"./_baseOrderBy-Bsm9m9CU.js";import"./_baseIteratee-D0N2ShRx.js";import"./_baseMap-DQ_Afyp5.js";import"./_baseEach-ClM1nIwI.js";import"./useQueries-D8oiAeRD.js";import"./useInfiniteQuery-B2-G7M8y.js";import"./groupBy-D5L8owpg.js";import"./_createAggregator-fIHf_15x.js";import"./DialogBase-Bs_nIYab.js";import"./Close-BMrHQB2l.js";import"./HelpPopover-DRZXBx0T.js";import"./MarkdownPopover-BdSro2xf.js";import"./LightTooltip-he-g-8N4.js";import"./MarkdownSynapse-DmgMCbzG.js";import"./SkeletonButton-DiNloKU2.js";import"./SkeletonInlineBlock-DroApun6.js";import"./SkeletonTable-C27BPd4C.js";import"./SkeletonParagraph-uPmYqKww.js";import"./EntityLink-A9-g6eJH.js";import"./useEntity-CuvgSHcR.js";import"./pickBy-C6FSRYiE.js";import"./isString-Brycufc4.js";import"./useSuspenseQuery-BohpWjm9.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C-kj1Qaf.js";import"./useGetEntityHeaders-pdLZAc8r.js";import"./EntityIcon-yjnlojj-.js";import"./ErrorChip-CjPkPkTu.js";import"./Chip-OD2C4O6J.js";import"./UserOrTeamBadge-bGeChQxr.js";import"./UserBadge-BHL22CUj.js";import"./useUserBundle-BJGdVvY0.js";import"./MenuItem-CiiNgcaW.js";import"./Card-sv0DQAow.js";import"./TeamBadge-BJ0OyhIv.js";import"./UnmanagedACTAccessRequirementItem-w17tMQbo.js";import"./RequirementItem-CjH8A6Le.js";import"./LockTwoTone-ClvPjMe7.js";import"./UserSearchBoxV2-jRrANhKJ.js";import"./useDebouncedEffect-BlGCI4v1.js";import"./use-deep-compare-effect.esm-BurpvcDK.js";import"./uniq-BTcnuA8-.js";import"./without-BKey7zIm.js";import"./Select-aab027f3.esm-29WMXchE.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BvSYoFZ1.js";import"./SelfSignAccessRequirementItem-Dint32_C.js";import"./DataAccessRequestAccessorsFilesForm-DorOY_-1.js";import"./enums-DBbSrtlR.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-C29PT5Ed.js";import"./RadioGroup-DeSbA_Kh.js";import"./Radio-CR3maaQ3.js";import"./SwitchBase-CXyOGGZH.js";import"./FormGroup-BXJcvKNH.js";import"./FormControlLabel-BfYMzRqL.js";import"./UploadDocumentField-CBdZkzyg.js";import"./FileUpload-myMF4fnA.js";import"./ManagedACTAccessRequirementFormWikiWrapper-dUBj7bAf.js";import"./GridLegacy-wLTrbVPc.js";import"./ResearchProjectForm-uamwbk8y.js";import"./TextFieldWithWordLimit-BZJC1gdM.js";import"./AuthenticatedRequirement-DqsXg0oZ.js";import"./CertificationRequirement-G8TVEqwe.js";import"./TwoFactorAuthEnabledRequirement-Bo8m_2pq.js";import"./ValidationRequirement-DzH6uTYE.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-L8Gajps9.js";import"./RejectDataAccessRequestModal-CEzQedGW.js";import"./CannedRejectionDialog-MbLVuDvp.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-OJeXIr_I.js";import"./Checkbox-CLoF6Bfl.js";import"./Grid-CduLv2x6.js";import"./upperFirst-2fKyAQf8.js";import"./_stringToArray-BAhDLjes.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
