import{jG as p}from"./iframe-CJi55ERg.js";import{S as a}from"./SchemaDrivenAnnotationEditor-B8JbJJSa.js";import"./index-Chi_LkuB.js";import"./useEntity-7QBCEi1J.js";import"./pickBy-CiUQvgN0.js";import"./isString-xFfqFUWo.js";import"./_baseIteratee-DJ2aIvY0.js";import"./useQueries-B_1J4O-w.js";import"./useSuspenseQuery-Prdg1nCF.js";import"./useInfiniteQuery-COdaCjzZ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-5oNH0ZEl.js";import"./useSchema-V3II3LCp.js";import"./index-B5-kePoE.js";import"./enums-WF59EgSL.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-FHM5R5X1.js";import"./uniq-BXrBlj2h.js";import"./forEach-CWOCpBhE.js";import"./Add-BeJDzGZD.js";import"./Grid-B_Nmq3zX.js";import"./ListItem-qYvTpJhS.js";import"./listItemButtonClasses-CMAgeQfW.js";import"./ListItemIcon-DWZUxfPt.js";import"./MenuItem-CXmp431F.js";import"./ListItemText-Cbqns8Nv.js";import"./ArrowUpward-3VFRA92h.js";import"./ContentCopy-CtT0uBCq.js";import"./FormControlLabel-O5Pr_avL.js";import"./Checkbox-DAAWAHE0.js";import"./SwitchBase-1IBRQWl4.js";import"./FormGroup-D1GgbikW.js";import"./RadioGroup-CsRBdo0U.js";import"./Radio-DbmGf3XZ.js";import"./Slider-BDbYF372.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-CU4MVSU0.js";import"./DialogBase-CCRQ-36d.js";import"./Close-DflrR1-c.js";import"./HelpPopover-DfyusZY4.js";import"./MarkdownPopover-CLq6_7WL.js";import"./LightTooltip-CSyKoV_S.js";import"./MarkdownSynapse-CFDbt1Xl.js";import"./SkeletonButton-Dh0pWoWT.js";import"./SkeletonInlineBlock-d0W0oi9e.js";import"./SkeletonTable-DqghlvE9.js";import"./SkeletonParagraph-Bn6jXz5y.js";import"./JsonSchemaForm-CnyKNPr3.js";import"./GridLegacy-B1FfOvq_.js";import"./HelpTwoTone-BNCQz_pR.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CJJLblYb.js";import"./_createAggregator-DwcHABP6.js";import"./_baseMap-CPFYYg7D.js";import"./DateTimePicker-DEKHV2Vl.js";import"./useMobilePicker-DTLDCi1i.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-o9Djcqfz.js";import"./index-DJ8Jevlp.js";import"./Chip-DELPMDmB.js";import"./Tabs-BXSKaZoW.js";import"./KeyboardArrowRight-BzijBgoc.js";import"./Autocomplete-Db53z0wK.js";import"./usePreviousProps-CZu1xY4C.js";import"./use-deep-compare-effect.esm-B3Jc5xfm.js";import"./TextWidget-CH1FiTRd.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const br=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,br as __namedExportsOrder,qr as default};
