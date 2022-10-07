const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	mobileMax: '767px',
	tabletS: '768px',
	tabletL: '992px',
	laptopS: '1200px',
	laptopM: '1366px',
	laptopL: '1440px',
	desktop: '1920px',
}

export const device = {
	mobileS: `(min-width:${size.mobileS})`,
	mobileM: `(min-width:${size.mobileM})`,
	mobileL: `(min-width:${size.mobileL})`,
	modileMax: `(max-width:${size.mobileMax})`,
	tabletS: `(min-width:${size.tabletS})`,
	tabletL: `(min-width:${size.tabletL})`,
	laptopS: `(min-width:${size.laptopS})`,
	laptopM: `(min-width:${size.laptopM})`,
	laptopL: `(min-width:${size.laptopL})`,
	desktop: `(min-width:${size.desktop})`,
}

export type Device = typeof device
