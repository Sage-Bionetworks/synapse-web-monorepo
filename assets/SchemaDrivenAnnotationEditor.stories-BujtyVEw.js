import{jw as p}from"./iframe-Dwm9QZ_I.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DVYLhhVB.js";import"./index-Chi_LkuB.js";import"./useEntity-B1cCiiLS.js";import"./pickBy-BnL0Lcrb.js";import"./isString-Do94spI8.js";import"./_baseIteratee-Cmga9963.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-uvWeC_ze.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C1BAXjXB.js";import"./useSchema-Z50Tcfsl.js";import"./index-D2b3sBl9.js";import"./enums-C8YSkcDV.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CyVnp5d9.js";import"./uniq-dGNu44p3.js";import"./forEach-UWyboym_.js";import"./Add-BCsishkx.js";import"./Grid-BiL9V20c.js";import"./ListItem-C-rQejs7.js";import"./listItemButtonClasses-jAAVPZlU.js";import"./ListItemIcon-Cn8RRi0t.js";import"./MenuItem-BeAkG7fl.js";import"./ListItemText-CsyQr1pl.js";import"./ArrowUpward-Dg07NG7K.js";import"./ContentCopy-BTAjyNm4.js";import"./FormControlLabel-COrRVd_P.js";import"./Checkbox-uIztiP3l.js";import"./SwitchBase-BCQMfLTx.js";import"./FormGroup-BKHqdz9G.js";import"./RadioGroup-cnyCqdB6.js";import"./Radio-Crio0gOe.js";import"./Slider-B2QU6rLU.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CHhvt_BX.js";import"./DialogBase-pWEI67Dp.js";import"./Close-DNV_aDsb.js";import"./HelpPopover-DSvAr6aj.js";import"./MarkdownPopover-ChhIn-uU.js";import"./LightTooltip-3cLsOXKA.js";import"./MarkdownSynapse-DFdN_MTr.js";import"./SkeletonButton-DgRSBFJp.js";import"./SkeletonInlineBlock-Oe83SNYG.js";import"./SkeletonTable-CYNdtRWy.js";import"./SkeletonParagraph-BN0GLaey.js";import"./JsonSchemaForm-_kIs06R3.js";import"./GridLegacy-Bp3DPIws.js";import"./HelpTwoTone-CYlxXzRl.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-B11Eqf7s.js";import"./_createAggregator-CtB7JaBV.js";import"./_baseMap-BQV7qzGd.js";import"./DateTimePicker-CzrHGS_W.js";import"./useMobilePicker-DuRlopde.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-ChF7stkg.js";import"./index-unwEzT-4.js";import"./Chip-DSK9YH7S.js";import"./Tabs-DyUEoAFV.js";import"./KeyboardArrowRight-BMVqbj39.js";import"./Autocomplete-DT3e_ej1.js";import"./usePreviousProps-DCGKHicZ.js";import"./use-deep-compare-effect.esm-CzI4N_aS.js";import"./TextWidget-BUvQZhzt.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
