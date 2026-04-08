import{z as d,b as e,o as u,s,kp as i,kq as c,H as t,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-DcOQ9qHF.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DVdy56mm.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-ysCNRojj.js";import"./useAccessRequirements-B-ySsNsD.js";import"./index-Qd4VnuKv.js";import"./_baseOrderBy-NXSRpOSN.js";import"./_baseIteratee-DnNaE3ya.js";import"./_baseMap-vH1D4gpk.js";import"./_baseEach-DqnZX-4V.js";import"./useInfiniteQuery-ghiUseCs.js";import"./groupBy-yXNOyykq.js";import"./_createAggregator-CP_i8rgb.js";import"./DialogBase-BnHGavw5.js";import"./Close-HL96waRb.js";import"./HelpPopover-R08_rMc3.js";import"./MarkdownPopover-9ynAjK7o.js";import"./LightTooltip-BcNiBJVl.js";import"./MarkdownSynapse-D3IIkX0j.js";import"./SkeletonButton-BlWvLvXj.js";import"./SkeletonInlineBlock-YBvARA_9.js";import"./SkeletonTable-DMmO1dBv.js";import"./SkeletonParagraph-agQpiA4S.js";import"./EntityLink-CKDxYOCW.js";import"./useEntity-x2jk6rCv.js";import"./pickBy-CbWc_Uxm.js";import"./isString-Dt1pMH2y.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DYOIW0i4.js";import"./useGetEntityHeaders-WJW7slfl.js";import"./EntityIcon-mVWk58Yd.js";import"./ErrorChip-B3qIRj-y.js";import"./Chip-CelqGmC0.js";import"./UserOrTeamBadge-SKKE-jjR.js";import"./UserBadge-Ckbrjynj.js";import"./useUserBundle-DhVVN5hx.js";import"./MenuItem-BnSVsxfU.js";import"./Card-Ba2QyRDi.js";import"./TeamBadge-BmqGm9o-.js";import"./UnmanagedACTAccessRequirementItem-pICYggzo.js";import"./RequirementItem-CPL1Qufx.js";import"./LockTwoTone-CQH2v3f2.js";import"./ManagedACTAccessRequirementItemView-Cb4atJSk.js";import"./SelfSignAccessRequirementItem-DPjxF_dn.js";import"./DataAccessRequestAccessorsFilesForm-hXwPtrS-.js";import"./enums-BvzndmxE.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-DjG3y0IY.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-BBgL53uU.js";import"./UserSearchBox-DeTpTQ-7.js";import"./useDebouncedEffect-DWH0kvM8.js";import"./Autocomplete-DXi90Z3V.js";import"./usePreviousProps-BCJjj9Wa.js";import"./RadioGroup-kApbVHdF.js";import"./Radio-CJDjA01Q.js";import"./SwitchBase-DOuuVSF8.js";import"./FormGroup-DR3TWoKS.js";import"./FormControlLabel-CEo4Kpwe.js";import"./UploadDocumentField-CXCDNkjY.js";import"./FileUpload-DbdhcP7U.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BoHSI7g5.js";import"./GridLegacy-CmG0AGJ4.js";import"./ResearchProjectForm-DPtUGAsl.js";import"./TextFieldWithWordLimit-1_wqUIF_.js";import"./AuthenticatedRequirement-CD5kkZtP.js";import"./CertificationRequirement-t6KXh6qV.js";import"./TwoFactorAuthEnabledRequirement-CV3gajDj.js";import"./ValidationRequirement-BcrJ519J.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CJ44S8Df.js";import"./RejectDataAccessRequestModal-CmRvq7l_.js";import"./CannedRejectionDialog-zH9YSXg6.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-B_tmHsMz.js";import"./Checkbox-D3mQlatZ.js";import"./Grid-Bit-u0O5.js";import"./upperFirst-C8A-ovQg.js";import"./_stringToArray-ByfBp2XD.js";const Le={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const xe=["Demo","DemoError"];export{o as Demo,n as DemoError,xe as __namedExportsOrder,Le as default};
