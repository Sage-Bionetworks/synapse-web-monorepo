import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,ks as i,kt as E,H as s,ku as _,p as m,kv as I,kw as S,kb as O}from"./iframe-BZ6Cksnd.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-eTp276W2.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DbLD_8Ol.js";import"./useAccessRequirements-SqP5N62U.js";import"./index-DT9MyxYS.js";import"./_baseOrderBy-DL8E65ut.js";import"./_baseIteratee-MHolBcN4.js";import"./_baseMap-DChNRkmg.js";import"./_baseEach-Dx2X7r9r.js";import"./useQueries-Dko-e5-x.js";import"./useInfiniteQuery-Cab2Nvsr.js";import"./groupBy-CnqgaP8C.js";import"./_createAggregator-BkuSEEZL.js";import"./DialogBase-DRojLOwK.js";import"./Close-DjUjyOYX.js";import"./HelpPopover-C2Z3UJR4.js";import"./MarkdownPopover-B8e90Ko7.js";import"./LightTooltip-Bs22fiBY.js";import"./MarkdownSynapse-DRGuoN53.js";import"./SkeletonButton-eBqXNQMI.js";import"./SkeletonInlineBlock-CaEvhC-d.js";import"./SkeletonTable-BgNPNqlP.js";import"./SkeletonParagraph-DuP-_ghR.js";import"./EntityLink-B3RskAuj.js";import"./useEntity-G_TXiFsJ.js";import"./pickBy-BNVHpo-c.js";import"./isString-CQsMPZlF.js";import"./useSuspenseQuery-BArtp2Wi.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-r_DKGK-Q.js";import"./useGetEntityHeaders-BzEJSnYd.js";import"./EntityIcon-BGUje8zP.js";import"./ErrorChip-DLtKCdD2.js";import"./Chip-CRcycbBa.js";import"./UserOrTeamBadge-C1FTO_ks.js";import"./UserBadge-BSz9Rlfd.js";import"./useUserBundle-B39u_n1H.js";import"./MenuItem-BRVKaq9N.js";import"./Card-eBY9for1.js";import"./TeamBadge-CJm8Mqb6.js";import"./UnmanagedACTAccessRequirementItem-Bg1ubwxf.js";import"./RequirementItem-CA9s8t0E.js";import"./LockTwoTone-CPNcIJW-.js";import"./UserSearchBoxV2-DeMrw6oa.js";import"./useDebouncedEffect-CkmvZJy4.js";import"./use-deep-compare-effect.esm-BqdL8QU0.js";import"./uniq-ChJWkOkZ.js";import"./without-Dp9wYgNS.js";import"./Select-aab027f3.esm-BVJNXzBR.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BvnYuicR.js";import"./SelfSignAccessRequirementItem-W-oOjcEF.js";import"./DataAccessRequestAccessorsFilesForm-ZsG6tY8N.js";import"./enums-BfljZszV.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BDJFdQUj.js";import"./RadioGroup-DnKhwnd_.js";import"./Radio-Ct6Cl-cM.js";import"./SwitchBase-DuQ6Nlg7.js";import"./FormGroup-CZp5TQcW.js";import"./FormControlLabel-BlbED8cv.js";import"./UploadDocumentField-qGaPbSR2.js";import"./FileUpload-DdXeLOse.js";import"./ManagedACTAccessRequirementFormWikiWrapper-B2NJDqfu.js";import"./GridLegacy-BhNZp9H7.js";import"./ResearchProjectForm-BDrSc9k5.js";import"./TextFieldWithWordLimit-BbJ0fCXh.js";import"./AuthenticatedRequirement-DRIAoenc.js";import"./CertificationRequirement-Dad1Cjip.js";import"./TwoFactorAuthEnabledRequirement-DZUxUKcW.js";import"./ValidationRequirement-BZ_l6-je.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BUOYovr-.js";import"./RejectDataAccessRequestModal-BddO5h0g.js";import"./CannedRejectionDialog-Buzl-xu0.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BF42zmYQ.js";import"./Checkbox-DacBKnfp.js";import"./Grid-gDFBYhCk.js";import"./upperFirst-BzDmXSsp.js";import"./_stringToArray-OIrdJ4Sl.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
