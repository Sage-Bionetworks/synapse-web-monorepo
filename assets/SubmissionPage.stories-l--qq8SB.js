import{z as d,b as e,o as u,s as t,kp as i,kq as c,H as s,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-Dwm9QZ_I.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-COfQjTjz.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DGR509E-.js";import"./useAccessRequirements-VXF8jzzv.js";import"./index-unwEzT-4.js";import"./_baseOrderBy-BCLGTMTg.js";import"./_baseIteratee-Cmga9963.js";import"./_baseMap-BQV7qzGd.js";import"./_baseEach-CyVnp5d9.js";import"./useInfiniteQuery-uvWeC_ze.js";import"./groupBy-B11Eqf7s.js";import"./_createAggregator-CtB7JaBV.js";import"./DialogBase-pWEI67Dp.js";import"./Close-DNV_aDsb.js";import"./HelpPopover-DSvAr6aj.js";import"./MarkdownPopover-ChhIn-uU.js";import"./LightTooltip-3cLsOXKA.js";import"./MarkdownSynapse-DFdN_MTr.js";import"./SkeletonButton-DgRSBFJp.js";import"./SkeletonInlineBlock-Oe83SNYG.js";import"./SkeletonTable-CYNdtRWy.js";import"./SkeletonParagraph-BN0GLaey.js";import"./EntityLink-BDt_Gt-W.js";import"./useEntity-B1cCiiLS.js";import"./pickBy-BnL0Lcrb.js";import"./isString-Do94spI8.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C1BAXjXB.js";import"./useGetEntityHeaders-_5xndYH8.js";import"./EntityIcon-DygvXrri.js";import"./ErrorChip-BYbjZgp9.js";import"./Chip-DSK9YH7S.js";import"./UserOrTeamBadge-Bq5CRrzQ.js";import"./useUserGroupHeader-Dv2pYMDV.js";import"./TeamBadge-Cy3ZBH1G.js";import"./UserBadge-DxpQhJxS.js";import"./useUserBundle-rJLvBIVN.js";import"./MenuItem-BeAkG7fl.js";import"./Card-Dt1qjp5D.js";import"./UnmanagedACTAccessRequirementItem-DydzzQtI.js";import"./RequirementItem-DbxwQ6j8.js";import"./LockTwoTone-BdfSelEB.js";import"./ManagedACTAccessRequirementItemView-CMmCDLDv.js";import"./SelfSignAccessRequirementItem-DfvJmIjg.js";import"./DataAccessRequestAccessorsFilesForm-Dxsd6aga.js";import"./enums-C8YSkcDV.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-dGNu44p3.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-Cnlq75rc.js";import"./UserSearchBox-DVmRzfX1.js";import"./useDebouncedEffect-3VrHthCV.js";import"./Autocomplete-DT3e_ej1.js";import"./usePreviousProps-DCGKHicZ.js";import"./RadioGroup-cnyCqdB6.js";import"./Radio-Crio0gOe.js";import"./SwitchBase-BCQMfLTx.js";import"./FormGroup-BKHqdz9G.js";import"./FormControlLabel-COrRVd_P.js";import"./UploadDocumentField-KDmvKoHd.js";import"./FileUpload-XwoQOPxp.js";import"./ManagedACTAccessRequirementFormWikiWrapper-YMw_k2kC.js";import"./GridLegacy-Bp3DPIws.js";import"./ResearchProjectForm-z9xysRm4.js";import"./TextFieldWithWordLimit-BpRuA_r9.js";import"./AuthenticatedRequirement-dH3nL6LG.js";import"./CertificationRequirement-viDNQcqF.js";import"./TwoFactorAuthEnabledRequirement-C51t9sQZ.js";import"./ValidationRequirement-BTTRjkaz.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-HJBrwI6V.js";import"./RejectDataAccessRequestModal-NCCbP8iG.js";import"./CannedRejectionDialog-tuZ-_dtJ.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-CHhvt_BX.js";import"./Checkbox-uIztiP3l.js";import"./Grid-BiL9V20c.js";import"./upperFirst-DJ1OegbJ.js";import"./_stringToArray-Bmoyf2Pi.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ve=["Demo","DemoError"];export{o as Demo,n as DemoError,Ve as __namedExportsOrder,Je as default};
