import{g as d,k as u,n as t,a3 as c,dN as R,b as e,kn as i,ko as E,H as s,kp as _,p as m,kq as I,kr as S,k6 as O}from"./iframe-C-OH83az.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-SXe2yE7o.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-COkRiVAR.js";import"./useAccessRequirements-BzYIJOax.js";import"./index-CqzNnuyO.js";import"./_baseOrderBy-DUH449W2.js";import"./_baseIteratee-DlHj729f.js";import"./_baseMap-D15cFNFC.js";import"./_baseEach-SR-lNzpe.js";import"./useInfiniteQuery-CzECAE9c.js";import"./groupBy-BJzPBF-Q.js";import"./_createAggregator-DepyUcBC.js";import"./DialogBase-BmaLomxP.js";import"./Close-CkkNh_Xs.js";import"./HelpPopover-D09YDRBj.js";import"./MarkdownPopover-CwJ2NCps.js";import"./LightTooltip-Bdkire5h.js";import"./MarkdownSynapse-Fbj0BNYf.js";import"./SkeletonButton-C4_qqbr_.js";import"./SkeletonInlineBlock-Deti-BYJ.js";import"./SkeletonTable-BU7f8Esd.js";import"./SkeletonParagraph-W1N8UnVm.js";import"./EntityLink-DgozmJ66.js";import"./useEntity-fShaTi_k.js";import"./pickBy-CEfTLQ1S.js";import"./isString-oB-rnqHa.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DnBAK3_9.js";import"./useGetEntityHeaders-CUvMlAvZ.js";import"./EntityIcon-CKx0ikX8.js";import"./ErrorChip-DBRF9S8h.js";import"./Chip-9GXO3NGV.js";import"./UserOrTeamBadge-BlDvvvOU.js";import"./UserBadge-OIG0vUKz.js";import"./useUserBundle-BCf2iZ1B.js";import"./MenuItem-CBuyGD8v.js";import"./Card-DrWs0ymP.js";import"./TeamBadge-uifdFICy.js";import"./UnmanagedACTAccessRequirementItem-C-tI_JtW.js";import"./RequirementItem-BJwJ241t.js";import"./LockTwoTone-bNT6MBZ1.js";import"./UserSearchBoxV2-DHr0Nd93.js";import"./useDebouncedEffect-D9ugUHeG.js";import"./use-deep-compare-effect.esm-CWJ6NHzH.js";import"./uniq-pM_h4Q1i.js";import"./without-CXmbRPxp.js";import"./Select-aab027f3.esm-BOpzTp2M.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-Hv0D4Mhe.js";import"./SelfSignAccessRequirementItem-D5ZX-Spq.js";import"./DataAccessRequestAccessorsFilesForm-Vx1ffO0g.js";import"./enums-D3n5ylxj.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DA-rw0Mv.js";import"./RadioGroup-BMbKZhqY.js";import"./Radio-BC2slecU.js";import"./SwitchBase-BC0Db6kT.js";import"./FormGroup-MrfR9wEu.js";import"./FormControlLabel-JLXtcHYX.js";import"./UploadDocumentField-CDiIhebI.js";import"./FileUpload-B2NZVdxf.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BtQ4o5Vj.js";import"./GridLegacy-D4AGp_lv.js";import"./ResearchProjectForm-DeChI5Ll.js";import"./TextFieldWithWordLimit-BMun3ZHS.js";import"./AuthenticatedRequirement-DBEZF1jm.js";import"./CertificationRequirement-DBC4qKck.js";import"./TwoFactorAuthEnabledRequirement-ChOL4j21.js";import"./ValidationRequirement-Cy3M7yeL.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CT2wmBVv.js";import"./RejectDataAccessRequestModal-uqFPkHav.js";import"./CannedRejectionDialog-teZdlxsn.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Dh8vuXen.js";import"./Checkbox-BrIrhk8o.js";import"./Grid-CRh4aExu.js";import"./upperFirst-C-BLdYx7.js";import"./_stringToArray-Vc6S5bMC.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
