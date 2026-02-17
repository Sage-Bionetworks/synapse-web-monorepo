import{g as u,k as d,n as t,a3 as c,e0 as R,b as e,kv as i,kw as E,H as s,kx as _,p as m,ky as I,kz as S,ke as O}from"./iframe-QjK0KVVQ.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DEe_PDZm.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-nvoIEJUS.js";import"./useAccessRequirements-CEk_RmUW.js";import"./index-YuzRGUHA.js";import"./_baseOrderBy-D464MD8-.js";import"./_baseIteratee-D0wMyYDQ.js";import"./_baseMap-CH_vJgWe.js";import"./_baseEach-Nu6NXdmH.js";import"./useQueries-Jnd7wWig.js";import"./useInfiniteQuery-DM0-hvaX.js";import"./groupBy-BKR60VW9.js";import"./_createAggregator-B1CxOMTf.js";import"./DialogBase-Bnbk1wpc.js";import"./Close-ltRbb3Rg.js";import"./HelpPopover-BpJ-d2_g.js";import"./MarkdownPopover-ifjW-JKf.js";import"./LightTooltip-DkeOmngM.js";import"./MarkdownSynapse-CdDnnKnp.js";import"./SkeletonButton-Cyy2rcJm.js";import"./SkeletonInlineBlock-B3R_0ID9.js";import"./SkeletonTable-tKivh0dA.js";import"./SkeletonParagraph-Ca34h4bh.js";import"./EntityLink-DOS0XzSS.js";import"./useEntity-CUKVHP5x.js";import"./pickBy-BzKhWdcw.js";import"./isString-CZlSZ-gY.js";import"./useSuspenseQuery--yWao2XD.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-4MWeAlKP.js";import"./useGetEntityHeaders-oYfk2twg.js";import"./EntityIcon-I5a7UGl2.js";import"./ErrorChip-xD2n5Uiu.js";import"./Chip-Czdb_SG1.js";import"./UserOrTeamBadge-D7Gu30-Q.js";import"./UserBadge-DiIJq8ah.js";import"./useUserBundle-Dn3kF_9B.js";import"./MenuItem-Bngl7c_k.js";import"./Card-DR2DyePr.js";import"./TeamBadge-vbOT9LFM.js";import"./UnmanagedACTAccessRequirementItem-CUGLaXnT.js";import"./RequirementItem-DMvxXCab.js";import"./LockTwoTone-CPq6gFhi.js";import"./UserSearchBoxV2-BvsOF-Ky.js";import"./useDebouncedEffect-BHN5P3sB.js";import"./use-deep-compare-effect.esm-B7o8tjki.js";import"./uniq-CriVK3AI.js";import"./without-IXpUgQeC.js";import"./Select-aab027f3.esm-BrhslB6K.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-G-e7TeYA.js";import"./SelfSignAccessRequirementItem-DLrj1Xec.js";import"./DataAccessRequestAccessorsFilesForm-DLg12YDT.js";import"./enums-Bw3DA3fc.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CFAOiCGy.js";import"./RadioGroup-CgIB2lV2.js";import"./Radio-xWeUIIwC.js";import"./SwitchBase-CzWT740k.js";import"./FormGroup-iMvomJS0.js";import"./FormControlLabel-BODitdlq.js";import"./UploadDocumentField-BUHAgmq5.js";import"./FileUpload-De1mP2_c.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DBaVO1Ub.js";import"./GridLegacy-E4PEKBx1.js";import"./ResearchProjectForm-CGa-lEgO.js";import"./TextFieldWithWordLimit-BWrWQ9P-.js";import"./AuthenticatedRequirement-Cb9G2Yro.js";import"./CertificationRequirement-DDWpkXT8.js";import"./TwoFactorAuthEnabledRequirement-CUbZ2XRn.js";import"./ValidationRequirement-BUe6EWPf.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-B4EDxxIu.js";import"./RejectDataAccessRequestModal-NBPnOT5u.js";import"./CannedRejectionDialog-D-WKTJkY.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CJ0Oe_Vw.js";import"./Checkbox-DzXO1Mmf.js";import"./Grid-Y6-3S9F7.js";import"./upperFirst-DTQOoE_y.js";import"./_stringToArray-BnPC-vDo.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
