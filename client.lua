RegisterCommand('showNui', function()
	SetNuiFocus(true, true)
	SendNUIMessage({
		action = 'show'
	})
end, false)

RegisterNuiCallback('close', function(data, cb)
	SetNuiFocus(false, false)
	SendNUIMessage({
		action = 'hide'
	})
	cb('ok')
end)
