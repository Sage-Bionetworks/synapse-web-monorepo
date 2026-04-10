import{jw as p}from"./iframe-BdS9-wdc.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BIbW8KOZ.js";import"./index-Chi_LkuB.js";import"./useEntity-yk3zKDSU.js";import"./pickBy-zLYfMzn_.js";import"./isString-Bg-Bq7K1.js";import"./_baseIteratee-D3oGQqia.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-B54oxMok.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CfwXDFET.js";import"./useSchema-D5Ukmyss.js";import"./index-Bcdng0eP.js";import"./enums-BQyxWb3m.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C3R-Q7qo.js";import"./uniq-Co1I58Im.js";import"./forEach-UWyboym_.js";import"./Add-DrQNI8-I.js";import"./Grid-BXS4f0R9.js";import"./ListItem-Ckg72ivS.js";import"./listItemButtonClasses-ChAWww3W.js";import"./ListItemIcon-DwKLlWEM.js";import"./MenuItem-BSB47y6Q.js";import"./ListItemText-BU7vjNYV.js";import"./ArrowUpward-pCLe8x4a.js";import"./ContentCopy-D0Jcm3Iy.js";import"./FormControlLabel-Db0CgiSH.js";import"./Checkbox-1TaYBXaY.js";import"./SwitchBase-DOv3IdKL.js";import"./FormGroup-Chmbx7zf.js";import"./RadioGroup-EI4GGDBq.js";import"./Radio-5dCJbeJH.js";import"./Slider-DtDygdom.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-_KtxKo5o.js";import"./DialogBase-B_l53LD_.js";import"./Close-SS6nyoVB.js";import"./HelpPopover-B69_BQlI.js";import"./MarkdownPopover-BlinJcsM.js";import"./LightTooltip-B9hgSUpU.js";import"./MarkdownSynapse-DzEXO47M.js";import"./SkeletonButton-BtChI9G1.js";import"./SkeletonInlineBlock-B1VKeUrN.js";import"./SkeletonTable-E-xscDs6.js";import"./SkeletonParagraph-BQttfzOt.js";import"./JsonSchemaForm-BOv7NYvx.js";import"./GridLegacy-Dvkmrnlw.js";import"./HelpTwoTone-BTG3Yaro.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-l_0DWqWW.js";import"./_createAggregator-BK1f0AXb.js";import"./_baseMap-sufoZ6nL.js";import"./DateTimePicker-CCKndxbX.js";import"./useMobilePicker-DlVD0eru.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-aUp1k2Ka.js";import"./index-BmEGML5A.js";import"./Chip-B8w46sev.js";import"./Tabs-C3kEHlQr.js";import"./KeyboardArrowRight-BhlDv3V8.js";import"./Autocomplete-jeJ3UT8Z.js";import"./usePreviousProps-CRbVQsCb.js";import"./use-deep-compare-effect.esm-CzUn4gKm.js";import"./TextWidget-l7-JIIs-.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
