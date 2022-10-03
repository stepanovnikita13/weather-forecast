const isDev = process.env.NODE_ENV !== 'production';
module.exports = {
	styledComponents: {
		fileName: false,
		displayName: isDev,
	}
}