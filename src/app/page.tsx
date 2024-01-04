import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button, buttonVariants } from '@/components/ui/button';
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react';
import Link from 'next/link';

const perks = [
	{
		name: 'Entrega Instantânea',
		Icon: ArrowDownToLine,
		Description:
			'Receba seus ativos entregues no seu e-mail e faça o download imediatamente',
	},
	{
		name: 'Qualidade Garantida',
		Icon: CheckCircle,
		Description:
			'Cada ativo em nossa plataforma é verificado pela nossa equipe para garantir nossos mais altos padrões de qualidade. Não satisfeito? Oferecemos uma garantia de reembolso de 30 dias.',
	},
	{
		name: 'Para o Planeta',
		Icon: Leaf,
		Description:
			'Nós nos comprometemos a doar 1% das vendas para a preservação e restauração da natureza do planeta',
	},
];

export default function Home() {
	return (
		<>
			<MaxWidthWrapper>
				<div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						Seu Marketplace para{' '}
						<span className="text-primary">ativos digitais </span>de alta
						qualidade.
					</h1>
					<p className="mt-6 text-lg max-w-prose text-muted-foreground">
						Bem-vindo à <span className="text-primary">EAN Digital Store</span>.
						Cada ativo em nossa plataforma é verificado pela nossa equipe para
						garantir nossos altos padrões de qualidade.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 mt-6">
						<Link href={'/products'} className={buttonVariants()}>
							Explore os mais populares
						</Link>
						<Button variant="ghost">Nossa Promessa de Qualidade &rarr;</Button>
					</div>
				</div>
				{/* Todo: Listar Produtos */}
			</MaxWidthWrapper>
			<section className="border-t border-gray-200 bg-gray-50">
				<MaxWidthWrapper className="py-20">
					<div className="grid grid-cols-1 gap-y-12 sm:grid-col-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
						{perks.map((perk) => (
							<div
								key={perk.name}
								className="text-center md:flex md:items-start md:text-left lg:text-center"
							>
								<div className="md:flex-shrink-0 flex justify-center">
									<div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
										{<perk.Icon className="w-1/3 h-1/3" />}
									</div>
								</div>
								<div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
									<h3 className="text-base font-medium text-gray-900">
										{perk.name}
									</h3>
									<p className="mt-3 text-sm text-muted-foreground">
										{perk.Description}
									</p>
								</div>
							</div>
						))}
					</div>
				</MaxWidthWrapper>
			</section>
		</>
	);
}
