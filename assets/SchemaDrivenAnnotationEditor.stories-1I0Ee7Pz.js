import{jJ as T}from"./iframe-Dc6hcGlJ.js";import{S as C}from"./SchemaDrivenAnnotationEditor-cdiafQRK.js";import"./index-r8ZA1smB.js";import"./useEntity-EuS0GL07.js";import"./pickBy-rPJ8kE5L.js";import"./isString-DEpfqNYm.js";import"./_baseIteratee-Dcg-twG3.js";import"./useQueries-PilZ9A-3.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-IUWpIdre.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Dr2PcLgD.js";import"./useSchema-BKA1UheU.js";import"./index-CteQbIqF.js";import"./enums-UwKpX976.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BNXLUMD5.js";import"./uniq-CmgWG2RM.js";import"./forEach-B8iwwgef.js";import"./Grid-CeYYAj7u.js";import"./ListItem-CP6d7Eid.js";import"./listItemButtonClasses-BiLEMd7K.js";import"./ListItemIcon-mOVJAF9M.js";import"./MenuItem-CX3e5zAM.js";import"./ListItemText-Bi3KZSOV.js";import"./ArrowUpward-CynXyD1a.js";import"./ContentCopy-CQB0U1qF.js";import"./FormControlLabel-Bn_oKwrc.js";import"./Checkbox-B_hMZXjl.js";import"./SwitchBase-BDfbjiC7.js";import"./FormGroup-DLuoz1Mh.js";import"./RadioGroup-CuWQ_Yuu.js";import"./Radio-C26y0G_W.js";import"./Slider-b43fdLCu.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BDYlXH9A.js";import"./DialogBase-BCuTdDbU.js";import"./Close-Bu2yudNY.js";import"./HelpPopover-BxBUcBpZ.js";import"./MarkdownPopover-BqZuBojY.js";import"./LightTooltip-BLobyLjn.js";import"./MarkdownSynapse-9j4LJb_F.js";import"./SkeletonButton-BXWOXl9N.js";import"./SkeletonInlineBlock-CGB-MCvO.js";import"./SkeletonTable-C5xUm_Zr.js";import"./SkeletonParagraph-BA9ytrTV.js";import"./JsonSchemaForm-DZ2vU1r8.js";import"./GridLegacy-CQPZzRnS.js";import"./HelpTwoTone-DcqGWlft.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-CpxPfojF.js";import"./_createAggregator-qgP1sgYs.js";import"./_baseMap-By4jZFbc.js";import"./DateTimePicker-DzPWCvWs.js";import"./useMobilePicker-D_9HsJS8.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-BzZ6yejJ.js";import"./index-jKqhNBOG.js";import"./Chip-DqtQxgW8.js";import"./Tabs-DD3eFSpf.js";import"./KeyboardArrowRight-BahiOpAb.js";import"./Autocomplete-Dk6x0-Zz.js";import"./usePreviousProps-Dx1un79N.js";import"./use-deep-compare-effect.esm-DAxrCKuX.js";import"./TextWidget-CYmWPhoi.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
