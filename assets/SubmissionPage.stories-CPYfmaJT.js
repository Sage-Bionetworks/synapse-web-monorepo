import{g as u,k as d,n as t,a1 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-CvDTy6mw.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BDKgnPZi.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-QeLkPwoI.js";import"./useAccessRequirements-CwI97v5c.js";import"./index-CEVa6roL.js";import"./_baseOrderBy-K23GPo6d.js";import"./_baseIteratee-UbmsfpzB.js";import"./_baseMap-Dx7SZYqg.js";import"./_baseEach-BIPt8TRr.js";import"./useInfiniteQuery-BDzyB6fR.js";import"./groupBy-CusBMm_I.js";import"./_createAggregator-DwkJNWqk.js";import"./DialogBase-DQQSlD3x.js";import"./Close-d7PqJiCL.js";import"./HelpPopover-Bk8Cc2qG.js";import"./MarkdownPopover-CX1rkX4a.js";import"./LightTooltip-Cn6AM7tu.js";import"./MarkdownSynapse-BqOzEXKP.js";import"./SkeletonButton-DrRqzwrL.js";import"./SkeletonInlineBlock-DRwNak6O.js";import"./SkeletonTable-DjmsDm7y.js";import"./SkeletonParagraph-DAWCny1c.js";import"./EntityLink-Ddl8OzAj.js";import"./useEntity-Dns-01NA.js";import"./pickBy-C4S4wLYu.js";import"./isString-Dr9O550V.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BpXjLlzv.js";import"./useGetEntityHeaders-CJ6ylh6V.js";import"./EntityIcon-O9Couk0G.js";import"./ErrorChip-B6cw-qH_.js";import"./Chip-DmppX2NC.js";import"./UserOrTeamBadge-18dJjlUD.js";import"./UserBadge-PoyEvAzl.js";import"./useUserBundle-Dj5B8O2o.js";import"./MenuItem-DnOuV5Bw.js";import"./Card-DQ_YpR0y.js";import"./TeamBadge-B42xNwNw.js";import"./UnmanagedACTAccessRequirementItem-B6KbwDbm.js";import"./RequirementItem-cVTqX2td.js";import"./LockTwoTone-DYn-nKFn.js";import"./UserSearchBoxV2-CUNMYMC8.js";import"./useDebouncedEffect-4Pg_5NNR.js";import"./use-deep-compare-effect.esm-1RezRivx.js";import"./uniq-BY_gCc0f.js";import"./without-CkkKUSja.js";import"./Select-aab027f3.esm-Bgyag4y5.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-B33YrTj0.js";import"./SelfSignAccessRequirementItem-DwFxyXkZ.js";import"./DataAccessRequestAccessorsFilesForm-BTElHBax.js";import"./enums-Bg9W5FdH.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-B4kotDp3.js";import"./RadioGroup-Cau3QYRo.js";import"./Radio-4wWynoNG.js";import"./SwitchBase-JpV5kKh9.js";import"./FormGroup-Chc8Z5ml.js";import"./FormControlLabel-BBtghWJq.js";import"./UploadDocumentField-JW8WhxfA.js";import"./FileUpload-CP-ZS4I6.js";import"./ManagedACTAccessRequirementFormWikiWrapper-fJMpXsxh.js";import"./GridLegacy-DpaC7j1H.js";import"./ResearchProjectForm-DOFOHCz8.js";import"./TextFieldWithWordLimit-C6fqx_aD.js";import"./AuthenticatedRequirement-BZCNcPEI.js";import"./CertificationRequirement-ClW1rmrQ.js";import"./TwoFactorAuthEnabledRequirement-CT3p5xQ-.js";import"./ValidationRequirement-CP-qIIBP.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DaUNOwzE.js";import"./RejectDataAccessRequestModal-B5vGlE7h.js";import"./CannedRejectionDialog-B3XOS-X3.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Cfqxxxlf.js";import"./Checkbox-D534fmQJ.js";import"./Grid-B7-Uodf9.js";import"./upperFirst-aVmxrBwV.js";import"./_stringToArray-JpykP87n.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
