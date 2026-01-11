import{jF as p}from"./iframe-DmQVC8QI.js";import{S as a}from"./SchemaDrivenAnnotationEditor-QEVreZw2.js";import"./index-Chi_LkuB.js";import"./useEntity-CuvgSHcR.js";import"./pickBy-C6FSRYiE.js";import"./isString-Brycufc4.js";import"./_baseIteratee-D0N2ShRx.js";import"./useQueries-D8oiAeRD.js";import"./useSuspenseQuery-BohpWjm9.js";import"./useInfiniteQuery-B2-G7M8y.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C-kj1Qaf.js";import"./useSchema-uj3CsbeT.js";import"./index-Dg36DCg-.js";import"./enums-DBbSrtlR.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-ClM1nIwI.js";import"./uniq-BTcnuA8-.js";import"./forEach-CWOCpBhE.js";import"./Add-CYhHhk_-.js";import"./Grid-CduLv2x6.js";import"./ListItem-Cn0g0csy.js";import"./listItemButtonClasses-Dc93xVPk.js";import"./ListItemIcon-DSGoGKku.js";import"./MenuItem-CiiNgcaW.js";import"./ListItemText-ymSs3kPG.js";import"./ArrowUpward-C4N35Xfg.js";import"./ContentCopy-CpPJgQsl.js";import"./FormControlLabel-BfYMzRqL.js";import"./Checkbox-CLoF6Bfl.js";import"./SwitchBase-CXyOGGZH.js";import"./FormGroup-BXJcvKNH.js";import"./RadioGroup-DeSbA_Kh.js";import"./Radio-CR3maaQ3.js";import"./Slider-_j4CoSmG.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-OJeXIr_I.js";import"./DialogBase-Bs_nIYab.js";import"./Close-BMrHQB2l.js";import"./HelpPopover-DRZXBx0T.js";import"./MarkdownPopover-BdSro2xf.js";import"./LightTooltip-he-g-8N4.js";import"./MarkdownSynapse-DmgMCbzG.js";import"./SkeletonButton-DiNloKU2.js";import"./SkeletonInlineBlock-DroApun6.js";import"./SkeletonTable-C27BPd4C.js";import"./SkeletonParagraph-uPmYqKww.js";import"./JsonSchemaForm-CrKADvFI.js";import"./GridLegacy-wLTrbVPc.js";import"./HelpTwoTone-CNSTKIF0.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-D5L8owpg.js";import"./_createAggregator-fIHf_15x.js";import"./_baseMap-DQ_Afyp5.js";import"./DateTimePicker-CmZOnzCw.js";import"./useMobilePicker-C7YVR2wO.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-B0xl7FZN.js";import"./index-Br7gKF9R.js";import"./Chip-OD2C4O6J.js";import"./Tabs-CDPsY7Q0.js";import"./KeyboardArrowRight-eGPC2GSj.js";import"./Autocomplete-C8lT-o7t.js";import"./usePreviousProps-BkWKw8d8.js";import"./use-deep-compare-effect.esm-BurpvcDK.js";import"./TextWidget-CVS-taO5.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
