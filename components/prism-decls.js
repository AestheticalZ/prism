Prism.languages.decls = {
	'string': {
		pattern: /"([^"]*)"/,
		greedy: true
	},
	'keyword': /^(\.lib)\b/i,
	'function': /[a-z]\w*([%#$]*)(?=\()/i
};
