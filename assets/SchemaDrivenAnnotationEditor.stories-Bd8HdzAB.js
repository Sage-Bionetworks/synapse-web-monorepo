import{jx as p}from"./iframe-xQMv0B7c.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BG0dnYLh.js";import"./index-Chi_LkuB.js";import"./useEntity-Bub6w0mt.js";import"./pickBy-Dz9fSFLS.js";import"./isString-BV9IZ56Z.js";import"./_baseIteratee-CSd0qoWC.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-B0ejREUV.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Yb-HzIGK.js";import"./useSchema-DVqq5WAj.js";import"./index-dZcWvmvO.js";import"./enums-B2pY9zzL.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BGb-mPrr.js";import"./uniq-BTkV8g8p.js";import"./forEach-UWyboym_.js";import"./Add-DaI3ZBII.js";import"./Grid-BaquKNQu.js";import"./ListItem-DTNYGMmm.js";import"./listItemButtonClasses-AET5PToo.js";import"./ListItemIcon-iERpEqd3.js";import"./MenuItem-CFXGxp9X.js";import"./ListItemText-Dvx02RBl.js";import"./ArrowUpward-DyU55on0.js";import"./ContentCopy-CFH7cgS2.js";import"./FormControlLabel-GDbx5q6Y.js";import"./Checkbox-BTp39wUH.js";import"./SwitchBase-BC6L5hXz.js";import"./FormGroup-BGkderdo.js";import"./RadioGroup-CgN6Lzx7.js";import"./Radio-D69wXDzv.js";import"./Slider-Zg1pKWYH.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Dog3I0Kz.js";import"./DialogBase-BBkRPs_T.js";import"./Close-BXgmGCmp.js";import"./HelpPopover-gF13SbSs.js";import"./MarkdownPopover-B19tLMSb.js";import"./LightTooltip-CxGW4K1V.js";import"./MarkdownSynapse-CaHYMk_z.js";import"./SkeletonButton-BO78PNXN.js";import"./SkeletonInlineBlock-DTwWIKu1.js";import"./SkeletonTable-C8xyrBR9.js";import"./SkeletonParagraph-B_dMNDrm.js";import"./JsonSchemaForm-olwAoXaf.js";import"./GridLegacy-CvuJQ9fU.js";import"./HelpTwoTone-BvRYgpOV.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-bv1hsZ0J.js";import"./_createAggregator-CAdqLHe9.js";import"./_baseMap-B4rPe6R-.js";import"./DateTimePicker-DK2wywnq.js";import"./useMobilePicker-k3HSwhU4.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DOLEEEIN.js";import"./index-CXBvLS03.js";import"./Chip-T-Cvxbkm.js";import"./Tabs-C1N04PjZ.js";import"./KeyboardArrowRight-BDANYhl7.js";import"./Autocomplete-BIwzOm9_.js";import"./usePreviousProps-vfY-8rpx.js";import"./use-deep-compare-effect.esm-CabOrv93.js";import"./TextWidget-CU2Bg4R0.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
