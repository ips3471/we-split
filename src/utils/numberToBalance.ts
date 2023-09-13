export default function numberToBalance(value: number) {
	return value.toLocaleString('ko', {
		style: 'currency',
		currency: 'krw',
	});
}
