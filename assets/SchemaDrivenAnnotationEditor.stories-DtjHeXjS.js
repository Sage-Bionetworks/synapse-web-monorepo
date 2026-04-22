import{jx as p}from"./iframe-KW3Ki4s5.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CU3UHVP-.js";import"./index-Chi_LkuB.js";import"./useEntity-BfHK77a0.js";import"./pickBy-bS4bFqsd.js";import"./isString-BDA1_wrZ.js";import"./_baseIteratee-Cq4s9rvn.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-B3Zfqdzl.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C2a3n16o.js";import"./useSchema-bXrEx8dJ.js";import"./index-CwrZyTaJ.js";import"./enums-cdZvaRsE.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-fBObMu14.js";import"./uniq-DT6wMWai.js";import"./forEach-UWyboym_.js";import"./Add-DLbfEEp9.js";import"./Grid-ByDfa41p.js";import"./ListItem-CaeRbkmG.js";import"./listItemButtonClasses-BS-txcj0.js";import"./ListItemIcon-DLG9mzIS.js";import"./MenuItem-Cxj9mVkl.js";import"./ListItemText-BB15RaPU.js";import"./ArrowUpward-CkXUlJXE.js";import"./ContentCopy-DEqRDt0Z.js";import"./FormControlLabel-DD0DDA_y.js";import"./Checkbox-D-msWVBX.js";import"./SwitchBase-Bk1kmRTR.js";import"./FormGroup-VCMvMds2.js";import"./RadioGroup-BmiYPJB7.js";import"./Radio-DP9THWnr.js";import"./Slider-DPhurj1d.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Bz6P-Mwf.js";import"./DialogBase-CUOBFy-j.js";import"./Close-Cj_UWN_d.js";import"./HelpPopover-CtFwS0Vq.js";import"./MarkdownPopover-BFr6QtMT.js";import"./LightTooltip-DxSrPZ77.js";import"./MarkdownSynapse-Bf8TJuFS.js";import"./SkeletonButton-Bn8xeqTi.js";import"./SkeletonInlineBlock-Cx7fF-gW.js";import"./SkeletonTable-DKXzhoLj.js";import"./SkeletonParagraph-iKwtI13n.js";import"./JsonSchemaForm-BnmoISul.js";import"./GridLegacy-DUUOqm4c.js";import"./HelpTwoTone-N9sHop-I.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BHw10tz_.js";import"./_createAggregator-BWmKJXy-.js";import"./_baseMap-BQL-gxEZ.js";import"./DateTimePicker-C-kMCguD.js";import"./useMobilePicker-uHtkhei9.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DRBJTZBH.js";import"./index-CBVoQ7Md.js";import"./Chip-M2qGtBYy.js";import"./Tabs-B-JHpirK.js";import"./KeyboardArrowRight-k-PMRtNP.js";import"./Autocomplete-BW2G6CrW.js";import"./usePreviousProps-pcPmgYqd.js";import"./use-deep-compare-effect.esm-C5_s5-4s.js";import"./TextWidget-BNQQUU-5.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Er=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Er as __namedExportsOrder,Ir as default};
