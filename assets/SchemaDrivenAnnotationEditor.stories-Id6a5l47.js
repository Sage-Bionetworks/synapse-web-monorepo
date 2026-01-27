import{jH as p}from"./iframe-APvH4-EU.js";import{S as a}from"./SchemaDrivenAnnotationEditor-07ipVgg3.js";import"./index-Chi_LkuB.js";import"./useEntity-8aU7O6mB.js";import"./pickBy-BniAp8F_.js";import"./isString-CUjFYPnQ.js";import"./_baseIteratee-BL2YfOvy.js";import"./useQueries-oePch1EY.js";import"./useSuspenseQuery-BkKvG_I6.js";import"./useInfiniteQuery-D6M6aPtH.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-NfmsTkgf.js";import"./useSchema-pzxWZG8m.js";import"./index-BAw6Z55N.js";import"./enums-C-jZVbF_.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CY-VY-KP.js";import"./uniq-BDoUxZmE.js";import"./forEach-CWOCpBhE.js";import"./Add-D_IBWUfa.js";import"./Grid-DBOKbSoi.js";import"./ListItem-DsR1YIqM.js";import"./listItemButtonClasses-C1LDvtGE.js";import"./ListItemIcon-IkuKWa_q.js";import"./MenuItem-C4atoZrr.js";import"./ListItemText-vtURyx5m.js";import"./ArrowUpward-IPb1pEji.js";import"./ContentCopy-DryV-VZb.js";import"./FormControlLabel-CkPBDtXz.js";import"./Checkbox-D2r4P1W3.js";import"./SwitchBase-D78Lly7L.js";import"./FormGroup-DF7-0ZLq.js";import"./RadioGroup-bRdDLjKy.js";import"./Radio-DIoKo2Rc.js";import"./Slider-dzZ2Mn-5.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-AkXFjHcI.js";import"./DialogBase-DTI285K7.js";import"./Close-DHMYFigw.js";import"./HelpPopover-CGN_eeqD.js";import"./MarkdownPopover-BR7BvXms.js";import"./LightTooltip-DLRUuSTA.js";import"./MarkdownSynapse-DskHTRMD.js";import"./SkeletonButton-DQaucWcO.js";import"./SkeletonInlineBlock-REk_WUt3.js";import"./SkeletonTable-DlsS5ryj.js";import"./SkeletonParagraph-Oi6HEV15.js";import"./JsonSchemaForm-Ca9OAIWO.js";import"./GridLegacy-DwMdnc5j.js";import"./HelpTwoTone-QRwX5w0E.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-D1vi91Mz.js";import"./_createAggregator-4BGuSEpX.js";import"./_baseMap-CzrgHchl.js";import"./DateTimePicker-DmFULnrJ.js";import"./useMobilePicker-CxHx40aJ.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DJKE2JaW.js";import"./index-D47LyWhc.js";import"./Chip-CQxp7Hzb.js";import"./Tabs-BX0qSgIf.js";import"./KeyboardArrowRight-7yh7bns7.js";import"./Autocomplete-DMGcsNpH.js";import"./usePreviousProps-g-UAIVec.js";import"./use-deep-compare-effect.esm-BJrFYGUS.js";import"./TextWidget-7mlpXeHA.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
