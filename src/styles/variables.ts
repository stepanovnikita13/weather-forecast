const BASE = 1
const RATIO = 1.2
const ms0 = 1
const ms1 = RATIO
const ms2 = RATIO * ms1
const ms3 = RATIO * ms2
const ms4 = RATIO * ms3

const variables = {
	font: {
		basePx: 16,
		family: `'Hind',-apple-system, BlinkMacSystemFont, 'Helvetica', sans-serif`,
		size: '1em',
		h1: {
			lineHeight: BASE * ms0,
			size: BASE * ms4 + 'em',
			weight: 400,
		},
		h2: {
			lineHeight: BASE * ms1,
			size: BASE * ms3 + 'em',
			weight: 400,
		},
		h3: {
			lineHeight: BASE * ms1,
			size: BASE * ms2 + 'em',
			weight: 500,
		},
		h4: {
			lineHeight: 1,
			size: BASE * ms1 + 'em',
			weight: 600,
		},
		h5: {
			lineHeight: 1,
			size: BASE * ms0 + 'em',
			weight: 600,
		},
		h6: {
			lineHeight: 1,
			size: BASE / ms1 + 'em',
			weight: 700,
		},
	},
	control: {
		borderWidth: '1px',
		borderRadius: '4px',
		borderRadiusLarge: '8px',
		focusBorderWidth: '2px',
		width: '180px',
		headerHeight: {
			mobile: '40px',
			tablet: '50px',
		},
	},
	shadows: {
		s: `0px 1px 6px 0px rgba(0, 0, 0, 0.2),
		0px 1px 2px 0px rgba(0, 0, 0, 0.15)`,
		m: `0px 1px 12px 0px rgba(0, 0, 0, 0.2),
		0px 2px 3px 0px rgba(0, 0, 0, 0.12)`,
		l: `0px 3px 18px 0px rgba(0, 0, 0, 0.2),
		0px 3px 4px 0px rgba(0, 0, 0, 0.1)`,
	},
	zIndex: {
		sidebar: 1000,
	},
	indent(i: number) {
		return `calc(${i * 0.5} * 1rem)`
	},
}

export type TVariables = typeof variables
export default variables
