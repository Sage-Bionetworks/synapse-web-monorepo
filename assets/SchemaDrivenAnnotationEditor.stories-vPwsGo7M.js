import{jF as T}from"./iframe-CrIG5yS4.js";import{S as C}from"./SchemaDrivenAnnotationEditor-CeUDq51c.js";import"./index-r8ZA1smB.js";import"./useEntity-BnhSZW_7.js";import"./pickBy-Byj-lR1O.js";import"./isString-CsS5YLlt.js";import"./_baseIteratee-DOoR1yLg.js";import"./useQueries-P_upU759.js";import"./useSuspenseQuery-BDF5CGHD.js";import"./useInfiniteQuery-C039Rys8.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Czd_RrTj.js";import"./useSchema-i4I125je.js";import"./index-CWMf7AkC.js";import"./enums-D8NNpohX.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Bk7xNbyo.js";import"./uniq-Bx-nHlpT.js";import"./forEach-B8iwwgef.js";import"./Grid-4tN69aUJ.js";import"./ListItem-D6WVl_Yu.js";import"./listItemButtonClasses-B0aS_Qro.js";import"./ListItemIcon-CnGU-tST.js";import"./MenuItem-DGqfgEGw.js";import"./ListItemText-DnNmwN6j.js";import"./ArrowUpward-BEwFyi8i.js";import"./ContentCopy-B-peTUjS.js";import"./FormControlLabel-BsHUDHzb.js";import"./Checkbox-BbzG_W6j.js";import"./SwitchBase-B6cqD099.js";import"./FormGroup-Ba8YtojE.js";import"./RadioGroup-BMCGwiH4.js";import"./Radio-Byzaf_13.js";import"./Slider-DeWh59hd.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-yahK5x44.js";import"./DialogBase-CybwzTY6.js";import"./Close-5QnQ5lpW.js";import"./HelpPopover-C0SNysP_.js";import"./MarkdownPopover-oRHyMW2V.js";import"./LightTooltip-BhZaRT-T.js";import"./MarkdownSynapse-Cuq8Dn9Z.js";import"./SkeletonButton-C2iZcuLE.js";import"./SkeletonInlineBlock-DCJOzeCR.js";import"./SkeletonTable-CZxqZr7Y.js";import"./SkeletonParagraph-BI2gfc3a.js";import"./JsonSchemaForm-BMetrpP3.js";import"./GridLegacy-CAx-cJ0N.js";import"./HelpTwoTone-CaFqb9tn.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DUwWdP3O.js";import"./_createAggregator-BA0dCpMD.js";import"./_baseMap-BR9_rnnd.js";import"./DateTimePicker-Dh0PzZdy.js";import"./useMobilePicker-BdENcFDj.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-DX87peCP.js";import"./index-CkF7h5xt.js";import"./Chip-Cq9C0rq5.js";import"./Tabs-CG2ZSHyg.js";import"./KeyboardArrowRight-B9VZZG8A.js";import"./Autocomplete-BRbr8GXu.js";import"./usePreviousProps-Dt07BJ5Q.js";import"./use-deep-compare-effect.esm-C8hIuBLn.js";import"./TextWidget-By8X_hSN.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Kr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
