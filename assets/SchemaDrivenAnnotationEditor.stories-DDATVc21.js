import{jH as T}from"./iframe-DgbfDeQR.js";import{S as C}from"./SchemaDrivenAnnotationEditor-C6I0YFdy.js";import"./index-r8ZA1smB.js";import"./useEntity-BDtI3FCk.js";import"./pickBy-DN8TTyGb.js";import"./isString-BRpTpojV.js";import"./_baseIteratee-CiKc5xq1.js";import"./useQueries-6GpUHBte.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DkLtRlOU.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B6xeIF8B.js";import"./useSchema-BHpVzaUf.js";import"./index-BToBA2a8.js";import"./enums-B3QPmf_4.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CZe3OfT0.js";import"./uniq-DyLAuFmz.js";import"./forEach-B8iwwgef.js";import"./Grid-D-TUMcKD.js";import"./ListItem-B-qz8AnY.js";import"./listItemButtonClasses-t2uTfVi9.js";import"./ListItemIcon-BwPAFIIi.js";import"./MenuItem-kceyAJzH.js";import"./ListItemText-DPilRHX0.js";import"./ArrowUpward-DXPgxpHv.js";import"./ContentCopy-k-On8hmF.js";import"./FormControlLabel-PWC_65OH.js";import"./Checkbox-4zE_Iu-t.js";import"./SwitchBase-C__WXogo.js";import"./FormGroup-CTLQURiO.js";import"./RadioGroup-COWqseGR.js";import"./Radio-Bwb-mwNk.js";import"./Slider-CKrBLc1-.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BKHZua3P.js";import"./DialogBase-Bdu7Jetf.js";import"./Close-Uo8JW1Td.js";import"./HelpPopover-BOrP1Anu.js";import"./MarkdownPopover-BDg3J_sQ.js";import"./LightTooltip-B-8YX4RQ.js";import"./MarkdownSynapse-D4qxv4i6.js";import"./SkeletonButton-C3Hqevp6.js";import"./SkeletonInlineBlock-D8vr7qjb.js";import"./SkeletonTable-CkIMw70Y.js";import"./SkeletonParagraph-BtYiDY2A.js";import"./JsonSchemaForm-X3r6tkAl.js";import"./GridLegacy-D8nCMwDY.js";import"./HelpTwoTone-CnpN31aO.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-Bzcf6mPJ.js";import"./_createAggregator-DMjmMIaO.js";import"./_baseMap-tCchEm93.js";import"./DateTimePicker-CJiSmOwM.js";import"./useMobilePicker-BM7iK3ZJ.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-CbYV-FLf.js";import"./index-C0b8tnCj.js";import"./Chip-D6WFZ5Ud.js";import"./Tabs-BAS9b1Mz.js";import"./KeyboardArrowRight-C8V2JWHF.js";import"./Autocomplete-DnBx6RSa.js";import"./usePreviousProps-BKavSuub.js";import"./use-deep-compare-effect.esm-F2bg4WO3.js";import"./TextWidget-TX3pLHoG.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Hr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    validationSchema: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: \`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/\${mockSchemaBinding.jsonSchemaVersionInfo.$id}\`,
      type: 'object',
      properties: {
        country: {
          enum: ['USA', 'CA'],
          description: 'Test description for country property'
        },
        showStringArray: {
          type: 'boolean'
        }
      },
      required: ['country'],
      allOf: [{
        if: {
          properties: {
            country: {
              const: 'USA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            state: {
              type: 'string'
            }
          },
          required: ['state']
        }
      }, {
        if: {
          properties: {
            country: {
              const: 'CA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            province: {
              type: 'string'
            }
          },
          required: ['province']
        }
      }, {
        if: {
          properties: {
            showStringArray: {
              const: true
            }
          },
          required: ['showStringArray']
        },
        then: {
          properties: {
            stringArray: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      }]
    }
  }
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Hr as default};
