import{jy as p}from"./iframe-osdcj8gT.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Bf1tMa0W.js";import"./index-Chi_LkuB.js";import"./useEntity-ZuIv_x_h.js";import"./pickBy-tfZNLt_m.js";import"./isString-C6XgMWDt.js";import"./_baseIteratee-B5HvQivk.js";import"./useInfiniteQuery-DDd67-Kv.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BYgAZyXG.js";import"./useSchema-DQe3etf9.js";import"./index-Bmi8hsZw.js";import"./enums-Q1bgsEHR.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DnD5uJJS.js";import"./uniq-WMrsDV3H.js";import"./forEach-CWOCpBhE.js";import"./Add-DBgEfwBp.js";import"./Grid-CrljGsoP.js";import"./ListItem-BYarPtcm.js";import"./listItemButtonClasses-Dh2UN_tW.js";import"./ListItemIcon-BAgaufae.js";import"./MenuItem-DiVh5dQ0.js";import"./ListItemText-_fnj8mSJ.js";import"./ArrowUpward-G4W5gfwt.js";import"./ContentCopy-BcQWwWWp.js";import"./FormControlLabel-Cd2OUa17.js";import"./Checkbox-mFQANwtw.js";import"./SwitchBase-BiHoovb6.js";import"./FormGroup-tf74GFfs.js";import"./RadioGroup-DI9ERbku.js";import"./Radio-nWvn6tHe.js";import"./Slider-DSax_yVp.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CvWs2KTG.js";import"./DialogBase-N9EllxpT.js";import"./Close-CI21Ui92.js";import"./HelpPopover-CmhCvPiW.js";import"./MarkdownPopover-BfzWYQCj.js";import"./LightTooltip-CcryAZ-X.js";import"./MarkdownSynapse-3y9hwyMU.js";import"./SkeletonButton-EtCgm8ml.js";import"./SkeletonInlineBlock-FlaxgqQX.js";import"./SkeletonTable-EGvSypPy.js";import"./SkeletonParagraph-DQAjuogP.js";import"./JsonSchemaForm-3L6Rt3RH.js";import"./GridLegacy-Bh_aemYL.js";import"./HelpTwoTone-DTHzVMk9.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-jTFN_fze.js";import"./_createAggregator-BhE1KRBO.js";import"./_baseMap-I-hgX6EY.js";import"./DateTimePicker-a4M3tBFX.js";import"./useMobilePicker-CfjardFn.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DLQaxa4Q.js";import"./index-D_1mjmCL.js";import"./Chip-B7nPIvxj.js";import"./Tabs-3DQ4bIAq.js";import"./KeyboardArrowRight-dSlBPNvz.js";import"./Autocomplete-QWEysf6v.js";import"./usePreviousProps-CxEEYaWE.js";import"./use-deep-compare-effect.esm-BhHazn6g.js";import"./TextWidget-DnWVmeob.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
