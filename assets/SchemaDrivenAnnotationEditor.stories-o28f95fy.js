import{jJ as p}from"./iframe-QjK0KVVQ.js";import{S as a}from"./SchemaDrivenAnnotationEditor-C49_RwF8.js";import"./index-Chi_LkuB.js";import"./useEntity-CUKVHP5x.js";import"./pickBy-BzKhWdcw.js";import"./isString-CZlSZ-gY.js";import"./_baseIteratee-D0wMyYDQ.js";import"./useQueries-Jnd7wWig.js";import"./useSuspenseQuery--yWao2XD.js";import"./useInfiniteQuery-DM0-hvaX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-4MWeAlKP.js";import"./useSchema-DcDWCIG6.js";import"./index-2hB9wJ5c.js";import"./enums-Bw3DA3fc.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Nu6NXdmH.js";import"./uniq-CriVK3AI.js";import"./forEach-CWOCpBhE.js";import"./Add-D5uws1jZ.js";import"./Grid-Y6-3S9F7.js";import"./ListItem-CxO61kFx.js";import"./listItemButtonClasses-Dhr_m3L8.js";import"./ListItemIcon-BB37XAwG.js";import"./MenuItem-Bngl7c_k.js";import"./ListItemText-DPBcLYar.js";import"./ArrowUpward-Bk2TsYo3.js";import"./ContentCopy-BToKwJ0r.js";import"./FormControlLabel-BODitdlq.js";import"./Checkbox-DzXO1Mmf.js";import"./SwitchBase-CzWT740k.js";import"./FormGroup-iMvomJS0.js";import"./RadioGroup-CgIB2lV2.js";import"./Radio-xWeUIIwC.js";import"./Slider-CfQOjFmT.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-CJ0Oe_Vw.js";import"./DialogBase-Bnbk1wpc.js";import"./Close-ltRbb3Rg.js";import"./HelpPopover-BpJ-d2_g.js";import"./MarkdownPopover-ifjW-JKf.js";import"./LightTooltip-DkeOmngM.js";import"./MarkdownSynapse-CdDnnKnp.js";import"./SkeletonButton-Cyy2rcJm.js";import"./SkeletonInlineBlock-B3R_0ID9.js";import"./SkeletonTable-tKivh0dA.js";import"./SkeletonParagraph-Ca34h4bh.js";import"./JsonSchemaForm-Clm_yNJM.js";import"./GridLegacy-E4PEKBx1.js";import"./HelpTwoTone-DKS3Q8_I.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BKR60VW9.js";import"./_createAggregator-B1CxOMTf.js";import"./_baseMap-CH_vJgWe.js";import"./DateTimePicker-Dcy7f2fQ.js";import"./useMobilePicker-BtCQpwQ9.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BLBSCLN7.js";import"./index-YuzRGUHA.js";import"./Chip-Czdb_SG1.js";import"./Tabs-C8q8gtps.js";import"./KeyboardArrowRight-Dioas6rm.js";import"./Autocomplete-CDepfhKA.js";import"./usePreviousProps-BTW6Gk7O.js";import"./use-deep-compare-effect.esm-B7o8tjki.js";import"./TextWidget-By2BT6N6.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
