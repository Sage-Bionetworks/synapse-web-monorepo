import{jF as p}from"./iframe-BulltPlS.js";import{S as a}from"./SchemaDrivenAnnotationEditor-D_ZPXYaY.js";import"./index-Chi_LkuB.js";import"./useEntity-BiGeOlwx.js";import"./pickBy-5lAUttHe.js";import"./isString-CghkokNG.js";import"./_baseIteratee-ypnnxg3G.js";import"./useQueries-CWxE_GlV.js";import"./useSuspenseQuery-BZkq8k4a.js";import"./useInfiniteQuery-pUjrcR8S.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DtiXNmfa.js";import"./useSchema-CmE1kqen.js";import"./index-CoGOKwmU.js";import"./enums-c4kqRV0L.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-rWqQ2DGz.js";import"./uniq-JbDHZws-.js";import"./forEach-CWOCpBhE.js";import"./Add-C2mAWZPL.js";import"./Grid-DJFemF4m.js";import"./ListItem-DA8rVcGY.js";import"./listItemButtonClasses-DDru6bL7.js";import"./ListItemIcon-CMnDv_Xj.js";import"./MenuItem-Bei-3O4r.js";import"./ListItemText-Dyobqs1X.js";import"./ArrowUpward-DWyI5ILg.js";import"./ContentCopy-DqCAF2XV.js";import"./FormControlLabel-Bk9p_aTk.js";import"./Checkbox-BglXU7WT.js";import"./SwitchBase-h1Twos_B.js";import"./FormGroup-Fa2srLl2.js";import"./RadioGroup-DXlgXmIT.js";import"./Radio-jhDBv7Kl.js";import"./Slider-zijWCu3O.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-DF03K_WP.js";import"./DialogBase-Cr1fkWqi.js";import"./Close-w80hutFi.js";import"./HelpPopover-CunOOZhM.js";import"./MarkdownPopover-CmTONRcK.js";import"./LightTooltip-CEqUG5nY.js";import"./MarkdownSynapse-BTFSrs3B.js";import"./SkeletonButton-DU72c3M6.js";import"./SkeletonInlineBlock-BXxRvNES.js";import"./SkeletonTable-BgsdlaOw.js";import"./SkeletonParagraph-DH5smUkj.js";import"./JsonSchemaForm-GOiou-YH.js";import"./GridLegacy-CNu-HYfr.js";import"./HelpTwoTone-Bf7xvH8X.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-D_42ZZ3o.js";import"./_createAggregator-DpNBgXV2.js";import"./_baseMap-D-3mppFr.js";import"./DateTimePicker-FCWMcCrP.js";import"./useMobilePicker-Cp4T24TB.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CbXb9XpA.js";import"./index-cwz30I0r.js";import"./Chip-CTw5NN0f.js";import"./Tabs-KXxaxZWk.js";import"./KeyboardArrowRight-BsLrS-l6.js";import"./Autocomplete-DwAfPvxW.js";import"./usePreviousProps-CbD8beHC.js";import"./use-deep-compare-effect.esm-CRzzaWpz.js";import"./TextWidget-DNlkXowT.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const br=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,br as __namedExportsOrder,qr as default};
