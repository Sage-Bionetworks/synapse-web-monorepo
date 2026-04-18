import{jx as p}from"./iframe-ggb9BT7g.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BtvtXUH6.js";import"./index-Chi_LkuB.js";import"./useEntity-BC65UzsD.js";import"./pickBy-D-qc39wb.js";import"./isString-Ca1WffPe.js";import"./_baseIteratee-CI8yA5In.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-Dmqb6E3U.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-2ZWPNYoN.js";import"./useSchema-BDlb0KPl.js";import"./index-BnbK9-Ua.js";import"./enums-C_tzwEcf.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CoSYQq5s.js";import"./uniq-Di3nnV3P.js";import"./forEach-UWyboym_.js";import"./Add-DzAQMy_o.js";import"./Grid-BTHwFXUN.js";import"./ListItem-B0UpKkuu.js";import"./listItemButtonClasses-CeAtuF-Z.js";import"./ListItemIcon-BDLxuWGm.js";import"./MenuItem-Dz7N7FME.js";import"./ListItemText-BFwro6yg.js";import"./ArrowUpward-CoOtPlAG.js";import"./ContentCopy-B68eraBf.js";import"./FormControlLabel-CAUCzVir.js";import"./Checkbox-Dsv8Lvn8.js";import"./SwitchBase-Cb1YcC8J.js";import"./FormGroup-Clktikys.js";import"./RadioGroup-CTZ1Wqa_.js";import"./Radio-BaviI14-.js";import"./Slider-DNg2dHRH.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Csdoq0fQ.js";import"./DialogBase-De2IOlxW.js";import"./Close-DUdLCtLc.js";import"./HelpPopover-C6C-iAVu.js";import"./MarkdownPopover-DpZurWOd.js";import"./LightTooltip-DB2Zm8A-.js";import"./MarkdownSynapse-CcYYvyZJ.js";import"./SkeletonButton-CUOVs3Oy.js";import"./SkeletonInlineBlock-C6q-RqyQ.js";import"./SkeletonTable-ByepoAwi.js";import"./SkeletonParagraph-CEmjW8Ho.js";import"./JsonSchemaForm-BQjmXkWn.js";import"./GridLegacy-DJP9Nhc0.js";import"./HelpTwoTone-44DexzRn.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DKCQtifE.js";import"./_createAggregator-Bj120dgK.js";import"./_baseMap-Cn5NpepV.js";import"./DateTimePicker-D0s2b7cO.js";import"./useMobilePicker-DFUbmvBT.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-9jY0V4pv.js";import"./index-BsBFOmKs.js";import"./Chip-CisBGjg3.js";import"./Tabs-CYxWSM54.js";import"./KeyboardArrowRight-C6VCpvwR.js";import"./Autocomplete-YprHJKih.js";import"./usePreviousProps-CuVqs5w7.js";import"./use-deep-compare-effect.esm-B74Y5FR2.js";import"./TextWidget-Ddn-rGc1.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
