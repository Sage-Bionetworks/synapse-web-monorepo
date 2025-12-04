import{jF as T}from"./iframe-CoDvXaHz.js";import{S as C}from"./SchemaDrivenAnnotationEditor-CHYH-pBD.js";import"./index-r8ZA1smB.js";import"./useEntity-Cov8G09k.js";import"./pickBy-xtUHSpFD.js";import"./isString-CBmn1ZNy.js";import"./_baseIteratee-B3LRL1bv.js";import"./useQueries-etcLJuTQ.js";import"./useSuspenseQuery-C2VS82Y2.js";import"./useInfiniteQuery-UpnaTIxT.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-fCFoEiQD.js";import"./useSchema-BOqX86mj.js";import"./index-CgV6xlBc.js";import"./enums-HxJjL7Or.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-gqJx6AcI.js";import"./uniq-D9lxL0jm.js";import"./forEach-B8iwwgef.js";import"./Grid-oaVNG0S-.js";import"./ListItem-fS3KtU0p.js";import"./listItemButtonClasses-umvwIPHm.js";import"./ListItemIcon-jM-1oGxE.js";import"./MenuItem-DBpJraem.js";import"./ListItemText-BPF29OmB.js";import"./ArrowUpward-BiLEqOcR.js";import"./ContentCopy-D3QtGfC2.js";import"./FormControlLabel-F8YXTviE.js";import"./Checkbox-EpGb_-Sk.js";import"./SwitchBase-Xsp7daK3.js";import"./FormGroup-DnATBHfX.js";import"./RadioGroup-ZVdHX8-4.js";import"./Radio-Cf02igEf.js";import"./Slider-BI6896iY.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-CA26PI4c.js";import"./DialogBase-VfFO0nIe.js";import"./Close-D4llJOen.js";import"./HelpPopover-BdMWF5AU.js";import"./MarkdownPopover-B1_6xWIE.js";import"./LightTooltip-CKjCC4Dp.js";import"./MarkdownSynapse-C2ElmG_P.js";import"./SkeletonButton-CllzTHSq.js";import"./SkeletonInlineBlock-C69n0VA9.js";import"./SkeletonTable-LuC_UCPV.js";import"./SkeletonParagraph-YdwHeP2z.js";import"./JsonSchemaForm-DeNF4YED.js";import"./GridLegacy-BrktOZU7.js";import"./HelpTwoTone-Fj37preV.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-B-LAL_oO.js";import"./_createAggregator-xsFsNKzw.js";import"./_baseMap-B-HNtvpc.js";import"./DateTimePicker-DG5F5tZS.js";import"./useMobilePicker-DVYZfg74.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-ThyIPYBr.js";import"./index-DxGNUnDx.js";import"./Chip-CCgamNVG.js";import"./Tabs-CtIP9djH.js";import"./KeyboardArrowRight-BLJAFoB0.js";import"./Autocomplete-B1CnkPCo.js";import"./usePreviousProps-pR-Y-wFe.js";import"./use-deep-compare-effect.esm-D-Ev4Q7w.js";import"./TextWidget-BVbgfND8.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Kr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Lr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Lr as __namedExportsOrder,Kr as default};
