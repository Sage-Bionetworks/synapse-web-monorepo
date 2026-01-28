import { CardLink } from '@/components/CardContainer/CardLink'
import { getLinkParams } from './CardUtils'
import { TargetEnum } from '@/utils/html/TargetEnum'
import { describe, it, test } from 'vitest'

describe('TableRowGenericCard tests', () => {
  describe('getLinkParams', () => {
    test('creates a link to synapse', () => {
      const synId = 'syn12345678'
      const synLink = `https://www.synapse.org/Synapse:${synId}`
      const { href, target } = getLinkParams(
        synId,
        undefined,
        undefined,
        undefined,
      )
      expect(href).toEqual(synLink)
      expect(target).toEqual(TargetEnum.NEW_WINDOW)
    })

    test('creates a DOI link', () => {
      const doi = '10.1093/neuonc/noy046'
      const doiLink = `https://dx.doi.org/${doi}`
      const { href, target } = getLinkParams(
        doi,
        undefined,
        undefined,
        undefined,
      )
      expect(href).toEqual(doiLink)
      expect(target).toEqual(TargetEnum.NEW_WINDOW)
    })

    test('creates a DOI link PORTALS-1801', () => {
      const doi = '10.1007/s00401-020-02230-x '
      const doiLink = `https://dx.doi.org/${doi.trim()}`
      const { href, target } = getLinkParams(
        doi,
        undefined,
        undefined,
        undefined,
      )
      expect(href).toEqual(doiLink)
      expect(target).toEqual(TargetEnum.NEW_WINDOW)
    })

    test('creates an internal parameterized link', () => {
      const value = '1234'
      const data = [value]
      const URLColumnName = 'Grant Number'
      const matchColumnName = 'Funder'
      const schema = {
        [matchColumnName]: 0,
      }
      const titleLinkConfig: CardLink = {
        isMarkdown: false,
        baseURL: 'Explore/Projects',
        matchColumnName,
        URLColumnName,
      }
      const expectedLink = `/${titleLinkConfig.baseURL}?${URLColumnName}=${value}`
      const { href, target } = getLinkParams('', titleLinkConfig, data, schema)
      expect(href).toEqual(expectedLink)
      expect(target).toEqual(TargetEnum.CURRENT_WINDOW)
    })

    test('creates an internal details page link', () => {
      const value = '1234+5+6'
      const data = [value]
      const URLColumnName = 'Grant Number'
      const matchColumnName = 'Funder'
      const schema = {
        [matchColumnName]: 0,
      }
      const titleLinkConfig: CardLink = {
        isMarkdown: false,
        baseURL: 'Explore/Programs/DetailsPage',
        matchColumnName,
        URLColumnName,
      }
      const expectedLink = `/${
        titleLinkConfig.baseURL
      }?${URLColumnName}=${encodeURIComponent(value)}`
      const { href: href1, target: target1 } = getLinkParams(
        '',
        titleLinkConfig,
        data,
        schema,
      )
      expect(href1).toEqual(expectedLink)
      // PORTALS-3792: Internal links should open in current window by default
      expect(target1).toEqual(TargetEnum.CURRENT_WINDOW)

      titleLinkConfig.target = TargetEnum.FULL_WINDOW_BODY
      const { href: href2, target: target2 } = getLinkParams(
        '',
        titleLinkConfig,
        data,
        schema,
      )
      expect(href2).toEqual(expectedLink)
      // PORTALS-2254: Verify we can override the target via the parameter in the CardLink config
      expect(target2).toEqual(TargetEnum.FULL_WINDOW_BODY)
    })

    it('uses another column value for link override', () => {
      const value = 'foo'
      const hrefOverrideValue = 'bar'
      const data = [value, hrefOverrideValue]
      const matchColumnName = 'Funder'
      const hrefOverrideColumnName = 'Override Col'
      const schema = {
        [matchColumnName]: 0,
        [hrefOverrideColumnName]: 1,
      }
      const titleLinkConfig: CardLink = {
        isMarkdown: false,
        matchColumnName,
        overrideLinkURLColumnName: hrefOverrideColumnName,
      }
      const expectedLink = hrefOverrideValue
      const { href, target } = getLinkParams('', titleLinkConfig, data, schema)
      expect(href).toEqual(expectedLink)
      expect(target).toEqual(TargetEnum.CURRENT_WINDOW)
    })

    it('uses another column value for link override with transform', () => {
      const value = 'foo'
      const hrefOverrideValue = 'bar'
      const data = [value, hrefOverrideValue]
      const matchColumnName = 'Funder'
      const hrefOverrideColumnName = 'Override Col'
      const transform = (value: string) => `https://example.com/${value}`
      const schema = {
        [matchColumnName]: 0,
        [hrefOverrideColumnName]: 1,
      }
      const titleLinkConfig: CardLink = {
        isMarkdown: false,
        matchColumnName,
        overrideLinkURLColumnName: hrefOverrideColumnName,
        overrideLinkURLColumnTransform: transform,
      }
      const expectedLink = 'https://example.com/bar'
      const { href, target } = getLinkParams('', titleLinkConfig, data, schema)
      expect(href).toEqual(expectedLink)
      expect(target).toEqual(TargetEnum.NEW_WINDOW)
    })
  })
})
