import{g as u,k as d,n as t,a3 as c,dP as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-CsSu4aY1.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-9oOhdPzT.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-D1qGhSe8.js";import"./useAccessRequirements-BZAV3FFg.js";import"./index-JJ0tKNJq.js";import"./_baseOrderBy-BaS0z3jX.js";import"./_baseIteratee-gsTZcny-.js";import"./_baseMap-WrXwzA6l.js";import"./_baseEach-D0zvbrXD.js";import"./useInfiniteQuery-BqCjpHyD.js";import"./groupBy-DPwqqiH3.js";import"./_createAggregator-OuZPDTzq.js";import"./DialogBase-CanZMjo6.js";import"./Close-zQDjyYg6.js";import"./HelpPopover-DVap6Gmb.js";import"./MarkdownPopover-OLDH6d_Y.js";import"./LightTooltip-TPCxIcs1.js";import"./MarkdownSynapse-hmG2FW9K.js";import"./SkeletonButton-CJUI3Sjx.js";import"./SkeletonInlineBlock-Bq8lQ2xh.js";import"./SkeletonTable-B-kH2kE9.js";import"./SkeletonParagraph-Cpkk7Gw6.js";import"./EntityLink-CSDybpFk.js";import"./useEntity-DxQVxjiV.js";import"./pickBy-Cl3JCYxg.js";import"./isString-7JTEWMLO.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CB6pyKp2.js";import"./useGetEntityHeaders-DXQe7RjS.js";import"./EntityIcon-CfnBQ4xj.js";import"./ErrorChip-C9tyFXY3.js";import"./Chip-Dd_YPni3.js";import"./UserOrTeamBadge-D6l6Lhn0.js";import"./UserBadge-5GUAU772.js";import"./useUserBundle-D-Kuh57s.js";import"./MenuItem-DMX9IaUe.js";import"./Card-B-B7LyLP.js";import"./TeamBadge-95yXYI4r.js";import"./UnmanagedACTAccessRequirementItem-5aEV3HSy.js";import"./RequirementItem-SDF0eJBj.js";import"./LockTwoTone-TZV296N9.js";import"./UserSearchBoxV2-CTiTbNHt.js";import"./useDebouncedEffect-BIpys10d.js";import"./use-deep-compare-effect.esm-DuqOxvpH.js";import"./uniq-BI-2V_2U.js";import"./without-usgq4tYB.js";import"./Select-aab027f3.esm-UKa79Lh7.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DpNzXTT5.js";import"./SelfSignAccessRequirementItem-uYnRqbTQ.js";import"./DataAccessRequestAccessorsFilesForm-CFKz90YT.js";import"./enums-BSF5N5Lr.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-VHAi4kON.js";import"./RadioGroup-CgiqEym2.js";import"./Radio-7Ld_Dq6v.js";import"./SwitchBase-CM4LuFoi.js";import"./FormGroup-BJ5Pffup.js";import"./FormControlLabel-ChObL5OX.js";import"./UploadDocumentField-49YZhnGD.js";import"./FileUpload-Dps-RZDG.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Bmw-_kVX.js";import"./GridLegacy-CNKbJueK.js";import"./ResearchProjectForm-CP1Nu5ps.js";import"./TextFieldWithWordLimit-Dxg7Lv-Z.js";import"./AuthenticatedRequirement-BLGUygU8.js";import"./CertificationRequirement-BEGr5QMm.js";import"./TwoFactorAuthEnabledRequirement-CWDF6opg.js";import"./ValidationRequirement-nyQeqHhI.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-B00LqeAa.js";import"./RejectDataAccessRequestModal-BX-eeGcL.js";import"./CannedRejectionDialog-BNoQcVxd.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CBtdbnX0.js";import"./Checkbox-CDofp03P.js";import"./Grid-CWxSedPD.js";import"./upperFirst-BZLliy2Y.js";import"./_stringToArray-BQln6HEZ.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
