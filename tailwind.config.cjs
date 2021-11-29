// tailwind.config.cjs
const colors = require('tailwindcss/colors');

module.exports = {
	purge: {
		content: ['./src/**/*.svelte', './src/**/*.css'],
		safelist: [
			'pt-20',
			'pt-40',
			'pt-28'
		]
	},
	darkMode: 'media',
	theme: {
		colors: {
			backgroundDM: '#161e2e',
			white: colors.white,
			green: colors.green,
			gray: {
				'50':  '#f9fafb',
				'100': '#f4f5f7',
				'200': '#e5e7eb',
				'300': '#d2d6dc',
				'400': '#9fa6b2',
				'500': '#6b7280',
				'600': '#4b5563',
				'700': '#374151',
				'800': '#252f3f',
				'900': '#161e2e',
			  },
			  blue: {
				'50':  '#f0f5ff',
				'100': '#e5edff',
				'200': '#cddbfe',
				'300': '#b4c6fc',
				'400': '#8da2fb',
				'500': '#6875f5',
				'600': '#5850ec',
				'700': '#5145cd',
				'800': '#42389d',
				'900': '#362f78',
			  }
		}
	},
	variants: {
		extend: {
			backgroundColor: ['dark'],
      		textColor: ['dark']
		}
	},
	plugins: []
};
