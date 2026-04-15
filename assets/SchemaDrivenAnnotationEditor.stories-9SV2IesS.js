import{jw as p}from"./iframe-ufwdWoqd.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CVpu4beG.js";import"./index-Chi_LkuB.js";import"./useEntity-B0wBChaU.js";import"./pickBy-nmQfu-mE.js";import"./isString-Dj7favZ-.js";import"./_baseIteratee-DWHKXE_x.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DfHsBcwS.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DcG7NNzi.js";import"./useSchema-D2WCC3z6.js";import"./index-B-3F5m9m.js";import"./enums--iuKduOa.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DQLBE3q4.js";import"./uniq-DuGe9Q-m.js";import"./forEach-UWyboym_.js";import"./Add-QP-gNVrf.js";import"./Grid-Dast737N.js";import"./ListItem-BX3WYecu.js";import"./listItemButtonClasses-DMNU0X-z.js";import"./ListItemIcon-CUe0j71A.js";import"./MenuItem-W_wmPF7v.js";import"./ListItemText-CjLfxrEI.js";import"./ArrowUpward-BTas69B5.js";import"./ContentCopy-DRvFhL8b.js";import"./FormControlLabel-evRqPcVo.js";import"./Checkbox-BW97U62k.js";import"./SwitchBase-7Y4vQbXh.js";import"./FormGroup-DRqgu4vV.js";import"./RadioGroup-omsUIQxs.js";import"./Radio-Cgd4u86L.js";import"./Slider-CCZWT5ZA.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-B8w3enam.js";import"./DialogBase-Dsbgm9mp.js";import"./Close-Dv4tXZl4.js";import"./HelpPopover-sYQ3nyHD.js";import"./MarkdownPopover-FbcchaUo.js";import"./LightTooltip-DY5-pD6A.js";import"./MarkdownSynapse-CMjYBWsu.js";import"./SkeletonButton-LGNxHtYx.js";import"./SkeletonInlineBlock-DJWeJEjH.js";import"./SkeletonTable-Dud8tXGA.js";import"./SkeletonParagraph-Br9-4-N8.js";import"./JsonSchemaForm-CarrGs23.js";import"./GridLegacy-LN-XZihk.js";import"./HelpTwoTone-B5SZONOD.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CCN0igTl.js";import"./_createAggregator-Dw28gzvF.js";import"./_baseMap-Ak-9sm64.js";import"./DateTimePicker-CBNutHDE.js";import"./useMobilePicker-DMwymfuV.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-t_rDXNaL.js";import"./index-BjTsD0iq.js";import"./Chip-CSBIn4pT.js";import"./Tabs-D2mdX2Ss.js";import"./KeyboardArrowRight-CAYnBLFn.js";import"./Autocomplete-B2Qa4Boo.js";import"./usePreviousProps-Cv8lAokz.js";import"./use-deep-compare-effect.esm-duSylRGp.js";import"./TextWidget-6np_QRrK.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
