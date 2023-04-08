Prism.languages.blitz3d = {
	'comment': /;.*/,
	'string': {
		pattern: /"([^"]*)"/,
		greedy: true
	},
	'number': [
		/\b(\$?\d+(?:\.\d+)?)\b/,
		/\$(\d|[a-f])+/i
	],
	'keyword': /\b(?:after|and|before|case|const|data|default|delete|dim|each|else|elseif|end|endif|exit|false|field|first|for|forever|function|global|gosub|goto|handle|if|include|insert|last|local|new|next|not|null|object|or|read|repeat|restore|return|select|step|then|to|true|type|until|wend|while)\b/i
};
