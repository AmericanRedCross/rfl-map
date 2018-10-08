var settings = {}

settings.app = {
  defaultpass: '123',
  defaultuser: 'me',
	port: 3001,
	db: 'site.db'
}

settings.page = {
  siteName: "RFL map",
  description: "",
  // nginxlocation: "/rfl-map/",
  nginxlocation: "/"
}

module.exports = settings;
