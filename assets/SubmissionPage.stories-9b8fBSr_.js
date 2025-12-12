import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kr as i,ks as C,H as s,kt as l,p as m,ku as b,kv as T,ka as A}from"./iframe-nfXQhXwW.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-CrWPHG1m.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-BSyl_np2.js";import"./useAccessRequirements-qLmWXZdY.js";import"./index-BOrTr2xQ.js";import"./_baseOrderBy-Itnes96W.js";import"./_baseIteratee-BFCeszVE.js";import"./_baseMap-B4olF_v4.js";import"./_baseEach-nvfsaZ4q.js";import"./useQueries-DKORIwHW.js";import"./useInfiniteQuery-CeWkfcy6.js";import"./groupBy-B6ZB0n8U.js";import"./_createAggregator-CH2p98nR.js";import"./DialogBase-CcO5y5yt.js";import"./Close-BzkPRb9A.js";import"./HelpPopover-Cb2i7a5w.js";import"./MarkdownPopover-Cs0zikEV.js";import"./LightTooltip-cNRM4CWP.js";import"./MarkdownSynapse-OcvSiBwW.js";import"./SkeletonButton-Bk4CQ1lc.js";import"./SkeletonInlineBlock--rWrAuqR.js";import"./SkeletonTable-I__c7Ied.js";import"./SkeletonParagraph-DtAQS4WM.js";import"./EntityLink-CKxxSP9Q.js";import"./useEntity-C4P8lokT.js";import"./pickBy-Bq1PCuc9.js";import"./isString-wB_IeEEX.js";import"./useSuspenseQuery-wrHvDIJ0.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C3g2lWih.js";import"./useGetEntityHeaders-DA2DMQ1e.js";import"./EntityIcon-Dl52JvwX.js";import"./ErrorChip-DlyCdSC6.js";import"./Chip-nV4_OO3k.js";import"./UserOrTeamBadge-CF5f-0H8.js";import"./UserBadge-DrEl5_5I.js";import"./useUserBundle-Dx3pUDh4.js";import"./MenuItem-DVxEnVQ-.js";import"./Card-CH2nRDyh.js";import"./TeamBadge-DIH9ZRhN.js";import"./UnmanagedACTAccessRequirementItem-DQ-nJYDe.js";import"./RequirementItem-B7g8MD3x.js";import"./LockTwoTone-B9Bc3G4E.js";import"./UserSearchBoxV2-DXJNVpZn.js";import"./useDebouncedEffect-vRAUfjeb.js";import"./use-deep-compare-effect.esm-0VsloZOd.js";import"./uniq-B52MWZc7.js";import"./without-1n6JGdX7.js";import"./Select-aab027f3.esm-xNkwYAYN.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-BZxTCZAG.js";import"./SelfSignAccessRequirementItem-Bdr0TiUR.js";import"./DataAccessRequestAccessorsFilesForm-D_GVWEi5.js";import"./enums-S-Uyk76D.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-CP0eLHn0.js";import"./RadioGroup-DSjrmOkM.js";import"./Radio-CXrYbHND.js";import"./SwitchBase-DY0aivKg.js";import"./FormGroup-Cf4sf557.js";import"./FormControlLabel--BxiVjeI.js";import"./UploadDocumentField-CXU9-mpl.js";import"./FileUpload-DZJu-Pid.js";import"./ManagedACTAccessRequirementFormWikiWrapper-B-u1xv3I.js";import"./GridLegacy-Bq8wt_Wj.js";import"./ResearchProjectForm-CqvDJmYK.js";import"./TextFieldWithWordLimit-Cg9KEpT7.js";import"./AuthenticatedRequirement-BDK1s9jE.js";import"./CertificationRequirement-DjhU3J2L.js";import"./TwoFactorAuthEnabledRequirement-BgwBqaRY.js";import"./ValidationRequirement-BEfigD3O.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-BfiYhwi7.js";import"./RejectDataAccessRequestModal-lHnaCpQL.js";import"./CannedRejectionDialog-CPzcLTqS.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-DBW_uYDn.js";import"./Checkbox-BFYGnWq_.js";import"./Grid-Ch3n3ndf.js";import"./upperFirst-CeCsZAez.js";import"./_stringToArray-1WLjWFk4.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const or=["Demo","DemoError"];export{o as Demo,n as DemoError,or as __namedExportsOrder,sr as default};
