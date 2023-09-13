import React from 'react';
import { Link } from 'wouter';

type Props = {};

function Intro({}: Props) {
	return (
		<article className='bg-black h-screen flex text-center space-y-16 flex-col items-center justify-center'>
			<section>
				<p className='text-white mb-6 text-2xl'>시작해볼까요?</p>
				<p className='text-white/60'>
					새로운 그룹을 형성하여 정산을 시작해보세요
				</p>
			</section>
			<section>
				<Link
					href='/create'
					className='bg-white p-5 rounded-[3rem] text-orange-300 font-semibold'
				>
					새 그룹 만들기
				</Link>
			</section>
		</article>
	);
}

export default Intro;
