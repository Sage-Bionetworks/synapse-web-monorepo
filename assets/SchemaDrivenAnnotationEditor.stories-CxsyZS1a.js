import{jG as p}from"./iframe-BVXHJH4u.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CMthVvXx.js";import"./index-Chi_LkuB.js";import"./useEntity-BlX_IHgW.js";import"./pickBy-WEbbmDOf.js";import"./isString-Qv20v6r4.js";import"./_baseIteratee-BCoe42tj.js";import"./useQueries-pOn84d0l.js";import"./useSuspenseQuery-D29r270q.js";import"./useInfiniteQuery-D0pzNhrd.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-QRmHrws7.js";import"./useSchema-dL8ok9li.js";import"./index-D_BT9tVX.js";import"./enums-nr_P6uTW.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C6dvQ32R.js";import"./uniq-kkBrZweF.js";import"./forEach-CWOCpBhE.js";import"./Add-DaquYGRl.js";import"./Grid-By05aazM.js";import"./ListItem-CQwt-Ur5.js";import"./listItemButtonClasses-BtnOhcIh.js";import"./ListItemIcon-B-_17LY7.js";import"./MenuItem-CfEVbDMR.js";import"./ListItemText-DlqVQXCU.js";import"./ArrowUpward-BhDDipsV.js";import"./ContentCopy-l23LOWnr.js";import"./FormControlLabel-DZVjQdu9.js";import"./Checkbox-eD6UapcE.js";import"./SwitchBase-CHIEJ2h4.js";import"./FormGroup-FWSP25Uz.js";import"./RadioGroup-CPUpXl_N.js";import"./Radio-Ct41nxPc.js";import"./Slider-CbyrrDfT.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-Dd8pw4WU.js";import"./DialogBase-CcwXDs7D.js";import"./Close-CqljNwDC.js";import"./HelpPopover-BbvqYo6O.js";import"./MarkdownPopover-BAO6UTFT.js";import"./LightTooltip-Ds1uGQMo.js";import"./MarkdownSynapse-C6WRwt-e.js";import"./SkeletonButton-B31ULBiJ.js";import"./SkeletonInlineBlock-DtRriEan.js";import"./SkeletonTable-DQbZ0dw9.js";import"./SkeletonParagraph-CPzN7Agp.js";import"./JsonSchemaForm-CKZrRL0k.js";import"./GridLegacy-eRJraLhD.js";import"./HelpTwoTone-Z8OXWAWk.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BOlUodJc.js";import"./_createAggregator-CMd8AxpQ.js";import"./_baseMap-CkmWC-eY.js";import"./DateTimePicker-CT0rXp2n.js";import"./useMobilePicker-BesZZ8Lh.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BswxQDXQ.js";import"./index-B_trrxS1.js";import"./Chip-C4lncqkU.js";import"./Tabs-WkKp3Vsx.js";import"./KeyboardArrowRight-BnUb-NpG.js";import"./Autocomplete-D2jyTGJS.js";import"./usePreviousProps-txwnUAs1.js";import"./use-deep-compare-effect.esm-CFDf9yci.js";import"./TextWidget-DmNtUN-5.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
