import{jJ as T}from"./iframe-CuCRNKD2.js";import{S as C}from"./SchemaDrivenAnnotationEditor-GjnW2mqK.js";import"./index-r8ZA1smB.js";import"./useEntity-CbwMelhb.js";import"./pickBy-C0O8bOmB.js";import"./isString-DymVVSMG.js";import"./_baseIteratee-BoekfeUm.js";import"./useQueries-D2fWcxPh.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-CObm4ehU.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D06ihnyt.js";import"./useSchema-B1hQJtW1.js";import"./index-DaXdclgo.js";import"./enums-CVSV19-D.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DxRZKxVw.js";import"./uniq-D0VY6FGH.js";import"./forEach-B8iwwgef.js";import"./Grid-z7oGVaA1.js";import"./ListItem-tcOuzw1C.js";import"./listItemButtonClasses-DrrayANP.js";import"./ListItemIcon-B4IPMJEi.js";import"./MenuItem-DWis1ABF.js";import"./ListItemText-ckyatacU.js";import"./ArrowUpward-Ba7O28gY.js";import"./ContentCopy-UDxLGRVp.js";import"./FormControlLabel-CGTsH9Fv.js";import"./Checkbox-D2e6C1U3.js";import"./SwitchBase-Bbn1ALyw.js";import"./FormGroup-DDrTRjKU.js";import"./RadioGroup-8LJaGrZz.js";import"./Radio-Dpfkgw2P.js";import"./Slider-Ic3zuBd7.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Cv8GQS-W.js";import"./DialogBase-Dmv5O61d.js";import"./Close-XPSuPfSe.js";import"./HelpPopover-CUGXBuQO.js";import"./MarkdownPopover-BxdpaW68.js";import"./LightTooltip-CDxRktsS.js";import"./MarkdownSynapse-DNDn28ba.js";import"./SkeletonButton-CaULGpMN.js";import"./SkeletonInlineBlock-BnPEMPpf.js";import"./SkeletonTable-ChmVFJhE.js";import"./SkeletonParagraph-DKk5S29D.js";import"./JsonSchemaForm-DnL8ZD0y.js";import"./GridLegacy-HQcAoVGt.js";import"./HelpTwoTone-DTf-7ie0.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-jS2qujnc.js";import"./_createAggregator-BJ3qXJ_2.js";import"./_baseMap-CSQcD485.js";import"./DateTimePicker-9xRq0Tyy.js";import"./useMobilePicker-La7wLWVP.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-LoS80xM5.js";import"./index-CSP15YZm.js";import"./Chip-C_N7BwZ8.js";import"./Tabs-CIF5qzvc.js";import"./KeyboardArrowRight-D6bOE4IA.js";import"./Autocomplete-TKu6P__F.js";import"./usePreviousProps-C4mG5YaX.js";import"./use-deep-compare-effect.esm-DGVAb9fw.js";import"./TextWidget-Dc6fN9um.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Jr as default};
