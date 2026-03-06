import{g as d,k as u,n as t,a3 as c,dN as R,b as e,ko as i,kp as E,H as s,kq as _,p as m,kr as I,ks as S,k7 as O}from"./iframe-Ak5JkJtY.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BflyqI7j.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-XDKcgkth.js";import"./useAccessRequirements-9va52kNa.js";import"./index-DhBGOdhC.js";import"./_baseOrderBy-B5C28sMC.js";import"./_baseIteratee-BXsmtn2r.js";import"./_baseMap-BDo9iXyH.js";import"./_baseEach-Czuq5CBY.js";import"./useInfiniteQuery-BIO-789Q.js";import"./groupBy-Dyerczx6.js";import"./_createAggregator-Mgfg1apW.js";import"./DialogBase-C44QfcA-.js";import"./Close-B2gux84L.js";import"./HelpPopover-9bzvOPZ1.js";import"./MarkdownPopover-5KNMW25X.js";import"./LightTooltip-Dx85UV-A.js";import"./MarkdownSynapse-n-SLVIb1.js";import"./SkeletonButton-J64P-p4R.js";import"./SkeletonInlineBlock-DSfvHYOc.js";import"./SkeletonTable-DmhZtLI7.js";import"./SkeletonParagraph-eBTTxCdT.js";import"./EntityLink-RO3g8mfv.js";import"./useEntity-BDEACah7.js";import"./pickBy-eunfHSHr.js";import"./isString-BNwI_j1J.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DrUTqZYy.js";import"./useGetEntityHeaders-O04KsngJ.js";import"./EntityIcon-BAHaVXax.js";import"./ErrorChip-DE9Qp1oS.js";import"./Chip-rT4uyFgK.js";import"./UserOrTeamBadge-WlYBdm_b.js";import"./UserBadge-cYluQ2Y6.js";import"./useUserBundle-BoMKGodO.js";import"./MenuItem-BM1_B-4q.js";import"./Card-DxvHHd6H.js";import"./TeamBadge-CCVb_jQT.js";import"./UnmanagedACTAccessRequirementItem-RYgJWG5k.js";import"./RequirementItem-CeWhi-O2.js";import"./LockTwoTone-DDlx2i-H.js";import"./UserSearchBoxV2-DZbct1tQ.js";import"./useDebouncedEffect-NmXM8Ye3.js";import"./use-deep-compare-effect.esm-C9wQAHfA.js";import"./uniq-DjzL4rka.js";import"./without-Ccrs_yYi.js";import"./Select-aab027f3.esm-DX7g6c1_.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DawabX5z.js";import"./SelfSignAccessRequirementItem-CCpMLr2U.js";import"./DataAccessRequestAccessorsFilesForm-C75C1Sn2.js";import"./enums-C6f-0PE8.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CP5BrOJx.js";import"./RadioGroup--noon46w.js";import"./Radio-DWk-c66u.js";import"./SwitchBase-CPgLpXbj.js";import"./FormGroup-XzRLfVIj.js";import"./FormControlLabel-DTCzZ85M.js";import"./UploadDocumentField-vn3UgqW3.js";import"./FileUpload-Cr0MGPnk.js";import"./ManagedACTAccessRequirementFormWikiWrapper-D65XTlXn.js";import"./GridLegacy-Cu7_3ItU.js";import"./ResearchProjectForm-BQeSSaXO.js";import"./TextFieldWithWordLimit-CBOEQX9k.js";import"./AuthenticatedRequirement-DMzu05vq.js";import"./CertificationRequirement-Dfzjppsr.js";import"./TwoFactorAuthEnabledRequirement-Df9zOv6R.js";import"./ValidationRequirement-D-lDKR9g.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CDqACmiX.js";import"./RejectDataAccessRequestModal-Dbn3XxpA.js";import"./CannedRejectionDialog-CVN6w6BP.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-zlNiA4Jk.js";import"./Checkbox-EQVEYCdE.js";import"./Grid-BSUODZPK.js";import"./upperFirst-BRsMuviU.js";import"./_stringToArray-duaHyzO3.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ze=["Demo","DemoError"];export{o as Demo,n as DemoError,Ze as __namedExportsOrder,Ve as default};
