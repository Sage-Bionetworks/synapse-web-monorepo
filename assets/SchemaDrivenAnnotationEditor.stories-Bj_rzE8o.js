import{jy as p}from"./iframe-DATRO4pg.js";import{S as a}from"./SchemaDrivenAnnotationEditor-OGH-pyDa.js";import"./index-Chi_LkuB.js";import"./useEntity-0PtRbFpy.js";import"./pickBy-fuGgesyS.js";import"./isString-Be5094FN.js";import"./_baseIteratee--pAE4BC1.js";import"./useInfiniteQuery-BsjpUEc3.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C6vjTeKW.js";import"./useSchema-COu1h8hV.js";import"./index-ClX8xV6x.js";import"./enums-BOa3x7Vq.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-6wOhS19j.js";import"./uniq-C8e4NYmZ.js";import"./forEach-CWOCpBhE.js";import"./Add-2CYw21z0.js";import"./Grid-vIm1_Lpj.js";import"./ListItem-BZ-rZcA6.js";import"./listItemButtonClasses-Dq9rAW8F.js";import"./ListItemIcon-BHkM1qI3.js";import"./MenuItem-BO0T4yAa.js";import"./ListItemText-Dcf83Ma2.js";import"./ArrowUpward-D1VjYYpg.js";import"./ContentCopy-zGB_nWli.js";import"./FormControlLabel-DZ_R2mT0.js";import"./Checkbox-D1X7uu44.js";import"./SwitchBase-IkX6tI92.js";import"./FormGroup-glIIIKws.js";import"./RadioGroup-B1LUlcyw.js";import"./Radio-DOqDWEHL.js";import"./Slider-DoVodbo2.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-YayW6Yer.js";import"./DialogBase-C1AukqcU.js";import"./Close-DSBWsbNS.js";import"./HelpPopover-BpoQ9RLF.js";import"./MarkdownPopover-C8lzSMfg.js";import"./LightTooltip-DjHUKC3t.js";import"./MarkdownSynapse-COvAtPgs.js";import"./SkeletonButton-D-kO1kuw.js";import"./SkeletonInlineBlock-BHsC0ZVh.js";import"./SkeletonTable-CwWcK3KH.js";import"./SkeletonParagraph-BO1hpxq5.js";import"./JsonSchemaForm-QGNuczPr.js";import"./GridLegacy-CM0G7_B7.js";import"./HelpTwoTone-DaqFbUQo.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DnR7y1Qh.js";import"./_createAggregator-Dy0RHyMz.js";import"./_baseMap-BGYDPwov.js";import"./DateTimePicker-BEPVA_kY.js";import"./useMobilePicker-D0-P9-Tu.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CiSMUTpz.js";import"./index-33OaJtki.js";import"./Chip-DWvykSmW.js";import"./Tabs-CYZKFXMh.js";import"./KeyboardArrowRight-3ynrmJmF.js";import"./Autocomplete-CkH2BDRX.js";import"./usePreviousProps-BAQD5RAb.js";import"./use-deep-compare-effect.esm-a847B46a.js";import"./TextWidget-Crbcx4ts.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
