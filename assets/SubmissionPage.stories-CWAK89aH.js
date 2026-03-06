import{g as d,k as u,n as t,a3 as c,dN as R,b as e,ko as i,kp as E,H as s,kq as _,p as m,kr as I,ks as S,k7 as O}from"./iframe-CAtQIdHN.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DU9F1RMa.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-C81XmtO8.js";import"./useAccessRequirements-D3aEtsQ7.js";import"./index-DVkiAmff.js";import"./_baseOrderBy-Bs2JefcG.js";import"./_baseIteratee-_Nd2QfE8.js";import"./_baseMap-CXOYZcZC.js";import"./_baseEach-CC59DhCt.js";import"./useInfiniteQuery-BLpRTFv2.js";import"./groupBy-CRoPnP6H.js";import"./_createAggregator-BsZhN0Ad.js";import"./DialogBase-nASrT1FI.js";import"./Close-D6EAZUK8.js";import"./HelpPopover-gTGEtHsE.js";import"./MarkdownPopover-BwU3z6dR.js";import"./LightTooltip-B_-PEZcf.js";import"./MarkdownSynapse-Bl9eZLoo.js";import"./SkeletonButton-ikrND2s9.js";import"./SkeletonInlineBlock-BsYWVoeU.js";import"./SkeletonTable-CGYf92GP.js";import"./SkeletonParagraph-BrBu-G7u.js";import"./EntityLink-C4P1r8ph.js";import"./useEntity-BJFovbK0.js";import"./pickBy-OoY_CQtS.js";import"./isString-Daqzr2H6.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CNGULn-c.js";import"./useGetEntityHeaders-Gp_cPO_D.js";import"./EntityIcon-BICYYmhZ.js";import"./ErrorChip-C8NCCMDw.js";import"./Chip-CfWpGXU5.js";import"./UserOrTeamBadge-BwhxHCZw.js";import"./UserBadge-CJEZfb06.js";import"./useUserBundle-CwtPx6I8.js";import"./MenuItem-CMeMzyXl.js";import"./Card-CS8vcmlr.js";import"./TeamBadge-CVuiLv5p.js";import"./UnmanagedACTAccessRequirementItem-CsICpZ9r.js";import"./RequirementItem-Co4KHEd6.js";import"./LockTwoTone-CG0M2jqy.js";import"./UserSearchBoxV2-DxTeEMqm.js";import"./useDebouncedEffect-DXgNHo1y.js";import"./use-deep-compare-effect.esm-JJyQDcTJ.js";import"./uniq-BUWqKqmn.js";import"./without-C77JjJNx.js";import"./Select-aab027f3.esm-CEr-UV7s.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-HEkC3HVx.js";import"./SelfSignAccessRequirementItem-CglQn7IC.js";import"./DataAccessRequestAccessorsFilesForm-CMw6x6mr.js";import"./enums-C0UsI1cy.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-ZKViccsk.js";import"./RadioGroup-D3Dpt1pm.js";import"./Radio-CCXhQo-F.js";import"./SwitchBase-DaWZ8Z7d.js";import"./FormGroup-D5YPq9YV.js";import"./FormControlLabel-CtOo13QD.js";import"./UploadDocumentField-v6khTlkV.js";import"./FileUpload-C10V5hRO.js";import"./ManagedACTAccessRequirementFormWikiWrapper-C2oLachw.js";import"./GridLegacy-gaJNYHXj.js";import"./ResearchProjectForm-DHmPTvLm.js";import"./TextFieldWithWordLimit-PKFmED_R.js";import"./AuthenticatedRequirement-jw1hxns9.js";import"./CertificationRequirement-CRE6o0w3.js";import"./TwoFactorAuthEnabledRequirement-bv-3DB-U.js";import"./ValidationRequirement-DZLFvfts.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DCYoRDPX.js";import"./RejectDataAccessRequestModal-BBTaszUy.js";import"./CannedRejectionDialog-Co0tCnvg.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-DyMwO9XA.js";import"./Checkbox-D5FQxyEB.js";import"./Grid-B9xtwq2L.js";import"./upperFirst-BHjqO1Qb.js";import"./_stringToArray-Oy0YPGoi.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
