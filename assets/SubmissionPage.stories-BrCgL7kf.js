import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kp as i,kq as C,H as s,kr as l,p as m,ks as b,kt as T,k4 as A}from"./iframe-CoDvXaHz.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-Bhcs6fF6.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-C3jWO-ze.js";import"./useAccessRequirements-B9pePMSL.js";import"./index-DxGNUnDx.js";import"./_baseOrderBy-Ci87z1eE.js";import"./_baseIteratee-B3LRL1bv.js";import"./_baseMap-B-HNtvpc.js";import"./_baseEach-gqJx6AcI.js";import"./useQueries-etcLJuTQ.js";import"./useInfiniteQuery-UpnaTIxT.js";import"./groupBy-B-LAL_oO.js";import"./_createAggregator-xsFsNKzw.js";import"./DialogBase-VfFO0nIe.js";import"./Close-D4llJOen.js";import"./HelpPopover-BdMWF5AU.js";import"./MarkdownPopover-B1_6xWIE.js";import"./LightTooltip-CKjCC4Dp.js";import"./MarkdownSynapse-C2ElmG_P.js";import"./SkeletonButton-CllzTHSq.js";import"./SkeletonInlineBlock-C69n0VA9.js";import"./SkeletonTable-LuC_UCPV.js";import"./SkeletonParagraph-YdwHeP2z.js";import"./EntityLink-onu3mBRN.js";import"./useEntity-Cov8G09k.js";import"./pickBy-xtUHSpFD.js";import"./isString-CBmn1ZNy.js";import"./useSuspenseQuery-C2VS82Y2.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-fCFoEiQD.js";import"./useGetEntityHeaders-DO9Kc8yv.js";import"./EntityIcon-voVVDbca.js";import"./ErrorChip-fKht7Ohv.js";import"./Chip-CCgamNVG.js";import"./UserOrTeamBadge-BXCsUako.js";import"./UserBadge-D1hQnu2o.js";import"./useUserBundle-Db1_q7o_.js";import"./MenuItem-DBpJraem.js";import"./Card-D4KrYtxS.js";import"./TeamBadge-C3HDt_w0.js";import"./UnmanagedACTAccessRequirementItem-D2_oSqUh.js";import"./RequirementItem-DRJYoj_c.js";import"./LockTwoTone-SwihfZte.js";import"./UserSearchBoxV2-WQaSw4BC.js";import"./useDebouncedEffect-CPmVY5n_.js";import"./use-deep-compare-effect.esm-D-Ev4Q7w.js";import"./uniq-D9lxL0jm.js";import"./without-CCZaNuK9.js";import"./Select-aab027f3.esm-DQR6YDKC.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-BEFTXDGh.js";import"./SelfSignAccessRequirementItem-CcQTpd9r.js";import"./DataAccessRequestAccessorsFilesForm-DmC_xzPY.js";import"./enums-HxJjL7Or.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-DhIZYz8f.js";import"./RadioGroup-ZVdHX8-4.js";import"./Radio-Cf02igEf.js";import"./SwitchBase-Xsp7daK3.js";import"./FormGroup-DnATBHfX.js";import"./FormControlLabel-F8YXTviE.js";import"./UploadDocumentField-BmH0KPUd.js";import"./FileUpload-COX6-5eq.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Da7pqndz.js";import"./GridLegacy-BrktOZU7.js";import"./ResearchProjectForm-DPVSq-Kw.js";import"./TextFieldWithWordLimit-0i9_cH2L.js";import"./AuthenticatedRequirement-CvMVdrOE.js";import"./CertificationRequirement-DiylRxMR.js";import"./TwoFactorAuthEnabledRequirement-B_4wyXDT.js";import"./ValidationRequirement-CmAASTUZ.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-Dwv010L1.js";import"./RejectDataAccessRequestModal-Bg_KAE-x.js";import"./CannedRejectionDialog-CBfuTu0e.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-CA26PI4c.js";import"./Checkbox-EpGb_-Sk.js";import"./Grid-oaVNG0S-.js";import"./upperFirst-0tSNYutb.js";import"./_stringToArray-C-u96gps.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
