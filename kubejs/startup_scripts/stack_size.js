ItemEvents.modification(event => {
	event.modify([
		'minecraft:potion',
		'minecraft:splash_potion',
		'minecraft:lingering_potion'
	], item => {item.maxStackSize = 16})
})
