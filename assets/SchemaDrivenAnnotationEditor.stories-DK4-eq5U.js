import{jx as p}from"./iframe-pozrfGX9.js";import{S as a}from"./SchemaDrivenAnnotationEditor-D3CXJSjL.js";import"./index-Chi_LkuB.js";import"./useEntity-DjNKlE7X.js";import"./pickBy-BgJu4nxq.js";import"./isString-dc7ZEHEL.js";import"./_baseIteratee-CPEDkU6I.js";import"./useInfiniteQuery-BoWyfOQx.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BjeXetgB.js";import"./useSchema-BA_O73z-.js";import"./index-DRC-uGvN.js";import"./enums-BVmhEgw6.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BSpAmI0c.js";import"./uniq-BPYZNo6X.js";import"./forEach-CWOCpBhE.js";import"./Add-C-RGaqP6.js";import"./Grid-CKjOzNfL.js";import"./ListItem-C23Uagvh.js";import"./listItemButtonClasses-DKZCNe1d.js";import"./ListItemIcon-CXWS3rGb.js";import"./MenuItem-CtrC7AXY.js";import"./ListItemText-CCWjEt5i.js";import"./ArrowUpward-BFTMtzqE.js";import"./ContentCopy-BASyH784.js";import"./FormControlLabel-Dx6ulEoT.js";import"./Checkbox-aXQ8w9JS.js";import"./SwitchBase-0kMqfIa2.js";import"./FormGroup-DsAra8aP.js";import"./RadioGroup-nzKibwuk.js";import"./Radio-DVC-8W2Z.js";import"./Slider-XOaHfErJ.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-pkD1Ofo-.js";import"./DialogBase-B6KdTX5Z.js";import"./Close-DSWu6oeE.js";import"./HelpPopover-CXWVW84-.js";import"./MarkdownPopover-DP57655n.js";import"./LightTooltip-B0VARp2j.js";import"./MarkdownSynapse-B4RP0lap.js";import"./SkeletonButton-BVG9V-0l.js";import"./SkeletonInlineBlock-COIr5uPh.js";import"./SkeletonTable-B877ikOr.js";import"./SkeletonParagraph-QqDrbm_v.js";import"./JsonSchemaForm-Dr8mWx2o.js";import"./GridLegacy-BX7TNYaE.js";import"./HelpTwoTone-CBmEaH7D.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Dw50IPpj.js";import"./_createAggregator-Bkhby9SU.js";import"./_baseMap-CrtdhqL2.js";import"./DateTimePicker-yqwXV69w.js";import"./useMobilePicker-CW5c1Owb.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-__MMDfls.js";import"./index-DK5SCnFS.js";import"./Chip-SQ2CRNke.js";import"./Tabs-DuzcUC0l.js";import"./KeyboardArrowRight-DSNrGj28.js";import"./Autocomplete-RruYcc-o.js";import"./usePreviousProps-CxvBbgnl.js";import"./use-deep-compare-effect.esm-B7gtu2hA.js";import"./TextWidget-D08cxZoL.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
