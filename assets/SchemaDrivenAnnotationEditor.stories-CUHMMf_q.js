import{ju as p}from"./iframe-PaLoqTAY.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CtxRfDhs.js";import"./index-Chi_LkuB.js";import"./useEntity-Cp85qi_z.js";import"./pickBy-BYJa1pH9.js";import"./isString-mxqnxG_F.js";import"./_baseIteratee-DxxZiUq1.js";import"./useInfiniteQuery-tSWCMdH0.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D-GVp5oH.js";import"./useSchema-CFEUmH26.js";import"./index-DnsCLbTE.js";import"./enums-CBWLBw3m.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Dz90dg28.js";import"./uniq-CSJiZhD9.js";import"./forEach-CWOCpBhE.js";import"./Add-CQZd0iJd.js";import"./Grid-2tfAWBHV.js";import"./ListItem-zdLubTuW.js";import"./listItemButtonClasses-B7ohCB-y.js";import"./ListItemIcon-HvOXDsrX.js";import"./MenuItem-HGElYqD5.js";import"./ListItemText-Dn7DVm20.js";import"./ArrowUpward-0pv7VUvi.js";import"./ContentCopy-B-bs7Wus.js";import"./FormControlLabel-B5WbGe-J.js";import"./Checkbox-D2fc_nRQ.js";import"./SwitchBase-8QTSdqSf.js";import"./FormGroup-6vm2TwLx.js";import"./RadioGroup-DRvWHXuC.js";import"./Radio-DiAE_BDX.js";import"./Slider-Bhole2JY.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CYp0eVVg.js";import"./DialogBase-CdOZpOpZ.js";import"./Close-cm6rg5AJ.js";import"./HelpPopover-CsjQ6N0g.js";import"./MarkdownPopover-nKSUx3jQ.js";import"./LightTooltip-_tTaVink.js";import"./MarkdownSynapse-Ba6V8zsg.js";import"./SkeletonButton-BnWhyhDQ.js";import"./SkeletonInlineBlock-Cw72BSZP.js";import"./SkeletonTable-zz4k46jG.js";import"./SkeletonParagraph-BUTvJRRd.js";import"./JsonSchemaForm-Bj5Ks0IU.js";import"./GridLegacy-B8su8-AK.js";import"./HelpTwoTone-t0GXAl_D.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CqlyGx9q.js";import"./_createAggregator-CY0jRzM8.js";import"./_baseMap-CS_8_rhf.js";import"./DateTimePicker-BBJKuAmX.js";import"./useMobilePicker-BG2q_Oka.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CsddGjwD.js";import"./index-CNYDnv7t.js";import"./Chip-CsQ7Z6OV.js";import"./Tabs-MfUVT8cY.js";import"./KeyboardArrowRight-ZCgdD1mt.js";import"./Autocomplete-C4M1tsjt.js";import"./usePreviousProps-ChMLkegD.js";import"./use-deep-compare-effect.esm-4TMuC-2s.js";import"./TextWidget-C1KqWvzX.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
