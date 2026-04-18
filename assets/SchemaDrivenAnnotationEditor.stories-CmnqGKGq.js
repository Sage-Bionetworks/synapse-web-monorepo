import{jx as p}from"./iframe-BnslxpU_.js";import{S as a}from"./SchemaDrivenAnnotationEditor-S8huDSZA.js";import"./index-Chi_LkuB.js";import"./useEntity-BsI2Tbzc.js";import"./pickBy-CE5D0X5Y.js";import"./isString-lNDBQ7zY.js";import"./_baseIteratee-DKszTi1G.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-CUtRjsVX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CtGbLs_y.js";import"./useSchema-Dkb032FS.js";import"./index-qH-hD6WD.js";import"./enums-C6yYRldL.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DWYlC-Oi.js";import"./uniq-CGP-l6vY.js";import"./forEach-UWyboym_.js";import"./Add-BaP2LSv0.js";import"./Grid-BcaJqK2a.js";import"./ListItem-DRppa29C.js";import"./listItemButtonClasses-B_i8CeoE.js";import"./ListItemIcon-DdfUFElk.js";import"./MenuItem-DtwhjM27.js";import"./ListItemText-B0mQYFY2.js";import"./ArrowUpward-BMi2zW7g.js";import"./ContentCopy-DNy-oxiJ.js";import"./FormControlLabel-DFnjR6do.js";import"./Checkbox-LdJOabl-.js";import"./SwitchBase-D8Y_Jyat.js";import"./FormGroup-CsWa7wjm.js";import"./RadioGroup-CmwtAxB-.js";import"./Radio-Z_Yf4KIL.js";import"./Slider-BadE4Roo.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-zoPPJpy4.js";import"./DialogBase-BFSEb07D.js";import"./Close-zw5i39wh.js";import"./HelpPopover-DEMZmKs_.js";import"./MarkdownPopover--8H7HGCA.js";import"./LightTooltip-CSsPVoOw.js";import"./MarkdownSynapse-CiX0_RGH.js";import"./SkeletonButton-5fVnmkER.js";import"./SkeletonInlineBlock-DPXtIPY8.js";import"./SkeletonTable-CoVehSLQ.js";import"./SkeletonParagraph-B0oRHwOu.js";import"./JsonSchemaForm-CGj36jiR.js";import"./GridLegacy-caL_4EXv.js";import"./HelpTwoTone-Dk-B9dx_.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-1qEPP6S6.js";import"./_createAggregator-BFDQdgF6.js";import"./_baseMap-CyJy1Bu9.js";import"./DateTimePicker-TlK2WvWq.js";import"./useMobilePicker-Bth7jdxE.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-aux6HHam.js";import"./index-BBnrFY0q.js";import"./Chip-Bn_oC1Yj.js";import"./Tabs-D2fEmChC.js";import"./KeyboardArrowRight-C46W_SuP.js";import"./Autocomplete-DnGR1Ih4.js";import"./usePreviousProps-DI4-AD8Z.js";import"./use-deep-compare-effect.esm-DYIav0DL.js";import"./TextWidget-B26rrVvS.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
