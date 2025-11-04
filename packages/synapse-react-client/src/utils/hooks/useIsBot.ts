import { useMemo } from 'react'

/**
 * Hook that detects if the current user agent is likely a bot/crawler.
 * This is useful for automatically fetching all content for search engine indexing.
 *
 * @returns true if the user agent appears to be a bot, false otherwise
 */
export function useIsBot(): boolean {
  return useMemo(() => {
    if (typeof navigator === 'undefined' || !navigator.userAgent) {
      return false
    }

    const userAgent = navigator.userAgent.toLowerCase()

    // Common bot/crawler patterns
    const botPatterns = [
      'bot',
      'crawler',
      'spider',
      'crawling',
      'google',
      'bing',
      'yahoo',
      'baidu',
      'yandex',
      'duckduckbot',
      'slurp',
      'teoma',
      'ia_archiver',
      'bingpreview',
      'facebookexternalhit',
      'twitterbot',
      'rogerbot',
      'linkedinbot',
      'embedly',
      'quora link preview',
      'showyoubot',
      'outbrain',
      'pinterest',
      'slackbot',
      'vkshare',
      'w3c_validator',
      'redditbot',
      'applebot',
      'whatsapp',
      'flipboard',
      'tumblr',
      'bitlybot',
      'skypeuripreview',
      'nuzzel',
      'discordbot',
      'qwantify',
      'pinterestbot',
      'bitrix',
    ]

    return botPatterns.some(pattern => userAgent.includes(pattern))
  }, [])
}
