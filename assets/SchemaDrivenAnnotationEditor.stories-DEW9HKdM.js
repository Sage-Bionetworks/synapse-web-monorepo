import{jw as p}from"./iframe-DvDRa5Q6.js";import{S as a}from"./SchemaDrivenAnnotationEditor-C6kyE6nt.js";import"./index-Chi_LkuB.js";import"./useEntity-DiocNvqG.js";import"./pickBy-CYz8iHO0.js";import"./isString-DXLKKj12.js";import"./_baseIteratee-CmNCC7oz.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-zp3UrFFS.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DdudX2f2.js";import"./useSchema-q7cBzuST.js";import"./index-3VnJ-Ax1.js";import"./enums-BfZC44HI.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CMAF8SZ0.js";import"./uniq-cjoB-8xF.js";import"./forEach-UWyboym_.js";import"./Add-BBdO9Mto.js";import"./Grid-DLUmUbFh.js";import"./ListItem-DlM20Ec4.js";import"./listItemButtonClasses-CLODV7l0.js";import"./ListItemIcon-BcaBFsUT.js";import"./MenuItem-CBuG7QWi.js";import"./ListItemText-DIlakHZK.js";import"./ArrowUpward-BQYSf-XB.js";import"./ContentCopy-fiMEm5RO.js";import"./FormControlLabel-CKHXVKum.js";import"./Checkbox-Cn1-qDlO.js";import"./SwitchBase-CRLg36Mp.js";import"./FormGroup-C1yesecY.js";import"./RadioGroup-BezTVJLI.js";import"./Radio-9-xX1iPR.js";import"./Slider-B6bqLZ16.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Cst2iXxg.js";import"./DialogBase-C4ETi5eI.js";import"./Close-LY7gHL5l.js";import"./HelpPopover-eW4-Xo3-.js";import"./MarkdownPopover-DkJdSjeV.js";import"./LightTooltip-CEbfXtfJ.js";import"./MarkdownSynapse-DpW9Rmmz.js";import"./SkeletonButton-DldMG8YD.js";import"./SkeletonInlineBlock-CqjLFWuf.js";import"./SkeletonTable-BUXMgZAX.js";import"./SkeletonParagraph-DNQOFkBl.js";import"./JsonSchemaForm-CZSFTzf1.js";import"./GridLegacy-BgXMX0Cu.js";import"./HelpTwoTone-CMt1CFxf.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-9ZI6trbj.js";import"./_createAggregator-DWhcJogl.js";import"./_baseMap-BG4Szxcl.js";import"./DateTimePicker-BgjRu0-v.js";import"./useMobilePicker-CidovYcB.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-D4n3BUEN.js";import"./index-DCaH_YMW.js";import"./Chip-dgVEWiiO.js";import"./Tabs-BP76g6GA.js";import"./KeyboardArrowRight-CskohvYo.js";import"./Autocomplete-Duafx-n8.js";import"./usePreviousProps-2pyxAmjn.js";import"./use-deep-compare-effect.esm-BWVotxaj.js";import"./TextWidget-OdUeVtEA.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
