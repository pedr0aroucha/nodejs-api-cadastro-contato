export function mask(value: string, pattern: string): string {
	if (!value) return '';

	let index = 0;

	return pattern.replace(/#/g, () => value[index++] || '');
}
