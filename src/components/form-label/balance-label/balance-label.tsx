import React from 'react';
import Label from '../label';
import numberToBalance from '../../../utils/numberToBalance';

type Props = {
	name: string;
	value: number;
};

function BalanceLabel({ name, value }: Props) {
	const balance = numberToBalance(value);
	return <Label name={name}>{balance}</Label>;
}

export default BalanceLabel;
