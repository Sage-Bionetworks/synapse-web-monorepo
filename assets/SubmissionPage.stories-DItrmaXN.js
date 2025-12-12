import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kr as i,ks as C,H as s,kt as l,p as m,ku as b,kv as T,ka as A}from"./iframe-DxLAvgox.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-Dw8SJSTo.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-CQpEzo9i.js";import"./useAccessRequirements-CIL1_y--.js";import"./index-S82T9GXF.js";import"./_baseOrderBy-BeMHQMvH.js";import"./_baseIteratee-BpeW87oO.js";import"./_baseMap-DCpRc4dc.js";import"./_baseEach-BMFyANHr.js";import"./useQueries-CejlDFtq.js";import"./useInfiniteQuery-5-3iz-fe.js";import"./groupBy-Dl114Url.js";import"./_createAggregator-B9mA1vcD.js";import"./DialogBase-BvJ5UgLC.js";import"./Close-DWl4F5t6.js";import"./HelpPopover-DnbDN1Hz.js";import"./MarkdownPopover-D3aqrJqn.js";import"./LightTooltip-Bm_Du9SN.js";import"./MarkdownSynapse-B2SR9_8j.js";import"./SkeletonButton-BslgCCKq.js";import"./SkeletonInlineBlock-DbpHeMSy.js";import"./SkeletonTable-DodbVua_.js";import"./SkeletonParagraph-9LEWhVxx.js";import"./EntityLink-DMIoihJo.js";import"./useEntity-redXV7b-.js";import"./pickBy-CTBQqIfN.js";import"./isString-C65hQeKh.js";import"./useSuspenseQuery-Bz18OTgk.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-yLb9qLzi.js";import"./useGetEntityHeaders-DwdJafEx.js";import"./EntityIcon-CgDJAnC3.js";import"./ErrorChip-CCDSDKd8.js";import"./Chip-BbRs-Tuc.js";import"./UserOrTeamBadge-C3xrUK0E.js";import"./UserBadge-CEfiugXx.js";import"./useUserBundle-Cl9nEyKf.js";import"./MenuItem-CDsrTtNF.js";import"./Card-BJAh0ufu.js";import"./TeamBadge-DoRsZr8J.js";import"./UnmanagedACTAccessRequirementItem-Bu_MasDO.js";import"./RequirementItem-xSz4p3eQ.js";import"./LockTwoTone-B8DG-FMu.js";import"./UserSearchBoxV2-B4aCque-.js";import"./useDebouncedEffect-CSk3YmFF.js";import"./use-deep-compare-effect.esm-DnHLtynv.js";import"./uniq-L0rriJhe.js";import"./without-CwBRJ38n.js";import"./Select-aab027f3.esm-TxR3ro2b.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-DoevtFbS.js";import"./SelfSignAccessRequirementItem-RwVVk8Zd.js";import"./DataAccessRequestAccessorsFilesForm-DTH-s86W.js";import"./enums-lzaYbJwY.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-BU0FAvRa.js";import"./RadioGroup-DissSubT.js";import"./Radio-BGZ9PCO8.js";import"./SwitchBase-Y2WpZncG.js";import"./FormGroup-DHdpGp9k.js";import"./FormControlLabel-D_hqiJfc.js";import"./UploadDocumentField-i053o7bx.js";import"./FileUpload-CH8cJx2K.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CYoRzIUh.js";import"./GridLegacy-BG-Yt_Jw.js";import"./ResearchProjectForm-DQ6KTP1p.js";import"./TextFieldWithWordLimit-CMWZHFx2.js";import"./AuthenticatedRequirement-C04wsGEH.js";import"./CertificationRequirement-CwJ64jVF.js";import"./TwoFactorAuthEnabledRequirement-G6k8uY-u.js";import"./ValidationRequirement-CQkr6oPH.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-ULavJc-L.js";import"./RejectDataAccessRequestModal-B9_h5cJf.js";import"./CannedRejectionDialog-bW5yi6_n.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-DiSSyxsu.js";import"./Checkbox-DuOsObKJ.js";import"./Grid-CotEr8D_.js";import"./upperFirst-BUJKzFMr.js";import"./_stringToArray-BwANd65O.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
