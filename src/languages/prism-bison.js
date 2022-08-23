import { insertBefore } from '../shared/language-util.js';
import c from './prism-c.js';

export default /** @type {import("../types").LanguageProto} */ ({
	id: 'bison',
	require: c,
	grammar({ extend, getLanguage }) {
		const c = getLanguage('c');
		const bison = extend('c', {});

		insertBefore(bison, 'comment', {
			'bison': {
				// This should match all the beginning of the file
				// including the prologue(s), the bison declarations and
				// the grammar rules.
				pattern: /^(?:[^%]|%(?!%))*%%[\s\S]*?%%/,
				inside: {
					'c': {
						// Allow for one level of nested braces
						pattern: /%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,
						inside: {
							'delimiter': {
								pattern: /^%?\{|%?\}$/,
								alias: 'punctuation'
							},
							'bison-variable': {
								pattern: /[$@](?:<[^\s>]+>)?[\w$]+/,
								alias: 'variable',
								inside: {
									'punctuation': /<|>/
								}
							},
							rest: c
						}
					},
					'comment': c.comment,
					'string': c.string,
					'property': /\S+(?=:)/,
					'keyword': /%\w+/,
					'number': {
						pattern: /(^|[^@])\b(?:0x[\da-f]+|\d+)/i,
						lookbehind: true
					},
					'punctuation': /%[%?]|[|:;\[\]<>]/
				}
			}
		});
	}
});