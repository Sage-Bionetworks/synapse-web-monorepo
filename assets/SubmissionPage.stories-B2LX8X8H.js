import{g as d,k as u,n as t,a3 as c,dZ as R,b as e,kw as i,kx as E,H as s,ky as _,p as m,kz as I,kA as S,kf as O}from"./iframe-DH1YdleT.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BZgyPiv8.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DATb_-k_.js";import"./useAccessRequirements-BeG93Z-m.js";import"./index-Dk8XyrUc.js";import"./_baseOrderBy-uh1hQAJz.js";import"./_baseIteratee-CLehzhMb.js";import"./_baseMap-H-FWeyn0.js";import"./_baseEach-DQFyXxgw.js";import"./useQueries-XWhg4h1g.js";import"./useInfiniteQuery-Bhyhxg2I.js";import"./groupBy-BRh7Jt_4.js";import"./_createAggregator-DDAb2Rdx.js";import"./DialogBase-D5LKNQOh.js";import"./Close-DCSUXUpP.js";import"./HelpPopover-CTeHImmX.js";import"./MarkdownPopover-DFqTBoMm.js";import"./LightTooltip-CZ16DjXG.js";import"./MarkdownSynapse-BUNA2qa9.js";import"./SkeletonButton-COeTp7fr.js";import"./SkeletonInlineBlock-CPHdUQ8C.js";import"./SkeletonTable-DicgxcdD.js";import"./SkeletonParagraph-Dq5xJIxI.js";import"./EntityLink-CPTHVDjj.js";import"./useEntity-DEkwM25s.js";import"./pickBy-uho7WKk-.js";import"./isString-CTOdevqw.js";import"./useSuspenseQuery-D4jnvJmQ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-1Chtb2OR.js";import"./useGetEntityHeaders-moS1yEoP.js";import"./EntityIcon-zJ87QwH9.js";import"./ErrorChip-F0s207yQ.js";import"./Chip-F_DZPuno.js";import"./UserOrTeamBadge-Cy11O1bF.js";import"./UserBadge-D0SzbXsa.js";import"./useUserBundle-DYo1KdiC.js";import"./MenuItem-5x6MCJW5.js";import"./Card-D_S7GtMZ.js";import"./TeamBadge-C5euEYPE.js";import"./useRealmPrincipals-D9jnsi6M.js";import"./UnmanagedACTAccessRequirementItem-BaRfGdKl.js";import"./RequirementItem-B5VZHF53.js";import"./LockTwoTone-BQLyvHko.js";import"./UserSearchBoxV2-5lldr7dx.js";import"./useDebouncedEffect-CYoJi8TG.js";import"./use-deep-compare-effect.esm-Cu7ZlfFJ.js";import"./uniq-czhcTCBH.js";import"./without-w_3BupFc.js";import"./Select-aab027f3.esm-Dh1lwX3t.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DT6qk0M3.js";import"./SelfSignAccessRequirementItem-5QIySHFv.js";import"./DataAccessRequestAccessorsFilesForm-HLLgGAFK.js";import"./enums-BGhh4pk1.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DQOfs2cV.js";import"./RadioGroup-D596BaZ9.js";import"./Radio-DMlSc6G4.js";import"./SwitchBase-BIcw7t5n.js";import"./FormGroup-Bi6VsHGp.js";import"./FormControlLabel-tI4J41QQ.js";import"./UploadDocumentField-BQRzufdM.js";import"./FileUpload-BaKbPGWT.js";import"./ManagedACTAccessRequirementFormWikiWrapper-TUy-i-k_.js";import"./GridLegacy-D6LNhPTA.js";import"./ResearchProjectForm-C9lZVVDa.js";import"./TextFieldWithWordLimit-DAqTxe7J.js";import"./AuthenticatedRequirement-BNc55QAZ.js";import"./CertificationRequirement-C5lVWtu2.js";import"./TwoFactorAuthEnabledRequirement-ykeeaxFf.js";import"./ValidationRequirement-DQGPyNxf.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DNrcPa9N.js";import"./RejectDataAccessRequestModal-DtP-C8dI.js";import"./CannedRejectionDialog-CR717pSk.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-SNOhH4NP.js";import"./Checkbox-CguI3AHg.js";import"./Grid-CXhMZxyr.js";import"./upperFirst-Cf2w3hLc.js";import"./_stringToArray-B_t1b0Fl.js";const Xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const er=["Demo","DemoError"];export{o as Demo,n as DemoError,er as __namedExportsOrder,Xe as default};
