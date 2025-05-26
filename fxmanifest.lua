fx_version 'cerulean'
game 'gta5'

description 'Example Manifest'
version '1.0.0'

lua54 'yes'

client_scripts {
	'client.lua'
}

files {
	'nui/index.html',
	'nui/*.*',
	'nui/**/*.*',
}

-- ui_page 'http://localhost:5173/'
ui_page 'nui/index.html'
