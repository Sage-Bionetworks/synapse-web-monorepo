import{ju as p}from"./iframe-D5fi-UCI.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CZcMCoVS.js";import"./index-Chi_LkuB.js";import"./useEntity-DZBcJwIJ.js";import"./pickBy-CM25teq7.js";import"./isString-qWB6MhPe.js";import"./_baseIteratee-BYNmJDpT.js";import"./useInfiniteQuery-CAh9MY-H.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CGvoFaMT.js";import"./useSchema-DmfGidb9.js";import"./index-Dc5O4wx3.js";import"./enums-BgQvXobo.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-M2k7E20T.js";import"./uniq-ogPogOOm.js";import"./forEach-CWOCpBhE.js";import"./Add-DDAqG0Df.js";import"./Grid-w5ufbii7.js";import"./ListItem-CDmLrxcZ.js";import"./listItemButtonClasses-DM81AST1.js";import"./ListItemIcon-BkMXW25r.js";import"./MenuItem-CoEJZbDJ.js";import"./ListItemText-Byoxb4fi.js";import"./ArrowUpward-CPWcCmjW.js";import"./ContentCopy-dIZyqEye.js";import"./FormControlLabel-DjIggnZV.js";import"./Checkbox-VXABpiEI.js";import"./SwitchBase-CKR_n_OU.js";import"./FormGroup-MVBaojbS.js";import"./RadioGroup-BnCAZpoA.js";import"./Radio-sdqLknSs.js";import"./Slider-BLC7qvba.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-8rzP4g0a.js";import"./DialogBase-xIV-zqs7.js";import"./Close-BMHbbE_Q.js";import"./HelpPopover-BWSi51uC.js";import"./MarkdownPopover-D-5Kyx4k.js";import"./LightTooltip-DaJf-vKS.js";import"./MarkdownSynapse-BtPA8Eyc.js";import"./SkeletonButton-NAUvRsI1.js";import"./SkeletonInlineBlock-C_oItAmZ.js";import"./SkeletonTable-BVeoay1H.js";import"./SkeletonParagraph-DOydOX8X.js";import"./JsonSchemaForm-SHM8pdR8.js";import"./GridLegacy-D0ceYKMZ.js";import"./HelpTwoTone-EeacEQ9L.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-u8SPXVRA.js";import"./_createAggregator-CUO1SEqw.js";import"./_baseMap-CzQRQ99N.js";import"./DateTimePicker-mATYvRT-.js";import"./useMobilePicker-B_6XvO-h.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DtcsAHbt.js";import"./index-B56RpF6G.js";import"./Chip-B5Ta4kZT.js";import"./Tabs-BYjJFdUi.js";import"./KeyboardArrowRight-0EVmWCTH.js";import"./Autocomplete-Cm3vGaea.js";import"./usePreviousProps-BhkkLYl-.js";import"./use-deep-compare-effect.esm-BWtN82-j.js";import"./TextWidget-U7Uq7wnC.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
