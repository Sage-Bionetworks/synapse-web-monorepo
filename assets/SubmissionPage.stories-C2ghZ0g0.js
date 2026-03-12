import{g as u,k as d,n as t,a3 as c,dP as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-CpfV3NOk.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DlUYQpm3.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CXDWv32B.js";import"./useAccessRequirements-Bg4kd5fC.js";import"./index-C4-1Fb9W.js";import"./_baseOrderBy-D3MUMegZ.js";import"./_baseIteratee-CwnUjdrn.js";import"./_baseMap-DXvb3YXn.js";import"./_baseEach-Bl5cvDEJ.js";import"./useInfiniteQuery-B30BxfoI.js";import"./groupBy-D1wj9NHY.js";import"./_createAggregator-DbzAcW9N.js";import"./DialogBase-CPT43OGP.js";import"./Close-C1wfyqfV.js";import"./HelpPopover-D1HFzEEY.js";import"./MarkdownPopover-SqpB0xea.js";import"./LightTooltip-Nh7QLXl8.js";import"./MarkdownSynapse-D21W3bY-.js";import"./SkeletonButton-AQOmCgu3.js";import"./SkeletonInlineBlock-DUNC2gO4.js";import"./SkeletonTable-DOJ0zD5O.js";import"./SkeletonParagraph-D5apqSdK.js";import"./EntityLink-NJfby3mr.js";import"./useEntity-C1kGutZW.js";import"./pickBy-VF0gERx7.js";import"./isString-M5PtLTGF.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BBbZSh8P.js";import"./useGetEntityHeaders-BzhDRmxU.js";import"./EntityIcon-DjCBlFng.js";import"./ErrorChip-DjhLHBMZ.js";import"./Chip-D0au_Ohq.js";import"./UserOrTeamBadge-BIjh_1ut.js";import"./UserBadge-BfZ-Dzq0.js";import"./useUserBundle-C27HsRJe.js";import"./MenuItem-JjjD7Qco.js";import"./Card-Dk_Qq8ND.js";import"./TeamBadge-BKsYQulW.js";import"./UnmanagedACTAccessRequirementItem-DbPlJ4iD.js";import"./RequirementItem-D1ebVpLx.js";import"./LockTwoTone-Cj7x-8je.js";import"./UserSearchBoxV2-Dpq3Vw9p.js";import"./useDebouncedEffect-DHbsTrbW.js";import"./use-deep-compare-effect.esm-D0k0j8TP.js";import"./uniq-CRDg374f.js";import"./without-DDcpywqw.js";import"./Select-aab027f3.esm-8AZvrFDx.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-D7Qo6bOD.js";import"./SelfSignAccessRequirementItem-CCoRf8Oq.js";import"./DataAccessRequestAccessorsFilesForm-BuD8QVxm.js";import"./enums-fZy_KXO9.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DDW5hm3l.js";import"./RadioGroup-DTSGLtj5.js";import"./Radio-ZVPg36cM.js";import"./SwitchBase-C9B51BED.js";import"./FormGroup-DJJlE1Mg.js";import"./FormControlLabel-BHc8c3P4.js";import"./UploadDocumentField-B0AvH8l7.js";import"./FileUpload-COS4DiR2.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CPAJu45o.js";import"./GridLegacy-RdFHfngF.js";import"./ResearchProjectForm-qcFNPnLo.js";import"./TextFieldWithWordLimit-BQeC71AW.js";import"./AuthenticatedRequirement-B1TL7B4c.js";import"./CertificationRequirement--kKqkmxa.js";import"./TwoFactorAuthEnabledRequirement-VF62dFYW.js";import"./ValidationRequirement-BKXANfGY.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Ckj_Kz0J.js";import"./RejectDataAccessRequestModal-D-ZbmdNw.js";import"./CannedRejectionDialog-DTP9Mkp7.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-DY31ZGPr.js";import"./Checkbox-DabvsqUa.js";import"./Grid-DCDxxMQ3.js";import"./upperFirst-CKgMx-Jr.js";import"./_stringToArray-Zcpd6I3k.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
