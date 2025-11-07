import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-CeAgldvM.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-XHRDURFg.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-DLPXo5kW.js";import"./useAccessRequirements-CBj3dnrk.js";import"./index-T3jL32n1.js";import"./_baseOrderBy-DWYozN8M.js";import"./_baseIteratee-CcVHlHZ8.js";import"./_baseMap-CxwWUgmR.js";import"./_baseEach-yKkNUWZi.js";import"./useQueries-DoFZKxYm.js";import"./useInfiniteQuery-U-CVtIRK.js";import"./groupBy-Bbge1Wt4.js";import"./_createAggregator-F5SY0kCg.js";import"./DialogBase-D0T8g2Im.js";import"./Close-o2F78_KZ.js";import"./HelpPopover-8snckHwd.js";import"./MarkdownPopover-ivtTXFwj.js";import"./LightTooltip-CNmsWsyw.js";import"./MarkdownSynapse-Dy8cp58X.js";import"./SkeletonButton-BvXrs4_f.js";import"./SkeletonInlineBlock-n6Wdtn3U.js";import"./SkeletonTable-D9BGXwSf.js";import"./SkeletonParagraph-DsPtfc6R.js";import"./EntityLink-HSnM_rMW.js";import"./useEntity-DIayAt6X.js";import"./pickBy-B3E6w4SL.js";import"./isString-CJCueFgH.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DxYhT2Z7.js";import"./useGetEntityHeaders-BJKDAldS.js";import"./EntityIcon-C_oqGv5F.js";import"./ErrorChip-Chj0mDtl.js";import"./Chip-D7iOhvvK.js";import"./UserOrTeamBadge-Os1DBzp2.js";import"./UserBadge-CaFI6Pfa.js";import"./MenuItem-DcOlOGUi.js";import"./Card-CNJbGh-i.js";import"./TeamBadge-P8pRmk83.js";import"./UnmanagedACTAccessRequirementItem-DOhWjYNM.js";import"./RequirementItem-kslPJUok.js";import"./LockTwoTone-DbxlWzUg.js";import"./UserSearchBoxV2-BaOmFvEt.js";import"./useDebouncedEffect-B7NND8fv.js";import"./use-deep-compare-effect.esm-DVfJ6rRp.js";import"./uniq-Bz5l45sv.js";import"./without-BBqud4Jp.js";import"./Select-aab027f3.esm-CK4Y9k7j.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-cv3Nj35A.js";import"./SelfSignAccessRequirementItem-CMBpsyb8.js";import"./DataAccessRequestAccessorsFilesForm-CcrXp5QK.js";import"./enums-CX6vJc3G.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-qj2NIK_n.js";import"./RadioGroup-JvkF7ObP.js";import"./Radio-Dqd0D3lc.js";import"./SwitchBase-IEc58BLQ.js";import"./FormGroup-no-8tmV-.js";import"./FormControlLabel-OfnNXanI.js";import"./UploadDocumentField-A-_2zRUS.js";import"./FileUpload-DZfahSlM.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DWV6Gm4s.js";import"./GridLegacy-BnhKZ9sC.js";import"./ResearchProjectForm-f2DpUXDg.js";import"./TextFieldWithWordLimit-ueiMb3EE.js";import"./AuthenticatedRequirement-CkTAkYmw.js";import"./CertificationRequirement-FTYJmOhf.js";import"./TwoFactorAuthEnabledRequirement-Bc9ZQ_Ba.js";import"./ValidationRequirement-C4In3Vqt.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-lb9K9Tjp.js";import"./RejectDataAccessRequestModal-CTxp4qap.js";import"./CannedRejectionDialog-B0XP1GoX.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-DPE1BIMW.js";import"./Checkbox-HIkAiuBf.js";import"./Grid-BMIT_ZcX.js";import"./upperFirst-X3YobmpQ.js";import"./_stringToArray-BssHECbG.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
