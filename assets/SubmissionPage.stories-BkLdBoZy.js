import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kp as i,kq as C,H as s,kr as l,p as m,ks as b,kt as T,k4 as A}from"./iframe-BPjtn3Py.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-DpQni8xo.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-DFbnwGtN.js";import"./useAccessRequirements-BcvsiSa4.js";import"./index-MU1GfQRJ.js";import"./_baseOrderBy-CdXv1--t.js";import"./_baseIteratee-BO1Lzx2o.js";import"./_baseMap-jzXUhPol.js";import"./_baseEach-RhlMNDap.js";import"./useQueries-D_0vtMqr.js";import"./useInfiniteQuery-Bh3zdLrB.js";import"./groupBy-Devd54Lj.js";import"./_createAggregator-ch_DvEKH.js";import"./DialogBase-CwUJKQgZ.js";import"./Close-D3DgklsR.js";import"./HelpPopover-DC_dXnpY.js";import"./MarkdownPopover-BqDmByvq.js";import"./LightTooltip-CRT29ubt.js";import"./MarkdownSynapse-C8_fbXMJ.js";import"./SkeletonButton-D4b9c6Gf.js";import"./SkeletonInlineBlock-DU00_odl.js";import"./SkeletonTable-Dybo1wxv.js";import"./SkeletonParagraph-D1AtTIOG.js";import"./EntityLink-CTz-OkGZ.js";import"./useEntity-BvLnmvTw.js";import"./pickBy-B9uRmH6n.js";import"./isString-DVm4aFm_.js";import"./useSuspenseQuery-CJees8i4.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-8UvGpf8k.js";import"./useGetEntityHeaders-3tTzjCTv.js";import"./EntityIcon-BJm0nRzh.js";import"./ErrorChip-CsYTdNGD.js";import"./Chip-B9tVR_eV.js";import"./UserOrTeamBadge-CvQQyNTE.js";import"./UserBadge-_zSHqQoY.js";import"./useUserBundle-w7U_abFB.js";import"./MenuItem-BbZL7_By.js";import"./Card-D9_DNnXX.js";import"./TeamBadge-C5SnUHZ3.js";import"./UnmanagedACTAccessRequirementItem-m_vESpmB.js";import"./RequirementItem-jw8AWu0Z.js";import"./LockTwoTone-D6Sev2uz.js";import"./UserSearchBoxV2-C6-eAcJ-.js";import"./useDebouncedEffect-BxWATv1s.js";import"./use-deep-compare-effect.esm-D8lyhZzE.js";import"./uniq-MZuYRl1i.js";import"./without-BVn3ALXy.js";import"./Select-aab027f3.esm-diu2ihAm.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-DEXJ77q4.js";import"./SelfSignAccessRequirementItem-1bVVoY2C.js";import"./DataAccessRequestAccessorsFilesForm-C2jotEQF.js";import"./enums-DfIrwVZM.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-VneBUp_b.js";import"./RadioGroup-Dj2x-IZ8.js";import"./Radio-mLeYf0CT.js";import"./SwitchBase-CecYQ9Z7.js";import"./FormGroup-C4t7alHD.js";import"./FormControlLabel-B9Z-sxvt.js";import"./UploadDocumentField-BVcry1ap.js";import"./FileUpload-CbxwYF3z.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DDAJC3D_.js";import"./GridLegacy-DBLQIMgV.js";import"./ResearchProjectForm-BRQWHDnA.js";import"./TextFieldWithWordLimit-B0Wk91yL.js";import"./AuthenticatedRequirement-pZIH4ohn.js";import"./CertificationRequirement-DVKZXcF_.js";import"./TwoFactorAuthEnabledRequirement-CEd7sILC.js";import"./ValidationRequirement-Q6LVrahg.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-dXj47Nlm.js";import"./RejectDataAccessRequestModal-C0xatTWN.js";import"./CannedRejectionDialog-Cg3O2vWR.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-zddbqXSX.js";import"./Checkbox-D0c25wmp.js";import"./Grid-C0X2h71G.js";import"./upperFirst-M7WC3sJ8.js";import"./_stringToArray-YbFqxZqH.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
