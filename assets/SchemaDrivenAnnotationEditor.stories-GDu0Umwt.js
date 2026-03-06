import{jv as p}from"./iframe-C0ar5Nzr.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CjpSEhWl.js";import"./index-Chi_LkuB.js";import"./useEntity-Bmi6NWW2.js";import"./pickBy-CACU_Stn.js";import"./isString-9wfbtwoS.js";import"./_baseIteratee-FxvFjaQU.js";import"./useInfiniteQuery-648_I8si.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DdcXHFHM.js";import"./useSchema-BLeUP9Gr.js";import"./index-DdKMR6aI.js";import"./enums-sZ_unGf-.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C_xB0_wl.js";import"./uniq-COLEKZdC.js";import"./forEach-CWOCpBhE.js";import"./Add-BW23isYG.js";import"./Grid-U8F2upY6.js";import"./ListItem-DJOPjKmq.js";import"./listItemButtonClasses-B1IQ2mkL.js";import"./ListItemIcon-CRFQKsYV.js";import"./MenuItem-C89nEhr5.js";import"./ListItemText-CGElSHVh.js";import"./ArrowUpward-CVVf2TGv.js";import"./ContentCopy-CbPFumlF.js";import"./FormControlLabel-C0kLsFRC.js";import"./Checkbox-Dmy4xA5K.js";import"./SwitchBase-P5zO0V1P.js";import"./FormGroup-cvevfr9x.js";import"./RadioGroup-Dfcory-g.js";import"./Radio-CtteIh1V.js";import"./Slider-DDzxin5G.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BnyJh5PO.js";import"./DialogBase-DIEXoqBk.js";import"./Close-BRs0EfFH.js";import"./HelpPopover-CqP6r1FP.js";import"./MarkdownPopover-BkLUE7Bg.js";import"./LightTooltip-2r7pM-Zn.js";import"./MarkdownSynapse-DSVPTxPU.js";import"./SkeletonButton-DLomeGvI.js";import"./SkeletonInlineBlock-sY9elCWZ.js";import"./SkeletonTable-4Tdh8Kss.js";import"./SkeletonParagraph-Cu2Z5Jdt.js";import"./JsonSchemaForm-CttVBeXv.js";import"./GridLegacy-BPW4JcXn.js";import"./HelpTwoTone-DSGFiA-2.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-ClaZiDLX.js";import"./_createAggregator-4kcmP3u9.js";import"./_baseMap-D6NlnIJT.js";import"./DateTimePicker-EqH8jZ-3.js";import"./useMobilePicker-DE1r6YrK.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DxlbavuL.js";import"./index-BR-nFAVn.js";import"./Chip-CFPpkp1B.js";import"./Tabs-DINwQJTb.js";import"./KeyboardArrowRight-CmItHOFJ.js";import"./Autocomplete-DnBkf3hI.js";import"./usePreviousProps-CbHIsxAd.js";import"./use-deep-compare-effect.esm-DBpzWEPh.js";import"./TextWidget-NMLX6FLF.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ir=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Ir as __namedExportsOrder,vr as default};
