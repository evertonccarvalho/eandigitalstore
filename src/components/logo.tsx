import { cn } from '@/lib/utils';
import Image from 'next/image';

const Logo = () => {
	return (
		<>
			<Image
				src="/ean.svg"
				alt="ean logo"
				width={100}
				height={100}
				className={cn('w-10 h-10')}
			/>
		</>
	);
};

export default Logo;
