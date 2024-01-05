import { cn } from '@/lib/utils';
import Image from 'next/image';

const Logo = ({ className }: { className?: string }) => {
	return (
		<>
			<Image
				src="/ean.svg"
				alt="ean logo"
				width={100}
				height={100}
				className={cn('w-full h-full', className)}
			/>
		</>
	);
};

export default Logo;
