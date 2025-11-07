import{jJ as T}from"./iframe-BdkWYmI6.js";import{S as C}from"./SchemaDrivenAnnotationEditor-BGHiRhlL.js";import"./index-r8ZA1smB.js";import"./useEntity-Doo2tavu.js";import"./pickBy-M47jCh3s.js";import"./isString-CKIVBHgV.js";import"./_baseIteratee-ptUCm6t2.js";import"./useQueries-DeoRDPpB.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DuX9lKhO.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DlmY_pl1.js";import"./useSchema-pT0OHYeb.js";import"./index-D9r3S_gQ.js";import"./enums-CXEo6kZq.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CsBmLHQn.js";import"./uniq-DIhhH-87.js";import"./forEach-B8iwwgef.js";import"./Grid-Bf8-FmNM.js";import"./ListItem-aRyaDNJW.js";import"./listItemButtonClasses-HKd3bwBP.js";import"./ListItemIcon-CRGQI117.js";import"./MenuItem-CP_h11Bc.js";import"./ListItemText-BaqSWbUA.js";import"./ArrowUpward-CSkxDUNS.js";import"./ContentCopy-BkUQ9AeQ.js";import"./FormControlLabel-BPc4wiF1.js";import"./Checkbox-CH08XeSr.js";import"./SwitchBase-C3xkbGp3.js";import"./FormGroup-D9wGIS-c.js";import"./RadioGroup-CTX06fls.js";import"./Radio-CJJ6IxKi.js";import"./Slider-DKmZRfl3.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-D261UfJ4.js";import"./DialogBase-AFyAqR5r.js";import"./Close-uDi--C--.js";import"./HelpPopover-B9Z4iGdd.js";import"./MarkdownPopover-BHBiy4N1.js";import"./LightTooltip-CG5Avdd3.js";import"./MarkdownSynapse-Bv4Hlehq.js";import"./SkeletonButton-DYpS-IT5.js";import"./SkeletonInlineBlock-B4ZEP19M.js";import"./SkeletonTable-BveBy0vn.js";import"./SkeletonParagraph-CVsqmSli.js";import"./JsonSchemaForm-CtNpeG_E.js";import"./GridLegacy-DlkAPlR7.js";import"./HelpTwoTone-C9vcn34Q.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-Bs-Wio_f.js";import"./_createAggregator-Booac5Gn.js";import"./_baseMap-BOTv4vr1.js";import"./DateTimePicker-BakvtHNU.js";import"./useMobilePicker-BAmSDRf_.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-Do8RfQZE.js";import"./index-Bp1wqoF0.js";import"./Chip-4C804CUR.js";import"./Tabs-D26y2eav.js";import"./KeyboardArrowRight-DYbcCgN2.js";import"./Autocomplete-0h6PtULg.js";import"./usePreviousProps-BS-9dGVZ.js";import"./use-deep-compare-effect.esm-CYFJiE3Q.js";import"./TextWidget-BR0ZCAqG.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
