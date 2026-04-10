import{jw as p}from"./iframe-QSWh_nl6.js";import{S as a}from"./SchemaDrivenAnnotationEditor-2j3844Sw.js";import"./index-Chi_LkuB.js";import"./useEntity-MJbU_Wul.js";import"./pickBy-BIj1us4f.js";import"./isString-CMmyCM5R.js";import"./_baseIteratee-CFwgFnBf.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-B5lzZVtS.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-1drniFxT.js";import"./useSchema-DhPBpzJy.js";import"./index-BG419we0.js";import"./enums-CBiIZhXi.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C5TZrtK0.js";import"./uniq-BuJy3fYB.js";import"./forEach-UWyboym_.js";import"./Add-DV3zCsFv.js";import"./Grid-7NTKiOpp.js";import"./ListItem-C9cQ1jJQ.js";import"./listItemButtonClasses-Bq8ZIMpV.js";import"./ListItemIcon-CnNqH9y0.js";import"./MenuItem-DfWOa7RV.js";import"./ListItemText-BKXWNEPr.js";import"./ArrowUpward-BpXpHZ0c.js";import"./ContentCopy-rTCSRi5P.js";import"./FormControlLabel-C2B2UHHo.js";import"./Checkbox-CqoChSP_.js";import"./SwitchBase-o_ZrMHWt.js";import"./FormGroup-BcZ_TaKC.js";import"./RadioGroup-FREedS_I.js";import"./Radio-DTee15_T.js";import"./Slider-B5lOcIPM.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CX4ewaN9.js";import"./DialogBase-D2MmUTIb.js";import"./Close-QryVeLEP.js";import"./HelpPopover-Bcffqgpu.js";import"./MarkdownPopover-c1W7vBzm.js";import"./LightTooltip-6Ty6ser2.js";import"./MarkdownSynapse-CJNodr3S.js";import"./SkeletonButton-Ca6I-8rV.js";import"./SkeletonInlineBlock-rFa2WtsV.js";import"./SkeletonTable-D0oXxerW.js";import"./SkeletonParagraph-C2ql9lI3.js";import"./JsonSchemaForm-BLBIDHjZ.js";import"./GridLegacy-BXLE0htJ.js";import"./HelpTwoTone-qUM1BvQu.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DCcF1Wjb.js";import"./_createAggregator-CuoAgiS5.js";import"./_baseMap-Bmwx28tM.js";import"./DateTimePicker-Bim5GNyF.js";import"./useMobilePicker-_yKVJn-i.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DzmHqYe-.js";import"./index-D_eAvhKF.js";import"./Chip-BVgBfsjl.js";import"./Tabs-O2k_h31P.js";import"./KeyboardArrowRight-cLLxCIP6.js";import"./Autocomplete-DzJi86KT.js";import"./usePreviousProps-B1yfhd_h.js";import"./use-deep-compare-effect.esm-wkpvjlzl.js";import"./TextWidget-DVjXhjkm.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
