import { PRODUCT_CATEGORIES } from '@/config';
import { Label } from '@radix-ui/react-dropdown-menu';
import { CollectionConfig } from 'payload/types';

export const Products: CollectionConfig = {
	slug: 'products',
	admin: {
		useAsTitle: 'name',
	},
	access: {},
	fields: [
		{
			name: 'user',
			type: 'relationship',
			relationTo: 'users',
			required: true,
			hasMany: false,
			admin: {
				condition: () => false,
			},
		},
		{
			name: 'name',
			label: 'Name',
			type: 'text',
			required: true,
		},
		{
			name: 'description',
			type: 'textarea',
			label: 'Product details',
		},
		{
			name: 'price',
			label: 'Price in BRL',
			min: 0,
			max: 1000,
			type: 'number',
			required: true,
		},
		{
			name: 'category',
			label: 'Category',
			type: 'select',
			options: PRODUCT_CATEGORIES.map(({ label, value }) => ({ label, value })),
			required: true,
		},
	],
};
