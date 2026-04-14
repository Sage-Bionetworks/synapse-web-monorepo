import{jw as p}from"./iframe-C5G3mSsR.js";import{S as a}from"./SchemaDrivenAnnotationEditor-C3PUaKTW.js";import"./index-Chi_LkuB.js";import"./useEntity-CcWu8fd8.js";import"./pickBy-B33oLEkQ.js";import"./isString-Du3YB3Zp.js";import"./_baseIteratee-BJFOXZpA.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DjR-9fP5.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bf--ncRy.js";import"./useSchema-C1-yO8v6.js";import"./index-CMABWt30.js";import"./enums-BBTj0zY-.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-xqhXeHjp.js";import"./uniq-DC7TTXmA.js";import"./forEach-UWyboym_.js";import"./Add-rMFjv300.js";import"./Grid-C1orS3f4.js";import"./ListItem-zssqoqTW.js";import"./listItemButtonClasses-DGdGuUll.js";import"./ListItemIcon-CwhT98aD.js";import"./MenuItem-DBKy37Hp.js";import"./ListItemText-DNQZofq5.js";import"./ArrowUpward-BrM6k_Nb.js";import"./ContentCopy-uQpRuIrv.js";import"./FormControlLabel-k-SWrQ8f.js";import"./Checkbox-CB1vuwHn.js";import"./SwitchBase-CO_2vZSB.js";import"./FormGroup-CNOMkbjr.js";import"./RadioGroup-Ct9qeCg4.js";import"./Radio-DbvYBMjY.js";import"./Slider-SFLmeAlT.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Br5927dU.js";import"./DialogBase-D3E-ORM4.js";import"./Close-DMmJiCqc.js";import"./HelpPopover-TqGD_tY5.js";import"./MarkdownPopover-C1geqiut.js";import"./LightTooltip-BCSWtQqF.js";import"./MarkdownSynapse-BKYTzrKF.js";import"./SkeletonButton-_Eu_07NL.js";import"./SkeletonInlineBlock-BpaxCT_H.js";import"./SkeletonTable-q_wTrDuF.js";import"./SkeletonParagraph-B8DwnroK.js";import"./JsonSchemaForm-vpRQ2Oy8.js";import"./GridLegacy-BPQHlFzN.js";import"./HelpTwoTone-C2K7j2Kf.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-NoJjjEnd.js";import"./_createAggregator-qnvQvqxn.js";import"./_baseMap-KZgyx6ES.js";import"./DateTimePicker-ej0HHRqZ.js";import"./useMobilePicker-tAsBYaAd.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-D5A0IpUx.js";import"./index-ZLaaxmrv.js";import"./Chip-j4Xp3f_v.js";import"./Tabs-BAp3V9T5.js";import"./KeyboardArrowRight-CUxJlKPR.js";import"./Autocomplete-BXFPR9ju.js";import"./usePreviousProps-CGWoFtrf.js";import"./use-deep-compare-effect.esm-D7Bkv-Rh.js";import"./TextWidget-4qZFeUIU.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
