import{jy as p}from"./iframe-CpfV3NOk.js";import{S as a}from"./SchemaDrivenAnnotationEditor-4wdYuZzt.js";import"./index-Chi_LkuB.js";import"./useEntity-C1kGutZW.js";import"./pickBy-VF0gERx7.js";import"./isString-M5PtLTGF.js";import"./_baseIteratee-CwnUjdrn.js";import"./useInfiniteQuery-B30BxfoI.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BBbZSh8P.js";import"./useSchema-CFgQAYFX.js";import"./index-CeL18Rha.js";import"./enums-fZy_KXO9.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Bl5cvDEJ.js";import"./uniq-CRDg374f.js";import"./forEach-CWOCpBhE.js";import"./Add-Db7e8oVv.js";import"./Grid-DCDxxMQ3.js";import"./ListItem-Du6L42EC.js";import"./listItemButtonClasses-D4ELf39w.js";import"./ListItemIcon-LZznful3.js";import"./MenuItem-JjjD7Qco.js";import"./ListItemText-D_Le9cTf.js";import"./ArrowUpward-D2y2ff94.js";import"./ContentCopy-BNoNFZl6.js";import"./FormControlLabel-BHc8c3P4.js";import"./Checkbox-DabvsqUa.js";import"./SwitchBase-C9B51BED.js";import"./FormGroup-DJJlE1Mg.js";import"./RadioGroup-DTSGLtj5.js";import"./Radio-ZVPg36cM.js";import"./Slider-DU7vNb93.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DY31ZGPr.js";import"./DialogBase-CPT43OGP.js";import"./Close-C1wfyqfV.js";import"./HelpPopover-D1HFzEEY.js";import"./MarkdownPopover-SqpB0xea.js";import"./LightTooltip-Nh7QLXl8.js";import"./MarkdownSynapse-D21W3bY-.js";import"./SkeletonButton-AQOmCgu3.js";import"./SkeletonInlineBlock-DUNC2gO4.js";import"./SkeletonTable-DOJ0zD5O.js";import"./SkeletonParagraph-D5apqSdK.js";import"./JsonSchemaForm-BZRLEbwC.js";import"./GridLegacy-RdFHfngF.js";import"./HelpTwoTone-B9C2Pz5N.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-D1wj9NHY.js";import"./_createAggregator-DbzAcW9N.js";import"./_baseMap-DXvb3YXn.js";import"./DateTimePicker-BqpGy_dA.js";import"./useMobilePicker-C9oNh6Xz.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CciChbho.js";import"./index-C4-1Fb9W.js";import"./Chip-D0au_Ohq.js";import"./Tabs-BAnBowqT.js";import"./KeyboardArrowRight-BZ2nuQSG.js";import"./Autocomplete-Nlq8WS5e.js";import"./usePreviousProps-C2AmCEnV.js";import"./use-deep-compare-effect.esm-D0k0j8TP.js";import"./TextWidget-CQo72JRO.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
