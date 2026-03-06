import{jv as p}from"./iframe-Ak5JkJtY.js";import{S as a}from"./SchemaDrivenAnnotationEditor-B5mjw48b.js";import"./index-Chi_LkuB.js";import"./useEntity-BDEACah7.js";import"./pickBy-eunfHSHr.js";import"./isString-BNwI_j1J.js";import"./_baseIteratee-BXsmtn2r.js";import"./useInfiniteQuery-BIO-789Q.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DrUTqZYy.js";import"./useSchema-DxtKKx1v.js";import"./index-2WpB3xVf.js";import"./enums-C6f-0PE8.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Czuq5CBY.js";import"./uniq-DjzL4rka.js";import"./forEach-CWOCpBhE.js";import"./Add-DG0L5nLW.js";import"./Grid-BSUODZPK.js";import"./ListItem-CfMMKAHf.js";import"./listItemButtonClasses-BHpZ8CPe.js";import"./ListItemIcon-BEbfLUKt.js";import"./MenuItem-BM1_B-4q.js";import"./ListItemText-w_WjJijA.js";import"./ArrowUpward-EiBO9Pnr.js";import"./ContentCopy-D-OHSKnQ.js";import"./FormControlLabel-DTCzZ85M.js";import"./Checkbox-EQVEYCdE.js";import"./SwitchBase-CPgLpXbj.js";import"./FormGroup-XzRLfVIj.js";import"./RadioGroup--noon46w.js";import"./Radio-DWk-c66u.js";import"./Slider-DvSmPsCC.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-zlNiA4Jk.js";import"./DialogBase-C44QfcA-.js";import"./Close-B2gux84L.js";import"./HelpPopover-9bzvOPZ1.js";import"./MarkdownPopover-5KNMW25X.js";import"./LightTooltip-Dx85UV-A.js";import"./MarkdownSynapse-n-SLVIb1.js";import"./SkeletonButton-J64P-p4R.js";import"./SkeletonInlineBlock-DSfvHYOc.js";import"./SkeletonTable-DmhZtLI7.js";import"./SkeletonParagraph-eBTTxCdT.js";import"./JsonSchemaForm-1B_6eiGC.js";import"./GridLegacy-Cu7_3ItU.js";import"./HelpTwoTone-D-DDK-jV.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Dyerczx6.js";import"./_createAggregator-Mgfg1apW.js";import"./_baseMap-BDo9iXyH.js";import"./DateTimePicker-RIKxbJln.js";import"./useMobilePicker-BO5l0VZD.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-C5xLo9qi.js";import"./index-DhBGOdhC.js";import"./Chip-rT4uyFgK.js";import"./Tabs-BuQcGz3I.js";import"./KeyboardArrowRight-5ddD-k3m.js";import"./Autocomplete-CUp1JsTW.js";import"./usePreviousProps-CyqORNDR.js";import"./use-deep-compare-effect.esm-C9wQAHfA.js";import"./TextWidget-CtySjjMA.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
