import{jw as p}from"./iframe-DEq4Fwc_.js";import{S as a}from"./SchemaDrivenAnnotationEditor-jlefBn-f.js";import"./index-Chi_LkuB.js";import"./useEntity-BBOKy18n.js";import"./pickBy-D-hvBzih.js";import"./isString-D-f34EG8.js";import"./_baseIteratee-DiRcqJ-V.js";import"./useInfiniteQuery-BoS_wNWd.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-dgC-l_Ks.js";import"./useSchema-C99DaXuV.js";import"./index-DZfm66t8.js";import"./enums-CIaRDV0j.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DduMpDYT.js";import"./uniq-BT8pRJaE.js";import"./forEach-UWyboym_.js";import"./Add-DzpUWyjq.js";import"./Grid-nazzqp4E.js";import"./ListItem-DYnvc5HH.js";import"./listItemButtonClasses-C9J4YaZ_.js";import"./ListItemIcon-BlMQ5wIY.js";import"./MenuItem-Q5cSc0me.js";import"./ListItemText-BFpvhfwg.js";import"./ArrowUpward-BFvAuTDM.js";import"./ContentCopy-CS9zz58p.js";import"./FormControlLabel-DQYCrA3y.js";import"./Checkbox-CIkhFSee.js";import"./SwitchBase-BWvcTXOM.js";import"./FormGroup-IGBYmsqH.js";import"./RadioGroup-4emnaK5g.js";import"./Radio-DD2ZwWUp.js";import"./Slider-Ct98FDlP.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-r9JWHI-k.js";import"./DialogBase-C4vq_sVg.js";import"./Close-YBK2a75v.js";import"./HelpPopover-kHe5ruIB.js";import"./MarkdownPopover-CvAv5IbO.js";import"./LightTooltip-YqL3Vmul.js";import"./MarkdownSynapse-C1TpcYQU.js";import"./SkeletonButton-Cgw-w1QX.js";import"./SkeletonInlineBlock-Ct1mjrTN.js";import"./SkeletonTable-CssHy_cG.js";import"./SkeletonParagraph-C2zzRv3g.js";import"./JsonSchemaForm-BQ_EyXwk.js";import"./GridLegacy-CHx0QFlD.js";import"./HelpTwoTone-w66HU-tu.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BmQaIa48.js";import"./_createAggregator-o8SKZRKL.js";import"./_baseMap-D3t1dmer.js";import"./DateTimePicker-CkqEO83k.js";import"./useMobilePicker-B5d5Z9pk.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DlEPbJTf.js";import"./index-f3FEnX0R.js";import"./Chip-CsLFe4y4.js";import"./Tabs-DOCMUQRS.js";import"./KeyboardArrowRight-BJXSBKtm.js";import"./Autocomplete-BDzyqPVK.js";import"./usePreviousProps-D-IBZJIf.js";import"./use-deep-compare-effect.esm-Sqv1WIY4.js";import"./TextWidget-ErtwDH2H.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
